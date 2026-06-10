# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for rajgurung.me. Dark "Nocturne" design with warm amber accent, built with TanStack Start (React 19, SSR), TypeScript, and Tailwind CSS v4. The site has a homepage with hero + writing feed + projects strip, plus dedicated pages for writing, projects, hire, and CV.

## Key Commands

```bash
npm run dev        # Start dev server (Vite)
npm run build      # Production build (outputs to dist/)
npm run preview    # Preview production build
npm run lint       # ESLint
npm run format     # Prettier
```

## Architecture

### Stack
- TanStack Start (SSR framework on top of TanStack Router)
- React 19 + TypeScript
- Tailwind CSS v4 with custom design tokens (see src/styles.css)
- Vite 7
- shadcn/ui primitives (Radix UI)

### Routing (file-based via TanStack Router)
Routes live in `src/routes/`:
- `index.tsx` - Homepage (hero, writing feed, projects, hire CTA)
- `writing.tsx` - Layout wrapper for writing routes
- `writing.index.tsx` - All essays list
- `writing.$slug.tsx` - Individual essay (loads markdown)
- `projects.tsx` - Projects page
- `hire.tsx` - Hire page (experience, skills, testimonials)
- `cv.tsx` - CV page
- `__root.tsx` - Root layout (meta tags, error/404 handling)

### Content System
- `src/content/posts.ts` - Post metadata (slug, title, date, excerpt, readingTime, location) + eager markdown imports via Vite glob
- `src/content/posts/*.md` - Markdown files for each essay
- `src/content/projects.ts` - Project data
- `src/content/cv.ts` - CV data (experience, skills, education)

**Adding a new blog post:**
1. Create `src/content/posts/{slug}.md`
2. Add metadata entry to the `META` object in `src/content/posts.ts`

### Layout
- `src/components/site/Chrome.tsx` - Shell (Nav, Footer, AmbientBackdrop, SectionHeader)
- All pages wrap content in `<Shell>` for consistent nav/footer/backdrop

### Design System
Defined in `src/styles.css`:
- Colors: `--ink` (#06060a), `--ember` (#f5a524), `--ember-glow` (#fbbf24)
- Fonts: Space Grotesk (display), DM Sans (body)
- Custom animations: reveal-up, char-in, glow-pulse, line-grow, cursor-blink
- Film grain overlay via `.grain` utility
- `.prose-essay` class for markdown content styling

### Public Assets
- `public/raj-gurung-cv.pdf` - Downloadable CV
- `public/favicon.ico`
- `public/robots.txt`

## Engine Requirements
- Node.js >= 20 (22+ recommended)
- npm

## Git Commit Guidelines
- Do NOT add "Co-Authored-By: Claude" footer to commit messages
- Keep commit messages concise and descriptive
