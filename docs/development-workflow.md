# Development Workflow

> **Purpose**
>
> This document defines the standard lifecycle for every GitHub Issue in this repository.
>
> For AI-specific approval rules, see [ai-collaboration-guide.md](./ai-collaboration-guide.md). For project principles, see [project-brief.md](./project-brief.md).

---

## Standard Issue Lifecycle

Every issue follows these twelve steps:

| Step | Action | Owner |
|------|--------|-------|
| 1 | **Understand** — Read the issue, parent issue, and relevant docs | Human + AI |
| 2 | **Analyze** — Review affected files, dependencies, and risks | Human + AI |
| 3 | **Plan** — Produce a step-by-step plan with affected files | AI (reviewed by human) |
| 4 | **Wait for approval** — Do not implement until the plan is approved | Human |
| 5 | **Implement** — Execute only the approved scope | AI or human |
| 6 | **Validate** — Run checks defined in this document and the issue | AI or human |
| 7 | **Produce a delivery report** — Summarize changes, validation, and risks | AI or human |
| 8 | **Commit** — Commit on a dedicated branch with issue reference | Human or AI (when approved) |
| 9 | **Open a Pull Request** — Reference the issue and parent issue | Human or AI (when approved) |
| 10 | **Review and merge** — Human review before merge | Human |
| 11 | **Close the Issue** — Close after merge | Human |
| 12 | **Update Project status** — Move to Done in GitHub Project | Human |

Steps 8–10 apply when the issue includes repository changes intended for merge. Documentation-only exploration may stop after step 7 if the issue explicitly allows it.

---

## Branch Naming

| Type | Pattern | Example |
|------|---------|---------|
| Feature | `feature/<issue-number>-<short-slug>` | `feature/56-project-documentation` |
| Fix | `fix/<issue-number>-<short-slug>` | `fix/62-contact-form-validation` |
| Documentation | `feature/<issue-number>-<short-slug>` | `feature/58-repository-audit` |

Use lowercase slugs with hyphens. Branch from `develop` unless the issue specifies otherwise.

---

## Commit Conventions

Format:

```
#<issue-number> <concise description>
```

Examples:

- `#56 Create project documentation foundation`
- `#59 Complete website audit`

Rules:

- Reference the issue number in every commit message.
- Write complete sentences or clear imperative phrases.
- One logical change per commit when practical.
- Do not commit secrets, credentials, or `.env` files.

---

## Pull Request Expectations

Every Pull Request must:

1. Reference the GitHub Issue (e.g., "Closes #56" or "Related to #56").
2. Reference the parent issue when applicable (e.g., "Parent: #55 — Project Discovery").
3. Include a summary of changes and validation performed.
4. Confirm scope boundaries were respected.
5. List created, modified, or deleted files when the change set is non-trivial.

Do not merge without human review and approval.

---

## Validation Expectations

Before marking an issue ready for review:

| Check | Command or action | Required when |
|-------|-------------------|---------------|
| Lint | `npm run lint` | Code changes |
| Build | `npm run build` | Code changes |
| Markdown review | Manual review of formatting and links | Documentation changes |
| Factual review | Compare against [professional-profile.md](./professional-profile.md) | Content changes |
| Scope check | Confirm no out-of-scope files changed | All issues |

Documentation issues must verify internal links between `docs/` files resolve correctly.

---

## Scope Control

1. Implement only what the issue deliverables specify.
2. Do not bundle unrelated fixes, refactors, or content updates.
3. If additional work is discovered, document it and propose a new issue — do not implement silently.
4. Out-of-scope items listed in the issue are strictly excluded unless a new issue is approved.

---

## Review Requirements

| Change type | Reviewer | Focus |
|-------------|----------|-------|
| Documentation | Maikel Salles | Accuracy, clarity, no duplication, correct links |
| Website content | Maikel Salles | Factual alignment with profile, English quality |
| Code | Maikel Salles | Correctness, minimal diff, lint/build pass |
| AI-generated content | Maikel Salles | No invented facts, tone alignment |

---

## Delivery Report Format

When an issue reaches step 7, provide:

```markdown
## Delivery Report

**Issue:** #<number> — <title>
**Branch:** <branch-name>

### Summary
<1–3 sentences describing what was done>

### Files changed
- `<path>` — created | modified | deleted

### Validation
- [ ] Lint passed
- [ ] Build passed
- [ ] Links verified
- [ ] Facts verified against professional-profile.md

### Out of scope (deferred)
- <item> → proposed Issue #<number> or "TBD"

### Risks and assumptions
- <any assumptions or follow-up needed>
```

---

## Epic and Sub-Issue Context

This workflow supports the Project Discovery epic ([Issue #55](https://github.com/maikelsalles/personalwebsite/issues/55)):

| Issue | Focus |
|-------|-------|
| #56 | Project documentation foundation |
| #57 | Cursor workspace configuration |
| #58 | Repository audit |
| #59 | Website audit |
| #60 | Implementation plan |

Sub-issues use the templates in [templates/](./templates/) and record outcomes in the appropriate docs.

---

## Related Documents

| Document | Responsibility |
|----------|----------------|
| [project-brief.md](./project-brief.md) | Vision, principles, Definition of Done |
| [ai-collaboration-guide.md](./ai-collaboration-guide.md) | AI approval boundaries |
| [website-specification.md](./website-specification.md) | Website requirements |
| [decision-log.md](./decision-log.md) | Project decisions |

---

## Document Status

| Field | Value |
|---|---|
| Status | Initial version |
| Related Issue | #56 — Create Project Documentation |
| Last reviewed | 2026-07-25 |
| Maintainer | Maikel Salles |
