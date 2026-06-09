import fs from 'node:fs'
import path from 'node:path'

import designTokens from '../../src/tokens/design-tokens.json' with {type: 'json'}

const themePath = path.resolve('src/styles/theme.css')
const distTokensPath = path.resolve('dist/tokens.json')

const cssVarName = key =>
  key
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .replace(/([a-zA-Z])(\d+)/g, '$1-$2')
    .toLowerCase()

const linesForGroup = group =>
  Object.entries(group).map(
    ([key, value]) => `  --${cssVarName(key)}: ${value};`,
  )

const emitMode = mode => {
  const lines = ['  --font-size: 16px;']

  lines.push(...linesForGroup(mode))

  for (const [key, value] of Object.entries(designTokens.spacing)) {
    lines.push(`  --spacing-${key}: ${value};`)
  }

  for (const [key, value] of Object.entries(designTokens.radius)) {
    lines.push(
      `  --radius-${key === 'DEFAULT' ? '' : key}`.replace(/-$/, '') +
        `: ${value};`,
    )
  }

  for (const [key, value] of Object.entries(designTokens.shadow)) {
    lines.push(`  --shadow-${key}: ${value};`)
  }

  for (const [key, value] of Object.entries(designTokens.motion.duration)) {
    lines.push(`  --duration-${key}: ${value};`)
  }

  for (const [key, value] of Object.entries(designTokens.motion.easing)) {
    lines.push(`  --ease-${key}: ${value};`)
  }

  for (const [key, value] of Object.entries(
    designTokens.typography.fontWeight,
  )) {
    lines.push(`  --font-weight-${cssVarName(key)}: ${value};`)
  }

  for (const [key, value] of Object.entries(
    designTokens.typography.letterSpacing,
  )) {
    lines.push(`  --tracking-${key}: ${value};`)
  }

  lines.push(
    `  --font-family-sans: ${designTokens.typography.fontFamily.sans.join(', ')};`,
    `  --font-family-serif: ${designTokens.typography.fontFamily.serif.join(', ')};`,
    `  --font-family-mono: ${designTokens.typography.fontFamily.mono.join(', ')};`,
  )

  return lines.join('\n')
}

const themeInlineVars = [
  'background',
  'foreground',
  'card',
  'card-foreground',
  'popover',
  'popover-foreground',
  'primary',
  'primary-foreground',
  'primary-dark',
  'primary-light',
  'primary-lighter',
  'primary-lightest',
  'secondary',
  'secondary-foreground',
  'secondary-dark',
  'secondary-light',
  'secondary-lighter',
  'secondary-lightest',
  'secondary-text',
  'muted',
  'muted-foreground',
  'accent',
  'accent-foreground',
  'accent-hover',
  'destructive',
  'destructive-foreground',
  'success',
  'success-foreground',
  'error',
  'error-foreground',
  'warning',
  'warning-foreground',
  'info',
  'info-foreground',
  'border',
  'input',
  'input-background',
  'switch-background',
  'ring',
  'chart-1',
  'chart-2',
  'chart-3',
  'chart-4',
  'chart-5',
  'sidebar',
  'sidebar-foreground',
  'sidebar-primary',
  'sidebar-primary-foreground',
  'sidebar-accent',
  'sidebar-accent-foreground',
  'sidebar-border',
  'sidebar-ring',
]

const css = `@custom-variant dark (&:is(.dark *));

:root {
${emitMode(designTokens.color.light)}
}

.dark {
${emitMode(designTokens.color.dark)}
}

@theme inline {
${themeInlineVars.map(name => `  --color-${name}: var(--${name});`).join('\n')}
  --radius-sm: var(--radius-sm);
  --radius-md: var(--radius-md);
  --radius-lg: var(--radius-lg);
  --radius-xl: var(--radius-xl);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  html {
    font-size: var(--font-size);
  }

  body {
    @apply bg-background text-foreground;
    font-family: var(--font-family-sans);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-family-serif);
    line-height: 1.25;
    letter-spacing: var(--tracking-tight);
  }

  h1 {
    font-size: 4.375rem;
    font-weight: var(--font-weight-medium);
  }

  h2 {
    font-size: 3.5rem;
    font-weight: var(--font-weight-medium);
  }

  h3 {
    font-size: 2.5rem;
    font-weight: var(--font-weight-medium);
  }

  h4 {
    font-size: 1.75rem;
    font-weight: var(--font-weight-medium);
  }

  h5 {
    font-size: 1.5rem;
    font-weight: var(--font-weight-medium);
  }

  h6 {
    font-size: 1.25rem;
    font-weight: var(--font-weight-medium);
  }

  p,
  label,
  input,
  textarea,
  select,
  button {
    font-family: var(--font-family-sans);
    line-height: 1.6;
    letter-spacing: var(--tracking-normal);
  }

  code,
  kbd,
  samp,
  pre {
    font-family: var(--font-family-mono);
  }

  .text-app-heading-xl {
    font-size: 2rem;
    line-height: 1.25;
    letter-spacing: var(--tracking-tight);
    font-weight: var(--font-weight-semibold);
  }

  .text-app-heading-lg {
    font-size: 1.5rem;
    line-height: 1.333;
    letter-spacing: var(--tracking-tight);
    font-weight: var(--font-weight-semibold);
  }

  .text-app-heading-md {
    font-size: 1.25rem;
    line-height: 1.4;
    letter-spacing: var(--tracking-normal);
    font-weight: var(--font-weight-semibold);
  }

  .text-app-heading-sm {
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: var(--tracking-wide);
    font-weight: var(--font-weight-semibold);
  }
}

@utility focus-ring {
  box-shadow: var(--focus-ring);
}

@utility surface-base {
  background-color: var(--ui-bg-base);
}

@utility surface-surface {
  background-color: var(--ui-bg-surface);
}

@utility surface-elevated {
  background-color: var(--ui-bg-elevated);
}

@utility surface-overlay {
  background-color: var(--ui-bg-overlay);
}
`

fs.mkdirSync(path.dirname(themePath), {recursive: true})
fs.writeFileSync(themePath, `${css.trim()}\n`)

fs.mkdirSync(path.dirname(distTokensPath), {recursive: true})
fs.writeFileSync(distTokensPath, `${JSON.stringify(designTokens, null, 2)}\n`)

console.log(`[generate-design-tokens] Wrote ${themePath}`)
console.log(`[generate-design-tokens] Wrote ${distTokensPath}`)
