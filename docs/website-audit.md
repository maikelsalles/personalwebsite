# Website Audit

> **Purpose**
>
> Objective baseline of maikelsalles.com before implementation work begins.
>
> Findings are evidence-based from repository source code and project documentation. Professional facts reference [professional-profile.md](./professional-profile.md) and [website-specification.md](./website-specification.md).

---

## Website Overview

| Field | Value |
|-------|-------|
| URL | https://maikelsalles.com |
| Audit date | 2026-07-25 |
| Auditor | Maikel Salles (AI-assisted audit) |
| Related Issue | #59 — Audit Website |
| Parent Issue | #55 — Project Discovery |
| Environment | Source-code audit; production URL from `.env.production`; runtime responsive and contrast checks inferred from code where not manually tested |

---

## Executive Summary

### Current state

The website presents a single-page home (`/`) with hero, portfolio, about, experience, stack, education, and contact sections, plus standalone routes for `/resume`, `/portfolio`, four linked case studies, and one orphan case study at `/portfolio/product-designer`. Visual language is consistent across sections (Montserrat typography, blue primary palette, SCSS modules, two-column sticky layouts on larger breakpoints).

### Strengths

- Clear homepage section structure with anchor-based navigation
- Reusable UI components (button, input, textarea, header, footer, form)
- Descriptive alt text on primary profile and about images
- Portfolio case studies include back navigation and confidentiality notices
- `next/image` used for major images
- Contact form integrates Formspree with field-level validation error display
- Footer provides Medium article links and project attribution

### Weaknesses

- Professional positioning and employment facts diverge from approved documentation
- SEO metadata is placeholder or incorrect on most pages
- Experience section is incomplete and contains unsupported claims
- Skills section lists unverified proficiency data and tools
- Accessibility issues include incorrect ARIA usage, invalid link targets, and form labeling gaps
- Case studies do not follow the documented 14-section structure
- English quality issues (spelling, grammar, inconsistent terminology)

### Alignment with project documentation

The current website **does not** accurately reflect the vision in [project-brief.md](./project-brief.md) or the positioning in [personal-brand.md](./personal-brand.md) and [professional-profile.md](./professional-profile.md). [website-specification.md](./website-specification.md) catalogues required corrections; this audit confirms them with page-level evidence and adds UX, accessibility, SEO, and presentation findings.

---

## Site Structure and Information Architecture

| Layer | Structure | Evidence |
|-------|-----------|----------|
| Primary entry | Single homepage with anchored sections | `src/app/page.tsx` |
| Secondary pages | `/resume`, `/portfolio/*` | App Router file structure |
| Navigation model | Hash links on home; full routes for portfolio | `src/app/components/header/index.tsx` |
| Content hierarchy | H1 on home hero; H2 per section; H3 in subsections | `page.tsx`, `about.tsx`, `experience.tsx` |
| Portfolio IA | 4 items linked from overview; 1 orphan route | `portfolio/page.tsx` vs `portfolio/product-designer/page.tsx` |

### UX observations

- **Confirmed:** The "Resume" nav label scrolls to `#resume`, which displays **Experience** only. Stack and Education are separate sections without dedicated nav entries (`page.tsx`, `header/index.tsx`).
- **Confirmed:** Portfolio appears on the homepage before About, while nav order is About → Resume → Portfolio → Contact.
- **Confirmed:** Standalone `/resume` duplicates home resume content without homepage context (`src/app/resume/page.tsx`).
- **Assumption:** Sub-page visitors may not discover Stack or Education without returning to `/` (not user-tested).

---

## Page and Section Inventory

