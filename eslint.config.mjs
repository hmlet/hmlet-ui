import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
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
    ignores: ['dist', 'build', 'node_modules', '*.config.*'],
  },

  // Base JS rules
  js.configs.recommended,

  // TypeScript rules
  ...tseslint.configs.recommended,

  // React rules
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
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
       * React
       * ----------------------------- */
      'react/react-in-jsx-scope': 'off', // React 17+
      'react/prop-types': 'off',

      /* -----------------------------
       * Hooks
       * ----------------------------- */
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

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
      '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
      '@typescript-eslint/consistent-type-imports': 'error',

      /* -----------------------------
       * Prettier
       * ----------------------------- */
      'prettier/prettier': 'error',
    },
  },

  // Disable ESLint rules that conflict with Prettier
  prettierConfig,

  // Ensure TS parser always has a single, stable tsconfigRootDir.
  {
    files: ['**/*.{ts,tsx,mts,cts}'],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir,
      },
    },
  },
]
