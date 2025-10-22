<div align="center">
  <h1>NARA Landing Page</h1>
  <p>Provider & Client marketing site built with Next.js App Router, Tailwind CSS, and Framer Motion.</p>
</div>

<p align="center">
  <a href="#overview"><strong>Overview</strong></a> ·
  <a href="#routes"><strong>Routes</strong></a> ·
  <a href="#getting-started"><strong>Getting Started</strong></a> ·
  <a href="#scripts"><strong>Scripts</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#development-notes"><strong>Notes</strong></a>
</p>

## Overview

This repository contains the NARA marketing site with two primary experiences:

- Provider landing page (index)
- Client landing page under `/clients`

The site uses the Next.js App Router with a shared design system, standardized Navbar/Footer, and motion-enhanced sections.

## Routes

- `/` – Provider landing page (see `components/home/landing.tsx`)
- `/clients` – Client landing page (see `components/home/client-homepage.tsx`)

Open Graph / social images are configured per route in the corresponding `layout.tsx` files.

## Getting Started

Clone the repo and install dependencies with your preferred package manager. This project uses `pnpm`:

```bash
pnpm install
pnpm dev
```

The app runs on `http://localhost:3000` by default.

## Scripts

```bash
# run dev server
pnpm dev

# build for production
pnpm build

# start production server (after build)
pnpm start

# lint
pnpm lint

# format (dry) / format and write
pnpm format
pnpm format:write
```

## Tech Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Radix UI primitives (popover, dialog, tooltip)


## Development Notes

- Pages vs Components: page entries live in `app/` (e.g., `app/page.tsx`, `app/clients/page.tsx`) and render composable components from `components/`.
- Metadata & Social: use `export const metadata` in `app/layout.tsx` and `app/clients/layout.tsx` to define titles, descriptions, and Open Graph/Twitter images.
- Animations: Framer Motion is used with simple `initial/animate/transition`. Prefer `easeOut` and short durations (200–300ms). For scroll entrances, avoid unreliable `whileInView` with server components; keep page entries as client components when necessary.
- Assets: App store badges are in `public/appstorebadge-black.svg` and `public/playstorebadge-black.svg`.
- Links: Placeholder legal links intentionally use `javascript:void(0)` to prevent scroll-to-top.
- Footer: Standardized at the page level for provider and client routes.

## Contributing

Create a branch and open a PR:

```bash
# create and switch to a new branch
git checkout -b feat/update-readme

# stage and commit changes
git add -A && git commit -m "docs: update README for NARA landing"

# push branch
git push -u origin feat/update-readme
```

---

© NARA. All rights reserved.


