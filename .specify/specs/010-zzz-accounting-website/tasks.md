# Tasks: ZZZ Accounting Website

**Input**: `plan.md`, `spec.md`

## Phase 1: Setup

- [ ] T001 Initialize Next.js 15 project with Bun (`bun create next-app`), configure `next.config.ts` with `output: 'export'`
- [ ] T002 Configure Tailwind CSS v4 with dark theme custom properties (colors from Concrete Defaults)
- [ ] T003 Initialize shadcn/ui (`bunx shadcn@latest init`), install Button, Card, Input components
- [ ] T004 Create `lib/utils.ts` with `cn()` helper
- [ ] T005 Create `lib/data.ts` with all static content (services list, firm copy, address, Easter eggs)

**Checkpoint**: `bun run dev` starts, blank page renders with dark background

---

## Phase 2: Layout Foundation (US5 - Navigation & Layout, P1)

**Goal**: Shared layout with header navigation and footer across all pages

- [ ] T006 [US5] Create `components/Header.tsx` — firm name/logo, nav links to 4 pages, dark theme
- [ ] T007 [US5] Create `components/Footer.tsx` — copyright, subtle tagline, consistent dark theme
- [ ] T008 [US5] Create `app/layout.tsx` — root layout wrapping Header + children + Footer
- [ ] T009 [US5] Create `app/globals.css` — Tailwind imports, CSS custom properties for theme tokens
- [ ] T010 [US5] Create `app/not-found.tsx` — custom 404 with dark theme

**Checkpoint**: Navigate between routes — header/footer persist, links work, dark theme consistent

---

## Phase 3: Homepage (US1 - First Impression, P1) 🎯 MVP

**Goal**: Hero section with firm name, tagline, CTA. First impression establishes the corporate aesthetic.

- [ ] T011 [US1] Create `components/Hero.tsx` — firm name, professional tagline, CTA button with hover state
- [ ] T012 [US1] Create `app/page.tsx` — Hero + brief value proposition section + services teaser

**Checkpoint**: Homepage renders with hero, dark theme, hover states on CTA. Feels like a real firm.

---

## Phase 4: Services Page (US2 - Services, P1)

**Goal**: Grid of accounting services with professional copy and subtle movie references

- [ ] T013 [US2] Create `components/ServiceCard.tsx` — title, description, Lucide icon, hover interaction
- [ ] T014 [US2] Create `app/services/page.tsx` — page header + grid of ServiceCards from `lib/data.ts`

**Checkpoint**: Services page renders 4+ services with hover states. At least one description contains a movie reference.

---

## Phase 5: About Page (US3 - About, P2)

**Goal**: Firm philosophy and history with movie references woven into professional copy

- [ ] T015 [US3] Create `app/about/page.tsx` — firm philosophy, history section, "unconventional methods" copy

**Checkpoint**: About page renders with philosophy and history. Movie references present in copy.

---

## Phase 6: Contact Page (US4 - Contact, P2)

**Goal**: Visual-only contact form and fictional office address (Easter egg)

- [ ] T016 [US4] Create `components/ContactForm.tsx` — name, email, message fields, non-functional submit button
- [ ] T017 [US4] Create `app/contact/page.tsx` — ContactForm + fictional address block (movie reference)

**Checkpoint**: Contact page renders with form and address. Form submit does nothing. Address is a movie reference.

---

## Phase 7: Deployment

- [ ] T018 Create `.github/workflows/pages.yml` — GitHub Actions workflow for static export to GitHub Pages
- [ ] T019 Create `Dockerfile` + `compose.yaml` for service-dashboard deployment (Nginx serving static export)
- [ ] T020 Create `Makefile` with `dev`, `build`, `stop` targets
- [ ] T021 Register in service-dashboard registry and deploy to `~/local/services/zzz-accounting/`

**Checkpoint**: `bun run build` succeeds. Service runs on service-dashboard. GitHub Actions workflow exists.

---

## Phase 8: Polish & Verification

- [ ] T022 Verify all 8 ISC criteria pass
- [ ] T023 Verify Lighthouse performance > 90
- [ ] T024 Audit all 3+ movie references (document which are present)
- [ ] T025 Browser screenshot via Tailscale URL from service-dashboard
- [ ] T026 Final commit to feature branch, merge to main

---

## Execution Order

```
T001-T005 (Setup) → T006-T010 (Layout) → T011-T012 (Home) → T013-T014 (Services)
                                        → T015 (About) → T016-T017 (Contact)
                                        → T018-T021 (Deploy) → T022-T026 (Polish)
```

Pages (Phases 3-6) are parallel-capable but will execute sequentially with single implementer, priority order.
