# MCP overview for @hmlet/ui (Business, Design, Engineering)

## What we added

We added a **Model Context Protocol (MCP)** server to this repo.

- **Purpose:** let AI assistants (Cursor / VS Code agents) _browse and
  understand_ the `@hmlet/ui` design system (components, layout primitives,
  tokens, docs) so they can generate higher-quality UI code with fewer mistakes.
- **How it works:** the MCP server runs locally over **stdio** and exposes a set
  of **tools** (APIs) an agent can call to list components, read source, search
  the repo, inspect component props/variants, and generate usage snippets.
- **Where it lives:** `mcp/server.mjs` (server) and `mcp/bin.mjs` (CLI wrapper).

## Why we did this (value by team)

### Business / Product

- Faster UI delivery: agents can scaffold screens using the existing design
  system instead of reinventing patterns.
- More consistent UI: fewer “one-off” UI patterns and more reuse.
- Lower rework: agents can verify available components/props before outputting
  code.

### Design

- Design system is easier to adopt: agents can pull the correct
  primitives/variants and keep new UI aligned with the system.
- Better fidelity: fewer mismatches between design intent and implemented
  components.
- A single “source of truth”: agents are guided by _the actual library source,
  tokens, and docs_, not guesses.

### Engineering

- Less time hunting for components and props.
- More accurate codegen: the server can use TypeScript to extract real prop
  types/variant unions.
- Safer automation: server includes guards (repo-root restriction, file size
  limit) and structured errors.

## What agents can do with it (capabilities)

### Discovery and reading

- List the catalog (UI modules, layout primitives, token files, docs, styles).
- Read source for a given component/module/token/doc/style.
- Search across the library for a keyword.

### Component intelligence

- Extract component API (props and variant options; TypeScript-backed when
  available).
- Suggest compound imports (e.g., `Card` + `CardHeader` + `CardContent`).
- Generate usage snippets.
- Provide a component “matrix” (what exists, where it lives, what it exports).

### Design-token intelligence

- Scan for CSS variable usage (e.g. `var(--token-name)`) across components and
  styles.

### Page scaffolding

- Generate a page skeleton using common layout primitives and UI components.

## MCP tools exposed (for devs/agents)

Tools are callable by an MCP-capable client (Cursor, VS Code agent extensions).

- `hmlet_ui_list_catalog`
- `hmlet_ui_get_source`
- `hmlet_ui_search`
- `hmlet_ui_component_api`
- `hmlet_ui_generate_usage_example`
- `hmlet_ui_compound_imports`
- `hmlet_ui_component_matrix`
- `hmlet_ui_design_tokens_usage`
- `hmlet_ui_scaffold_page`

## How teams will use it

### Cursor

Cursor has MCP support built-in. Configure it to run this MCP server (stdio) and
then ask the agent to use the `hmlet_ui_*` tools before generating UI.

### VS Code

Use an agent extension that supports MCP and configure it to run the server.

Common options:

- **Cline** (extension id: `saoudrizwan.claude-dev`)
- **Continue** (extension id: `continue.continue`)

### Example MCP server config

Most clients accept a config similar to:

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

## Guardrails / safety

- **Repo-root restriction:** the server refuses to read outside the detected
  repo root.
- **File-size cap:** default max file read is **1MB** (configurable).
- **Structured errors:** tool failures return machine-readable error codes in
  `structuredContent`.

### Environment variables

- `HMLET_UI_ROOT`: override repo root resolution (useful for monorepos).
- `HMLET_UI_PACKAGE_NAME`: override package name used for root detection and
  generated import lines.
- `HMLET_UI_MAX_FILE_BYTES`: max file size (bytes) the server will read
  (default: 1048576).
- `HMLET_UI_MCP_SMOKE=1`: prints `hmlet-ui-mcp: ok` and exits (startup smoke
  test).

## What this is _not_

- This is **not** a UI runtime feature shipped to end-users.
- This does **not** automatically change product UI.
- This does **not** let the agent “write files” by itself. The server only
  _reads and summarizes_ project information and returns code snippets.

## Operational notes

- The MCP server is shipped with the package:
  - `pnpm mcp` (run from repo)
  - `hmlet-ui-mcp` (CLI when installed)
  - `@hmlet/ui/mcp` export points to `mcp/server.mjs`
- Type accuracy is best when `typescript` is available in the environment.

## Suggested workflow (recommended)

1. Agent calls `hmlet_ui_component_matrix` or `hmlet_ui_list_catalog`.
2. Agent reads relevant docs/styles and component source via
   `hmlet_ui_get_source`.
3. Agent checks props/variants using `hmlet_ui_component_api`.
4. Agent generates code (or a scaffold) consistent with the design system.

## FAQ

### Will this replace Storybook?

No. Storybook is still the best interactive documentation for humans. MCP is
“documentation for agents”.

### Does this change how we build the library?

No. It adds a tooling surface for agents; the UI library build stays the same.

### Can we restrict what the agent can see?

The server already restricts reads to the repo root and has a size cap. If we
need additional policy controls (e.g., allow-list paths), we can add them.