| Page / Section | URL or component | Present | Notes |
|----------------|------------------|---------|-------|
| Homepage hero | `/` — `src/app/page.tsx` | Yes | H1, positioning statement, hero image |
| Portfolio overview | `/` — `src/app/portfolio/page.tsx` | Yes | Also routable at `/portfolio` |
| About | `/` — `src/app/components/about/about.tsx` | Yes | Bio and key achievement cards |
| Experience | `/` — `src/app/components/resume/experience.tsx` | Yes | Rendered under `#resume` section |
| Stack | `/` — `src/app/components/resume/stack.tsx` | Yes | No dedicated nav link |
| Education | `/` — `src/app/components/resume/education.tsx` | Yes | No dedicated nav link |
| Contact | `/` — `src/app/components/contact/page.tsx` | Yes | Form and social links aside |
| Case study: Design System | `/portfolio/design-system-engineer` | Yes | Listed as "Design System Engineer" |
| Case study: Head of Product Design | `/portfolio/head-of-product-design` | Yes | Page metadata title incorrect |
| Case study: Medical Platform | `/portfolio/ux-ui-medical-platform` | Yes | "Volunteer" framing |
| Case study: Personal Website | `/portfolio/personal-website` | Yes | Meta case study |
| Case study (orphan) | `/portfolio/product-designer` | Yes | Not linked from portfolio overview |
| Standalone resume | `/resume` | Yes | Duplicates experience, education, stack |

---

## Factual Inconsistencies

Reference: [professional-profile.md](./professional-profile.md), [website-specification.md](./website-specification.md)

| Location | Current content | Expected (profile / spec) | Severity |
|----------|-----------------|---------------------------|----------|
| `about.tsx` L26 | "over **13** years" | **15+** years | High |
| `page.tsx` L30 | "Product Designer & Design Systems Specialist" | Senior Front-End Designer and Product Designer | High |
| `about.tsx` L26 | "Product Designer and Design Systems Specialist" | Same as above | High |
| `about.tsx` L52–53 | "50% **fewer customer inquiries**" | Approximately 50% reduction in **time to reach a qualified lead** | High |
| `about.tsx` L44–45 | "90% accessibility improvement" (no qualifier) | Approximately **90% of identified WCAG issues** | High |
| `experience.tsx` L7 | "Design System **Engineer**" | Design System **Strategist** | High |
| `experience.tsx` L9 | "DBC Company - Consulting for Edenred" | DBC Consulting — Ticket Log / Edenred | Medium |
| `experience.tsx` L10 | July 2022 – November 2024 | 2022–2024 | Medium |
| `experience.tsx` L18 | "**Product Design**" | **Head of Product Design** | High |
| `experience.tsx` L21 | October 2021 – July 2022 | 2021–2022 | Medium |
| `experience.tsx` L36 | "regulatory fee of **3M**" | Not in profile — unsupported | High |
| `experience.tsx` L48 | "**Real State** Agency" | Real **Estate** | Medium |
| `experience.tsx` | 4 roles only | Missing Freelance (2024–Present), Sanmyaku, earlier roles | High |
| `ux-ui-medical-platform/page.tsx` L29 | "**Volunteer** Lead Product Designer" / "Canadian startup" | Sanmyaku Entertainment freelance project | High |
| `portfolio/page.tsx` L28 | "Design System **Engineer**" | Design System Strategist | Medium |
| `education.tsx` L12 | September 2022 – September **2023** | 2022–**2024** | Medium |
| `education.tsx` | No Google AI certificate | Google AI Professional Certificate — Coursera, 2026 | Medium |
| `stack.tsx` | Percentage values; TypeScript, React, NextJs, WordPress, Adobe Suite | Profile-supported tools only; no unverified ratings | High |
| Portfolio and resume metadata | "archivements over **10** years" | 15+ years; correct spelling ("achievements") | Medium |

---

## Missing Content

Compared to [professional-profile.md](./professional-profile.md) and [website-specification.md](./website-specification.md):

| Missing item | Document reference |
|--------------|-------------------|
| Freelance consultant role (2024–Present) | Profile — Professional Experience |
| Sanmyaku Entertainment in experience section | Profile |
| Grupo Editorial Sinos, Instituto Unialcance, Multimedia agency roles | Profile |
| Google AI Professional Certificate (2026) | Profile — Education and Certificates |
| Verified achievement qualifiers ("approximately") | [personal-brand.md](./personal-brand.md) |
| Case-study sections per 14-part template | [website-specification.md](./website-specification.md) |
| Unique, verified meta descriptions per page | [website-specification.md](./website-specification.md) |
| Favicon file | Referenced in `src/app/head.tsx`; not present in repository |

