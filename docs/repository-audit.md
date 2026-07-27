# Repository Audit

> **Purpose**
>
> Technical baseline for the Personal Website Evolution project.
>
> Findings are evidence-based. Recommendations are separated from observations. Professional facts reference [professional-profile.md](./professional-profile.md) and [website-specification.md](./website-specification.md).

---

## Repository Information

| Field | Value |
|-------|-------|
| Repository | `maikelsalles/personalwebsite` |
| Branch audited | `feature/58-audit-repository` |
| Audit date | 2026-07-25 |
| Auditor | Maikel Salles (AI-assisted audit) |
| Related Issue | #58 — Audit Repository |
| Parent Issue | #55 — Project Discovery |

---

## Executive Summary

The repository is a functional Next.js App Router personal website with a clear component structure, static page generation, and a strong documentation foundation established in Issues #56 and #57. `npm run lint` passes and `npm run build` completes successfully, producing 13 static routes with a shared First Load JS of approximately 80.7 kB.

The highest-priority gaps are professional content misalignment with [professional-profile.md](./professional-profile.md) (already catalogued in [website-specification.md](./website-specification.md)), dependency and lockfile inconsistency between declared and installed Next.js versions, and SEO/accessibility debt. Structural issues include a duplicate orphan portfolio route, dual `resume.module.scss` files, and mixed metadata patterns (custom `head.tsx` plus App Router `metadata` exports).

No production code was modified during this audit.

---

## Repository Overview

### Tech stack

| Layer | Technology | Evidence |
|-------|------------|----------|
| Framework | Next.js App Router | `src/app/`, `package.json` |
| UI | React 18 | `package.json` |
| Language | TypeScript (strict) | `tsconfig.json` |
| Styling | SCSS modules + global tokens | `globals.scss`, `*.module.scss` |
| Forms | Formspree | `@formspree/react` in contact form |
| Analytics | Vercel Analytics | `layout.tsx` |
| Deployment (assumed) | Vercel | `@vercel/analytics`, `.vercel` in `.gitignore` |

### Repository scale

| Area | Count | Evidence |
|------|-------|----------|
| App routes | 10 content routes + `_not-found` | `npm run build` route table |
| Shared components | 10 component directories | `src/app/components/` |
| Portfolio case studies | 5 routes (1 orphan) | `src/app/portfolio/` |
| Core docs | 7 + 6 templates | `docs/` |
| Cursor rules | 8 | `.cursor/rules/` |
| Public assets | 50 files | `public/fonts/`, `public/img/` |
| Automated tests | 0 | No test files or test script |

### Folder organization

```
src/app/           → Pages, layouts, global styles
src/app/components/→ Reusable UI (button, header, footer, resume, etc.)
src/app/portfolio/ → Case-study routes
docs/              → Project documentation and templates
.cursor/rules/     → Cursor workspace rules
public/            → Static assets (images, fonts, icons)
```

**Confirmed:** Separation between pages and components is consistent. Resume subcomponents live under `components/resume/` while the standalone resume page lives under `resume/`.

**Recommendation:** Consider flattening or renaming duplicate `resume.module.scss` files to reduce confusion (see Component Review).

---

## Architecture Review

| Area | Finding | Severity | Evidence |
|------|---------|----------|----------|
| Framework | Next.js App Router with static generation | — | `src/app/layout.tsx`, build output (all routes `○ Static`) |
| Routing | File-based routes under `src/app/`; home is single-page with hash nav | Low | `header/index.tsx` nav links `/#about`, `/#resume`, etc. |
| State management | Local React state only (header scroll, nav, form) | — | `header/index.tsx`, `contact-form.tsx`; no global store |
| Styling approach | CSS custom properties in `globals.scss`; SCSS modules per component | — | `globals.scss`, `globals.module.scss` |
| Metadata pattern | Hybrid: custom `head.tsx` in layout **and** per-page `export const metadata` | Medium | `layout.tsx` imports `./head`; `page.tsx` exports metadata |
| Build output | Non-default `distDir: 'build'` | Low | `next.config.js` |
| Path aliases | `@/*`, `@components/*`, `@img/*` | — | `tsconfig.json` |
| Client boundaries | Header and contact form are client components | — | `"use client"` directives |

