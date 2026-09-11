import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import {createRequire} from 'node:module'

const require = createRequire(import.meta.url)
const pkg = require('./package.json') as {
  dependencies?: Record<string, string>
  peerDependencies?: Record<string, string>
}

const externalDeps = new Set([
  ...Object.keys(pkg.dependencies ?? {}),
  ...Object.keys(pkg.peerDependencies ?? {}),
])

function isExternal(id: string) {
  if (id === 'react/jsx-runtime' || id === 'react/jsx-dev-runtime') return true
  if (externalDeps.has(id)) return true
  for (const dep of externalDeps) {
    if (id.startsWith(`${dep}/`)) return true
  }
  return false
}

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: format => (format === 'es' ? 'index.js' : 'index.cjs'),
    },
    rollupOptions: {
      external: isExternal,
      output: {
        // Preserved verbatim in both output formats so Next.js App Router
        // (React Server Components) treats this bundle as a client-component
        // boundary. Without it, Vite's single-file library build strips any
        // per-file 'use client' directives from the source, and importing an
        // interactive component (or ThemeProvider) directly into a Server
        // Component fails because hooks aren't allowed there.
        banner: "'use client';",
      },
    },
  },
})
