import fs from 'node:fs/promises'
import path from 'node:path'

import {z} from 'zod'

import {coerceIntentInput, intentInputSchema} from './intent/schema.mjs'
import {resolveIntent} from './intent/resolve.mjs'
import {
  getIntentContract,
  validateIntentAgainstContract,
  INTENT_CONTRACTS,
} from './intent/contracts.mjs'

const DEFAULT_PACKAGE_NAME = '@hmlet/ui'
const ENV_REPO_ROOT = 'HMLET_UI_ROOT'
const ENV_PACKAGE_NAME = 'HMLET_UI_PACKAGE_NAME'
const ENV_MAX_FILE_BYTES = 'HMLET_UI_MAX_FILE_BYTES'
const ENV_SMOKE = 'HMLET_UI_MCP_SMOKE'

const MAX_FILE_BYTES = Number(process.env[ENV_MAX_FILE_BYTES] ?? 1024 * 1024)

function toolError(code, message, details) {
  return {
    content: [{type: 'text', text: message}],
    structuredContent: {
      error: {
        code,
        message,
        details: details ?? undefined,
      },
    },
    isError: true,
  }
}

function isPathInsideRoot(root, candidate) {
  const rel = path.relative(root, candidate)
  return rel && !rel.startsWith('..') && !path.isAbsolute(rel)
}

function normalizeRootPath(p) {
  if (!p) return null
  return path.resolve(p)
}

function makeCache() {
  return {
    fileExists: new Map(),
    resolveSourceFile: new Map(),
    readText: new Map(),
    catalog: new Map(),
    componentIndex: new Map(),
    typescript: {tried: false, mod: null},
    tsProgram: new Map(),
  }
}

const cache = makeCache()

async function loadTypescript() {
  if (cache.typescript.tried) return cache.typescript.mod
  cache.typescript.tried = true
  try {
    const mod = await import('typescript')
    cache.typescript.mod = mod.default ?? mod
    return cache.typescript.mod
  } catch {
    cache.typescript.mod = null
    return null
  }
}

async function fileExists(filePath) {
  const cached = cache.fileExists.get(filePath)
  if (cached != null) return cached
  try {
    await fs.access(filePath)
    cache.fileExists.set(filePath, true)
    return true
  } catch {
    cache.fileExists.set(filePath, false)
    return false
  }
}

async function readTextFile(absPath, {maxBytes = MAX_FILE_BYTES} = {}) {
  const cached = cache.readText.get(absPath)
  if (cached) {
    try {
      const stat = await fs.stat(absPath)
      if (stat.mtimeMs === cached.mtimeMs && stat.size === cached.size)
        return cached.text
    } catch {
      cache.readText.delete(absPath)
    }
  }

  const stat = await fs.stat(absPath)
  if (Number.isFinite(maxBytes) && stat.size > maxBytes) {
    const err = new Error(`File too large: ${absPath}`)
    err.code = 'FILE_TOO_LARGE'
    err.details = {path: absPath, size: stat.size, maxBytes}
    throw err
  }
  const text = await fs.readFile(absPath, 'utf8')
  cache.readText.set(absPath, {mtimeMs: stat.mtimeMs, size: stat.size, text})
  return text
}

async function findRepoRoot(startDir, packageName) {
  const envRootRaw = process.env[ENV_REPO_ROOT]
  const envRoot = normalizeRootPath(envRootRaw)
  if (envRoot) {
    const pkgPath = path.join(envRoot, 'package.json')
    if (await fileExists(pkgPath)) return envRoot
  }

  let current = path.resolve(startDir)
  while (true) {
    const pkgPath = path.join(current, 'package.json')
    if (await fileExists(pkgPath)) {
      try {
        const pkg = JSON.parse(await readTextFile(pkgPath))
        if (pkg?.name === packageName) return current
      } catch {
        // ignore
      }
    }
    const parent = path.dirname(current)
    if (parent === current) return path.resolve(startDir)
    current = parent
  }
}

function parseUiIndex(indexText) {
  const modules = []
  for (const line of indexText.split(/\r?\n/)) {
    const match = line.match(/^\s*export\s+\*\s+from\s+'\.\/(.+)'\s*$/)
    if (match?.[1]) modules.push(match[1])
  }
  return modules
}

function parseLayoutIndex(indexText) {
  const components = []
  for (const line of indexText.split(/\r?\n/)) {
    const match = line.match(
      /^\s*export\s+\{\s*([A-Za-z0-9_]+)(?:\s+as\s+([A-Za-z0-9_]+))?\s*\}\s+from\s+'\.\/(.+)'\s*$/,
    )
    if (!match) continue
    const exportedName = match[2] ?? match[1]
    const modulePath = match[3]
    components.push({name: exportedName, module: modulePath})
  }
  return components
}

async function resolveSourceFile(repoRoot, relativeWithoutExt) {
  const cacheKey = `${repoRoot}::${relativeWithoutExt}`
  if (cache.resolveSourceFile.has(cacheKey))
    return cache.resolveSourceFile.get(cacheKey)

  const candidates = [
    `${relativeWithoutExt}.tsx`,
    `${relativeWithoutExt}.ts`,
    `${relativeWithoutExt}.jsx`,
    `${relativeWithoutExt}.js`,
  ]

  for (const rel of candidates) {
    const abs = path.join(repoRoot, rel)
    if (await fileExists(abs)) return abs
  }

  // Some callers pass in an already-extended path
  const absDirect = path.join(repoRoot, relativeWithoutExt)
  if (await fileExists(absDirect)) return absDirect

  cache.resolveSourceFile.set(cacheKey, null)
  return null
}

function pickPrimaryExportName({
  exports,
  requestedName,
  allowFallback = true,
} = {}) {
  if (!exports?.length) return null
  if (requestedName && exports.includes(requestedName)) return requestedName
  const pascal = exports.find(e => /^[A-Z]/.test(e))
  if (pascal) return pascal
  return allowFallback ? exports[0] : null
}

function makeSnippet(text, index, queryLength) {
  const radius = 90
  const start = Math.max(0, index - radius)
  const end = Math.min(text.length, index + queryLength + radius)
  const prefix = start > 0 ? '…' : ''
  const suffix = end < text.length ? '…' : ''
  return `${prefix}${text.slice(start, end)}${suffix}`
}

function pickFirstMatch(options, preferred) {
  if (!Array.isArray(options) || !options.length) return null
  const optionSet = new Set(options.map(String))
  for (const cand of preferred) {
    if (optionSet.has(cand)) return cand
  }
  return null
}

function resolveIntentGeneric({
  variantOptions,
  sizeOptions,
  defaultVariant,
  defaultSize,
  intent,
}) {
  if (!intent) return null

  const reasons = []
  const resolvedProps = {}

  const wantsDestructive =
    intent.action === 'destructive' ||
    intent.risk === 'irreversible' ||
    intent.urgency === 'sla-breach'

  const actionToVariantCandidates = {
    'primary-cta': ['primary', 'default'],
    'secondary-cta': ['secondary', 'outline', 'ghost', 'default'],
    approval: ['success', 'primary', 'default'],
    rejection: ['destructive', 'danger', 'error', 'secondary', 'default'],
    confirmation: ['primary', 'default'],
    assignment: ['secondary', 'default'],
    handover: ['primary', 'default'],
    destructive: ['destructive', 'danger', 'error'],
  }

  const operationalToVariantCandidates = {
    blocked: ['destructive', 'danger', 'error'],
    'attention-required': ['destructive', 'danger', 'error'],
    'sla-breach': ['destructive', 'danger', 'error'],
    'in-progress': ['secondary', 'default'],
    scheduled: ['outline', 'secondary', 'default'],
    completed: ['success', 'default'],
  }

  if (Array.isArray(variantOptions) && variantOptions.length) {
    let chosen = null

    if (intent.action) {
      chosen = pickFirstMatch(
        variantOptions,
        actionToVariantCandidates[intent.action] ?? [],
      )
      if (chosen)
        reasons.push(`Generic: matched variant from action: ${intent.action}`)
    }

    if (!chosen && intent.role === 'finance') {
      chosen = pickFirstMatch(variantOptions, [
        'destructive',
        'danger',
        'error',
        'default',
      ])
      if (chosen) reasons.push('Generic: matched variant from role: finance')
    }

    if (!chosen && intent.role === 'ops') {
      chosen = pickFirstMatch(variantOptions, [
        'default',
        'secondary',
        'outline',
      ])
      if (chosen) reasons.push('Generic: matched variant from role: ops')
    }

    if (!chosen && intent.operational) {
      chosen = pickFirstMatch(
        variantOptions,
        operationalToVariantCandidates[intent.operational] ?? [],
      )
      if (chosen)
        reasons.push(
          `Generic: matched variant from operational: ${intent.operational}`,
        )
    }

    if (!chosen && wantsDestructive) {
      chosen = pickFirstMatch(variantOptions, [
        'destructive',
        'danger',
        'error',
      ])
      if (chosen)
        reasons.push('Generic: matched destructive variant from risk/urgency')
    }

    if (!chosen) {
      chosen = defaultVariant ?? variantOptions[0]
      reasons.push('Generic: used default/first variant')
    }

    if (chosen) resolvedProps.variant = chosen
  }

  if (Array.isArray(sizeOptions) && sizeOptions.length) {
    let chosenSize = null

    // Density affects size where supported.
    if (intent.density === 'dense') {
      chosenSize = pickFirstMatch(sizeOptions, ['sm', 'xs'])
      if (chosenSize)
        reasons.push('Generic: chose smaller size for dense density')
    }
    if (!chosenSize && intent.density === 'compact') {
      chosenSize = pickFirstMatch(sizeOptions, ['sm', 'md'])
      if (chosenSize)
        reasons.push('Generic: chose compact size for compact density')
    }

    if (intent.action === 'primary-cta') {
      chosenSize = pickFirstMatch(sizeOptions, ['lg', 'xl', 'md'])
      if (chosenSize) reasons.push('Generic: chose larger size for primary CTA')
    }

    if (!chosenSize) {
      chosenSize = defaultSize ?? sizeOptions[0]
    }

    if (chosenSize) resolvedProps.size = chosenSize
  }

  if (wantsDestructive) {
    resolvedProps.requiresConfirmation = true
  }

  if (!Object.keys(resolvedProps).length) return null
  return {props: resolvedProps, reason: reasons}
}

