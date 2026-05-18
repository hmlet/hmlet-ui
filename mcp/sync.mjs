#!/usr/bin/env node

import fs from 'node:fs/promises'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const PACKAGE_NAME = '@hmlet/ui'
const ENV_DISABLE = 'HMLET_UI_MCP_DISABLE'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const packageRoot = path.resolve(__dirname, '..')

async function fileExists(filePath) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

async function readJson(filePath) {
  const raw = await fs.readFile(filePath, 'utf8')
  return JSON.parse(raw)
}

async function writeJson(filePath, value) {
  await fs.writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8')
}

async function findNearestPackageRoot(startDir) {
  let current = path.resolve(startDir)

  while (true) {
    const pkgPath = path.join(current, 'package.json')
    if (await fileExists(pkgPath)) return current

    const parent = path.dirname(current)
    if (parent === current) return null
    current = parent
  }
}

async function getPackageNameAtRoot(rootDir) {
  try {
    const pkg = await readJson(path.join(rootDir, 'package.json'))
    return typeof pkg?.name === 'string' ? pkg.name : null
  } catch {
    return null
  }
}

function isInsideNodeModules(dirPath) {
  const parts = path.resolve(dirPath).split(path.sep)
  return parts.includes('node_modules')
}

function normalizeCandidate(value) {
  if (!value || typeof value !== 'string') return null
  const trimmed = value.trim()
  if (!trimmed) return null
  return trimmed
}

function parseArgValue(argv, name) {
  const index = argv.indexOf(name)
  if (index === -1) return null
  return argv[index + 1] ?? null
}

async function resolveConsumerRoot(argv) {
  const explicitRoot = parseArgValue(argv, '--project-root')
  if (explicitRoot) {
    const resolved = await findNearestPackageRoot(explicitRoot)
    return resolved
  }

  const candidateEnvValues = [
    process.env.INIT_CWD,
    process.env.npm_config_local_prefix,
    process.env.npm_config_prefix,
    process.env.PWD,
  ]

  for (const value of candidateEnvValues) {
    const candidate = normalizeCandidate(value)
    if (!candidate) continue
    const root = await findNearestPackageRoot(candidate)
    if (!root) continue
    const packageName = await getPackageNameAtRoot(root)
    if (packageName === PACKAGE_NAME) continue
    return root
  }

  // Fallback: walk up from cwd and pick the first non-library package root.
  let current = path.resolve(process.cwd())
  while (true) {
    const pkgPath = path.join(current, 'package.json')
    if (await fileExists(pkgPath)) {
      const pkgName = await getPackageNameAtRoot(current)
      if (
        pkgName &&
        pkgName !== PACKAGE_NAME &&
        !isInsideNodeModules(current)
      ) {
        return current
      }
    }
    const parent = path.dirname(current)
    if (parent === current) break
    current = parent
  }

  const fromCwd = await findNearestPackageRoot(process.cwd())
  return fromCwd
}

async function getPackageMeta() {
  const pkg = await readJson(path.join(packageRoot, 'package.json'))
  return {
    name: pkg.name,
    version: pkg.version,
  }
}

function buildMcpEntry(version) {
  return {
    command: 'node',
    args: ['./node_modules/@hmlet/ui/mcp/server.mjs'],
    env: {
      HMLET_UI_PACKAGE_NAME: PACKAGE_NAME,
    },
    managedBy: PACKAGE_NAME,
    managedVersion: version,
  }
}

async function upsertMcpConfig({consumerRoot, version}) {
  const configPath = path.join(consumerRoot, 'hmlet-ui.mcp.json')

  let data = {}
  if (await fileExists(configPath)) {
    try {
      data = await readJson(configPath)
    } catch {
      data = {}
    }
  }

  if (typeof data !== 'object' || data == null || Array.isArray(data)) {
    data = {}
  }

  if (typeof data.mcpServers !== 'object' || data.mcpServers == null) {
    data.mcpServers = {}
  }

  data.mcpServers['hmlet-ui'] = buildMcpEntry(version)

  await writeJson(configPath, data)

  return configPath
}

function buildAgentHelperContent(version) {
  return [
    '# hmlet-ui Agent Helper',
    '',
    '<!-- managed-by: @hmlet/ui -->',
    `<!-- managed-version: ${version} -->`,
    '',
    'This file is managed by @hmlet/ui during install/update.',
    '',
    '## Component Discovery',
    '- UI primitives: src/components/ui',
    '- Form wrappers: src/components/ui/form-input.tsx',
    '- Layout primitives: src/components/layout',
    '- UI stories: src/storybook/ui',
    '',
    '## Import Preference',
    '- Prefer importing from @hmlet/ui package exports.',
    '- Use direct file imports only when the export is unavailable.',
    '',
    '## MCP Config',
    '- Root MCP file: hmlet-ui.mcp.json',
    '- Server key: mcpServers.hmlet-ui',
    '',
  ].join('\n')
}

