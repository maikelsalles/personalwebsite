# Website Specification

> **Purpose**
>
> This document defines what the website must contain, correct, and achieve.
>
> It specifies requirements — not implementation details. For verified professional facts, see [professional-profile.md](./professional-profile.md). For tone and terminology, see [personal-brand.md](./personal-brand.md).

---

## Scope of This Document

This specification records:

- Factual corrections required across the website
- Section and page requirements
- Portfolio and case-study expectations
- English, SEO, accessibility, and technical quality requirements
- Final consistency and delivery checks

Website code changes belong to future implementation issues. This document does not prescribe React, SCSS, or component structure.

---

## Current Page and Section Inventory

| Area | Location | Notes |
|------|----------|-------|
| Homepage hero | `src/app/page.tsx` | Name, positioning statement, hero image |
| Portfolio overview | `src/app/portfolio/page.tsx` | Four case-study links |
| About | `src/app/components/about/about.tsx` | Bio and key achievement cards |
| Experience | `src/app/components/resume/experience.tsx` | Employment history (partial) |
| Stack | `src/app/components/resume/stack.tsx` | Skills list with percentage bars |
| Education | `src/app/components/resume/education.tsx` | Degrees and certificates |
| Contact | `src/app/components/contact/page.tsx` | Contact form and information |
| Case studies | `src/app/portfolio/*/page.tsx` | Four portfolio detail pages |
| Resume page | `src/app/resume/page.tsx` | Standalone resume view |

---

## Factual Corrections Required

The following inconsistencies exist between current website content and [professional-profile.md](./professional-profile.md). Future content issues must resolve them using verified facts only.

| Topic | Current website | Required (from profile) |
|-------|-----------------|---------------------------|
| Years of experience | "over 13 years" (About) | "15+ years" |
| Primary positioning | "Product Designer & Design Systems Specialist" | "Senior Front-End Designer and Product Designer" (adapt for length where needed; see [personal-brand.md](./personal-brand.md)) |
| Achievement — real estate | "50% fewer customer inquiries" | Approximately 50% reduction in time required to reach a qualified lead |
| Achievement — accessibility | "90% accessibility improvement" (no qualifier) | Approximately 90% of identified WCAG issues addressed |
| DBC company name | "DBC Company - Consulting for Edenred" | DBC Consulting — Ticket Log / Edenred |
| Design System role title | "Design System Engineer" | Design System Strategist |
| Leadership role title | "Product Design" | Head of Product Design |
| Design System dates | July 2022 – November 2024 | 2022–2024 |
| Head of Product Design dates | October 2021 – July 2022 | 2021–2022 |
| Missing roles | Not listed on site | Freelance consultant (2024–Present); Sanmyaku Entertainment; earlier roles per profile |
| Medical platform framing | "Volunteer Lead Product Designer" / "Canadian startup" | Product Designer — Selected Freelance Project at Sanmyaku Entertainment |
| Unsupported claim | "regulatory fee of 3M" in experience section | Remove unless verified in approved resume |
| Strategic Design dates | September 2022 – September 2023 | 2022–2024 |
| Missing certificate | Not listed | Google AI Professional Certificate — Coursera, 2026 |
| Stack proficiency bars | Percentage values for skills | Replace with verified tools from profile or remove unsupported ratings |
| Stack tools | TypeScript, React, NextJs, WordPress, Adobe Suite | Include only tools supported by profile evidence |

---

## Homepage Requirements

1. **Hero** — Name, verified positioning statement, and concise value proposition aligned with [personal-brand.md](./personal-brand.md).
2. **Clarity** — First screen communicates Product Design, Design Systems, Accessibility, and front-end collaboration without unsupported claims.
3. **Navigation** — Clear paths to Portfolio, About, Experience, Contact.
4. **Metadata** — Page title and description must reflect verified positioning and use correct English.

---

## About Section Requirements

1. **Bio** — Factual summary derived from [professional-profile.md](./professional-profile.md); 15+ years of experience.
2. **Location** — Calgary, Alberta, Canada.
3. **Narrative** — Intersection of Design, Product, and Engineering; Human-Centered Design; accessibility and design systems.
4. **Key achievement cards** — Use verified metrics with appropriate qualifiers:

   | Metric | Wording guidance |
   |--------|------------------|
   | 30% | Reduced design and development time through Design System collaboration |
   | ~90% | Addressed approximately 90% of identified WCAG issues |
   | 60% | Reduced development workload through accessible component library |
   | ~50% | Reduced time to reach a qualified lead (real estate product) |

5. **No unsupported claims** — Remove or replace content not traceable to the profile.

---

## Experience Section Requirements

1. **Complete history** — Include all roles documented in [professional-profile.md](./professional-profile.md), in reverse chronological order.
2. **Accurate titles and dates** — Match the approved resume and profile exactly.
3. **Company names** — Use verified naming (e.g., DBC Consulting — Ticket Log / Edenred).
4. **Responsibilities vs. outcomes** — Separate bullet types; outcomes must match verified metrics.
5. **English quality** — Correct spelling, grammar, and professional tone (fix known issues such as "Colaborated," "Real State").

---

## Stack Section Requirements