function resolveLayoutIntentExplicit({component, intent}) {
  // Uses explicit registry entries via resolveIntent(component,intent), but also allows
  // mapping density/urgency/role to layout props when present.
  return resolveIntent(component, intent)
}

function resolveLayoutIntentGeneric({component, intent}) {
  const reasons = []
  const props = {}

  // Density: compact layouts use tighter spacing.
  if (intent?.density) {
    if (
      component === 'Stack' ||
      component === 'HStack' ||
      component === 'VStack' ||
      component === 'Inline' ||
      component === 'Wrap'
    ) {
      props.gap =
        intent.density === 'dense'
          ? '2'
          : intent.density === 'compact'
            ? '3'
            : '4'
      reasons.push(`Generic layout: density -> gap (${intent.density})`)
    }
    if (component === 'Grid') {
      props.gap =
        intent.density === 'dense'
          ? '2'
          : intent.density === 'compact'
            ? '4'
            : '6'
      reasons.push(`Generic layout: density -> grid gap (${intent.density})`)
    }
    if (component === 'Section') {
      props.paddingY =
        intent.density === 'dense'
          ? '6'
          : intent.density === 'compact'
            ? '8'
            : '12'
      reasons.push(`Generic layout: density -> paddingY (${intent.density})`)
    }
    if (component === 'Box') {
      props.padding =
        intent.density === 'dense'
          ? '2'
          : intent.density === 'compact'
            ? '3'
            : '4'
      reasons.push(`Generic layout: density -> padding (${intent.density})`)
    }
  }

  // Urgency: slightly tighter spacing.
  if (
    intent?.urgency &&
    (component === 'Stack' || component === 'HStack' || component === 'VStack')
  ) {
    if (intent.urgency === 'urgent') {
      props.gap = props.gap ?? '2'
      reasons.push('Generic layout: urgency=urgent -> tighter gap')
    } else if (intent.urgency === 'time-sensitive') {
      props.gap = props.gap ?? '3'
      reasons.push(
        'Generic layout: urgency=time-sensitive -> slightly tighter gap',
      )
    }
  }

  if (!Object.keys(props).length) return null
  return {props, reason: reasons}
}

async function analyzeVariantsForResolvedComponent({
  repoRoot,
  resolved,
  exportName,
}) {
  // Prefer TS analysis to pick real variant/defaults
  let variantsFromProps = {}
  let cvaDefs = []

  const ts = await loadTypescript()
  if (ts) {
    const program = await createTsProgram(ts, repoRoot, resolved.path)
    const checker = program.getTypeChecker()
    const sourceFile = program.getSourceFile(resolved.path)
    if (sourceFile) {
      cvaDefs = parseCvaDefinitionsWithTs(ts, resolved.text, resolved.path)
      const exportSymbol = getModuleExportSymbol(
        ts,
        checker,
        sourceFile,
        exportName,
      )
      if (exportSymbol) {
        const propsType = getPropsTypeFromExport(
          ts,
          checker,
          sourceFile,
          exportSymbol,
        )
        if (propsType) {
          variantsFromProps = extractPropsShape(
            ts,
            checker,
            propsType,
            sourceFile,
          ).variantsFromProps
        }
      }
    }
  }

  if (!cvaDefs.length) cvaDefs = parseCvaDefinitions(resolved.text)
  const primaryCva = cvaDefs[0]

  const variantOptions =
    variantsFromProps.variant ?? primaryCva?.variants?.variant
  const sizeOptions = variantsFromProps.size ?? primaryCva?.variants?.size
  const defaultVariant = primaryCva?.defaultVariants?.variant
  const defaultSize = primaryCva?.defaultVariants?.size

  return {variantOptions, sizeOptions, defaultVariant, defaultSize}
}

function sliceBalanced(
  text,
  openIndex,
  {openChar = '{', closeChar = '}'} = {},
) {
  let depth = 0
  let inSingle = false
  let inDouble = false
  let inTemplate = false
  let inLineComment = false
  let inBlockComment = false
  let escaped = false

  for (let i = openIndex; i < text.length; i++) {
    const ch = text[i]
    const next = text[i + 1]

    if (inLineComment) {
      if (ch === '\n') inLineComment = false
      continue
    }

    if (inBlockComment) {
      if (ch === '*' && next === '/') {
        inBlockComment = false
        i++
      }
      continue
    }

    if (!inSingle && !inDouble && !inTemplate) {
      if (ch === '/' && next === '/') {
        inLineComment = true
        i++
        continue
      }
      if (ch === '/' && next === '*') {
        inBlockComment = true
        i++
        continue
      }
    }

    if (inSingle) {
      if (!escaped && ch === '\\') {
        escaped = true
        continue
      }
      if (!escaped && ch === "'") inSingle = false
      escaped = false
      continue
    }

    if (inDouble) {
      if (!escaped && ch === '\\') {
        escaped = true
        continue
      }
      if (!escaped && ch === '"') inDouble = false
      escaped = false
      continue
    }

    if (inTemplate) {
      if (!escaped && ch === '\\') {
        escaped = true
        continue
      }
      if (!escaped && ch === '`') inTemplate = false
      escaped = false
      continue
    }

    if (ch === "'") {
      inSingle = true
      continue
    }
    if (ch === '"') {
      inDouble = true
      continue
    }
    if (ch === '`') {
      inTemplate = true
      continue
    }

    if (ch === openChar) {
      depth++
      continue
    }

    if (ch === closeChar) {
      depth--
      if (depth === 0) return text.slice(openIndex, i + 1)
    }
  }

  return null
}

function extractObjectLiteralAfter(text, anchor) {
  const idx = text.indexOf(anchor)
  if (idx === -1) return null
  const open = text.indexOf('{', idx)
  if (open === -1) return null
  return sliceBalanced(text, open, {openChar: '{', closeChar: '}'})
}

function parseTopLevelObjectEntries(objLiteralText) {
  // objLiteralText includes surrounding braces
  const text = objLiteralText.trim()
  if (!text.startsWith('{') || !text.endsWith('}')) return []
  const inner = text.slice(1, -1)
  const entries = []

  let i = 0
  while (i < inner.length) {
    // skip whitespace/commas
    while (i < inner.length && /[\s,]/.test(inner[i])) i++
    if (i >= inner.length) break

    // parse key (quoted or bare)
    let key
    if (inner[i] === "'" || inner[i] === '"') {
      const quote = inner[i]
      i++
      const start = i
      while (i < inner.length && inner[i] !== quote) i++
      key = inner.slice(start, i)
      i++
    } else {
      const start = i
      while (i < inner.length && /[A-Za-z0-9_$-]/.test(inner[i])) i++
      key = inner.slice(start, i)
    }

    while (i < inner.length && /\s/.test(inner[i])) i++
    if (inner[i] !== ':') {
      // not a key/value entry; bail
      i++
      continue
    }
    i++
    while (i < inner.length && /\s/.test(inner[i])) i++

    // if value is an object literal, capture it; otherwise capture until comma at top-level
    if (inner[i] === '{') {
      const absoluteOpen = i + 1 // for sliceBalanced we need the string starting at this position, so adapt
      const block = sliceBalanced(inner, i, {openChar: '{', closeChar: '}'})
      if (!block) break
      entries.push({key, value: block})
      i += block.length
      continue
    }

    const startVal = i
    while (i < inner.length && inner[i] !== ',') i++
    entries.push({key, value: inner.slice(startVal, i).trim()})
    i++
  }

  return entries
}

