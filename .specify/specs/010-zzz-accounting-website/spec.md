# Feature Specification: ZZZ Accounting Website

**Feature Branch**: `010-zzz-accounting-website`
**Created**: 2026-03-11
**Status**: Draft
**Input**: Conductor Brief — dark corporate brochure site inspired by *The Accountant*

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Homepage First Impression (Priority: P1)

A visitor navigates to the site. They see a dark, corporate homepage with the firm name "ZZZ Accounting," a professional tagline, and a clean navigation bar. The page feels like a real accounting firm — understated confidence, no gimmicks.

**Why this priority**: First impression determines whether anyone stays. The homepage IS the demo.

**Independent Test**: Navigate to `/` — page renders with hero section, navigation, and footer. Dark theme applied. No errors in console.

**Acceptance Scenarios**:

1. **Given** a visitor at the root URL, **When** the page loads, **Then** they see a hero with firm name, tagline, and CTA button on a dark background
2. **Given** a visitor on the homepage, **When** they look at the header, **Then** they see navigation links to all 4 pages
3. **Given** a visitor on the homepage, **When** they hover over interactive elements, **Then** they see smooth hover transitions (< 300ms)

---

### User Story 2 - Services Page (Priority: P1)

A visitor clicks "Services" from the nav. They see a grid or list of accounting services: tax strategy, forensic accounting, asset protection, financial consulting. Each service has a title, brief description, and an icon or visual element. The copy is straight-faced and professional.

**Why this priority**: Core content page — demonstrates layout craft and copywriting tone.

**Independent Test**: Navigate to `/services` — page renders with 4+ service cards. All text is professional accounting language with subtle thematic undertones.

**Acceptance Scenarios**:

1. **Given** a visitor on the Services page, **When** the page loads, **Then** they see 4+ distinct services with titles and descriptions
2. **Given** a visitor viewing a service card, **When** they hover over it, **Then** the card shows a subtle hover interaction
3. **Given** a visitor reading service descriptions, **When** they read carefully, **Then** at least one description contains a subtle movie reference

---

### User Story 3 - About Page (Priority: P2)

A visitor clicks "About." They see the firm's philosophy, history, and approach. References to "unconventional methods," "discretion," and "precision" woven into professional accounting language. No photos — clean typography and negative space.

**Why this priority**: Establishes the narrative depth and is where the movie references shine.

**Independent Test**: Navigate to `/about` — page renders with firm history, philosophy section, and consistent dark theme.

**Acceptance Scenarios**:

1. **Given** a visitor on the About page, **When** the page loads, **Then** they see firm philosophy and history sections
2. **Given** a visitor reading the About page, **When** they read carefully, **Then** at least one movie reference is present in the copy

---

### User Story 4 - Contact Page (Priority: P2)

A visitor clicks "Contact." They see a visual-only contact form and fictional office address. The address is a movie Easter egg opportunity. Form fields exist but don't submit.

**Why this priority**: Completes the brochure experience. Lower priority because it's simpler.

**Independent Test**: Navigate to `/contact` — page renders with form fields (name, email, message) and an address block.

**Acceptance Scenarios**:

1. **Given** a visitor on the Contact page, **When** the page loads, **Then** they see a contact form and office address
2. **Given** a visitor filling out the form, **When** they click submit, **Then** nothing happens (no error, no navigation — form is decorative)
3. **Given** a visitor reading the address, **When** they recognize the reference, **Then** the address ties to the movie

---

### User Story 5 - Navigation & Layout (Priority: P1)

Shared header and footer persist across all pages. Header contains firm logo/name and navigation links. Footer contains copyright and a subtle tagline. Client-side navigation between pages is instant.

**Why this priority**: Structural foundation — broken nav breaks everything.

**Independent Test**: Click each nav link — all 4 pages load without full page refresh. Header and footer are consistent across all pages.

**Acceptance Scenarios**:

