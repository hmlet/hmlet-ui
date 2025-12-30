/**
 * check-sync-node-version.mjs
 * Ensures .nvmrc and package.json "engines.node" stay in sync
 * (major version only, contributors only).
 */

import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

import {ok, warn, info, dim} from '../utils/color.mjs'

const __filename = fileURLToPath(import.meta.url)

// Detect dependency install
const IS_DEPENDENCY_INSTALL = process.cwd().includes('node_modules')

// Skip entirely for consumers
if (IS_DEPENDENCY_INSTALL) {
  process.exit(0)
}

/**
 * Extract major version number from:
 * "24" → 24
 * "24.1.0" → 24
 * ">=24.0.0" → 24
 */
function getMajor(version) {
  return parseInt(version.replace(/[^\d.]/g, '').split('.')[0], 10)
}

// MAIN RUNNER

function runCheck() {
  console.log(info('🔄 Checking Node version sync...\n'))

  if (!fs.existsSync('.nvmrc')) {
    console.log(dim('ℹ️  Skipping Node sync check (.nvmrc not found)\n'))
    return
  }

  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))

  const pkgNode = pkg.engines?.node
  if (!pkgNode) {
    console.log(
      dim(
        'ℹ️  Skipping Node sync check (package.json engines.node not defined)\n',
      ),
    )
    return
  }

  const nvm = fs.readFileSync('.nvmrc', 'utf8').trim()

  const pkgMajor = getMajor(pkgNode)
  const nvmMajor = getMajor(nvm)

  if (pkgMajor !== nvmMajor) {
    console.warn(
      warn(
        `⚠️ Node version mismatch:\n` +
          `   .nvmrc → ${nvm}\n` +
          `   package.json → ${pkgNode}\n`,
      ),
    )
  } else {
    console.log(ok(`✅ Node versions in sync (v${pkgMajor})\n`))
  }
}

export default runCheck

// DIRECT EXECUTION

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  runCheck()
}
