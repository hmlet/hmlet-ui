/**
 * pnpmcheckversion.mjs
 * Validates Node & pnpm versions (contributors only).
 */

import {execSync} from 'node:child_process'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

import {ok, err, info, dim} from '../utils/color.mjs'

const __filename = fileURLToPath(import.meta.url)

// Detect dependency install
const IS_DEPENDENCY_INSTALL = process.cwd().includes('node_modules')

// Skip entirely for consumers
if (IS_DEPENDENCY_INSTALL) {
  process.exit(0)
}

const REQUIRED_NODE_MAJOR = 24
const REQUIRED_PNPM_MAJOR = 10

// HELPERS

function getVersion(cmd) {
  return execSync(`${cmd} -v`, {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'ignore'],
  })
    .trim()
    .replace(/^v/, '')
}

function checkVersion(cmd, requiredMajor, label) {
  const version = getVersion(cmd)
  const major = parseInt(version.split('.')[0], 10)

  return {
    label,
    version,
    major,
    requiredMajor,
    passed: major >= requiredMajor,
  }
}

// MAIN RUNNER

function runCheck() {
  console.log(info('🔍 Checking environment versions...\n'))

  let nodeResult
  let pnpmResult

  try {
    nodeResult = checkVersion('node', REQUIRED_NODE_MAJOR, 'Node.js')
    pnpmResult = checkVersion('pnpm', REQUIRED_PNPM_MAJOR, 'pnpm')
  } catch (e) {
    console.error(
      err(
        '❌ Unable to check environment versions.\n' +
          'Ensure Node.js and pnpm are installed and available in PATH.\n',
      ),
    )
    process.exit(1)
  }

  // -------- Node --------
  if (!nodeResult.passed) {
    console.error(
      err(
        `❌ Node.js ${nodeResult.version} detected.\n` +
          `   Requires >= ${REQUIRED_NODE_MAJOR}.x\n`,
      ),
    )
  } else {
    console.log(ok(`✅ Node.js ${nodeResult.version} OK`))
  }

  // -------- pnpm --------
  if (!pnpmResult.passed) {
    console.error(
      err(
        `❌ pnpm ${pnpmResult.version} detected.\n` +
          `   Requires >= ${REQUIRED_PNPM_MAJOR}.x\n`,
      ),
    )
  } else {
    console.log(ok(`✅ pnpm ${pnpmResult.version} OK`))
  }

  if (!nodeResult.passed || !pnpmResult.passed) {
    process.exit(1)
  }

  console.log(ok('\n✨ Environment version check passed!\n'))
}

export default runCheck

// DIRECT EXECUTION

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  runCheck()
}