---

## Content Quality Review

| Area | Issue | Example | Observation |
|------|-------|---------|-------------|
| Spelling / grammar | Multiple errors | "archivements", "Colaborated", "bridged", "allways", "Real State" | `experience.tsx`, portfolio/resume metadata |
| Terminology | Outdated job titles | "Design System Engineer" vs Design System Strategist | Multiple pages |
| Tone | Marketing filler | "passion for innovation" in portfolio intro | `portfolio/page.tsx` L22 |
| Unsupported claims | Financial/regulatory | "regulatory fee of 3M" | `experience.tsx` L36 |
| Metric precision | Missing qualifiers | "90% accessibility improvement" | `about.tsx` L44–45 |
| Consistency | Duplicate narratives | `product-designer` vs `head-of-product-design` pages | Portfolio routes |

---

## Professional Narrative Review

| Aspect | Current state | Aligned with [personal-brand.md](./personal-brand.md)? |
|--------|---------------|--------------------------------------------------------|
| Positioning | "Product Designer & Design Systems Specialist" | **No** — should lead with Senior Front-End Designer and Product Designer |
| Value proposition | Design/Product/Engineering intersection stated in hero and about | **Partial** — undermined by factual gaps |
| Achievement cards | Four metrics present; wording inaccurate | **Partial** — metrics exist but misstated |
| Case-study narratives | First-person; design system and leadership themes | **Partial** — medical and leadership framing incorrect |
| Accessibility positioning | Claimed in titles and copy | **Partial** — undermined by on-site accessibility findings |
| Tone | Generally professional first-person | **Partial** — undermined by errors and unsupported claims |

---

## Visual Consistency Review

| Aspect | Result | Evidence |
|--------|--------|----------|
| Typography | Consistent | Montserrat via `src/app/layout.tsx`; CSS variables in `globals.scss` |
| Color system | Consistent | Primary blue palette in `:root` tokens |
| Layout patterns | Consistent | `twoCollumns`, sticky side headings, section padding in `globals.module.scss` |
| Component styling | Consistent | Shared Button, form inputs, icon font |
| Portfolio list vs detail pages | Consistent | Shared `portfolio.module.scss` |
| Image alt text | Inconsistent | Portfolio thumbnails reuse hero portrait alt text (`portfolio/page.tsx`) |
| Code naming | Minor inconsistency | `twoCollumns`, `waveGgradient` class name typos |

**Assumption:** Color contrast on the live site requires manual verification.

---

## Accessibility Review

| Check | Result | Location | Notes |
|-------|--------|----------|-------|
| Document language | Pass | `layout.tsx` — `lang="en"` | — |
| Keyboard navigation | Partial | Header toggle has `aria-label="Toggle Menu"` | No skip link; `aria-expanded` not set on menu toggle |
| Color contrast | Not verified | `globals.scss` | Manual test required |
| Alt text | Partial | Hero and about images descriptive | Portfolio grid images reuse incorrect alt text |
| ARIA usage | Fail | `stack.tsx` L49 — `role="contentinfo"` on skill list items | Incorrect role for `<li>` elements |
| Form accessibility | Partial | `input/index.tsx` — labeled name, email, message fields | Phone input has no visible `<label>` in `contact-form.tsx` |
| Heading hierarchy | Partial | One H1 on home | Form success state introduces additional H2 |
| Link targets | Fail | `footer/index.tsx` — `target="blank"` on four links | Invalid target value |
| Phone link | Fail | `calto:+15878920290` | `header/index.tsx` L78, `contact/page.tsx` L19 |
| Focus indicators | Not verified | — | Manual test required |

---

## Responsive Review

Breakpoints defined in `src/app/_mixins.scss`: 599px (phone), 600px (tablet portrait), 900px (tablet landscape), 1200px (desktop).

| Breakpoint | Result | Issues |
|------------|--------|--------|
| Mobile (< 600px) | Partial (code-based) | `phone_only_flex` social links in header; single-column layout; about image swaps at 600px (`about.tsx` L14) |
| Tablet (600–1024px) | Partial (code-based) | Grid layouts activate at 900px (`globals.module.scss`) |
| Desktop (> 1024px) | Partial (code-based) | Sticky section headings; max-width wrapper |

