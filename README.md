# Project Art Group — Website (Mock)

A Next.js + Tailwind mock of the Project Art Group site, built to host on Vercel
before connecting the real `projectartplus.co.id` domain.

## What's here

- `/` — Home page: Project Art Group overview and the 4 studios (Project Art
  Corporate, Project Art Plus, Prime Project, Oneway Party Idea)
- `/corporate` — Project Art Corporate (PAC), built out in full: positioning,
  process, target clients, selected client names, and contact details

The other three studios currently only have a card on the homepage (name +
one-line description, no dead links) since PAC is the focus for now. Give me
the word when you want one of them turned into a full page too.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to vercel.com → sign in with GitHub → "Add New Project" → import this repo.
3. Vercel auto-detects Next.js — just click Deploy.
4. You'll get a free `your-project.vercel.app` URL immediately.
5. When ready, go to Project Settings → Domains in Vercel and add
   `projectartplus.co.id`, then update the DNS records at your registrar.

## Content notes

- Copy is grounded in real PAC facts (founded 2002, "Trust is a must," the
  7-step process, real past clients, real contact info for Glenn). No fee
  figures are published on the public pages — those stayed internal.
- No brand assets (logos) were available, so business names are set in type
  rather than as logo images. Drop real logo files into `/public` and swap
  them in `Nav.tsx`, `Footer.tsx`, and the homepage business cards whenever
  you have them.
- Fonts (Fraunces + Work Sans) are self-hosted via `@fontsource`, so there's
  no external font-loading dependency at build or runtime.
