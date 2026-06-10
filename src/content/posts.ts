// Eagerly import all markdown posts as raw strings.
// Vite resolves these at build time; no runtime fetch needed.
const rawPosts = import.meta.glob("./posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export type PostMeta = {
  slug: string;
  title: string;
  date: string;       // human label e.g. "10 Jun 2026"
  iso: string;        // ISO date for sorting
  excerpt: string;
  readingTime: string;
  location: string;
};

const META: Record<string, Omit<PostMeta, "slug">> = {
  "why-i-decommissioned-aws": {
    title: "Why I Decommissioned AWS and Moved to Railway",
    date: "10 Jun 2026",
    iso: "2026-06-10",
    excerpt:
      "$36 burned in 10 days. 67 Terraform resources just to run a Rails app. I ran terraform destroy and moved to Railway.",
    readingTime: "9 min",
    location: "London",
  },
  "telemetry-claude-code": {
    title: "Telemetry Doesn't Have to Be Painful",
    date: "10 May 2026",
    iso: "2026-05-10",
    excerpt:
      "Years of Datadog experience, golden signals, Sidekiq queues — and how Claude Code plus Terraform made observability vendor-agnostic.",
    readingTime: "11 min",
    location: "London",
  },
  "end-of-hardcore-coding": {
    title: "AI Killed the Coding Star",
    date: "10 Jan 2026",
    iso: "2026-01-10",
    excerpt:
      "As of 2025, 800 million ChatGPT users. Cursor hit $1B revenue. 79% of developers already on board.",
    readingTime: "6 min",
    location: "London",
  },
  "big-bang-update": {
    title: "A Big Bang Update",
    date: "01 Oct 2025",
    iso: "2025-10-01",
    excerpt:
      "After my last post about colleagues being laid off, I did not expect to be writing this one so soon. But here I am, redundant.",
    readingTime: "5 min",
    location: "London",
  },
  "you-have-been-impacted": {
    title: "You've Been Impacted, Layoffs",
    date: "13 Jun 2025",
    iso: "2025-06-13",
    excerpt:
      "The room feels quieter with every goodbye. Their absence echoes louder than silence.",
    readingTime: "4 min",
    location: "London",
  },
  "decision-paralysis": {
    title: "Overcoming Decision Paralysis",
    date: "20 Apr 2025",
    iso: "2025-04-20",
    excerpt: "With knowledge comes clarity — or so you'd think.",
    readingTime: "3 min",
    location: "London",
  },
  "building-my-site": {
    title: "React + Vibes = This Site",
    date: "18 Apr 2025",
    iso: "2025-04-18",
    excerpt:
      "I'm getting things done in React, but I can't shake the feeling that I'm winging it.",
    readingTime: "3 min",
    location: "London",
  },
};

function slugFromPath(p: string): string {
  return p.replace("./posts/", "").replace(/\.md$/, "");
}

export const posts: PostMeta[] = Object.keys(rawPosts)
  .map((p) => {
    const slug = slugFromPath(p);
    const m = META[slug];
    if (!m) return null;
    return { slug, ...m };
  })
  .filter((x): x is PostMeta => x !== null)
  .sort((a, b) => (a.iso < b.iso ? 1 : -1));

export function getPostBySlug(slug: string): { meta: PostMeta; body: string } | null {
  const path = `./posts/${slug}.md`;
  const raw = rawPosts[path];
  const m = META[slug];
  if (!raw || !m) return null;
  // Strip leading H1 if present (we render title separately)
  const body = raw.replace(/^#\s+.*\n+/, "");
  return { meta: { slug, ...m }, body };
}
