/**
 * check-os.mjs
 * Warns contributors on Windows to use WSL2.
 */

import os from 'node:os'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

import {warn, ok, info, dim} from '../utils/color.mjs'

const __filename = fileURLToPath(import.meta.url)

// Detect dependency install
const IS_DEPENDENCY_INSTALL = process.cwd().includes('node_modules')

// Skip entirely for consumers
if (IS_DEPENDENCY_INSTALL) {
  process.exit(0)
}

// MAIN RUNNER

function runCheck() {
  const platform = os.platform()
  const isWindows = platform === 'win32'

  console.log(info('🖥️  Checking operating system...\n'))

  if (isWindows) {
    console.warn(
      warn('⚠️  Windows detected. WSL2 is recommended for best compatibility.'),
    )
  } else {
    console.log(ok(`✅ OS check passed (${platform})\n`))
  }
}

export default runCheck

// DIRECT EXECUTION

if (process.argv[1] && new URL(import.meta.url).pathname === process.argv[1]) {
  runCheck()
}
