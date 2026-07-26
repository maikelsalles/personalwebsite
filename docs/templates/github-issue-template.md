# GitHub Issue Template

> **Instructions:** Copy the section below when creating a new GitHub Issue. Replace all `[PLACEHOLDER]` values. Remove this instruction block. For workflow rules, see [development-workflow.md](../development-workflow.md).

---

## Goal

`[PLACEHOLDER: One clear sentence describing the desired outcome.]`

---

## Context

`[PLACEHOLDER: Why is this issue needed? Reference parent epic, audit findings, or related docs.]`

Related documents:

- `[PLACEHOLDER: e.g., docs/website-specification.md]`
- `[PLACEHOLDER: e.g., docs/professional-profile.md]`

---

## Scope

This issue includes:

- `[PLACEHOLDER]`
- `[PLACEHOLDER]`

---

## Out of Scope

This issue does **not** include:

- `[PLACEHOLDER]`
- `[PLACEHOLDER]`

---

## Deliverables

- `[PLACEHOLDER: file, feature, or artifact]`
- `[PLACEHOLDER]`

---

## Dependencies

| Dependency | Status | Blocker? |
|------------|--------|----------|
| `[PLACEHOLDER: e.g., #56 — Create Project Documentation]` | `[Done / Pending]` | `[Yes/No]` |

---

## References

- `[PLACEHOLDER: Parent issue, audit, spec, or external link]`
- `[PLACEHOLDER]`

---

## Acceptance Criteria

- [ ] `[PLACEHOLDER: measurable criterion]`
- [ ] `[PLACEHOLDER]`
- [ ] Scope and out-of-scope boundaries respected
- [ ] Validation completed per [development-workflow.md](../development-workflow.md)
- [ ] No unsupported professional information introduced

---

## Validation

Before closing this issue:

- `[PLACEHOLDER: e.g., npm run lint and npm run build pass]`
- `[PLACEHOLDER: e.g., facts verified against professional-profile.md]`
- `[PLACEHOLDER: e.g., delivery report provided]`

---

## Definition of Done

This issue is complete when:

- [ ] All deliverables exist and meet acceptance criteria.
- [ ] Changes committed on a dedicated branch.
- [ ] Pull Request opened, reviewed, and merged.
- [ ] Issue closed and Project status updated.

---

## Issue Type Variants

Use the sections above for all issue types. Add type-specific notes below as needed.

### Documentation

- Reference [project-brief.md](../project-brief.md) and relevant docs.
- Do not modify production code unless explicitly scoped.

### Feature / Enhancement

- Define *what* must change; reference [website-specification.md](../website-specification.md) for content.
- Plan before implementing broad changes.

### Bug

- Include steps to reproduce, expected behavior, and actual behavior.
- Prefer minimal fix; no unrelated refactoring.

### Research

- Define the question and expected output (audit, report, recommendation).
- Stop after analysis unless implementation is explicitly scoped.

### Technical Debt

- Describe current state, desired state, and risk of deferring.
- Estimate effort and link to priority from audit if available.

---

## Git Workflow

| Field | Value |
|-------|-------|
| Branch | `[PLACEHOLDER: feature/<issue>-<slug> or fix/<issue>-<slug>]` |
| Commit format | `#<issue-number> <description>` |
| PR reference | `Closes #<issue-number>` or `Related to #<issue-number>` |
