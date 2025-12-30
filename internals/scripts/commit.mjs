#!/usr/bin/env node
/**
 * commit.mjs
 * Runs all commit-time checks before starting commitizen.
 */

import {execSync} from 'node:child_process'
import process from 'node:process'

import {dim, ok, warn, err, info} from '../utils/color.mjs'

// FLAGS & ENV
const args = process.argv.slice(2)
const IGNORE_CHECKS = args.includes('--ignore-commit-checks')
const IS_CI = Boolean(process.env.CI)

// AUTO-SKIP
if (IGNORE_CHECKS) {
  console.log(warn('⚠️  Commit checks skipped via --ignore-commit-checks\n'))
  process.exit(0)
}

console.log(info('🧹 Running commit checks...\n'))

// RUNNER
const results = []

function runStep(label, cmd, {ciOnly = false, localOnly = false} = {}) {
  if (ciOnly && !IS_CI) return
  if (localOnly && IS_CI) return

  const start = performance.now()

  try {
    execSync(cmd, {stdio: 'inherit'})
    const duration = Math.round(performance.now() - start)

    console.log(ok(`✅ ${label} passed`), dim(`(${duration}ms)\n`))
    results.push({label, status: 'PASS', duration})
  } catch {
    const duration = Math.round(performance.now() - start)

    console.error(err(`❌ ${label} failed`))
    results.push({label, status: 'FAIL', duration})
    printSummary()
    process.exit(1)
  }
}

// STEPS
runStep('Preflight checks', 'node internals/scripts/preflight.mjs')
runStep('lint-staged', 'pnpm lint-staged')

// SUMMARY
function printSummary() {
  console.log(info('\n📊 Commit Checks Summary'))
  console.log('---------------------------------------------')

  for (const r of results) {
    const status = r.status === 'PASS' ? ok('PASS ') : err('FAIL ')
    console.log(`${status} ${r.label.padEnd(30)} ${dim(`${r.duration}ms`)}`)
  }

  console.log('---------------------------------------------\n')
}

printSummary()

// COMMIT FLOW
try {
  console.log(ok('✅ All checks passed'))
  console.log(info('📝 Starting commit...\n'))

  execSync('git add . && cz', {
    stdio: 'inherit',
    env: {
      ...process.env,
      TT_FORCE_CZ: '1',
    },
  })
} catch {
  console.error(
    err(
      '❌ Commit aborted.\n' + 'Ensure commitizen is installed and configured.',
    ),
  )
  process.exit(1)
}
