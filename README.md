# Khushi Panwar — Portfolio

A production-ready personal portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion. Every project, skill, blog post, certificate, and achievement is modeled as typed data — so the site scales to dozens of projects across 5 domains and their subcategories without dozens of hand-written pages.

## Why it's built this way

The brief asked for a dedicated page per project, organized into domains and subcategories, each with a long list of standard sections (overview, problem, solution, workflow, tech stack, features, challenges, results, related projects). Hand-writing ~35 nearly-identical page components would be unmaintainable — every content edit would mean digging through JSX. Instead:

- **One typed `Project` shape** (`src/types/index.ts`) describes every project.
- **One data file** (`src/data/projects.ts`) holds all project content.
- **Two dynamic routes** (`/projects/:domain` and `/projects/:domain/:id`) render *any* domain or project from that data.

To add a new project: add one object to `src/data/projects.ts`. No new files, no new routes.

## Domain & subcategory taxonomy

Each of the 5 domains (`src/data/domains.ts`) declares its own `subcategories` list, and every project (`src/data/projects.ts`) has a `subcategory` field tagging it into one of its domain's buckets. The domain page (`/projects/:domain`) renders these as filter chips automatically — there's no separate filter config to maintain. If you add a new subcategory to a domain, just start tagging projects with it; the chip (and its live count) appears on its own.

| Domain | Subcategories |
|---|---|
| Data Analytics | Dashboards, SQL, Power BI, Excel, EDA, Case Studies |
| Data Science | Statistics, Feature Engineering, Predictive Models, Time Series, Projects |
| Machine Learning | Regression, Classification, Clustering, Model Evaluation, Deployment |
| Artificial Intelligence | Generative AI, AI Agents, RAG, Prompt Engineering, LLM Projects |
| Deep Learning | CNN, RNN/LSTM, Transformers, Computer Vision |

## Tech stack

| Layer | Choice |
|---|---|
| Build tool | Vite |
| Framework | React 19 + TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme`, see `src/index.css`) |
| Animation | Framer Motion |
| Routing | React Router v7, with `React.lazy` code-splitting per route |
| Icons | lucide-react (general icons) + react-icons (social/brand logos — lucide dropped brand marks) |
| Contact form | EmailJS |
| Markdown | react-markdown (blog post bodies) |

## Design system

- **Palette**: graphite-black background (`#0B0E14`) with a dual accent — signal amber (`#F5A524`) and data teal (`#2DD4BF`) — plus a light theme swap via `[data-theme='light']`. All tokens live in `src/index.css` under `@theme`.
- **Type**: Space Grotesk (display), Inter (body), JetBrains Mono (stats, labels, code — used functionally for data readouts, not decoration).
- **Signature element**: the hero's animated "signal chart" (`src/components/ui/SignalChart.tsx`) — a self-drawing growth-line SVG standing in for a career trajectory, plus a quiet node-graph canvas backdrop (`ParticleBackground.tsx`).

## Getting started

```bash
npm install
cp .env.example .env   # then fill in your EmailJS keys — see below
npm run dev
```

Open http://localhost:5173.

## Replacing placeholder content

Everything you need to personalize lives in `src/data/`:

| File | What to edit |
|---|---|
| `profile.ts` | Your name, email, résumé file, social links |
| `projects.ts` | Every project across all 5 domains — swap in real screenshots, GitHub/demo links |
| `skills.ts` | Skill categories and proficiency levels |
| `timeline.ts` | Education and experience entries |
| `certificates.ts` | Certificates — issuer, date, credential URL |
| `achievements.ts` | Hackathons, competitions, academic honors |
| `blogs.ts` | Blog posts (Markdown supported in `content`) |

Project images point at `/projects/placeholder.svg` — drop real screenshots into `public/projects/` and update the `image` field per project. Your résumé PDF should be placed at `public/resume.pdf` (the Download button already points there — a placeholder résumé generated from the site's own data ships by default so the button isn't broken out of the box).

### Adding your photo

The hero and About page show a professional photo, currently a placeholder monogram at `public/profile-photo.svg`. To use your real photo:

1. Add your photo file to `public/` — e.g. `public/profile-photo.jpg`.
2. Update `photo` in `src/data/profile.ts` to point at it: `photo: '/profile-photo.jpg'`.
3. A vertical (4:5 or portrait) photo works best — the hero crops it to that ratio with `object-cover`.

## EmailJS setup (Contact form)

1. Create a free account at emailjs.com.
2. Add an email service and a template with fields matching the form: `user_name`, `user_email`, `subject`, `message`.
3. Copy your Service ID, Template ID, and Public Key into `.env`:

```
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx
```

Without these set, the form will show a friendly error instead of failing silently.

## Project structure

```
src/
  components/
    layout/       Navbar, Footer, Layout (route shell)
    ui/            Button, SectionHeading, Loader, ScrollProgress, BackToTop,
                    ParticleBackground, SignalChart
    ProjectCard.tsx, DomainCard.tsx
  context/          ThemeContext (dark/light, persisted to localStorage)
  data/             All content — profile, domains, projects, skills, timeline,
                    certificates, achievements, blogs
  hooks/            useScrollProgress, useScrollToTop
  lib/              icons.ts (tree-shakeable lucide map), socialIcons.tsx
  pages/            One file per route — see App.tsx for the route table
  types/            Shared TypeScript interfaces for every data model
```

## Performance notes

- Every route is a separate lazy-loaded chunk (`React.lazy` in `App.tsx`).
- Icons are imported by explicit name (not `import *`), so unused lucide icons are tree-shaken out of the bundle.
- Images use `loading="lazy"`.
- `prefers-reduced-motion` is respected globally (see `src/index.css`).

## Deployment

### Vercel

1. Push this repo to GitHub.
2. Import it at vercel.com/new — Vercel auto-detects Vite.
3. Add your three `VITE_EMAILJS_*` variables under Project Settings → Environment Variables.
4. Deploy. Framework preset: **Vite**, build command `npm run build`, output directory `dist`.

### GitHub Pages

1. Install the deploy helper:
   ```bash
   npm install -D gh-pages
   ```
2. In `vite.config.ts`, set `base` to your repo name (skip this if deploying to a custom domain or a `username.github.io` root repo):
   ```ts
   export default defineConfig({
     base: '/your-repo-name/',
     // ...rest of config
   })
   ```
3. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Because this is a single-page app with client-side routing, GitHub Pages needs a fallback so deep links (e.g. `/projects/sql`) don't 404 on refresh. Copy `dist/index.html` to `dist/404.html` as part of your build, or add a small redirect script — this is the standard SPA-on-Pages workaround.
5. Run:
   ```bash
   npm run deploy
   ```
6. Enable Pages in your repo settings, pointing at the `gh-pages` branch.

## What's still a placeholder

Search the codebase for `TODO` and `your-` to find every spot that needs a real value: social links, email, résumé PDF, certificate issuers/dates, education institution names, and project screenshots. The project *content* itself (titles, tech stacks, workflow steps, results) is written from your real projects — CareerIQ, the resume-intelligence pipeline, the Kafka/Postgres sales analytics pipeline, DataPath Notes — plus realistic sample entries for the domains that needed more projects to fill out the brief (Excel dashboards, SQL/Power BI exercises, ML models, Python scripts). Swap those samples for your actual work as you build it out.
