# Release & Cross-Team Upgrade Process

This document is the engineering-facing source of truth for how `@hmlet/ui`
releases work and how breaking changes get communicated to and adopted by
consuming repos (Hmlet Website today, JP repo going forward). It mirrors the
process agreed on the team Confluence page — keep both in sync when this
changes.

## Versioning

Releases are automated via `semantic-release` on every push to `main`. Version
bumps follow SemVer, derived from Conventional Commit types:

| Commit type                                                       | Release    |
| ----------------------------------------------------------------- | ---------- |
| `fix`, `docs`, `refactor`                                         | patch      |
| `feat`                                                            | minor      |
| Any type with a `BREAKING CHANGE:` footer (or `!` after the type) | major      |
| `style`, `test`, `chore`                                          | no release |

The package is not published to npm. Consumers pin to a specific tag via git:

```
"@hmlet/ui": "github:hmlet/hmlet-ui#v1.2.3"
```

## Pre-release (RC) channel

Anticipated breaking changes are staged on the `next` branch before they go to
`main`. Every push to `next` publishes a pre-release tag, e.g. `v3.0.0-rc.1`.
Consuming repos can pin to this tag on a test branch to validate before the
final version ships:

```
"@hmlet/ui": "github:hmlet/hmlet-ui#v3.0.0-rc.1"
```

## Breaking change checklist

Before merging a breaking change to `next`/`main`:

1. **Advance notice** — post in the shared Slack channel before merge, not
   after: what's changing, why, and expected timeline.
2. **Stage on `next`** — let CI publish the RC tag automatically.
3. **Migration notes** — copy `docs/MIGRATION_TEMPLATE.md` to
   `docs/migrations/vX.0.0.md`, fill it in, and link it in the PR description
   and the final release notes.
4. **Consumer validation** — ask at least one consumer (typically the Website)
   to test against the RC tag before promoting to `main`.
5. **Promote to `main`** — merge to `main` once validated; CI cuts the final
   tagged release automatically and, for major releases, posts a Slack
   notification with a link to the release notes.
6. **Coordinated rollout window** — agree an upgrade window per consuming team;
   nobody is required to move the moment the tag is cut.
7. **Rollback path** — if an upgrade causes issues, the consumer re-pins to the
   previous tag. No action needed on the library side.

## Slack notifications

CI (`.github/workflows/release.yml`) posts to Slack automatically for:

- **RC publish** (`next` branch) — "ready for testing"
- **Major release** (`main` branch, major version bump) — "review before
  upgrading"

Routine patch/minor releases do not notify Slack, to keep the channel low-noise.
Requires the `SLACK_WEBHOOK_URL` repository secret; if unset, the step is
skipped without failing the release.

## See also

- `docs/MIGRATION_TEMPLATE.md` — template for migration notes
- `release.config.cjs` — semantic-release configuration
- `.github/workflows/release.yml` — release + notification pipeline
