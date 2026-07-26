# Decision Log

> **Purpose**
>
> This file is the active record of important project decisions.
>
> For the entry format, see [templates/decision-log-template.md](./templates/decision-log-template.md). For project principles, see [project-brief.md](./project-brief.md).

---

## How to Use This Log

1. Add a new entry when a decision affects workflow, documentation structure, scope, or professional content strategy.
2. Keep entries concise — one decision per entry.
3. Reference the related GitHub Issue or Pull Request.
4. Update status when a decision is superseded.

Do not duplicate verified professional facts from [professional-profile.md](./professional-profile.md) here.

---

## Decisions

### DEC-001 — Documentation-first project approach

| Field | Value |
|-------|-------|
| Date | 2026-07-24 |
| Status | Accepted |
| Related | Issue #55 — Project Discovery |

**Context:** The website requires content, structural, and quality improvements, but changes should not begin without shared context and workflow rules.

**Decision:** Complete project documentation, audits, and planning before implementing website changes.

**Alternatives considered:** Immediate content rewrite; incremental fixes without documentation.

**Reason:** Reduces factual drift, repeated AI context, and scope creep.

**Impact:** Issues #56–#60 block website implementation until documentation and audits are complete.

---

### DEC-002 — Canonical source-of-truth hierarchy

| Field | Value |
|-------|-------|
| Date | 2026-07-25 |
| Status | Accepted |
| Related | Issue #56 — Create Project Documentation |

**Context:** Multiple documents and the live website may contain conflicting information.

**Decision:** Adopt the hierarchy documented in [project-brief.md](./project-brief.md): approved resume → professional-profile → project-brief → personal-brand → website-specification → development-workflow → ai-collaboration-guide → current issue → parent issue.

**Alternatives considered:** Website content as primary source; single README for all context.

**Reason:** Separates verified facts from narrative, specifications, and process rules.

**Impact:** All future content and AI-generated material must defer to the profile for professional facts.

---

### DEC-003 — Professional profile as factual authority

| Field | Value |
|-------|-------|
| Date | 2026-07-25 |
| Status | Accepted |
| Related | Issue #56 — Create Project Documentation; commit `bee846e` |

**Context:** Website content contains outdated titles, dates, metrics, and unsupported claims.

**Decision:** Maintain [professional-profile.md](./professional-profile.md) as the working factual source inside the repository, aligned with the latest approved resume.

**Alternatives considered:** Derive facts from the live website; maintain facts only in the resume file outside the repo.

**Reason:** Gives AI assistants and contributors a single in-repo reference for verified professional information.

**Impact:** [website-specification.md](./website-specification.md) documents required corrections; implementation deferred to future issues.

---

### DEC-004 — Issue #56 scope limited to documentation

| Field | Value |
|-------|-------|
| Date | 2026-07-25 |
| Status | Accepted |
| Related | Issue #56 — Create Project Documentation |

**Context:** Issue #56 could be interpreted to include README updates or minor code fixes.

**Decision:** Issue #56 creates and reviews documentation and templates only. No website pages, components, styles, configuration, or production code changes.

**Alternatives considered:** Include README rewrite; fix obvious website typos in the same issue.

**Reason:** Keeps the Pull Request focused, reviewable, and aligned with the issue acceptance criteria.

**Impact:** Website corrections are specified in [website-specification.md](./website-specification.md) for later implementation.

---

### DEC-005 — Branch and commit convention for Issue #56

| Field | Value |
|-------|-------|
| Date | 2026-07-25 |
| Status | Accepted |
| Related | Issue #56 — Create Project Documentation |

**Context:** The repository needs consistent git conventions for the documentation foundation work.

**Decision:** Use branch `feature/56-project-documentation` and commit message format `#56 Create project documentation foundation`.

**Alternatives considered:** Commit directly to `develop`; split across multiple branches.

**Reason:** Matches [development-workflow.md](./development-workflow.md) and Issue #56 git workflow section.

**Impact:** All Issue #56 documentation commits belong on this branch until merged via Pull Request.

---

## Document Status

| Field | Value |
|---|---|
| Status | Active |
| Related Issue | #56 — Create Project Documentation |
| Last updated | 2026-07-25 |
| Maintainer | Maikel Salles |
