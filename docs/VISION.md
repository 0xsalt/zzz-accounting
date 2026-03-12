# Project Vision: ZZZ Accounting

## The Problem

Most developer portfolio sites are either generic templates or over-engineered toys. Neither demonstrates what actually matters -- UI craft, design taste, and the ability to build something that feels real. A portfolio piece should look like it belongs in production. It should feel polished and intentional and atmospheric. Not just technically functional.

## Why Now

We need a showcase project for the current web stack -- Next.js 15, Tailwind v4, shadcn/ui, Bun. The concept is strong enough to be memorable in a sea of todo apps and weather dashboards.

## Success Headline

"Slick themed site with great UI craft -- wait, is this place real?"

## Where Intelligence Lives

N/A. Deterministic system. Purely static site with no AI component.

## Target User

Developer peers and community members who appreciate both technical craft and creative execution. People who browse portfolio sites, GitHub demos, and design showcases.

## Success Metrics

1. A viewer cannot immediately tell it's a demo. It reads as a real firm's site for at least 10 seconds.
2. Someone catches the subtle Easter eggs and grins.
3. The typography, spacing, and micro-interactions feel intentional. Zero "template energy."

## What This Is NOT

- Not a real accounting tool. No calculators, no invoice generators, no financial logic. It's a brochure site even if it's a very good one.
- Not a backend project. No auth, no database, no server logic. Purely static export.
- Not an animation showcase. Tasteful micro-interactions only. No scroll-jacking, no parallax overload, no loading spinners for effect.
- Not mobile-first. Desktop is the showcase. Responsive is nice-to-have, not the design driver.

## Constraints

- Static site via Next.js static export
- No runtime API dependencies beyond the optional contact form endpoint
- Must deploy to GitHub Pages
- Desktop-optimized viewport (1280px+)
- No runtime JavaScript dependencies beyond React

## The Gut Check

Someone browses to the site. Clean corporate aesthetic. Professional services listed with precise understated copy. Everything feels legitimate -- the kind of firm that handles offshore accounts and doesn't advertise. Then they notice a detail. The address. A name. The tagline. They look closer. "Wait... is this place real?" That's when the craft lands.

## Anti-Drift Criteria

- If a proposed feature requires a server or database, we've drifted
- If a proposed feature adds a functional accounting tool like a calculator or form processor, we've drifted
- If a proposed animation takes more than 300ms or requires scroll-jacking, we've drifted
- If mobile layout work exceeds 20% of total effort, we've drifted
- If the site stops looking like a real firm's site, we've drifted
