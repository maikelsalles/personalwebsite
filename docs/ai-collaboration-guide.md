# AI Collaboration Guide

> **Purpose**
>
> This document defines how Cursor and other AI assistants collaborate on this repository.
>
> For the standard issue lifecycle, see [development-workflow.md](./development-workflow.md). For verified facts, see [professional-profile.md](./professional-profile.md).

---

## AI Responsibilities

AI assistants may:

1. Read and analyze the repository, documentation, and issue requirements.
2. Produce plans, audits, specifications, and documentation drafts.
3. Implement changes when explicitly approved and scoped by the issue.
4. Run validation commands (`npm run lint`, `npm run build`) when code changes are in scope.
5. Produce delivery reports summarizing work completed.
6. Propose future issues for out-of-scope findings.
7. Cross-reference source documents instead of duplicating verified facts.

---

## Human Responsibilities

Maikel Salles (project owner) is responsible for:

1. Approving plans before implementation of non-trivial changes.
2. Verifying professional facts against the latest approved resume.
3. Reviewing and merging Pull Requests.
4. Closing issues and updating Project status.
5. Deciding scope boundaries when ambiguity exists.
6. Maintaining the approved resume and [professional-profile.md](./professional-profile.md).

---

## Approval Boundaries

| Situation | AI action |
|-----------|-----------|
| Issue says "plan first" or "wait for approval" | Analyze and plan only; do not edit files |
| Documentation issue with approved plan | Implement the approved documentation scope |
| Code or content issue without approved plan | Plan only; wait for approval |
| Broad or ambiguous request | Ask for clarification or propose a plan |
| Out-of-scope finding during work | Document and propose a new issue; do not implement |
| User says "do not commit" | Stop after implementation and report; no git commit |

When in doubt, plan first and wait for approval.

---

## When AI May Analyze

AI may freely read and analyze:

- All files in the repository
- GitHub Issues and Pull Requests (when accessible)
- Documentation in `docs/`
- Website source code for audit and planning purposes

Analysis does not require approval. Analysis output should reference source documents.

---

## When AI Must Wait

AI must wait for explicit approval before:

- Creating or modifying files beyond what the issue and approved plan specify
- Implementing website content or code changes
- Committing or pushing to git (unless explicitly requested)
- Making factual changes to [professional-profile.md](./professional-profile.md)
- Deleting files or restructuring the repository

---

## When Direct Implementation May Be Allowed

Direct implementation without a separate plan step is acceptable when:

1. The user explicitly approves a documented plan in the same conversation.
2. The issue scope is narrow, fully specified, and documentation-only.
3. The user gives a direct instruction to implement with clear boundaries.

Even then, scope discipline and factual accuracy rules still apply.

---

## Source-of-Truth Rules

When information conflicts, follow the hierarchy in [project-brief.md](./project-brief.md):

1. Latest approved resume
2. [professional-profile.md](./professional-profile.md)
3. [project-brief.md](./project-brief.md)
4. [personal-brand.md](./personal-brand.md)
5. [website-specification.md](./website-specification.md)
6. [development-workflow.md](./development-workflow.md)
7. [ai-collaboration-guide.md](./ai-collaboration-guide.md)
8. Current GitHub Issue
9. Parent Issue

**Never** treat current website content as authoritative when it conflicts with the profile.

---

## Scope Discipline

1. Deliver only what the issue specifies.
2. Do not fix unrelated bugs, typos, or formatting outside the issue scope.
3. Do not refactor code "while you're there."
4. List deferred items in the delivery report and suggest future issues.

---

## Hallucination Prevention

AI assistants must not invent:

- Employers, job titles, or employment dates
- Metrics, achievements, or business outcomes
- Tools, certifications, or education credentials
- Client names, team sizes, or project details
- Regulatory, financial, or legal claims

When information is missing:

1. State that it is not documented.
2. Ask the user or reference the approved resume.
3. Use placeholders in templates — not fabricated content.

When website content conflicts with [professional-profile.md](./professional-profile.md), flag the discrepancy and follow the profile.

---

## Communication Expectations

1. Use clear, formal, natural English.
2. Be direct about what was done, what was deferred, and why.
3. Cite source documents and file paths when referencing code or content.
4. Separate analysis from recommendations from implementation.
5. Provide proportional responses — simple tasks do not need long reports.

---

## Delivery Report Requirements

After implementation, provide a delivery report per [development-workflow.md](./development-workflow.md) including:

- Issue reference and branch name
- Summary of changes
- List of created, modified, or deleted files
- Validation results
- Out-of-scope items deferred to future issues
- Assumptions and risks

---

## Documenting Assumptions and Risks

When making decisions during implementation, note:

- **Assumptions** — e.g., "Assumed Issue #56 hierarchy supersedes the previous profile hierarchy."
- **Risks** — e.g., "Website achievement cards still use unverified wording until a content issue runs."
- **Follow-up** — Proposed issue or reference to an existing one.

Record significant project decisions in [decision-log.md](./decision-log.md).

---

## Suggesting Future Issues

When AI identifies work outside the current scope:

1. Describe the finding briefly.
2. Propose a title and one-sentence goal.
3. Reference the parent epic or related issue.
4. Do **not** implement the work automatically.

Use [templates/github-issue-template.md](./templates/github-issue-template.md) when drafting issue text for human review.

---

## Related Documents

| Document | Use when |
|----------|----------|
| [development-workflow.md](./development-workflow.md) | Issue lifecycle and validation |
| [professional-profile.md](./professional-profile.md) | Verifying professional facts |
| [personal-brand.md](./personal-brand.md) | Tone and terminology |
| [website-specification.md](./website-specification.md) | Website requirements |
| [decision-log.md](./decision-log.md) | Recording decisions |

---

## Document Status

| Field | Value |
|---|---|
| Status | Initial version |
| Related Issue | #56 — Create Project Documentation |
| Last reviewed | 2026-07-25 |
| Maintainer | Maikel Salles |
