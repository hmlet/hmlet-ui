import fs from 'node:fs'
import path from 'node:path'

const sourceDir = path.resolve('src/styles')
const destDir = path.resolve('dist/styles')

if (!fs.existsSync(sourceDir)) {
  console.warn(`[copy-styles] Source folder not found: ${sourceDir}`)
  process.exit(0)
}

fs.rmSync(destDir, {recursive: true, force: true})
fs.mkdirSync(path.dirname(destDir), {recursive: true})
fs.cpSync(sourceDir, destDir, {recursive: true})

console.log(`[copy-styles] Copied ${sourceDir} -> ${destDir}`)
