/**
 * Typography tokens
 * Font families, sizes, weights, line-heights
 */

export const fontFamily = {
  sans: [
    'Mulish',
    'Noto Sans JP',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'sans-serif',
  ],
  serif: ['IBM Plex Serif', 'Noto Serif JP', 'ui-serif', 'Georgia', 'serif'],
} as const

export const fontSize = {
  xs: ['12px', '16px'],
  sm: ['14px', '20px'],
  base: ['16px', '24px'],
  lg: ['18px', '28px'],
  xl: ['20px', '28px'],
  '2xl': ['24px', '32px'],
  '3xl': ['30px', '36px'],
  '4xl': ['36px', '40px'],
} as const

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const