### Assumptions

- Production is deployed to Vercel based on Analytics integration (not confirmed in repo config).

### Recommendations

- Migrate fully to App Router Metadata API and remove legacy `head.tsx` pattern (future issue).
- Document `distDir: 'build'` expectation for contributors in README (future issue).

---

## Component Review

| Component | Location | Status | Notes |
|-----------|----------|--------|-------|
| Button | `components/button/` | Needs review | `type="button"` prop renders `<button type="submit">`; `passHref` on internal `Link` (`button/index.tsx`) |
| Input | `components/input/` | OK | Label-wrapped inputs with required indicator |
| Textarea | `components/textarea/` | OK | Label-wrapped; controlled value pattern unused |
| Header | `components/header/` | Needs review | Client scroll listener; nav active state compares hash href to pathname |
| Footer | `components/footer/` | Needs review | `target="blank"` on external links (invalid value) |
| About | `components/about/about.tsx` | Needs review | Content misaligned with profile (see Content Review) |
| Experience | `components/resume/experience.tsx` | Needs review | Partial employment history; unsupported claims |
| Education | `components/resume/education.tsx` | Needs review | Date mismatches vs profile |
| Stack | `components/resume/stack.tsx` | Needs review | Unsupported skill percentages; incorrect ARIA roles |
| Contact | `components/contact/page.tsx` | Needs review | `calto:` typo for phone link |
| ContactForm | `components/forms/contact-form.tsx` | Needs review | Phone input lacks associated label; Formspree ID hardcoded |
| Spacer | `components/spacer/spacer.tsx` | OK | Layout divider |
| Portfolio (section) | `portfolio/page.tsx` | OK | Embedded on home; 4 linked case studies |

### Confirmed duplication

| Issue | Evidence | Recommendation |
|-------|----------|----------------|
| Dual `resume.module.scss` | `src/app/resume/resume.module.scss` (page layout) vs `src/app/components/resume/resume.module.scss` (experience styles) | Rename or consolidate in future refactor issue |
| Duplicate case study page | `portfolio/product-designer/page.tsx` nearly identical to `portfolio/head-of-product-design/page.tsx`; not linked from portfolio overview | Remove, redirect, or repurpose in future issue |

---

## Page Review

| Page | Route | Status | Notes |
|------|-------|--------|-------|
| Home | `/` | Needs review | Aggregates all sections; metadata description is placeholder |
| Portfolio overview | `/portfolio` (also embedded on `/`) | OK | Links 4 case studies via `NEXT_PUBLIC_SITE_URL` |
| Design System case study | `/portfolio/design-system-engineer` | Needs review | Title "Design System Engineer" vs profile "Design System Strategist" |
| Head of Product Design | `/portfolio/head-of-product-design` | Needs review | Metadata title incorrect ("Design System Engineer") |
| Product Designer (orphan) | `/portfolio/product-designer` | Issue | Duplicate content; not in portfolio nav; still built (94 kB) |
| Medical platform | `/portfolio/ux-ui-medical-platform` | Needs review | "Volunteer Lead Product Designer" framing |
| Personal website | `/portfolio/personal-website` | OK | Meta case study for this repo |
| Resume | `/resume` | Needs review | Duplicates home resume sections |
| Contact (route) | `/components/contact` | Needs review | Unusual route path for a component page (build includes it) |
| Not found | `/_not-found` | OK | Next.js default |

**Confirmed:** Build generates 13 static pages including `/components/contact` as a standalone route (`build` output).

**Recommendation:** Evaluate whether `/components/contact` should remain a route or be component-only (future issue).

---

## Content Review

Professional content gaps are fully documented in [website-specification.md](./website-specification.md) (Factual Corrections Required). This audit confirms repository evidence and adds structural content findings.

