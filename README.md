# @hmlet/ui

Reusable React UI components for Hmlet.

## Install

```bash
pnpm add @hmlet/ui
```

Peer deps: `react`, `react-dom`, `tailwindcss`.

## Styles (Tailwind v4)

Import the library CSS from a stylesheet that Tailwind processes:

```css
@import '@hmlet/ui/styles/index.css';
```

## Usage

```tsx
import {Button} from '@hmlet/ui'

export function Example() {
  return <Button>Continue</Button>
}
```

## Dev

This repo enforces `pnpm` and Node `24.x` for contributors.