**Assumption:** Touch targets, mobile menu behavior, and form layout on real devices were not manually tested in this audit.

---

## SEO Review

| Check | Result | Notes |
|-------|--------|-------|
| Page titles | Partial | Home: "UX UI Designer \| UI Developer \| Accessibility Specialist" — outdated positioning (`page.tsx` L20) |
| Meta descriptions | Fail | Home: "Hello world! This is my personal website" (`page.tsx` L21) |
| Description quality | Fail | "archivements over 10 years" on portfolio, resume, and case-study pages |
| Heading structure | Partial | One H1 per major page in source |
| URL structure | Pass | Clean `/portfolio/[slug]` pattern |
| Open Graph | Partial | Only `og:image` set in `head.tsx`; no title, description, or URL |
| Canonical URLs | Fail | Not present |
| Structured data | Fail | No JSON-LD |
| Sitemap / robots | Fail | No `sitemap.ts` or `robots.ts` |
| Favicon | Fail | `head.tsx` references `./favicon.ico`; file not in repository |

---

## Performance Review

Build metrics from audited branch (2026-07-25). Runtime Core Web Vitals were not measured.

| Metric | Value | Target | Notes |
|--------|-------|--------|-------|
| Home First Load JS | 122 kB | — | Static route |
| Shared JS | 80.7 kB | — | All routes |
| Static generation | Pass | — | 13 static routes |
| LCP / CLS / INP | Not measured | — | Requires lab or field test |
| Image optimization | Partial | — | `next/image` and `sharp` used |
| Client JS overhead | Medium | — | Header scroll listener on all pages |

---

## Navigation Review

| Check | Result | Notes |
|-------|--------|-------|
| Header navigation | Partial | Hash links for home sections; Stack and Education not linked |
| Active state | Fail | Compares `link.href` (`/#about`) to `pathname` — will not highlight on home (`header/index.tsx` L69) |
| Footer links | Partial | Medium articles present; invalid `target="blank"` on four links |
| Portfolio back links | Pass | "Back to Portfolio" on case-study pages |
| Anchor links | Partial | `#about`, `#resume`, `#portfolio`, `#contact` present on home |
| Orphan route | Issue | `/portfolio/product-designer` reachable but not in portfolio overview |

---

## Form and Link Review

| Element | Location | Status | Notes |
|---------|----------|--------|-------|
| Contact form | `contact-form.tsx` | Partial | Formspree; name, email, message fields labeled |
| Phone field | `contact-form.tsx` | Partial | No associated `<label>` element |
| Send button | `contact-form.tsx` L87 | Partial | Uses Button component inside `<form onSubmit={handleSubmit}>` |
| Validation errors | Formspree `ValidationError` | Pass | Displayed per field |
| External links (header) | LinkedIn, Medium, mailto | Pass | `rel="noopener noreferrer"` on external http links via Button |
| Phone link | `calto:+15878920290` | Fail | Typo — expected `tel:` scheme |
| Portfolio links | `portfolio/page.tsx` | Partial | Uses absolute `NEXT_PUBLIC_SITE_URL` |
| Social (contact aside) | Behance, LinkedIn, Medium | Pass | Behance present in contact but not header |
| Footer Medium links | `footer/index.tsx` | Partial | Invalid `target="blank"` on four article links |

---

## Image and Media Review

| Asset | Location | Alt text | Quality | Observation |
|-------|----------|----------|---------|-------------|
| Hero photo | `page.tsx` | Present, descriptive | OK | — |
| About photos | `about.tsx` | Present, descriptive | OK | Responsive swap at 600px |
| Portfolio thumbnails (×4) | `portfolio/page.tsx` | Present but incorrect | Issue | Reuses hero portrait alt text |
| Case-study images | Portfolio detail pages | Present | OK | Context-specific on several pages |
| Logo | `header/index.tsx` | Present | OK | — |
| OG image | `head.tsx` | N/A (meta property) | OK | Uses `maikel-salles-w.jpg` |

---

## Technical Observations

