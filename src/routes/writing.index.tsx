import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, SectionHeader } from "@/components/site/Chrome";
import { posts } from "@/content/posts";
import { useRef, useState } from "react";

export const Route = createFileRoute("/writing/")({
  head: () => ({
    meta: [
      { title: "Writing — Raj Gurung" },
      {
        name: "description",
        content:
          "Essays on software, infrastructure, AI, and the long road between Nepal and the UK.",
      },
      { property: "og:title", content: "Writing — Raj Gurung" },
      {
        property: "og:description",
        content: "Essays on software, infrastructure, AI, and life between Nepal and the UK.",
      },
    ],
  }),
  component: WritingPage,
});

function WritingPage() {
  return (
    <Shell>
      <section className="relative z-10 mx-auto max-w-[1100px] px-6 pt-10 pb-16 sm:pt-16">
        <span className="font-display text-[11px] uppercase tracking-[0.3em] text-ember">
          The journal
        </span>
        <h1 className="mt-4 font-display text-5xl sm:text-7xl font-medium leading-[0.95] tracking-[-0.03em]">
          Writing.
        </h1>
        <p className="mt-6 max-w-[55ch] text-foreground/65 leading-relaxed">
          Notes from the desk — what I learn shipping software, what AI is doing
          to the craft, and the in-between of two countries.
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-[1100px] px-6 pb-32">
        <SectionHeader index="01" label="All essays" caption={`${posts.length} pieces`} />
        <ul className="mt-10 flex flex-col">
          {posts.map((p, i) => (
            <Row key={p.slug} index={i + 1} post={p} />
          ))}
        </ul>
      </section>
    </Shell>
  );
}

function Row({ post, index }: { post: (typeof posts)[number]; index: number }) {
  const ref = useRef<HTMLLIElement | null>(null);
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);

  return (
    <li
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setCoords({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseLeave={() => setCoords(null)}
      className="group relative border-t border-foreground/10 last:border-b"
    >
      {coords && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(220px circle at ${coords.x}px ${coords.y}px, rgba(245,165,36,0.10), transparent 70%)`,
          }}
        />
      )}
      <Link
        to="/writing/$slug"
        params={{ slug: post.slug }}
        className="relative grid grid-cols-[auto_1fr_auto] items-baseline gap-4 sm:gap-8 py-7 sm:py-9 px-1"
      >
        <span className="font-display text-[11px] uppercase tracking-[0.25em] text-foreground/35 tabular-nums">
          {String(index).padStart(2, "0")}
        </span>
        <div className="min-w-0">
          <h3 className="font-display text-xl sm:text-3xl font-medium tracking-tight text-balance text-foreground group-hover:text-ember-glow transition-colors">
            {post.title}
          </h3>
          <p className="mt-2 sm:mt-3 max-w-[58ch] text-sm sm:text-[15px] leading-relaxed text-foreground/55">
            {post.excerpt}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] uppercase tracking-[0.22em] text-foreground/40">
            <span className="tabular-nums">{post.date}</span>
            <span className="size-1 rounded-full bg-foreground/25" />
            <span>{post.readingTime} read</span>
            <span className="size-1 rounded-full bg-foreground/25" />
            <span>{post.location}</span>
          </div>
        </div>
        <span
          aria-hidden
          className="hidden sm:inline-flex items-center justify-center h-9 w-9 rounded-full border border-foreground/15 text-foreground/45 group-hover:border-ember group-hover:text-ember group-hover:translate-x-1 transition-all"
        >
          →
        </span>
      </Link>
    </li>
  );
}
