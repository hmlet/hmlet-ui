## 🚨 Mandatory Checklist (PRs will NOT be reviewed unless all items are checked)

> This repository enforces strict rules. PRs that violate them will be **closed
> without review**.

### Tooling & Workflow

- [ ] I used **pnpm** only (npm / yarn were NOT used)
- [ ] All commits were created using **`pnpm commit`**
- [ ] I did NOT use `git commit` directly
- [ ] Preflight checks passed locally

### Commit Standards

- [ ] All commits follow **Conventional Commits**
- [ ] Commit types are valid (`feat`, `fix`, `docs`, `chore`, etc.)
- [ ] Commit subjects are lowercase and imperative
- [ ] No commit message exceeds the configured limits

### Environment Variables

- [ ] I did NOT use `import.meta.env` directly
- [ ] All environment variables are declared in `src/env.ts`
- [ ] All variables start with `VITE_`
- [ ] `.env.example` was updated if a new variable was added
- [ ] `.env.development` was NOT committed

---

## 📄 What does this PR do?

<!-- Clearly and concisely describe the change.
     Focus on WHAT and WHY, not HOW. -->

---

## 🧪 How was this tested?

<!-- Describe how you verified the change.
     Examples: local dev, unit tests, manual QA -->

---

## 📚 Documentation Impact

- [ ] No documentation changes required
- [ ] Documentation updated
- [ ] Documentation added

If documentation was updated or added, link it here:

<!-- docs/README.md or specific doc -->

---

## 🔍 Scope of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Refactor (no behavior change)
- [ ] Performance improvement
- [ ] Documentation only
- [ ] Build / tooling / CI

---

## ⚠️ Breaking Changes

- [ ] This PR introduces a breaking change
- [ ] This PR does NOT introduce a breaking change

If yes, explain clearly:

<!-- Describe the breaking change and migration steps -->

---

## ✅ Final Acknowledgement

By submitting this PR, I confirm that:

- I have read **docs/README.md**
- I understand the project’s strict conventions
- I acknowledge that violations may result in the PR being closed

---

**Unchecked boxes = PR not ready for review.**