1. **Given** a visitor on any page, **When** they click a nav link, **Then** the target page renders without full page reload
2. **Given** a visitor on any page, **When** they look at the footer, **Then** they see consistent copyright and footer content

---

### Edge Cases

- What happens when a user navigates to a non-existent route? → Custom 404 page with dark theme
- What happens on viewport < 768px? → Graceful degradation (readable, not broken — but not mobile-optimized)

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Site MUST render 4 pages: Home (`/`), Services (`/services`), About (`/about`), Contact (`/contact`)
- **FR-002**: All pages MUST share a common layout with persistent header and footer
- **FR-003**: Navigation MUST use client-side routing (Next.js Link component)
- **FR-004**: Site MUST export as fully static HTML/CSS/JS (no server required)
- **FR-005**: Contact form MUST be visual-only (no form action, no submission handler)
- **FR-006**: Color palette MUST use dark charcoal backgrounds with off-white text and muted gold accents
- **FR-007**: All interactive elements MUST have hover states with transitions ≤ 300ms
- **FR-008**: Site MUST contain at least 3 verifiable references to *The Accountant* (2016)
- **FR-009**: Custom 404 page MUST exist with consistent dark theme

### Key Entities

- **Service**: Title, description, icon identifier — displayed on Services page
- **Page**: Route path, title, meta description — used for navigation and SEO

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: `bun run build` completes with exit code 0 and produces static output
- **SC-002**: Lighthouse performance score > 90 on all pages
- **SC-003**: Zero console errors on any page load
- **SC-004**: All nav links resolve correctly (no 404s from internal navigation)
- **SC-005**: At least 3 distinct movie references identifiable in page content

## ISC Criteria

- [ ] ISC-001: 4 pages (Home, Services, About, Contact) render without errors
- [ ] ISC-002: `bun run build` completes with exit code 0 and produces `out/` directory
- [ ] ISC-003: GitHub Actions workflow file exists at `.github/workflows/pages.yml`
- [ ] ISC-004: All pages share consistent header/footer layout
- [ ] ISC-005: Color palette uses dark charcoal backgrounds (#1a1a1a-#2a2a2a range) with light text
- [ ] ISC-006: At least 3 verifiable references to *The Accountant* in page content
- [ ] ISC-007: No `fetch()` or API calls in any page component
- [ ] ISC-008: Hover states exist on all interactive elements (buttons, links, cards)

## Interface Contracts

```typescript
// app/layout.tsx — Root layout
export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element
// Wraps all pages with <Header /> and <Footer />

// components/Header.tsx
interface NavLink {
  label: string;
  href: string;
}
const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// components/ServiceCard.tsx
interface ServiceCardProps {
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

// next.config.ts
const config = { output: "export" };
```

## Concrete Defaults

| Parameter | Value | Rationale |
|-----------|-------|-----------|
| Background primary | #1a1a1a | Dark corporate, not pure black |
| Background secondary | #242424 | Cards, sections — subtle contrast |
| Text primary | #f5f5f0 | Off-white, warm tone |
| Text secondary | #a0a0a0 | Muted for supporting text |
| Accent | #c9a84c | Muted gold — professional authority |
| Accent hover | #d4b55a | Slightly brighter on interaction |
| Font | Inter | Clean, geometric, corporate |
| Max width | 1200px | Standard brochure width |
| Hover transition | 200ms ease | Quick but perceptible |
| Section padding | 80px vertical | Generous breathing room |

## Deployment

- **Primary:** Service Dashboard (Docker container via `~/local/services/`)
- **Secondary:** GitHub Pages via Actions workflow
- **Service registration:** Register in `~/.claude/skills/ServiceDashboard/Assets/service-registry.yaml`
- **Verification:** Browser skill against Tailscale TLS URL from registry

## Boundaries

- Always: Use semantic HTML, maintain dark theme, keep copy straight-faced and professional
- Ask first: Adding pages beyond the 4 specified, changing color palette, adding any JS animation library
- Never: Add server logic, make forms functional, use stock photos, break the "real firm" illusion