async function upsertAgentHelper({consumerRoot, version}) {
  const helperPath = path.join(consumerRoot, 'hmlet-ui.agent.md')
  const content = buildAgentHelperContent(version)
  await fs.writeFile(helperPath, content, 'utf8')
  return helperPath
}

async function runSync({argv = [], silent = false} = {}) {
  if (process.env[ENV_DISABLE] === '1') {
    if (!silent) {
      console.log(`hmlet-ui-mcp: skipped (${ENV_DISABLE}=1)`)
    }
    return {skipped: true, reason: `${ENV_DISABLE}=1`}
  }

  const packageMeta = await getPackageMeta()
  const consumerRoot = await resolveConsumerRoot(argv)

  if (!consumerRoot) {
    if (!silent) {
      console.log('hmlet-ui-mcp: no consumer project root found, skipping')
    }
    return {skipped: true, reason: 'no-project-root'}
  }

  if (path.resolve(consumerRoot) === path.resolve(packageRoot)) {
    if (!silent) {
      console.log(
        'hmlet-ui-mcp: running in library repo, skipping consumer sync',
      )
    }
    return {skipped: true, reason: 'library-repo'}
  }

  const consumerPkgPath = path.join(consumerRoot, 'package.json')
  if (!(await fileExists(consumerPkgPath))) {
    if (!silent) {
      console.log('hmlet-ui-mcp: consumer package.json not found, skipping')
    }
    return {skipped: true, reason: 'missing-package-json'}
  }

  const mcpFile = await upsertMcpConfig({
    consumerRoot,
    version: packageMeta.version,
  })
  const helperFile = await upsertAgentHelper({
    consumerRoot,
    version: packageMeta.version,
  })

  if (!silent) {
    console.log(`hmlet-ui-mcp: synced in ${consumerRoot}`)
    console.log(`- updated ${path.relative(consumerRoot, mcpFile)}`)
    console.log(`- updated ${path.relative(consumerRoot, helperFile)}`)
  }

  return {
    skipped: false,
    consumerRoot,
    files: [mcpFile, helperFile],
  }
}

async function runDoctor({argv = []} = {}) {
  const consumerRoot = await resolveConsumerRoot(argv)
  const packageMeta = await getPackageMeta()

  console.log(`hmlet-ui-mcp doctor`)
  console.log(`- package root: ${packageRoot}`)
  console.log(`- package: ${packageMeta.name}@${packageMeta.version}`)
  console.log(`- init cwd: ${process.env.INIT_CWD ?? '(unset)'}`)
  console.log(
    `- npm local prefix: ${process.env.npm_config_local_prefix ?? '(unset)'}`,
  )
  console.log(`- npm prefix: ${process.env.npm_config_prefix ?? '(unset)'}`)
  console.log(`- cwd: ${process.cwd()}`)
  console.log(`- consumer root: ${consumerRoot ?? '(not found)'}`)

  if (!consumerRoot) return

  const mcpFile = path.join(consumerRoot, 'hmlet-ui.mcp.json')
  const helperFile = path.join(consumerRoot, 'hmlet-ui.agent.md')

  console.log(
    `- ${path.relative(consumerRoot, mcpFile)}: ${(await fileExists(mcpFile)) ? 'exists' : 'missing'}`,
  )
  console.log(
    `- ${path.relative(consumerRoot, helperFile)}: ${(await fileExists(helperFile)) ? 'exists' : 'missing'}`,
  )
}

export async function runSyncCli({mode = 'sync', argv = []} = {}) {
  try {
    if (mode === 'doctor') {
      await runDoctor({argv})
      return
    }

    const silent = argv.includes('--silent')
    await runSync({argv, silent})
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.warn(`hmlet-ui-mcp: ${message}`)
    process.exitCode = 0
  }
}

const isDirectInvocation =
  process.argv[1] != null && path.resolve(process.argv[1]) === __filename

if (isDirectInvocation) {
  const command = process.argv[2]
  if (command === 'doctor') {
    await runSyncCli({mode: 'doctor', argv: process.argv.slice(3)})
  } else {
    const argv =
      command === 'sync' ? process.argv.slice(3) : process.argv.slice(2)
    await runSyncCli({mode: 'sync', argv})
  }
}
