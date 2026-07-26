# Project Brief

> **Purpose**
>
> This document defines the vision, goals, constraints, and principles for the Personal Website Evolution project.
>
> It remains stable and changes infrequently. For verified professional facts, see [professional-profile.md](./professional-profile.md).

---

## Project Vision

Evolve maikelsalles.com into a clear, accurate, and maintainable professional presence that reflects Maikel Salles's verified experience in Product Design, UX/UI, Design Systems, Accessibility, and Front-End Design.

The repository serves as the single source of context for the website, portfolio, professional brand, and future improvements — for human contributors, Cursor, and other AI assistants.

---

## Project Goals

1. Align website content with verified professional information in [professional-profile.md](./professional-profile.md).
2. Improve English quality, clarity, and consistency across all public-facing content.
3. Strengthen portfolio case studies using a repeatable structure.
4. Establish documentation, workflow, and AI collaboration rules that reduce repeated context and prevent factual drift.
5. Prepare for future improvements in SEO, accessibility, performance, and technical quality without implementing them prematurely.

---

## Target Audience

| Audience | Needs |
|----------|-------|
| Recruiters and hiring managers | Clear positioning, verified experience, measurable outcomes, easy navigation |
| Design and product leaders | Evidence of design systems, accessibility, and cross-functional collaboration |
| Engineering collaborators | Signal of front-end awareness, specification quality, and implementation partnership |
| Future contributors (human or AI) | Stable project context without large repeated prompts |

---

## Project Constraints

- Professional claims must match the latest approved resume and [professional-profile.md](./professional-profile.md).
- Do not invent employers, dates, responsibilities, tools, certifications, or metrics.
- Documentation issues do not modify website code unless explicitly scoped in a separate issue.
- Scope discipline applies to every issue: deliver only what the issue defines.
- The approved resume is maintained outside this repository; alignment requires deliberate review.

---

## Design Principles

1. **Clarity** — Reduce complexity in layout, copy, and navigation.
2. **Accessibility** — Design and content should support WCAG-aligned practices.
3. **Consistency** — Reuse patterns, terminology, and visual language across pages.
4. **Systems thinking** — Favor reusable components, documented standards, and scalable structure.
5. **Evidence-based presentation** — Separate responsibilities from verified outcomes.
6. **Professional restraint** — Avoid exaggerated marketing language.

---

## Writing Principles

1. Use clear, formal, natural English with short, direct sentences.
2. Keep professional claims factual and traceable to [professional-profile.md](./professional-profile.md).
3. Use metrics only when verified; retain qualifiers such as "approximately" where applicable.
4. Adapt tone and length to the destination without changing underlying facts.
5. Prefer cross-references over duplicating employment history or achievements.

For narrative, tone, and terminology guidance, see [personal-brand.md](./personal-brand.md).

---

## Technical Principles

1. **Minimal change** — Prefer the smallest correct diff for any implementation issue.
2. **Existing conventions** — Match surrounding code patterns before introducing new abstractions.
3. **Quality gates** — Run lint and build validation before delivery.
4. **Separation of concerns** — Specifications define *what* must change; code issues define *how*.
5. **No scope creep** — Technical improvements belong in dedicated issues, not bundled silently.

For website quality expectations, see [website-specification.md](./website-specification.md).

---

## Repository Workflow

Every issue follows the standard lifecycle defined in [development-workflow.md](./development-workflow.md).

Summary:

1. Understand → 2. Analyze → 3. Plan → 4. Wait for approval → 5. Implement → 6. Validate → 7. Delivery report → 8. Commit → 9. Pull Request → 10. Review and merge → 11. Close Issue → 12. Update Project status

AI collaboration rules and approval boundaries are defined in [ai-collaboration-guide.md](./ai-collaboration-guide.md).

---

## Source-of-Truth Hierarchy

When information conflicts, use this order:

1. Latest approved resume
2. [professional-profile.md](./professional-profile.md)
3. [project-brief.md](./project-brief.md)
4. [personal-brand.md](./personal-brand.md)
5. [website-specification.md](./website-specification.md)
6. [development-workflow.md](./development-workflow.md)
7. [ai-collaboration-guide.md](./ai-collaboration-guide.md)
8. Current GitHub Issue
9. Parent Issue

Professional facts always defer to the resume and [professional-profile.md](./professional-profile.md).

---

## Definition of Done

A documentation or implementation issue is complete when:

- All deliverables listed in the issue exist or were reviewed as specified.
- Acceptance criteria are satisfied.
- Validation steps defined in [development-workflow.md](./development-workflow.md) have been performed.
- Scope and out-of-scope boundaries were respected.
- Changes are committed on a dedicated branch with a Pull Request referencing the issue.
- The issue is closed after merge and the Project status is updated.

For Issue #56 specifically: all required documents and templates exist, responsibilities are clearly separated, no production code was modified, and professional facts remain consistent with the approved resume.

---

## Related Documents

| Document | Responsibility |
|----------|----------------|
| [professional-profile.md](./professional-profile.md) | Verified professional facts |
| [personal-brand.md](./personal-brand.md) | Narrative, tone, and terminology |
| [website-specification.md](./website-specification.md) | Website requirements and corrections |
| [development-workflow.md](./development-workflow.md) | Issue lifecycle and validation |
| [ai-collaboration-guide.md](./ai-collaboration-guide.md) | AI behavior and approval rules |
| [decision-log.md](./decision-log.md) | Record of project decisions |

---

## Document Status

| Field | Value |
|---|---|
| Status | Initial version |
| Related Issue | #56 — Create Project Documentation |
| Parent Issue | #55 — Project Discovery |
| Last reviewed | 2026-07-25 |
| Maintainer | Maikel Salles |
