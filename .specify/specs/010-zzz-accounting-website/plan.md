# Implementation Plan: ZZZ Accounting Website

**Branch**: `010-zzz-accounting-website` | **Date**: 2026-03-11 | **Spec**: `spec.md`

## Summary

Static brochure website for fictional accounting firm "ZZZ Accounting," inspired by *The Accountant* (2016). Next.js 15 App Router with static export, 4 pages (Home, Services, About, Contact), dark corporate theme, subtle movie Easter eggs. Deploys to service-dashboard and GitHub Pages.

## Technical Context

**Language/Version**: TypeScript 5.x
**Primary Dependencies**: Next.js 15, React 19, Tailwind CSS v4, shadcn/ui, Lucide icons
**Storage**: N/A (static site)
**Testing**: Playwright (build verification), manual Lighthouse
**Target Platform**: Static HTML/CSS/JS served via Docker (service-dashboard) and GitHub Pages
**Project Type**: Static web application
**Performance Goals**: Lighthouse > 90, zero runtime API calls
**Constraints**: Static export only, no server logic, desktop-optimized (1280px+)
**Scale/Scope**: 4 pages, ~15 components

## Project Structure

### Source Code (repository root)

```text
app/
├── layout.tsx           # Root layout (Header + Footer wrapper)
├── page.tsx             # Home page
├── not-found.tsx        # Custom 404
├── globals.css          # Tailwind imports + custom properties
├── services/
│   └── page.tsx         # Services page
├── about/
│   └── page.tsx         # About page
└── contact/
    └── page.tsx         # Contact page

components/
├── ui/                  # shadcn/ui components (Button, Card, Input, etc.)
├── Header.tsx           # Site header with nav
├── Footer.tsx           # Site footer
├── Hero.tsx             # Homepage hero section
├── ServiceCard.tsx      # Service display card
└── ContactForm.tsx      # Visual-only contact form

lib/
├── data.ts              # Static content (services, copy, addresses)
└── utils.ts             # shadcn cn() utility

public/
└── favicon.ico

next.config.ts           # output: 'export'
tailwind.config.ts       # Dark theme tokens
components.json          # shadcn/ui config
package.json
tsconfig.json
```

## Dependencies & Execution Order

### Phase 1: Setup → Phase 2: Layout → Phase 3-6: Pages (parallel-capable) → Phase 7: Deploy → Phase 8: Polish

Single implementer: execute sequentially P1 first, then P2 pages.
