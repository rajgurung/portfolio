# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for rajgurung.me, built with React (Create React App). The site focuses on blogging with additional pages for CV, about, and projects. The primary content is blog posts stored as Markdown files.

## Key Commands

### Development
```bash
yarn start          # Start development server on localhost:3000
yarn build          # Create production build
yarn test           # Run tests in watch mode
```

### Deployment
```bash
yarn build:digitalocean  # Special build command for DigitalOcean deployment
                         # Installs all deps, builds, removes dev deps
```

## Architecture

### Routing Structure
The app uses React Router v6 with the following routes (see `src/App.js:28-38`):
- `/` and `/blogs` → Blog list page (primary landing)
- `/blogs/:slug` → Individual blog post detail
- `/about` → About page
- `/cv` → CV page with PDF viewer
- `/landing` → Alternative landing page (legacy)

### Blog System Architecture

**Two-layer content system:**

1. **Metadata layer** (`src/data/blogPosts.js`):
   - Array of post objects with `slug`, `title`, `date`, `excerpt`, `content`
   - Used for blog list rendering and post metadata
   - Must be updated manually when adding new posts

2. **Content layer** (`src/posts/*.md`):
   - Full Markdown files matching the slugs
   - Loaded dynamically in `BlogDetail.js:10-13` using dynamic imports
   - Rendered via `react-markdown` package

**Important:** When adding a new blog post, you must:
1. Create the `.md` file in `src/posts/` with slug as filename
2. Add corresponding entry to `blogPosts` array in `src/data/blogPosts.js`

### Component Structure

- `components/`: Reusable UI components
  - `Navbar.js`: Navigation bar (appears on all pages)
  - `BlogList.jsx`: Maps through `blogPosts` array, renders `BlogCard` for each
  - `BlogCard.jsx`: Individual blog post preview card
  - `About.js`, `Project.js`, `Experience.js`: Static content pages

- `pages/`: Route-level page components
  - `Blogs.js`: Container for blog list with centered layout
  - `BlogDetail.js`: Fetches and renders individual markdown posts
  - `CvPage.jsx`: PDF viewer for CV
  - `Landing.js`: Alternative landing page

### Styling
Multiple CSS approaches in use:
- Bootstrap CSS (`styelsheets/bootstrap.min.css`)
- Custom stylesheets in `src/styelsheets/` (note: typo "styelsheets" is intentional)
- Inline React styles (particularly in `Blogs.js` and `BlogDetail.js`)
- Import order in `App.js:1-9` matters for style precedence

## Dependencies

Key packages:
- `react-router-dom` v6: Client-side routing
- `react-markdown`: Renders markdown to React components
- `react-pdf` + `pdfjs-dist`: PDF viewing for CV page
- `react-scripts`: CRA tooling (build/dev/test)

## Engine Requirements
- Node.js >= 18
- Yarn >= 1.22

## Git Commit Guidelines
- Do NOT add "Co-Authored-By: Claude" footer to commit messages
- Keep commit messages concise and descriptive