| Area | Finding | Aligned with profile? | Action |
|------|---------|----------------------|--------|
| Years of experience | "over 13 years" in About | No | Update per `website-specification.md` |
| Hero positioning | "Product Designer & Design Systems Specialist" | Partial | Update per profile and `personal-brand.md` |
| Achievement cards | Wording differs from verified metrics | Partial / No | Update per `website-specification.md` |
| Experience section | 4 roles; missing Freelance, Sanmyaku, earlier roles | No | Expand per profile |
| Unsupported claim | "regulatory fee of 3M" in experience | No | Remove unless resume-verified |
| Stack skills | Percentage values; unverified tools (TypeScript, React, WordPress, etc.) | No | Align with profile |
| Metadata typos | "archivements" in descriptions | No | Fix English |
| Duplicate case study copy | `product-designer` vs `head-of-product-design` | N/A | Consolidate |
| ESLint suppressions | `eslint-disable react/no-unescaped-entities` in 15+ files | N/A | Reduce suppressions over time |

**Reference:** [professional-profile.md](./professional-profile.md), [website-specification.md](./website-specification.md)

**Recommendation:** Address content in dedicated content issues; do not copy live site text into new docs.

---

## Asset Review

| Asset type | Location | Status | Notes |
|------------|----------|--------|-------|
| Hero/profile images | `public/img/maikel-salles.png`, `-h.jpg`, `-w.jpg` | OK | Used in `page.tsx`, `about.tsx`, `head.tsx` |
| Portfolio images | `public/img/portfolio/` (18 raster files) | OK | JPG/PNG referenced by case-study pages |
| Portfolio thumbnails | `*-thumbnail.png` (4 files) | Unused | No imports found in `src/` |
| SVG icons | `public/img/*.svg` (21 files) | Partial | Icon font in `icons.module.scss` is primary; several standalone SVGs appear unused |
| Icon font | `public/fonts/ms-iconfontset.{eot,ttf,woff,svg}` | OK | Referenced by `icons.module.scss` |
| Favicon | Referenced in `head.tsx` as `./favicon.ico` | **Missing** | No `favicon.ico` found in repository |
| Google Font | Montserrat via `next/font/google` | OK | `layout.tsx` |

### Unused asset candidates (confirmed unreferenced in `src/`)

| File | Evidence |
|------|----------|
| `public/img/instagram.svg` | No import; icon font has `.instagram` class unused in components |
| `public/img/download.svg` | No import in `src/` |
| `public/img/heart.svg` | No import in `src/` |
| `public/img/bars.svg`, `close.svg` | Header uses icon font via SCSS `@extend`, not SVG files |
| `public/img/portfolio/*-thumbnail.png` | No import in `src/` |

**Recommendation:** Verify unused assets before deletion; optimize raster images in a future performance issue.

---

## Documentation Review

