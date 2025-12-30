// tailwind.config.ts
import type {Config} from 'tailwindcss'

import {spacing} from './src/tokens/spacing'
import {radius} from './src/tokens/radius'
import {fontFamily, fontSize, fontWeight} from './src/tokens/typography'

const config: Config = {
  darkMode: ['class', 'dark'],
  content: ['./src/**/*.{ts,tsx}'],

  theme: {
    extend: {
      /* -----------------------------
       * Colors (via CSS variables)
       * ----------------------------- */
      colors: {
        bg: {
          primary: 'var(--ui-bg-primary)',
          secondary: 'var(--ui-bg-secondary)',
          elevated: 'var(--ui-bg-elevated)',
          inverse: 'var(--ui-bg-inverse)',
        },
        text: {
          primary: 'var(--ui-text-primary)',
          secondary: 'var(--ui-text-secondary)',
          muted: 'var(--ui-text-muted)',
          inverse: 'var(--ui-text-inverse)',
        },
        border: {
          DEFAULT: 'var(--ui-border-default)',
          muted: 'var(--ui-border-muted)',
          focus: 'var(--ui-border-focus)',
        },
        accent: {
          primary: 'var(--ui-accent-primary)',
          subtle: 'var(--ui-accent-subtle)',
        },
        feedback: {
          success: 'var(--ui-feedback-success)',
          warning: 'var(--ui-feedback-warning)',
          error: 'var(--ui-feedback-error)',
        },
      },

      /* -----------------------------
       * Spacing
       * ----------------------------- */
      spacing,

      /* -----------------------------
       * Border radius
       * ----------------------------- */
      borderRadius: radius,

      /* -----------------------------
       * Typography
       * ----------------------------- */
      fontFamily,
      fontSize,
      fontWeight,
    },
  },

  plugins: [],
}

export default config
