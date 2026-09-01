import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const tsconfigRootDir = path.dirname(fileURLToPath(import.meta.url))

export default [
  // Ignore generated & build files
  {
    ignores: [
      'dist',
      'build',
      'storybook-static',
      'node_modules',
      '*.config.*',
    ],
  },

  // Base JS rules
  js.configs.recommended,

  // TypeScript rules
  ...tseslint.configs.recommended,

  // React rules
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
      'jsx-a11y': jsxA11y,
      prettier,
    },
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {jsx: true},
        tsconfigRootDir,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: true,
      },
    },
    rules: {
      /* -----------------------------
       * TypeScript already checks this; the base rule produces false
       * positives on TS-only globals/types.
       * ----------------------------- */
      'no-undef': 'off',

      /* -----------------------------
       * React
       * ----------------------------- */
      'react/react-in-jsx-scope': 'off', // React 17+
      'react/prop-types': 'off',

      /* -----------------------------
       * Hooks
       * ----------------------------- */
      ...reactHooks.configs.flat.recommended.rules,

      /* -----------------------------
       * Fast Refresh
       * ----------------------------- */
      // This repo builds a component library; exporting hooks and style variants
      // is a core pattern and does not indicate a Fast Refresh issue.
      'react-refresh/only-export-components': 'off',

      /* -----------------------------
       * Imports
       * ----------------------------- */
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: {order: 'asc', caseInsensitive: true},
        },
      ],

      /* -----------------------------
       * Accessibility (UI library!)
       * ----------------------------- */
      'jsx-a11y/no-autofocus': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',

      /* -----------------------------
       * TypeScript
       * ----------------------------- */
      '@typescript-eslint/no-unused-vars': [
        'error',
        {argsIgnorePattern: '^_', ignoreRestSiblings: true},
      ],
      '@typescript-eslint/consistent-type-imports': 'error',

      /* -----------------------------
       * Prettier
       * ----------------------------- */
      'prettier/prettier': 'error',
    },
  },

  // Node.js tooling scripts (build/release/mcp scripts), not part of the TS/React app
  {
    files: ['internals/**/*.mjs', 'mcp/**/*.mjs'],
    languageOptions: {
      globals: globals.node,
    },
  },

  // Disable ESLint rules that conflict with Prettier
  prettierConfig,

  // Ensure TS parser always has a single, stable tsconfigRootDir.
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir,
      },
    },
  },
]