| Document | Exists | Complete | Notes |
|----------|--------|----------|-------|
| [project-brief.md](./project-brief.md) | Yes | Yes | Vision, principles, hierarchy |
| [professional-profile.md](./professional-profile.md) | Yes | Yes | Factual authority |
| [personal-brand.md](./personal-brand.md) | Yes | Yes | Narrative and tone |
| [website-specification.md](./website-specification.md) | Yes | Yes | Website requirements and corrections |
| [development-workflow.md](./development-workflow.md) | Yes | Yes | Issue lifecycle |
| [ai-collaboration-guide.md](./ai-collaboration-guide.md) | Yes | Yes | AI boundaries |
| [decision-log.md](./decision-log.md) | Yes | Yes | DEC-001 through DEC-006 |
| [AGENTS.md](../AGENTS.md) | Yes | Yes | Agent entry point (#57) |
| `.cursor/rules/` | Yes | Yes | 8 focused rules (#57) |
| `README.md` | Yes | **No** | Default Next.js boilerplate; mentions Inter font; omits `docs/` |
| [repository-audit.md](./repository-audit.md) | Yes | Yes | This document (#58) |
| `website-audit.md` (Issue #59 — not yet created) | No | — | Expected deliverable |

**Confirmed documentation debt:** `README.md` does not reflect project documentation, Montserrat font, or workflow.

---

## Configuration Review

| File | Status | Notes |
|------|--------|-------|
| `package.json` | Needs review | `eslint-config-next@13.4.3` declared while `next@^16.2.9`; `@types/*` and lint tools in `dependencies` not `devDependencies` |
| `package-lock.json` | Needs review | Lockfile lists `next@16.2.9`; build warns "lockfile missing swc dependencies" |
| `next.config.js` | OK | Minimal: `distDir: 'build'` only |
| `tsconfig.json` | OK | `strict: true`; path aliases configured; `jsx: "preserve"` |
| `.eslintrc.json` | OK | Extends `next/core-web-vitals` only |
| Prettier | Missing | No Prettier config found |
| `.env.production` | OK | `NEXT_PUBLIC_SITE_URL=https://maikelsalles.com` (public value, committed) |
| `.gitignore` | OK | Standard Next.js ignores; `.cursor/` not ignored (intentional for rules) |

### Assumptions

- `node_modules` may be out of sync with lockfile (`npm outdated` reported installed `next@13.5.11` while lockfile specifies `16.2.9`). Run `npm ci` to verify in a future maintenance issue.

---

## Dependency Review

Source: `package.json`, `npm outdated` (2026-07-25).

| Package | Declared | Installed (outdated report) | Latest | Risk | Recommendation |
|---------|----------|----------------------------|--------|------|----------------|
| `next` | `^16.2.9` | 13.5.11 (out of sync) | 16.2.12 | **High** | Align lockfile and `node_modules`; upgrade in dedicated issue |
| `eslint-config-next` | 13.4.3 | 13.4.3 | 16.2.12 | **High** | Upgrade to match Next major version |
| `eslint` | 8.41.0 | 8.41.0 | 10.8.0 | Medium | Upgrade with ESLint config migration |
| `react` / `react-dom` | 18.2.0 | 18.2.0 | 19.2.8 | Low | Stay on 18 until Next/React upgrade issue |
| `typescript` | 5.0.4 | 5.0.4 | 7.0.2 | Low | Incremental upgrade |
| `@formspree/react` | ^2.4.1 | 2.4.1 | 3.0.0 | Low | Evaluate on contact form work |
| `sass` | ^1.62.1 | 1.62.1 | 1.102.0 | Low | Minor upgrade |
| `sharp` | ^0.33.3 | 0.33.3 | 0.35.3 | Low | Minor upgrade |
| `@vercel/analytics` | ^1.2.2 | 1.2.2 | 2.0.1 | Low | Evaluate on analytics issue |

---

## Accessibility Review

Document findings only — no remediation in this issue.

| Check | Result | Evidence | Recommendation |
|-------|--------|----------|----------------|
| Language attribute | Pass | `<html lang="en">` in `layout.tsx` | — |
| Semantic landmarks | Partial | `<main>` present; sections lack `aria-labelledby` | Add labels in future a11y issue |
| Skip link | Fail | Not found | Add skip-to-content link |
| Mobile menu | Partial | Toggle has `aria-label="Toggle Menu"` | Add `aria-expanded` state |
| ARIA roles | Fail | `role="contentinfo"` on skill `<li>` in `stack.tsx` | Remove or replace with appropriate role |
| Form labels | Partial | Input/Textarea labeled; phone input has no `<label>` | Associate label with phone field |
| Keyboard focus | Not verified | — | Manual test in Issue #59 |
| Color contrast | Not verified | CSS custom properties in `globals.scss` | Manual test in Issue #59 |
| External link targets | Fail | `target="blank"` in `footer/index.tsx` | Use `_blank` with `rel="noopener noreferrer"` |
| Alt text | Partial | Descriptive alts on profile images; portfolio list reuses hero alt text | Unique alts per image |
| Heading hierarchy | Partial | One H1 on home; case-study pages vary | Audit per page in Issue #59 |

---

## SEO Review

| Check | Result | Evidence | Recommendation |
|-------|--------|----------|----------------|
| Page titles | Partial | Home: "UX UI Designer \| UI Developer \| Accessibility Specialist" — outdated positioning | Align with `personal-brand.md` |
| Meta descriptions | Fail | Home: "Hello world! This is my personal website" | Replace with verified summary |
| Description typos | Fail | "archivements over 10 years" on portfolio/resume pages | Fix spelling and years (15+) |
| Open Graph image | Partial | `og:image` set in `head.tsx` | Add `og:title`, `og:description`, `og:url` |
| Open Graph other fields | Fail | Only image meta present | Complete OG tags |
| Canonical URLs | Fail | Not found | Add canonical metadata |
| Structured data | Fail | No JSON-LD | Consider Person schema in future issue |
| Sitemap | Fail | No `sitemap.ts` or static sitemap | Add in SEO issue |
| Robots | Fail | No `robots.ts` | Add in SEO issue |
| Favicon | Fail | `head.tsx` references `./favicon.ico`; file missing | Add favicon asset |
| Legacy Head component | Medium | Custom `head.tsx` alongside Metadata API | Consolidate to Metadata API |

---

## Performance Review

Source: `npm run build` output (2026-07-25).

| Metric / Area | Result | Evidence | Recommendation |
|---------------|--------|----------|----------------|
| Build | Pass (with warnings) | Exit code 0; lockfile patch warning | Run `npm ci` to resolve lockfile drift |
| Static generation | Pass | All 13 routes static | — |
| Home First Load JS | 122 kB | Build route table | Acceptable baseline |
| Shared JS | 80.7 kB | Build output | Monitor on dependency upgrades |
| Image optimization | Partial | `next/image` + `sharp` used | Audit image sizes in asset review |
| Font loading | OK | `next/font/google` for Montserrat | — |
| Client JS (header) | Medium | Scroll listener on all pages | Acceptable; review if perf issue arises |
| Phone input CSS | Low | `react-phone-input-2/lib/plain.css` imported globally in form | Scope styles in future issue |
| Lazy loading | Partial | Next/Image defaults | Explicit audit in Issue #59 |
| Unused thumbnails | Low | 4 PNG thumbnails unused | Remove or use after verification |
| Bundle analysis | Not run | — | Optional `@next/bundle-analyzer` in future issue |

### Build warnings (confirmed)

- "Found lockfile missing swc dependencies, patching..."
- "Failed to patch lockfile" (`TypeError: Cannot read properties of undefined (reading 'os')`)
- "caniuse-lite is outdated"

Build still completed successfully despite warnings.

---

## Code Quality Review

| Check | Result | Notes |
|-------|--------|-------|
| `npm run lint` | **Pass** | No ESLint warnings or errors (2026-07-25) |
| `npm run build` | **Pass** | Exit code 0; warnings documented above |
| TypeScript strictness | Enabled | `strict: true` in `tsconfig.json` |
| Test coverage | **None** | No test files; no test script in `package.json` |
| ESLint suppressions | Widespread | `eslint-disable react/no-unescaped-entities` in most content components |
| Naming consistency | Issues | `twoCollumns`, `waveGgradient` typos in `globals.module.scss` |
| URL typos | Confirmed | `calto:` instead of `tel:` in header and contact |
| Link API | Outdated | `passHref` on `Link` in `button/index.tsx` |
| Type looseness | Low | `Button` `type?: string`; no shared prop interfaces |

---

## Technical Debt

| Item | Impact | Effort | Recommended issue |
|------|--------|--------|-------------------|
| Content misalignment with profile | High | Medium | Content & Personal Brand epic |
| Dependency / lockfile drift (Next, eslint-config-next) | High | Low–Medium | Technical debt / dependency issue |
| SEO metadata quality | Medium | Low | SEO issue |
| Accessibility issues (ARIA, links, forms, skip link) | Medium | Medium | Accessibility issue |
| Duplicate orphan `product-designer` route | Medium | Low | Portfolio cleanup issue |
| Dual `resume.module.scss` naming | Medium | Low | Refactor issue |
| Legacy `head.tsx` + Metadata API mix | Medium | Medium | SEO/metadata refactor |
| Missing favicon | Low | Low | Asset issue |
| Unused assets (SVGs, thumbnails) | Low | Low | Asset cleanup after verification |
| Outdated README | Low | Low | Documentation issue |
| No automated tests | Medium | High | Testing infrastructure issue |
| Widespread eslint-disable | Low | Medium | Code quality issue |
| `/components/contact` as standalone route | Low | Low | Routing review |

---

## Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Content changes introduce factual errors | Medium | High | Follow profile, `website-specification.md`, approval workflow |
| Lockfile/node_modules drift causes CI failures | Medium | High | Run `npm ci`; align eslint-config with Next version |
| Duplicate portfolio routes confuse SEO | Low | Medium | Consolidate or redirect `product-designer` |
| Missing favicon and incomplete OG tags reduce share quality | Medium | Low | SEO metadata issue |
| No tests — regressions undetected | High | Medium | Add smoke tests before major refactors |
| Build warnings escalate on Next upgrades | Medium | Medium | Resolve lockfile issue before dependency upgrades |

---

## Opportunities

| Opportunity | Benefit | Effort | Priority |
|-------------|---------|--------|----------|
| Align website content with profile/spec | Accurate professional brand | Medium | P1 |
| Unify metadata via Next Metadata API | SEO, maintainability | Medium | P1 |
| Align dependencies (Next, eslint-config-next) | Stable CI and lint rules | Low–Medium | P1 |
| Complete website audit (Issue #59) | UX, responsive, a11y baseline | Medium | P1 |
| Consolidate portfolio routes | Less duplication, clearer IA | Low | P2 |
| Accessibility remediation | WCAG alignment with brand | Medium | P2 |
| Update README to reference `docs/` | Contributor onboarding | Low | P3 |
| Remove verified unused assets | Smaller repo, less confusion | Low | P3 |
| Add minimal test suite | Regression safety | High | P3 |
| Bundle analysis | Performance baseline | Low | P3 |

---

## Priority Matrix

| Priority | Item | Rationale |
|----------|------|-----------|
| P1 | Content alignment with [professional-profile.md](./professional-profile.md) | Core project goal; errors affect professional credibility |
| P1 | Dependency and lockfile alignment | Build warnings; eslint-config skew with Next 16 |
| P1 | SEO metadata and favicon | High visibility; currently placeholder and incomplete |
| P1 | Complete Issue #59 website audit | Complements this repo audit for full baseline |
| P2 | Accessibility remediation | Brand positioning includes accessibility expertise |
| P2 | Portfolio route consolidation | Orphan duplicate route still deployed |
| P2 | Metadata API migration (remove legacy Head) | Reduces dual-pattern maintenance |
| P3 | README update | Onboarding; low user-facing impact |
| P3 | Unused asset cleanup | Optimization after verification |
| P3 | Automated tests | Long-term quality; higher effort |

---

## Recommended Implementation Order

1. **Issue #59 — Audit Website** — UX, responsive, accessibility, and content presentation review (complements this document).
2. **Issue #60 — Prepare Implementation Plan** — Synthesize #58 and #59 into phased delivery.
3. **Dependency alignment** — Resolve lockfile drift; upgrade `eslint-config-next` to match Next 16; verify `npm ci` in CI.
4. **Content correction epic** — Implement [website-specification.md](./website-specification.md) factual corrections.
5. **SEO and metadata** — Titles, descriptions, OG tags, favicon, sitemap/robots.
6. **Accessibility fixes** — ARIA, skip link, form labels, link targets, contrast verification.
7. **Portfolio cleanup** — Remove or redirect orphan `product-designer`; fix metadata titles.
8. **Structural refactors** — `resume.module.scss` naming, Metadata API migration, routing review.
9. **Documentation and assets** — README update; unused asset cleanup.
10. **Testing infrastructure** — Add lint/build CI and optional smoke tests.

---

## Definition of Done

This audit is complete when:

- [x] All sections above are filled with findings (not placeholders).
- [x] Findings reference specific files and paths where applicable.
- [x] Professional content findings align with [professional-profile.md](./professional-profile.md).
- [x] Priority matrix and implementation order are defined.
- [ ] The audit has been reviewed and approved by the project owner.
- [ ] A follow-up implementation issue is created if required (Issue #60).

---

## Approval

| Role | Name | Date | Status |
|------|------|------|--------|
| Auditor | Maikel Salles (AI-assisted) | 2026-07-25 | Draft |
| Project owner | Maikel Salles | — | Pending |

---

## Document Status

| Field | Value |
|---|---|
| Status | Draft — pending review |
| Related Issue | #58 — Audit Repository |
| Parent Issue | #55 — Project Discovery |
| Validation | `npm run lint` pass; `npm run build` pass (with warnings) |
| Last updated | 2026-07-25 |
| Maintainer | Maikel Salles |