| Topic | Finding | Evidence |
|-------|---------|----------|
| Metadata pattern | Hybrid custom `head.tsx` and page-level `export const metadata` | `layout.tsx`, `page.tsx` |
| Portfolio URL dependency | Links use `process.env.NEXT_PUBLIC_SITE_URL` | `portfolio/page.tsx` L27+ |
| ESLint suppressions | Content files suppress unescaped-entities rule | Multiple `src/app/**/*.tsx` files |
| Case-study structure | Free-form prose; not 14-section template | All `portfolio/*/page.tsx` |
| Duplicate page | `product-designer` content mirrors `head-of-product-design` | Portfolio routes |
| Nav label mismatch | "Resume" section shows Experience, Stack, Education split | `page.tsx`, `header/index.tsx` |

---

## Risks

| Risk | Likelihood | Impact |
|------|------------|--------|
| Recruiters receive inaccurate experience data | High | High |
| Unsupported "3M" claim creates credibility risk | Medium | High |
| SEO placeholders reduce discoverability and social sharing | High | Medium |
| Accessibility issues conflict with stated accessibility expertise | Medium | High |
| Orphan and duplicate portfolio URLs affect search clarity | Low | Medium |
| Broken phone link (`calto:`) on mobile | High | Low |
| Portfolio links may resolve to production URL in non-production environments | Medium | Low |

---

## Opportunities

| Opportunity | Benefit | Priority |
|-------------|---------|----------|
| Align public copy with profile and personal-brand | Accurate professional presentation | P1 |
| Replace placeholder and incorrect SEO metadata | Improved search and social sharing | P1 |
| Complete experience and education sections | Full career narrative | P1 |
| Restructure case studies per template | Stronger portfolio evidence | P1 |
| Address accessibility findings | Credibility and usability | P2 |
| Clarify navigation labels and section discoverability | Clearer information architecture | P2 |
| Consolidate duplicate portfolio route | Cleaner IA and SEO | P2 |
| Assign unique portfolio image alt text | Accessibility and clarity | P3 |
| Conduct manual responsive and contrast testing | Validate code-based assumptions | P3 |

---

## Priority Matrix

| Priority | Item | Rationale |
|----------|------|-----------|
| P1 | Factual and positioning alignment with documentation | Core project goal; affects professional credibility |
| P1 | SEO metadata and favicon | High visibility; currently placeholder or incorrect |
| P1 | Remove or verify unsupported claims | "3M" fee and "volunteer" framing not in profile |
| P1 | Complete missing roles and education | Incomplete professional record |
| P2 | Accessibility remediation | Stated core competency; concrete on-site issues found |
| P2 | Case-study structure and terminology | Portfolio is primary evidence path for recruiters |
| P2 | Navigation and information architecture | UX friction; Resume label vs section content |
| P3 | Visual and code naming cleanup | Low direct user impact |
| P3 | Portfolio link environment behavior | Staging and development concern |

---

## Recommended Actions

1. Align website content with [website-specification.md](./website-specification.md) and [professional-profile.md](./professional-profile.md).
2. Update page titles, meta descriptions, Open Graph tags, and favicon across all routes.
3. Expand experience, education, and stack content to match verified profile data.
4. Rework case studies toward the structure in [templates/case-study-template.md](./templates/case-study-template.md).
5. Address accessibility findings documented in this audit.
6. Clarify navigation labels and section discoverability for Stack and Education.
7. Resolve the duplicate and orphan portfolio route.
8. Conduct manual responsive, contrast, and Core Web Vitals testing to validate assumptions marked in this report.

---

## Definition of Done

This audit is complete when:

- [x] All template sections are filled with project-specific findings.
- [x] Factual inconsistencies reference [professional-profile.md](./professional-profile.md).
- [x] Priority matrix and recommended actions are defined.
- [ ] The audit has been reviewed and approved by the project owner.
- [ ] Findings inform [website-specification.md](./website-specification.md) or downstream planning (Issue #60).

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
| Related Issue | #59 — Audit Website |
| Parent Issue | #55 — Project Discovery |
| Last updated | 2026-07-25 |
| Maintainer | Maikel Salles |
