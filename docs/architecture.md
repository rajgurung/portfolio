# Architecture

The site is built with TanStack Start (SSR on top of TanStack Router), React 19, TypeScript, Tailwind CSS v4, and Vite 7, with shadcn/ui (Radix) primitives.

## Project structure

```
src/
  routes/            file-based routes (TanStack Router)
    __root.tsx       root layout, meta tags, error and 404 handling
    index.tsx        homepage (hero, writing feed, projects, hire CTA)
    writing.tsx      layout wrapper for writing routes
    writing.index.tsx   all essays list
    writing.$slug.tsx   individual essay (loads markdown)
    projects.tsx     projects page
    hire.tsx         hire page (experience, skills, testimonials)
    cv.tsx           CV page
  components/
    site/Chrome.tsx  shell: Nav, Footer, AmbientBackdrop, SectionHeader
    ui/              shadcn/ui primitives
  content/
    posts.ts         post metadata + eager markdown imports (Vite glob)
    posts/*.md       markdown source for each essay
    projects.ts      project data
    cv.ts            CV data (experience, skills, education)
  styles.css         design tokens, light/dark themes, animations, prose styles
public/
  raj-gurung-cv.pdf  downloadable CV
  images/            project screenshots and company logos
```

## Routing

Routes are file-based via TanStack Router. Every page wraps its content in `<Shell>` (from `src/components/site/Chrome.tsx`) for consistent nav, footer, and ambient backdrop.

## Content system

Blog posts live as Markdown in `src/content/posts/` and are paired with metadata in `src/content/posts.ts`. The metadata file eagerly imports the Markdown via a Vite glob.

To add a new post:

1. Create `src/content/posts/{slug}.md`
2. Add a metadata entry to the `META` object in `src/content/posts.ts` (slug, title, date, excerpt, readingTime, location)

Projects and CV data are plain TypeScript modules (`projects.ts`, `cv.ts`).

## Design system

Tokens and themes are defined in `src/styles.css`:

- Colors: `--ink` (#06060a), `--ember` (#f5a524), `--ember-glow` (#fbbf24)
- Fonts: Space Grotesk (display), DM Sans (body)
- Light and dark themes via `.light` / `.dark` token overrides
- Animations: reveal-up, char-in, glow-pulse, line-grow, cursor-blink
- Film-grain overlay via the `.grain` utility
- `.prose-essay` for Markdown content styling
