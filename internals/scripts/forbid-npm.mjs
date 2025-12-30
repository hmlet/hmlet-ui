/**
 * forbid-npm.mjs
 * Ensures pnpm is used instead of npm or yarn (contributors only).
 */

import {ok, err, info, dim} from '../utils/color.mjs'

// Detect dependency install context
const IS_DEPENDENCY_INSTALL = process.cwd().includes('node_modules')

// Skip enforcement for consumers
if (IS_DEPENDENCY_INSTALL) {
  console.log(
    dim('ℹ️  Skipping pnpm enforcement (dependency install context)\n'),
  )
  process.exit(0)
}

// MAIN RUNNER

function runCheck() {
  console.log(info('📦 Enforcing pnpm usage...\n'))

  const ua = process.env.npm_config_user_agent || ''
  const isPnpm = ua.startsWith('pnpm/')

  if (!isPnpm) {
    console.error(
      err(
        '❌ This repository requires pnpm.\n' +
          '👉 Install pnpm and re-run pnpm install.\n',
      ),
    )
    process.exit(1)
  }

  console.log(ok('✅ pnpm detected\n'))
}

export default runCheck

// DIRECT EXECUTION

if (process.argv[1] && new URL(import.meta.url).pathname === process.argv[1]) {
  runCheck()
}
