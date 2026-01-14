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

## MCP (Cline / Cursor)

This repo ships an MCP server that lets AI agents browse `@hmlet/ui` components,
tokens, and docs.

See `MCP_OVERVIEW.md` for a non-technical overview
(Business/Design/Engineering).

**Cline config (stdio MCP server):**

```json
{
  "mcpServers": {
    "hmlet-ui": {
      "command": "node",
      "args": ["/absolute/path/to/hmlet-ui/mcp/server.mjs"]
    }
  }
}
```

See `mcp/README.md` for the available tools/resources.

## Dev

This repo enforces `pnpm` and Node `24.x` for contributors.