function parseVariantOptions(variantsObjLiteralText) {
  const out = {}
  const top = parseTopLevelObjectEntries(variantsObjLiteralText)
  for (const entry of top) {
    if (!entry.value?.startsWith('{')) continue
    const options = []
    const optionEntries = parseTopLevelObjectEntries(entry.value)
    for (const opt of optionEntries) {
      if (opt.key) options.push(opt.key)
    }
    out[entry.key] = options
  }
  return out
}

function parseDefaultVariants(defaultObjLiteralText) {
  const out = {}
  const entries = parseTopLevelObjectEntries(defaultObjLiteralText)
  for (const entry of entries) {
    if (!entry.key) continue
    const raw = String(entry.value ?? '').trim()
    const m = raw.match(/^['"]([^'"]+)['"]$/)
    out[entry.key] = m?.[1] ?? raw
  }
  return out
}

function parseCvaDefinitions(sourceText) {
  const defs = []
  const re = /const\s+([A-Za-z0-9_]+)\s*=\s*cva\s*\(/g
  let match
  while ((match = re.exec(sourceText))) {
    const name = match[1]
    const from = match.index
    const window = sourceText.slice(
      from,
      Math.min(sourceText.length, from + 20000),
    )
    const variantsObj = extractObjectLiteralAfter(window, 'variants:')
    const defaultsObj = extractObjectLiteralAfter(window, 'defaultVariants:')
    if (!variantsObj && !defaultsObj) continue
    defs.push({
      name,
      variants: variantsObj ? parseVariantOptions(variantsObj) : {},
      defaultVariants: defaultsObj ? parseDefaultVariants(defaultsObj) : {},
    })
  }
  return defs
}

function parseCvaDefinitionsWithTs(
  ts,
  sourceText,
  filePathForKind = 'component.tsx',
) {
  const sourceFile = ts.createSourceFile(
    filePathForKind,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    filePathForKind.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  )

  const defs = []

  function readObjectLiteral(node) {
    if (!node || !ts.isObjectLiteralExpression(node)) return null
    return node
  }

  function getProp(obj, name) {
    for (const prop of obj.properties) {
      if (!ts.isPropertyAssignment(prop)) continue
      const key = prop.name
      if (ts.isIdentifier(key) && key.text === name) return prop.initializer
      if (ts.isStringLiteral(key) && key.text === name) return prop.initializer
    }
    return null
  }

  function objectToKeyValueMap(obj) {
    const out = new Map()
    for (const prop of obj.properties) {
      if (!ts.isPropertyAssignment(prop)) continue
      const key = prop.name
      const keyText = ts.isIdentifier(key)
        ? key.text
        : ts.isStringLiteral(key)
          ? key.text
          : null
      if (!keyText) continue
      out.set(keyText, prop.initializer)
    }
    return out
  }

  function parseVariants(variantsNode) {
    const variantsObj = readObjectLiteral(variantsNode)
    if (!variantsObj) return {}
    const out = {}
    const variantGroups = objectToKeyValueMap(variantsObj)
    for (const [variantName, groupNode] of variantGroups.entries()) {
      const groupObj = readObjectLiteral(groupNode)
      if (!groupObj) continue
      const options = []
      for (const prop of groupObj.properties) {
        if (!ts.isPropertyAssignment(prop)) continue
        const key = prop.name
        const keyText = ts.isIdentifier(key)
          ? key.text
          : ts.isStringLiteral(key)
            ? key.text
            : null
        if (keyText) options.push(keyText)
      }
      out[variantName] = options
    }
    return out
  }

  function parseDefaultVariants(defaultsNode) {
    const defaultsObj = readObjectLiteral(defaultsNode)
    if (!defaultsObj) return {}
    const out = {}
    const defaults = objectToKeyValueMap(defaultsObj)
    for (const [key, valueNode] of defaults.entries()) {
      if (ts.isStringLiteral(valueNode)) out[key] = valueNode.text
      else if (ts.isIdentifier(valueNode)) out[key] = valueNode.text
      else out[key] = valueNode.getText(sourceFile)
    }
    return out
  }

  function isCvaCall(node) {
    if (!ts.isCallExpression(node)) return false
    const expr = node.expression
    return ts.isIdentifier(expr) && expr.text === 'cva'
  }

  function visit(node) {
    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.initializer
    ) {
      if (isCvaCall(node.initializer)) {
        const args = node.initializer.arguments
        const optionsArg = args.length >= 2 ? args[1] : null
        const optionsObj = readObjectLiteral(optionsArg)
        if (optionsObj) {
          const variantsNode = getProp(optionsObj, 'variants')
          const defaultsNode = getProp(optionsObj, 'defaultVariants')
          defs.push({
            name: node.name.text,
            variants: variantsNode ? parseVariants(variantsNode) : {},
            defaultVariants: defaultsNode
              ? parseDefaultVariants(defaultsNode)
              : {},
          })
        }
      }
    }
    ts.forEachChild(node, visit)
  }

  visit(sourceFile)
  return defs
}