1. List tools and technologies supported by [professional-profile.md](./professional-profile.md).
2. Remove or replace unsupported proficiency percentages.
3. Organize by category: Design, Product/Delivery, Analytics, Design Systems, Front-End, Standards.
4. Do not imply expert-level proficiency in tools not evidenced in the profile.

---

## Education Section Requirements

1. Include all entries from the profile:

   - Strategic Design Management Specialization — Uniritter, 2022–2024
   - Bachelor's Degree in Information Technology Management — Uniritter, 2019–2022
   - Product Management — PM3, 2022
   - Google AI Professional Certificate — Coursera, 2026
   - Scrum Foundation — CertiProf, 2020

2. Use correct date ranges.
3. Supplementary details (e.g., class ambassador) may remain only if verified in the approved resume.

---

## Portfolio Priorities

Recommended case-study order and focus:

| Priority | Case study | Profile alignment |
|----------|------------|-------------------|
| 1 | Design System Strategist | DBC Consulting — Ticket Log / Edenred, 2022–2024 |
| 2 | Head of Product Design | DBC Consulting — Ticket Log / Edenred, 2021–2022 |
| 3 | UX/UI Medical Platform | Sanmyaku Entertainment, 2023–2024 |
| 4 | Personal Website | This repository and site evolution |

Future case studies should use [templates/case-study-template.md](./templates/case-study-template.md).

---

## Case-Study Structure

Each portfolio case study must follow the structure in [templates/case-study-template.md](./templates/case-study-template.md):

1. Context
2. Business or user problem
3. My role
4. Team and stakeholders
5. Constraints
6. Research, analytics, or testing
7. Information architecture and workflows
8. Prototypes and UI decisions
9. Design System or technical considerations
10. Collaboration with Product and Engineering
11. Measurable or observable outcomes
12. Individual contribution
13. Supporting artifacts
14. Confidentiality and sanitization notes

All claims must trace to [professional-profile.md](./professional-profile.md) or approved case-study documentation.

---

## Achievement Card Wording

Achievement cards must:

- Use verified metrics only
- Retain "approximately" where the profile uses it
- Describe the outcome accurately (e.g., lead time vs. customer inquiries)
- Avoid financial or regulatory claims unless verified

---

## English Quality Requirements

1. Correct spelling and grammar throughout.
2. Consistent terminology per [personal-brand.md](./personal-brand.md).
3. Fix known errors: "archivements" → "achievements"; "Colaborated" → "Collaborated"; "Real State" → "Real Estate".
4. Professional, clear sentences — no filler or exaggerated language.
5. Consistent capitalization of job titles and section headings.

---

## SEO Requirements

1. Unique, descriptive page titles per page.
2. Meta descriptions that reflect verified positioning (not generic placeholders).
3. Semantic heading hierarchy (one H1 per page).
4. Descriptive alt text for images (already partially implemented).
5. Clean URL structure maintained (`/portfolio/[slug]`).
6. Open Graph and social metadata reviewed in a dedicated issue.

---

## Accessibility Requirements

1. WCAG-aligned practices across content and implementation.
2. Keyboard navigability for all interactive elements.
3. Sufficient color contrast.
4. Meaningful alt text for images.
5. Correct ARIA usage — avoid misapplied roles (e.g., review `role="contentinfo"` on skill items).
6. Form labels and error states accessible.
7. Future audit (Issue #59) will produce a detailed remediation list.

---

## Technical Quality Expectations

1. `npm run lint` passes without errors.
2. `npm run build` completes successfully.
3. No console errors in production build.
4. Responsive layout across common breakpoints.
5. Environment variables used correctly (`NEXT_PUBLIC_SITE_URL`).
6. Dependencies kept current through dedicated upgrade issues.

---

## Final Consistency Checks

Before any content launch issue is closed, verify:

- [ ] All professional claims trace to [professional-profile.md](./professional-profile.md)
- [ ] Job titles, company names, and dates match the approved resume
- [ ] Metrics use correct wording and qualifiers
- [ ] Terminology matches [personal-brand.md](./personal-brand.md)
- [ ] No unsupported tools, certifications, or claims remain
- [ ] English quality review completed
- [ ] Portfolio case studies follow the approved template structure
- [ ] Metadata and headings are accurate per page

---

## Final Delivery Requirements

Content and implementation issues that modify the website must:

1. Reference this specification and the relevant GitHub Issue.
2. Include a delivery report per [development-workflow.md](./development-workflow.md).
3. Pass lint and build validation.
4. Not introduce new unsupported professional information.
5. Be reviewed and merged through a Pull Request.

---

## Related Documents

| Document | Responsibility |
|----------|----------------|
| [professional-profile.md](./professional-profile.md) | Verified facts |
| [personal-brand.md](./personal-brand.md) | Tone and terminology |
| [project-brief.md](./project-brief.md) | Project vision and principles |
| [templates/case-study-template.md](./templates/case-study-template.md) | Case-study authoring |
| [templates/website-audit-template.md](./templates/website-audit-template.md) | Website audit (Issue #59) |

---

## Document Status

| Field | Value |
|---|---|
| Status | Initial version |
| Related Issue | #56 — Create Project Documentation |
| Last reviewed | 2026-07-25 |
| Maintainer | Maikel Salles |
