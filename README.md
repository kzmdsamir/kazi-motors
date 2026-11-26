# Kazi Motors

Japanese reconditioned car-parts shop for Bangladesh — a production Next.js
web app (App Router + TypeScript + Tailwind CSS).

Mobile-first online shop: a searchable 32-part catalogue across 11
categories (price on request, the way the Dhaka trade works), an enquiry
list saved on the buyer's device, a chassis-number part finder, full
English / Bangla, and a Dholaikhal sourcing explainer. No backend, no
accounts, no payments — ordering details will be added soon.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Start the dev server                      |
| `npm run build`   | Production build (must pass before deploy)|
| `npm run start`   | Serve the production build                |
| `npm run typecheck` | TypeScript check, no emit               |

## Project structure

```
src/
  app/            App Router pages, layout, metadata, sitemap
  components/     Header, Hero, Catalog, PartCard, CartDrawer,
                  ChassisFinder, InfoSections, Footer, Toast
  context/        Language, cart (localStorage), catalogue filters,
                  theme, toast — one AppProvider
  data/           Typed parts catalogue (32 parts, 11 categories)
  lib/            English / Bangla strings
public/
  favicon.svg     robots.txt
```

## Design

Clean, popular e-commerce look (Daraz-style): white cards, clear product
grid, sticky header with search, category and model chips, strong orange
calls to action. One subtle playful touch only — the theme toggle icon
swings like a pendulum when tapped. Line icons only; no product photos
are used, so nothing on the shop is invented.

## Deploy (Vercel)

1. Import this repository in Vercel (Framework preset: Next.js).
2. Optional: set `NEXT_PUBLIC_SITE_URL` to the live domain so the
   sitemap is generated.
3. Deploy. No environment secrets are needed.

## Notes

- All part prices are confirmed on enquiry — nothing is invented.
- Parts are reconditioned, sourced from Japan via Dholaikhal.
- The enquiry list and chassis requests live in the buyer's browser
  (localStorage) — nothing is sent to a server.
