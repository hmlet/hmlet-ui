# @hmlet/ui MCP server

This repo includes a small Model Context Protocol (MCP) server that helps AI
agents discover and correctly use `@hmlet/ui` components, layout primitives,
tokens, and docs.

## Accuracy notes

- If `typescript` is available in the environment where the MCP server runs,
  tools like `hmlet_ui_component_api` will use the TypeScript compiler API to
  return accurate prop names/types and variant unions.
- If not, the server falls back to lightweight source parsing (still useful, but
  less exact).

## Run (repo)

```bash
pnpm mcp
```

This starts an MCP server over stdio.

## Use from an MCP client

- Command: `hmlet-ui-mcp` (when installed as a dependency) or
  `node ./mcp/server.mjs` (from this repo)

### Cline / Cursor config

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

Tools exposed:

- `hmlet_ui_list_catalog`
- `hmlet_ui_get_source`
- `hmlet_ui_search`
- `hmlet_ui_scaffold_page`
- `hmlet_ui_component_api`
- `hmlet_ui_generate_usage_example`
- `hmlet_ui_intent_contracts`
- `hmlet_ui_resolve_intent`
- `hmlet_ui_compound_imports`
- `hmlet_ui_component_matrix`
- `hmlet_ui_design_tokens_usage`

Resources exposed (examples):

- `hmlet-ui://doc/README`
- `hmlet-ui://doc/LAYOUT_SYSTEM_README`
- `hmlet-ui://doc/LAYOUT_SYSTEM_SUMMARY`
- `hmlet-ui://style/index.css`

## Environment variables

- `HMLET_UI_ROOT`: Override repo root resolution (useful in monorepos).
- `HMLET_UI_PACKAGE_NAME`: Override the package name used when detecting repo
  root and generating import lines.
- `HMLET_UI_MAX_FILE_BYTES`: Max file size (bytes) the server will read
  (default: 1048576).
- `HMLET_UI_MCP_SMOKE=1`: Print `hmlet-ui-mcp: ok` and exit (startup smoke
  test).

## Intent examples

`hmlet_ui_generate_usage_example` accepts either legacy free-text `intent` or a
structured business intent object.

Intent resolution works for:

- UI components with `variant`/`size` (explicit mappings for a few; generic
  fallback for the rest)
- Layout primitives via density/urgency → spacing (e.g. `Stack.gap`,
  `Section.paddingY`, `Box.padding`, `Grid.gap`)

```json
{
  "name": "Button",
  "intent": {
    "action": "approval",
    "urgency": "high"
  }
}
```

Density example (layout):

```json
{
  "name": "Stack",
  "kind": "layout",
  "intent": {
    "density": "dense"
  }
}
```

You can also resolve intent directly:

```json
{
  "component": "Button",
  "intent": {
    "action": "destructive",
    "risk": "irreversible"
  }
}
```

To discover guardrails (which intent dimensions are supported), use
`hmlet_ui_intent_contracts`.

If a component has no `variant`/`size` to apply intent to,
`hmlet_ui_resolve_intent` returns `INTENT_NOT_APPLICABLE`.