function extractExportedSymbols(sourceText) {
  const out = new Set()

  // export {A, B as C, default as Foo}
  for (const m of sourceText.matchAll(
    /export\s*\{([\s\S]*?)\}\s*(?:from\s+['"][^'"]+['"])?/g,
  )) {
    const body = m[1] ?? ''
    for (const part of body.split(',')) {
      const seg = part.trim()
      if (!seg) continue
      const defaultAs = seg.match(/^default\s+as\s+([A-Za-z0-9_]+)$/)
      if (defaultAs?.[1]) {
        out.add(defaultAs[1])
        continue
      }
      const asMatch = seg.match(/^([A-Za-z0-9_]+)\s+as\s+([A-Za-z0-9_]+)$/)
      out.add(asMatch?.[2] ?? seg.match(/^([A-Za-z0-9_]+)/)?.[1])
    }
  }

  // export function Foo
  for (const m of sourceText.matchAll(
    /export\s+function\s+([A-Za-z0-9_]+)\s*\(/g,
  )) {
    out.add(m[1])
  }

  // export class Foo
  for (const m of sourceText.matchAll(/export\s+class\s+([A-Za-z0-9_]+)\b/g)) {
    out.add(m[1])
  }

  // export type Foo
  for (const m of sourceText.matchAll(/export\s+type\s+([A-Za-z0-9_]+)\b/g)) {
    out.add(m[1])
  }

  // export interface Foo
  for (const m of sourceText.matchAll(
    /export\s+interface\s+([A-Za-z0-9_]+)\b/g,
  )) {
    out.add(m[1])
  }

  // export const Foo
  for (const m of sourceText.matchAll(
    /export\s+const\s+([A-Za-z0-9_]+)\s*=/g,
  )) {
    out.add(m[1])
  }

  return [...out].filter(Boolean)
}

function extractForwardRefPropsType(sourceText, exportName) {
  const re = new RegExp(
    `(?:export\\s+)?const\\s+${exportName}\\s*=\\s*React\\.forwardRef\\s*<([^>]+)>`,
    'm',
  )
  const m = sourceText.match(re)
  if (!m?.[1]) return null
  const parts = m[1].split(',')
  if (parts.length < 2) return null
  return parts.slice(1).join(',').trim()
}

function extractFunctionParamType(sourceText, exportName) {
  const re = new RegExp(`function\\s+${exportName}\\s*\\(`, 'm')
  const m = sourceText.match(re)
  if (!m) return null
  const start = m.index + m[0].length
  const after = sourceText.slice(start)
  const close = after.indexOf(')')
  if (close === -1) return null
  const paramChunk = after.slice(0, close)

  // Look for ":" within the param list (common pattern: ({...}: Type))
  const colonIdx = paramChunk.lastIndexOf(':')
  if (colonIdx === -1) return null
  return paramChunk.slice(colonIdx + 1).trim()
}

function extractVariantPropsBindings(typeText) {
  const out = []
  if (!typeText) return out
  for (const m of typeText.matchAll(
    /VariantProps\s*<\s*typeof\s+([A-Za-z0-9_]+)\s*>/g,
  )) {
    out.push(m[1])
  }
  return out
}

async function createTsProgram(ts, repoRoot, entryFile) {
  const cacheKey = `${repoRoot}::${entryFile}`
  const cached = cache.tsProgram.get(cacheKey)
  if (cached) return cached

  const configPath =
    ts.findConfigFile(repoRoot, ts.sys.fileExists, 'tsconfig.json') ??
    ts.findConfigFile(repoRoot, ts.sys.fileExists, 'tsconfig.build.json')

  let options
  if (configPath) {
    const read = ts.readConfigFile(configPath, ts.sys.readFile)
    const parsed = ts.parseJsonConfigFileContent(
      read.config,
      ts.sys,
      path.dirname(configPath),
      {noEmit: true},
      configPath,
    )
    options = parsed.options
  } else {
    options = {
      noEmit: true,
      jsx: ts.JsxEmit.ReactJSX,
      module: ts.ModuleKind.ESNext,
      moduleResolution: ts.ModuleResolutionKind.Bundler,
      target: ts.ScriptTarget.ES2022,
      skipLibCheck: true,
    }
  }

  const program = ts.createProgram({
    rootNames: [entryFile],
    options,
  })

  cache.tsProgram.set(cacheKey, program)
  return program
}

function getModuleExportSymbol(ts, checker, sourceFile, exportName) {
  const moduleSymbol = checker.getSymbolAtLocation(sourceFile)
  if (!moduleSymbol) return null
  const exports = checker.getExportsOfModule(moduleSymbol)
  const direct = exports.find(s => s.name === exportName)
  if (!direct) return null
  return (direct.flags & ts.SymbolFlags.Alias) !== 0
    ? checker.getAliasedSymbol(direct)
    : direct
}

function getPropsTypeFromExport(ts, checker, sourceFile, exportSymbol) {
  const decls = exportSymbol.getDeclarations() ?? []
  for (const decl of decls) {
    if (ts.isFunctionDeclaration(decl) && decl.parameters.length > 0) {
      return checker.getTypeAtLocation(decl.parameters[0])
    }

    if (ts.isVariableDeclaration(decl)) {
      const init = decl.initializer

      // React.forwardRef<Ref, Props>(...)
      if (init && ts.isCallExpression(init)) {
        const expr = init.expression
        const isForwardRef =
          (ts.isPropertyAccessExpression(expr) &&
            ts.isIdentifier(expr.expression) &&
            expr.expression.text === 'React' &&
            expr.name.text === 'forwardRef') ||
          (ts.isIdentifier(expr) && expr.text === 'forwardRef')

        if (isForwardRef) {
          const typeArgs = init.typeArguments
          if (typeArgs && typeArgs.length >= 2) {
            return checker.getTypeFromTypeNode(typeArgs[1])
          }
          // fallback: callback param type
          const cb = init.arguments?.[0]
          if (
            cb &&
            (ts.isArrowFunction(cb) || ts.isFunctionExpression(cb)) &&
            cb.parameters.length > 0
          ) {
            return checker.getTypeAtLocation(cb.parameters[0])
          }
        }

        // (props) => ...
        const cb = init
        if (
          (ts.isArrowFunction(cb) || ts.isFunctionExpression(cb)) &&
          cb.parameters.length > 0
        ) {
          return checker.getTypeAtLocation(cb.parameters[0])
        }
      }

      if (
        init &&
        (ts.isArrowFunction(init) || ts.isFunctionExpression(init)) &&
        init.parameters.length > 0
      ) {
        return checker.getTypeAtLocation(init.parameters[0])
      }
    }
  }

  return null
}

function extractPropsShape(ts, checker, propsType, atNode) {
  const props = []
  const variantsFromProps = {}

  const propsTypeToInspect = propsType.getApparentType
    ? propsType.getApparentType()
    : propsType
  const properties = propsTypeToInspect.getProperties?.() ?? []

  for (const symbol of properties) {
    const name = symbol.getName()
    const isOptional = (symbol.getFlags() & ts.SymbolFlags.Optional) !== 0
    const docs = ts.displayPartsToString(
      symbol.getDocumentationComment(checker),
    )
    const typeAt = checker.getTypeOfSymbolAtLocation(symbol, atNode)
    const typeText = checker.typeToString(typeAt)
    props.push({
      name,
      type: typeText,
      optional: isOptional,
      docs: docs || undefined,
    })

    const union = typeAt.isUnion?.() ? typeAt.types : null
    if (union) {
      const stringLits = []
      for (const t of union) {
        if ((t.flags & ts.TypeFlags.StringLiteral) !== 0 && t.value != null) {
          stringLits.push(String(t.value))
        }
      }
      if (stringLits.length >= 2) {
        variantsFromProps[name] = [...new Set(stringLits)]
      }
    }
  }

  return {props, variantsFromProps}
}

function pickCompoundGroup(exports, target) {
  if (!exports?.length || !target) return []
  if (!exports.includes(target)) return []

  // Heuristic: common prefix grouping (Card*, Dialog*, DropdownMenu*, NavigationMenu*, etc.)
  // For multiword components, take the longest PascalCase prefix that matches other exports.
  const prefixCandidates = []
  const pascalChunks = target.match(/[A-Z][a-z0-9]*/g) ?? [target]
  for (let i = pascalChunks.length; i >= 1; i--) {
    prefixCandidates.push(pascalChunks.slice(0, i).join(''))
  }

  for (const prefix of prefixCandidates) {
    const group = exports.filter(e => {
      if (e === prefix) return true
      if (!e.startsWith(prefix)) return false
      const next = e.slice(prefix.length)
      return next.length > 0 && /^[A-Z0-9]/.test(next)
    })
    if (group.length >= 2 && group.length <= 14) return group
  }

  return [target]
}

async function loadCatalog(repoRoot) {
  if (cache.catalog.has(repoRoot)) return cache.catalog.get(repoRoot)

  const uiIndexPath = path.join(repoRoot, 'src/components/ui/index.ts')
  const layoutIndexPath = path.join(repoRoot, 'src/components/layout/index.ts')

  const [uiIndex, layoutIndex] = await Promise.all([
    readTextFile(uiIndexPath),
    readTextFile(layoutIndexPath),
  ])

  const uiModules = parseUiIndex(uiIndex)
  const layoutComponents = parseLayoutIndex(layoutIndex)

  const tokenDir = path.join(repoRoot, 'src/tokens')
  let tokenFiles = []
  try {
    tokenFiles = (await fs.readdir(tokenDir))
      .filter(f => f.endsWith('.ts'))
      .map(f => f.replace(/\.ts$/, ''))
      .sort()
  } catch {
    tokenFiles = []
  }

  const docs = [
    {name: 'README', relPath: 'README.md'},
    {name: 'LAYOUT_SYSTEM_README', relPath: 'LAYOUT_SYSTEM_README.md'},
    {name: 'LAYOUT_SYSTEM_SUMMARY', relPath: 'LAYOUT_SYSTEM_SUMMARY.md'},
  ]

  const styles = [
    {name: 'styles/index.css', relPath: 'src/styles/index.css'},
    {name: 'styles/theme.css', relPath: 'src/styles/theme.css'},
    {name: 'styles/tailwind.css', relPath: 'src/styles/tailwind.css'},
    {name: 'styles/fonts.css', relPath: 'src/styles/fonts.css'},
  ]

  const catalog = {uiModules, layoutComponents, tokenFiles, docs, styles}
  cache.catalog.set(repoRoot, catalog)
  return catalog
}

async function loadComponentIndex(repoRoot) {
  if (cache.componentIndex.has(repoRoot))
    return cache.componentIndex.get(repoRoot)
  const catalog = await loadCatalog(repoRoot)

  const uiByModule = new Map()
  const uiByExport = new Map()
  for (const mod of catalog.uiModules) {
    const abs = await resolveSourceFile(repoRoot, `src/components/ui/${mod}`)
    if (!abs) continue
    const text = await readTextFile(abs)
    const exports = extractExportedSymbols(text)
    const cvaDefinitions = parseCvaDefinitions(text)
    uiByModule.set(mod, {
      kind: 'ui',
      module: mod,
      path: abs,
      exports,
      cvaDefinitions,
    })
    for (const exp of exports) {
      if (!exp || !/^[A-Z]/.test(exp)) continue
      uiByExport.set(exp, {kind: 'ui', module: mod, exportName: exp, path: abs})
    }
  }

  const layoutByName = new Map()
  for (const comp of catalog.layoutComponents) {
    const abs = await resolveSourceFile(
      repoRoot,
      `src/components/layout/${comp.module}`,
    )
    if (!abs) continue
    const text = await readTextFile(abs)
    const exports = extractExportedSymbols(text)
    const cvaDefinitions = parseCvaDefinitions(text)
    layoutByName.set(comp.name, {
      kind: 'layout',
      module: comp.module,
      exportName: comp.name,
      path: abs,
      exports,
      cvaDefinitions,
    })
  }

  const index = {catalog, uiByModule, uiByExport, layoutByName}
  cache.componentIndex.set(repoRoot, index)
  return index
}

async function resolveUiByName(repoRoot, name) {
  const index = await loadComponentIndex(repoRoot)
  const catalog = index.catalog

  // name might be a module (e.g. "button")
  if (catalog.uiModules.includes(name)) {
    const abs = await resolveSourceFile(repoRoot, `src/components/ui/${name}`)
    if (!abs) return null
    const text = await readTextFile(abs)
    return {kind: 'ui', module: name, exportName: null, path: abs, text}
  }

  // name might be an exported symbol (e.g. "Button")
  const byExport = index.uiByExport.get(name)
  if (byExport?.path) {
    const text = await readTextFile(byExport.path)
    return {
      kind: 'ui',
      module: byExport.module,
      exportName: name,
      path: byExport.path,
      text,
    }
  }

  return null
}

async function resolveLayoutByName(repoRoot, name) {
  const index = await loadComponentIndex(repoRoot)
  const entry = index.layoutByName.get(name)
  if (!entry?.path) return null
  const text = await readTextFile(entry.path)
  return {
    kind: 'layout',
    module: entry.module,
    exportName: name,
    path: entry.path,
    text,
  }
}
const packageName = process.env[ENV_PACKAGE_NAME] ?? DEFAULT_PACKAGE_NAME
const repoRoot = await findRepoRoot(process.cwd(), packageName)
const pkg = JSON.parse(await readTextFile(path.join(repoRoot, 'package.json')))

if (process.env[ENV_SMOKE] === '1') {
  // Avoid importing/initializing the MCP SDK in smoke mode.
  process.stdout.write('hmlet-ui-mcp: ok\n')
  process.exit(0)
}

const {McpServer} = await import('@modelcontextprotocol/sdk/server/mcp.js')
const {StdioServerTransport} =
  await import('@modelcontextprotocol/sdk/server/stdio.js')

const server = new McpServer(
  {
    name: packageName,
    version: pkg?.version ?? '0.0.0',
  },
  {
    instructions:
      'Use these tools to discover @hmlet/ui components, layout primitives, tokens, and docs. Prefer reading component source and docs before generating new pages.',
  },
)

server.registerTool(
  'hmlet_ui_list_catalog',
  {
    title: 'List @hmlet/ui catalog',
    description:
      'Lists exported UI modules, layout components, token files, and key docs/styles in this repo/package.',
    inputSchema: z.object({
      include: z
        .array(z.enum(['ui', 'layout', 'tokens', 'docs', 'styles']))
        .optional()
        .describe('Limit which groups are returned. Default: all.'),
    }),
  },
  async ({include}) => {
    const catalog = await loadCatalog(repoRoot)
    const set = new Set(include ?? ['ui', 'layout', 'tokens', 'docs', 'styles'])

    const structuredContent = {
      repoRoot,
      uiModules: set.has('ui') ? catalog.uiModules : undefined,
      layoutComponents: set.has('layout')
        ? catalog.layoutComponents
        : undefined,
      tokenFiles: set.has('tokens') ? catalog.tokenFiles : undefined,
      docs: set.has('docs') ? catalog.docs : undefined,
      styles: set.has('styles') ? catalog.styles : undefined,
    }

    return {
      content: [
        {
          type: 'text',
          text: 'Catalog loaded. Use hmlet_ui_get_source to read docs/components/tokens/styles.',
        },
      ],
      structuredContent,
    }
  },
)

server.registerTool(
  'hmlet_ui_get_source',
  {
    title: 'Get @hmlet/ui source',
    description:
      'Reads source for a ui module, layout component, token file, doc, or style file from this repo/package.',
    inputSchema: z.object({
      kind: z.enum(['ui', 'layout', 'token', 'doc', 'style']),
      name: z
        .string()
        .min(1)
        .describe(
          'Logical name (e.g. ui: "button", layout: "Box", token: "spacing", doc: "README", style: "styles/index.css").',
        ),
    }),
  },
  async ({kind, name}) => {
    const catalog = await loadCatalog(repoRoot)

    let rel
    if (kind === 'ui') {
      if (!catalog.uiModules.includes(name)) {
        return toolError('UNKNOWN_UI_MODULE', `Unknown ui module: ${name}`, {
          kind,
          name,
        })
      }
      rel = `src/components/ui/${name}`
    }

    if (kind === 'layout') {
      const entry = catalog.layoutComponents.find(c => c.name === name)
      if (!entry) {
        return toolError(
          'UNKNOWN_LAYOUT_COMPONENT',
          `Unknown layout component: ${name}`,
          {kind, name},
        )
      }
      rel = `src/components/layout/${entry.module}`
    }

    if (kind === 'token') {
      if (!catalog.tokenFiles.includes(name)) {
        return toolError('UNKNOWN_TOKEN_FILE', `Unknown token file: ${name}`, {
          kind,
          name,
        })
      }
      rel = `src/tokens/${name}.ts`
    }

    if (kind === 'doc') {
      const entry = catalog.docs.find(d => d.name === name)
      if (!entry) {
        return toolError('UNKNOWN_DOC', `Unknown doc: ${name}`, {kind, name})
      }
      rel = entry.relPath
    }

    if (kind === 'style') {
      const entry = catalog.styles.find(s => s.name === name)
      if (!entry) {
        return toolError('UNKNOWN_STYLE', `Unknown style: ${name}`, {
          kind,
          name,
        })
      }
      rel = entry.relPath
    }

    const abs =
      kind === 'token'
        ? path.join(repoRoot, rel)
        : await resolveSourceFile(repoRoot, rel)
    if (!abs) {
      return toolError('FILE_NOT_FOUND', `File not found for ${kind}:${name}`, {
        kind,
        name,
        rel,
      })
    }

    if (!isPathInsideRoot(repoRoot, abs)) {
      return toolError(
        'PATH_OUTSIDE_REPO',
        `Refusing to read outside repo root for ${kind}:${name}`,
        {
          kind,
          name,
          path: abs,
          repoRoot,
        },
      )
    }

    let text
    try {
      text = await readTextFile(abs)
    } catch (e) {
      return toolError(
        e?.code ?? 'READ_FAILED',
        `Failed to read ${kind}:${name}`,
        {
          kind,
          name,
          path: abs,
          reason: String(e?.message ?? e),
        },
      )
    }
    return {
      content: [{type: 'text', text}],
      structuredContent: {path: abs, kind, name},
    }
  },
)

server.registerTool(
  'hmlet_ui_search',
  {
    title: 'Search @hmlet/ui source',
    description:
      'Searches across UI modules, layout components, tokens, docs, and styles. Returns paths + small snippets.',
    inputSchema: z.object({
      query: z.string().min(1),
      limit: z.number().int().min(1).max(50).optional().default(20),
      include: z
        .array(z.enum(['ui', 'layout', 'tokens', 'docs', 'styles']))
        .optional()
        .describe('Limit which groups are searched. Default: all.'),
    }),
  },
  async ({query, limit, include}) => {
    const catalog = await loadCatalog(repoRoot)
    const set = new Set(include ?? ['ui', 'layout', 'tokens', 'docs', 'styles'])

    const haystacks = []

    if (set.has('ui')) {
      for (const mod of catalog.uiModules) {
        const abs =
          (await resolveSourceFile(repoRoot, `src/components/ui/${mod}`)) ??
          (await resolveSourceFile(repoRoot, `src/components/ui/${mod}.ts`))
        if (abs) haystacks.push({kind: 'ui', name: mod, path: abs})
      }
    }

    if (set.has('layout')) {
      for (const comp of catalog.layoutComponents) {
        const abs = await resolveSourceFile(
          repoRoot,
          `src/components/layout/${comp.module}`,
        )
        if (abs) haystacks.push({kind: 'layout', name: comp.name, path: abs})
      }
    }

    if (set.has('tokens')) {
      for (const token of catalog.tokenFiles) {
        const abs = path.join(repoRoot, `src/tokens/${token}.ts`)
        if (await fileExists(abs))
          haystacks.push({kind: 'token', name: token, path: abs})
      }
    }

    if (set.has('docs')) {
      for (const doc of catalog.docs) {
        const abs = path.join(repoRoot, doc.relPath)
        if (await fileExists(abs))
          haystacks.push({kind: 'doc', name: doc.name, path: abs})
      }
    }

    if (set.has('styles')) {
      for (const style of catalog.styles) {
        const abs = path.join(repoRoot, style.relPath)
        if (await fileExists(abs))
          haystacks.push({kind: 'style', name: style.name, path: abs})
      }
    }

    const q = query.toLowerCase()
    const results = []

    for (const item of haystacks) {
      if (results.length >= limit) break
      let text
      try {
        text = await readTextFile(item.path)
      } catch {
        continue
      }
      const lower = text.toLowerCase()
      const idx = lower.indexOf(q)
      if (idx === -1) continue

      results.push({
        kind: item.kind,
        name: item.name,
        path: item.path,
        snippet: makeSnippet(text, idx, query.length),
      })
    }

    return {
      content: [
        {
          type: 'text',
          text: results.length
            ? `Found ${results.length} match(es).`
            : 'No matches found.',
        },
      ],
      structuredContent: {query, results},
    }
  },
)

server.registerTool(
  'hmlet_ui_component_matrix',
  {
    title: 'Component matrix',
    description:
      'Returns a quick index of components/exports across @hmlet/ui so agents can pick the right building blocks without scanning every file manually.',
    inputSchema: z.object({
      include: z
        .array(z.enum(['ui', 'layout']))
        .optional()
        .describe(
          'Limit which component groups are included. Default: ["ui","layout"].',
        ),
      includeExports: z.boolean().optional().default(true),
      limit: z.number().int().min(1).max(500).optional().default(250),
    }),
  },
  async ({include, includeExports, limit}) => {
    const set = new Set(include ?? ['ui', 'layout'])
    const index = await loadComponentIndex(repoRoot)
    const items = []

    if (set.has('ui')) {
      for (const mod of index.catalog.uiModules) {
        if (items.length >= limit) break
        const entry = index.uiByModule.get(mod)
        if (!entry) continue
        items.push({
          kind: 'ui',
          module: mod,
          path: entry.path,
          exports: includeExports ? entry.exports : undefined,
          hasCva: Boolean(entry.cvaDefinitions?.length),
          cvaNames: entry.cvaDefinitions?.map(d => d.name) ?? [],
        })
      }
    }

    if (set.has('layout')) {
      for (const comp of index.catalog.layoutComponents) {
        if (items.length >= limit) break
        const entry = index.layoutByName.get(comp.name)
        if (!entry) continue
        items.push({
          kind: 'layout',
          module: comp.module,
          component: comp.name,
          path: entry.path,
          exports: includeExports ? entry.exports : undefined,
          hasCva: Boolean(entry.cvaDefinitions?.length),
          cvaNames: entry.cvaDefinitions?.map(d => d.name) ?? [],
        })
      }
    }

    return {
      content: [{type: 'text', text: `Indexed ${items.length} item(s).`}],
      structuredContent: {
        repoRoot,
        packageName,
        items,
      },
    }
  },
)

server.registerTool(
  'hmlet_ui_design_tokens_usage',
  {
    title: 'Design tokens usage',
    description:
      'Finds which CSS variables (design tokens) are used across components and styles, and where they occur.',
    inputSchema: z.object({
      query: z
        .string()
        .optional()
        .describe(
          'Optional filter for token name (substring match). Example: "--radius" or "--color".',
        ),
      limit: z.number().int().min(1).max(200).optional().default(50),
      include: z
        .array(z.enum(['ui', 'layout', 'styles']))
        .optional()
        .describe('Which groups to scan. Default: all.'),
      includeFiles: z.boolean().optional().default(true),
    }),
  },
  async ({query, limit, include, includeFiles}) => {
    const catalog = await loadCatalog(repoRoot)
    const set = new Set(include ?? ['ui', 'layout', 'styles'])

    const files = []
    if (set.has('ui')) {
      for (const mod of catalog.uiModules) {
        const abs = await resolveSourceFile(
          repoRoot,
          `src/components/ui/${mod}`,
        )
        if (abs) files.push(abs)
      }
    }
    if (set.has('layout')) {
      for (const comp of catalog.layoutComponents) {
        const abs = await resolveSourceFile(
          repoRoot,
          `src/components/layout/${comp.module}`,
        )
        if (abs) files.push(abs)
      }
    }
    if (set.has('styles')) {
      for (const style of catalog.styles) {
        const abs = path.join(repoRoot, style.relPath)
        if (await fileExists(abs)) files.push(abs)
      }
    }

    const usageByToken = new Map()
    const tokenRe = /var\(\s*(--[a-z0-9-]+)\s*\)/gi

    for (const abs of files) {
      if (!isPathInsideRoot(repoRoot, abs)) continue
      let text
      try {
        text = await readTextFile(abs)
      } catch {
        continue
      }
      const counts = new Map()
      for (const m of text.matchAll(tokenRe)) {
        const tok = String(m[1] ?? '').trim()
        if (!tok) continue
        counts.set(tok, (counts.get(tok) ?? 0) + 1)
      }
      for (const [tok, count] of counts.entries()) {
        const row = usageByToken.get(tok) ?? {token: tok, count: 0, files: []}
        row.count += count
        if (includeFiles) row.files.push({path: abs, count})
        usageByToken.set(tok, row)
      }
    }

    let rows = [...usageByToken.values()].sort((a, b) => b.count - a.count)
    if (query) {
      const q = query.toLowerCase()
      rows = rows.filter(r => r.token.toLowerCase().includes(q))
    }
    rows = rows.slice(0, limit)

    return {
      content: [
        {
          type: 'text',
          text: rows.length
            ? `Found ${rows.length} token(s).`
            : 'No tokens found.',
        },
      ],
      structuredContent: {
        repoRoot,
        packageName,
        query: query ?? null,
        tokens: rows,
      },
    }
  },
)

server.registerTool(
  'hmlet_ui_intent_contracts',
  {
    title: 'Get intent contracts',
    description:
      'Returns which intent dimensions are supported by UI and layout components (guardrails for agents).',
    inputSchema: z.object({
      component: z.string().optional(),
    }),
  },
  async ({component}) => {
    if (component) {
      const contract = getIntentContract(component)
      if (!contract) {
        return toolError(
          'UNKNOWN_COMPONENT',
          `No intent contract for ${component}`,
          {component},
        )
      }
      return {
        content: [{type: 'text', text: `Intent contract for ${component}.`}],
        structuredContent: {component, contract},
      }
    }

    return {
      content: [{type: 'text', text: 'All intent contracts.'}],
      structuredContent: {contracts: INTENT_CONTRACTS},
    }
  },
)

server.registerTool(
  'hmlet_ui_resolve_intent',
  {
    title: 'Resolve UI intent',
    description:
      'Resolves business intent into concrete component props (variant, size, etc).',
    inputSchema: z.object({
      component: z.string().min(1),
      intent: z.unknown(),
    }),
  },
  async ({component, intent}) => {
    const resolvedComponent =
      (await resolveUiByName(repoRoot, component)) ??
      (await resolveLayoutByName(repoRoot, component))

    if (!resolvedComponent) {
      return toolError('UNKNOWN_COMPONENT', `Unknown component: ${component}`, {
        component,
      })
    }

    const exports = extractExportedSymbols(resolvedComponent.text)
    const exportName =
      resolvedComponent.exportName ??
      pickPrimaryExportName({exports, requestedName: component}) ??
      component

    const intentInput = coerceIntentInput(intent)
    if (!intentInput) {
      return toolError(
        'INTENT_INVALID',
        'Intent could not be parsed/coerced.',
        {component, intent},
      )
    }

    const contract = getIntentContract(exportName)
    const contractViolation = validateIntentAgainstContract({
      component: exportName,
      intent: intentInput,
      contract,
    })
    if (contractViolation) {
      return toolError(
        contractViolation.code,
        contractViolation.message,
        contractViolation.details,
      )
    }

    const explicit = resolveIntent(exportName, intentInput)
    if (explicit) {
      return {
        content: [{type: 'text', text: `Resolved intent for ${exportName}.`}],
        structuredContent: {
          kind: resolvedComponent.kind,
          module: resolvedComponent.module,
          path: resolvedComponent.path,
          component: exportName,
          intent: intentInput,
          mappingSource: 'explicit',
          resolvedProps: explicit.props,
          reason: explicit.reason,
        },
      }
    }

    if (resolvedComponent.kind === 'layout') {
      const layoutExplicit = resolveLayoutIntentExplicit({
        component: exportName,
        intent: intentInput,
      })
      if (layoutExplicit) {
        return {
          content: [{type: 'text', text: `Resolved intent for ${exportName}.`}],
          structuredContent: {
            kind: resolvedComponent.kind,
            module: resolvedComponent.module,
            path: resolvedComponent.path,
            component: exportName,
            intent: intentInput,
            mappingSource: 'explicit',
            resolvedProps: layoutExplicit.props,
            reason: layoutExplicit.reason,
          },
        }
      }

      const layoutGeneric = resolveLayoutIntentGeneric({
        component: exportName,
        intent: intentInput,
      })
      if (layoutGeneric) {
        return {
          content: [{type: 'text', text: `Resolved intent for ${exportName}.`}],
          structuredContent: {
            kind: resolvedComponent.kind,
            module: resolvedComponent.module,
            path: resolvedComponent.path,
            component: exportName,
            intent: intentInput,
            mappingSource: 'generic',
            resolvedProps: layoutGeneric.props,
            reason: layoutGeneric.reason,
          },
        }
      }
    }

    const analysis = await analyzeVariantsForResolvedComponent({
      repoRoot,
      resolved: resolvedComponent,
      exportName,
    })
    const generic = resolveIntentGeneric({
      variantOptions: analysis.variantOptions,
      sizeOptions: analysis.sizeOptions,
      defaultVariant: analysis.defaultVariant,
      defaultSize: analysis.defaultSize,
      intent: intentInput,
    })

    if (!generic) {
      return toolError(
        'INTENT_NOT_APPLICABLE',
        `No variant/size intent mapping applicable for ${exportName}.`,
        {
          component: exportName,
          kind: resolvedComponent.kind,
          module: resolvedComponent.module,
          hasVariant: Boolean(analysis.variantOptions?.length),
          hasSize: Boolean(analysis.sizeOptions?.length),
        },
      )
    }

    return {
      content: [{type: 'text', text: `Resolved intent for ${exportName}.`}],
      structuredContent: {
        kind: resolvedComponent.kind,
        module: resolvedComponent.module,
        path: resolvedComponent.path,
        component: exportName,
        intent: intentInput,
        mappingSource: 'generic',
        resolvedProps: generic.props,
        reason: generic.reason,
        available: {
          variantOptions: analysis.variantOptions ?? null,
          sizeOptions: analysis.sizeOptions ?? null,
          defaultVariant: analysis.defaultVariant ?? null,
          defaultSize: analysis.defaultSize ?? null,
        },
      },
    }
  },
)

server.registerTool(
  'hmlet_ui_component_api',
  {
    title: 'Get component API (props/variants)',
    description:
      'Returns props typing hints and CVA variants (when present) for a UI or layout component exported by @hmlet/ui.',
    inputSchema: z.object({
      kind: z
        .enum(['ui', 'layout'])
        .optional()
        .describe('If omitted, will try ui first, then layout.'),
      name: z
        .string()
        .min(1)
        .describe(
          'Component name (e.g. "Button", "Card", "Box") OR ui module name (e.g. "button").',
        ),
    }),
  },
  async ({kind, name}) => {
    const resolved =
      kind === 'layout'
        ? await resolveLayoutByName(repoRoot, name)
        : kind === 'ui'
          ? await resolveUiByName(repoRoot, name)
          : ((await resolveUiByName(repoRoot, name)) ??
            (await resolveLayoutByName(repoRoot, name)))

    if (!resolved) {
      return toolError(
        'UNKNOWN_COMPONENT',
        `Unknown component/module: ${name}`,
        {kind: kind ?? null, name},
      )
    }

    const exports = extractExportedSymbols(resolved.text)
    const exportName =
      resolved.exportName ??
      pickPrimaryExportName({exports, requestedName: name})

    const ts = await loadTypescript()
    if (ts) {
      const program = await createTsProgram(ts, repoRoot, resolved.path)
      const checker = program.getTypeChecker()
      const sourceFile = program.getSourceFile(resolved.path)
      if (sourceFile && exportName) {
        const exportSymbol = getModuleExportSymbol(
          ts,
          checker,
          sourceFile,
          exportName,
        )
        if (exportSymbol) {
          const propsType = getPropsTypeFromExport(
            ts,
            checker,
            sourceFile,
            exportSymbol,
          )
          const cvaDefs = parseCvaDefinitionsWithTs(
            ts,
            resolved.text,
            resolved.path,
          )
          const propsInfo = propsType
            ? extractPropsShape(ts, checker, propsType, sourceFile)
            : {props: [], variantsFromProps: {}}

          return {
            content: [
              {
                type: 'text',
                text: 'API extracted with TypeScript (accurate prop/variant types).',
              },
            ],
            structuredContent: {
              analysisMode: 'typescript',
              kind: resolved.kind,
              module: resolved.module,
              path: resolved.path,
              exports,
              component: exportName,
              props: propsInfo.props,
              variantsFromProps: propsInfo.variantsFromProps,
              cvaDefinitions: cvaDefs,
            },
          }
        }
      }
    }

    // Fallback (heuristics)
    const cvaDefs = parseCvaDefinitions(resolved.text)
    const propsTypeFromForwardRef = exportName
      ? extractForwardRefPropsType(resolved.text, exportName)
      : null
    const propsTypeFromFn = exportName
      ? extractFunctionParamType(resolved.text, exportName)
      : null
    const propsTypeText = propsTypeFromForwardRef ?? propsTypeFromFn
    const variantBindings = extractVariantPropsBindings(propsTypeText)
    const boundVariants = variantBindings
      .map(binding => cvaDefs.find(d => d.name === binding))
      .filter(Boolean)

    return {
      content: [
        {
          type: 'text',
          text: 'API extracted (heuristic mode). Install `typescript` in the environment for more accurate props/variants.',
        },
      ],
      structuredContent: {
        analysisMode: 'heuristic',
        kind: resolved.kind,
        module: resolved.module,
        path: resolved.path,
        exports,
        component: exportName,
        propsTypeText: propsTypeText ?? null,
        cvaDefinitions: cvaDefs,
        variantBindings,
        boundCva: boundVariants,
      },
    }
  },
)

server.registerTool(
  'hmlet_ui_generate_usage_example',
  {
    title: 'Generate component usage example',
    description:
      'Generates a TSX usage snippet for a given component, choosing sensible defaults and CVA variants when available.',
    inputSchema: z.object({
      kind: z.enum(['ui', 'layout']).optional(),
      name: z
        .string()
        .min(1)
        .describe('Component name (e.g. "Button", "Card", "Box").'),
      intent: z.unknown().optional(),
    }),
  },
  async ({kind, name, intent}) => {
    const resolved =
      kind === 'layout'
        ? await resolveLayoutByName(repoRoot, name)
        : kind === 'ui'
          ? await resolveUiByName(repoRoot, name)
          : ((await resolveUiByName(repoRoot, name)) ??
            (await resolveLayoutByName(repoRoot, name)))

    if (!resolved) {
      return toolError('UNKNOWN_COMPONENT', `Unknown component: ${name}`, {
        kind: kind ?? null,
        name,
      })
    }

    const exports = extractExportedSymbols(resolved.text)
    const exportName =
      resolved.exportName ??
      pickPrimaryExportName({exports, requestedName: name}) ??
      name

    const intentInput = coerceIntentInput(intent)
    const explicitIntentResolution = intentInput
      ? resolveIntent(exportName, intentInput)
      : null

    const analysis = await analyzeVariantsForResolvedComponent({
      repoRoot,
      resolved,
      exportName,
    })

    const variantOptions = analysis.variantOptions
    const sizeOptions = analysis.sizeOptions
    const defaultVariant = analysis.defaultVariant
    const defaultSize = analysis.defaultSize

    const intentResolution =
      explicitIntentResolution ??
      (intentInput
        ? resolveIntentGeneric({
            variantOptions,
            sizeOptions,
            defaultVariant,
            defaultSize,
            intent: intentInput,
          })
        : null)
    const hasVariant = Boolean(variantOptions?.length)
    const hasSize = Boolean(sizeOptions?.length)

    let example
    if (exportName === 'Card') {
      example = `import {Card, CardContent, CardHeader, CardTitle} from '${packageName}'

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>${typeof intent === 'string' ? intent : 'Card title'}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Content goes here.</p>
      </CardContent>
    </Card>
  )
}`
    } else if (exportName === 'Button') {
      const resolvedVariant = intentResolution?.props?.variant
      const resolvedSize = intentResolution?.props?.size
      const variantProp = resolvedVariant
        ? ` variant="${resolvedVariant}"`
        : hasVariant
          ? ` variant="${defaultVariant ?? variantOptions?.[0] ?? 'primary'}"`
          : ''
      const sizeProp = resolvedSize
        ? ` size="${resolvedSize}"`
        : hasSize
          ? ` size="${defaultSize ?? sizeOptions?.[0] ?? 'md'}"`
          : ''
      example = `import {Button} from '${packageName}'

export function Example() {
  return <Button${variantProp}${sizeProp}>${typeof intent === 'string' ? intent : 'Continue'}</Button>
}`
    } else if (resolved.kind === 'layout' && exportName === 'Box') {
      const layoutIntent = intentInput
        ? resolveLayoutIntentGeneric({component: 'Box', intent: intentInput})
        : null
      const padding = layoutIntent?.props?.padding ?? '4'
      example = `import {Box} from '${packageName}'

export function Example() {
  return (
    <Box padding="${padding}" width="full">
      <div>Content</div>
    </Box>
  )
}`
    } else if (resolved.kind === 'layout' && exportName === 'Stack') {
      const layoutIntent = intentInput
        ? resolveLayoutIntentGeneric({component: 'Stack', intent: intentInput})
        : null
      const gap = layoutIntent?.props?.gap ?? '4'
      example = `import {Stack} from '${packageName}'

export function Example() {
  return (
    <Stack direction="vertical" gap="${gap}">
      <div>Item 1</div>
      <div>Item 2</div>
    </Stack>
  )
}`
    } else {
      const variantProp = hasVariant
        ? ` variant="${defaultVariant ?? variantOptions?.[0] ?? ''}"`
        : ''
      const sizeProp = hasSize
        ? ` size="${defaultSize ?? sizeOptions?.[0] ?? ''}"`
        : ''
      const props = `${variantProp}${sizeProp}`.trim()
      const extraPropsFromIntent =
        intentResolution?.props && typeof intentResolution.props === 'object'
          ? Object.entries(intentResolution.props)
              .filter(([k]) => k === 'variant' || k === 'size')
              .map(([k, v]) => `${k}="${String(v)}"`)
              .join(' ')
          : ''

      const extraLayoutPropsFromIntent =
        resolved.kind === 'layout' && intentInput
          ? (() => {
              const layout = resolveLayoutIntentGeneric({
                component: exportName,
                intent: intentInput,
              })
              if (!layout?.props) return ''
              return Object.entries(layout.props)
                .filter(([k]) => k !== 'requiresConfirmation')
                .map(([k, v]) => `${k}="${String(v)}"`)
                .join(' ')
            })()
          : ''

      example = `import {${exportName}} from '${packageName}'

export function Example() {
  return <${exportName}${[extraLayoutPropsFromIntent, extraPropsFromIntent, props].filter(Boolean).join(' ').trim() ? ' ' + [extraLayoutPropsFromIntent, extraPropsFromIntent, props].filter(Boolean).join(' ').trim() : ''} />
}`
    }

    return {
      content: [{type: 'text', text: example}],
      structuredContent: {
        kind: resolved.kind,
        module: resolved.module,
        component: exportName,
        intent: intentInput,
        intentResolution: intentResolution
          ? {
              resolvedProps: intentResolution.props,
              reason: intentResolution.reason,
            }
          : null,
      },
    }
  },
)

server.registerTool(
  'hmlet_ui_compound_imports',
  {
    title: 'Suggest compound imports',
    description:
      'Suggests related exports and a recommended import statement for compound components (e.g. Card + CardHeader/CardContent).',
    inputSchema: z.object({
      kind: z.enum(['ui', 'layout']).optional(),
      name: z
        .string()
        .min(1)
        .describe('Component name (e.g. "Card", "Dialog", "DropdownMenu").'),
    }),
  },
  async ({kind, name}) => {
    const resolved =
      kind === 'layout'
        ? await resolveLayoutByName(repoRoot, name)
        : kind === 'ui'
          ? await resolveUiByName(repoRoot, name)
          : ((await resolveUiByName(repoRoot, name)) ??
            (await resolveLayoutByName(repoRoot, name)))

    if (!resolved) {
      return toolError('UNKNOWN_COMPONENT', `Unknown component: ${name}`, {
        kind: kind ?? null,
        name,
      })
    }

    const exports = extractExportedSymbols(resolved.text)
    const target = resolved.exportName ?? name
    const group = pickCompoundGroup(exports, target)
    const sorted = [...new Set(group)]
      .filter(Boolean)
      .sort((a, b) => a.localeCompare(b))
    const importLine = `import {${sorted.join(', ')}} from '${packageName}'`

    return {
      content: [{type: 'text', text: importLine}],
      structuredContent: {
        kind: resolved.kind,
        module: resolved.module,
        path: resolved.path,
        target,
        exports,
        suggested: sorted,
      },
    }
  },
)

server.registerTool(
  'hmlet_ui_scaffold_page',
  {
    title: 'Scaffold a page using @hmlet/ui',
    description:
      'Returns a TSX page skeleton that uses @hmlet/ui layout primitives and common UI components. Does not write files.',
    inputSchema: z.object({
      componentName: z
        .string()
        .min(1)
        .describe(
          'React component name for the page, e.g. "PropertyListPage".',
        ),
      description: z
        .string()
        .min(1)
        .describe(
          'What the page should contain (sections, lists, forms, etc).',
        ),
    }),
  },
  async ({componentName, description}) => {
    const code = `import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Separator,
} from '${packageName}'

import {Container, Grid, GridItem, HStack, Section, Spacer, VStack} from '${packageName}'

export function ${componentName}() {
  return (
    <Section paddingY="12">
      <Container maxWidth="xl">
        <VStack gap="8">
          <HStack gap="4" align="center">
            <div>
              <h1 className="text-2xl font-semibold">${componentName}</h1>
              <p className="text-sm text-muted-foreground">${description}</p>
            </div>
            <Spacer />
            <HStack gap="2">
              <Input placeholder="Search" />
              <Button>Action</Button>
            </HStack>
          </HStack>

          <Separator />

          <Grid columns="3" gap="6">
            {Array.from({length: 6}).map((_, i) => (
              <GridItem key={i}>
                <Card>
                  <CardHeader>
                    <CardTitle>Card title</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Replace with real content.</p>
                  </CardContent>
                </Card>
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Section>
  )
}`

    return {
      content: [{type: 'text', text: code}],
      structuredContent: {componentName},
    }
  },
)

// A few docs/styles as MCP resources so clients can browse them.
server.registerResource(
  'README',
  'hmlet-ui://doc/README',
  {title: 'README'},
  async () => {
    const text = await readTextFile(path.join(repoRoot, 'README.md'))
    return {
      contents: [
        {uri: 'hmlet-ui://doc/README', mimeType: 'text/markdown', text},
      ],
    }
  },
)

server.registerResource(
  'Layout System README',
  'hmlet-ui://doc/LAYOUT_SYSTEM_README',
  {title: 'Layout System README'},
  async () => {
    const text = await readTextFile(
      path.join(repoRoot, 'LAYOUT_SYSTEM_README.md'),
    )
    return {
      contents: [
        {
          uri: 'hmlet-ui://doc/LAYOUT_SYSTEM_README',
          mimeType: 'text/markdown',
          text,
        },
      ],
    }
  },
)

server.registerResource(
  'Layout System Summary',
  'hmlet-ui://doc/LAYOUT_SYSTEM_SUMMARY',
  {title: 'Layout System Summary'},
  async () => {
    const text = await readTextFile(
      path.join(repoRoot, 'LAYOUT_SYSTEM_SUMMARY.md'),
    )
    return {
      contents: [
        {
          uri: 'hmlet-ui://doc/LAYOUT_SYSTEM_SUMMARY',
          mimeType: 'text/markdown',
          text,
        },
      ],
    }
  },
)

server.registerResource(
  'Library styles',
  'hmlet-ui://style/index.css',
  {title: 'src/styles/index.css'},
  async () => {
    const text = await readTextFile(path.join(repoRoot, 'src/styles/index.css'))
    return {
      contents: [
        {uri: 'hmlet-ui://style/index.css', mimeType: 'text/css', text},
      ],
    }
  },
)

await server.connect(new StdioServerTransport())
