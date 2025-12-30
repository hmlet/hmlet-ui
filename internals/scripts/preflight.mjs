/**
 * preflight.mjs
 * Runs all environment and install checks from one entry point.
 * Features:
 * - CI vs local conditional checks
 * - Timing per check
 * - Colored output + summary table
 * - --ignore-preflight flag
 */

import process from 'node:process'

import {dim, ok, warn, err, info} from '../utils/color.mjs'

// FLAGS & ENV

const args = process.argv.slice(2)
const IGNORE_PREFLIGHT = args.includes('--ignore-preflight')
const IS_CI = Boolean(process.env.CI)

// AUTO-SKIP
if (IGNORE_PREFLIGHT) {
  console.log(warn('⚠️  Preflight checks skipped via --ignore-preflight\n'))
  process.exit(0)
}

console.log(info('🔍 Running preflight checks...\n'))

// IMPORT CHECKS
import checkOS from './check-os.mjs'
import checkRepoRoot from './check-repo-root.mjs'
import checkSyncNode from './check-sync-node-version.mjs'
import forbidNpm from './forbid-npm.mjs'
import checkVersions from './pnpmcheckversion.mjs'

// RUNNER

const results = []

function run(label, fn, {ciOnly = false, localOnly = false} = {}) {
  if (ciOnly && !IS_CI) return
  if (localOnly && IS_CI) return

  const start = performance.now()

  try {
    fn()
    const duration = Math.round(performance.now() - start)
    console.log(ok(`✅ ${label} passed`), dim(`(${duration}ms)\n`))
    results.push({label, status: 'PASS', duration})
  } catch (e) {
    const duration = Math.round(performance.now() - start)
    console.error(err(`❌ ${label} failed`))
    console.error(err(e.message), '\n')
    results.push({label, status: 'FAIL', duration})
    printSummary()
    process.exit(1)
  }
}

// CHECKS
run('Check pnpm & Node versions', checkVersions)

run('Enforce pnpm (block npm/yarn)', forbidNpm)

run('Check repo root', checkRepoRoot)

run('Sync .nvmrc with package.json', checkSyncNode, {
  localOnly: true, // CI often doesn’t use nvm
})

run('Check OS (WSL warning)', checkOS, {
  localOnly: true,
})

// SUMMARY TABLE
function printSummary() {
  console.log(info('\n📊 Preflight Summary'))
  console.log('---------------------------------------------')

  for (const r of results) {
    const status = r.status === 'PASS' ? ok('PASS ') : err('FAIL ')
    console.log(`${status} ${r.label.padEnd(35)} ${dim(`${r.duration}ms`)}`)
  }

  console.log('---------------------------------------------\n')
}

printSummary()

console.log(ok('✨ All preflight checks passed!\n'))
