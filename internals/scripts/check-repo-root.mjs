/**
 * check-repo-root.mjs
 * Ensures pnpm install is run from the project root.
 */

import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

import {ok, err, info, dim} from '../utils/color.mjs'

const __filename = fileURLToPath(import.meta.url)

const REPORT_FILE = path.resolve(
  process.cwd(),
  'report/repo-root-check-report.json',
)

const IS_DEPENDENCY_INSTALL = process.cwd().includes('node_modules')

// MAIN RUNNER

function runCheck() {
  if (IS_DEPENDENCY_INSTALL) {
    console.log(
      dim('ℹ️  Skipping repo root check (dependency install context)\n'),
    )
    process.exit(0)
  }

  console.log(info('📁 Checking repository root...\n'))

  const isRoot = fs.existsSync('package.json')

  const report = {
    passed: isRoot,
    checkedAt: new Date().toISOString(),
    cwd: process.cwd(),
    message: isRoot
      ? 'Running from repository root.'
      : 'pnpm install must be run from repo root.',
  }

  if (!isRoot) {
    console.error(err('❌ pnpm install must be run from repo root\n'))
    writeReport(report)
    process.exit(1)
  }

  console.log(ok('✅ Repository root check passed\n'))
  writeReport(report)
}

// JSON REPORT

function writeReport(data) {
  fs.mkdirSync(path.dirname(REPORT_FILE), {recursive: true})
  fs.writeFileSync(REPORT_FILE, JSON.stringify(data, null, 2))
  console.log(dim(`📄 JSON report written to ${REPORT_FILE}\n`))
}

// EXPORT

export default runCheck

// DIRECT EXECUTION

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  runCheck()
}
