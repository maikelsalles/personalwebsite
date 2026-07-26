# AGENTS.md — Personal Website Repository

This repository is Maikel Salles's personal website and professional brand source of truth. AI assistants should follow the rules in `.cursor/rules/` and the documentation in `docs/`.

## Start here

1. Read the current GitHub Issue and parent issue
2. Read relevant docs from the index below
3. Follow the issue workflow in `.cursor/rules/issue-workflow.mdc`
4. Wait for approval before implementing unless explicitly allowed

## Documentation index

| Document | Use when |
|----------|----------|
| [docs/professional-profile.md](docs/professional-profile.md) | Verifying professional facts |
| [docs/personal-brand.md](docs/personal-brand.md) | Narrative, tone, terminology |
| [docs/project-brief.md](docs/project-brief.md) | Project vision and principles |
| [docs/website-specification.md](docs/website-specification.md) | Website content requirements |
| [docs/development-workflow.md](docs/development-workflow.md) | Issue lifecycle, git, validation |
| [docs/ai-collaboration-guide.md](docs/ai-collaboration-guide.md) | AI approval boundaries |
| [docs/decision-log.md](docs/decision-log.md) | Project decisions |

## Templates

| Template | Use when |
|----------|----------|
| [docs/templates/implementation-plan-template.md](docs/templates/implementation-plan-template.md) | Preparing implementation plans |
| [docs/templates/github-issue-template.md](docs/templates/github-issue-template.md) | Drafting new issues |
| [docs/templates/case-study-template.md](docs/templates/case-study-template.md) | Writing portfolio case studies |

## Cursor rules

Rules in `.cursor/rules/` enforce workflow, scope, validation, and coding conventions. They reference `docs/` — do not duplicate long-form content in rules.

## Hard rules

- Never invent professional information
- Never treat live website content as authoritative over `docs/professional-profile.md`
- Implement only the approved issue scope
- Plan first and wait for approval by default

## Tech stack

Next.js App Router, TypeScript, React, SCSS modules. Source in `src/app/`.
