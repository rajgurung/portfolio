import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Shell, SectionHeader } from "@/components/site/Chrome";
import { posts } from "@/content/posts";
import { projects } from "@/content/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raj Gurung — One step at a time" },
      {
        name: "description",
        content:
          "Senior Software Engineer. Essays on software, infrastructure, AI, and the long road between Nepal and the UK.",
      },
      { property: "og:title", content: "Raj Gurung — One step at a time" },
      {
        property: "og:description",
        content:
          "Senior Software Engineer. Essays on software, infrastructure, AI, and life between Nepal and the UK.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featuredEssays = posts.slice(0, 5);
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <Shell>
      <Hero />
      <Writing essays={featuredEssays} />
      <ProjectsStrip items={featuredProjects} />
      <HireBlock />
    </Shell>
  );
}

/* ───── Hero ───── */

function Hero() {
  const lines = ["RAJ", "GURUNG"];
  return (
    <section className="relative z-10 mx-auto max-w-[1100px] px-6 pt-10 pb-32 sm:pt-20 sm:pb-44">
      <div
        className="animate-reveal flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-foreground/45 mb-10"
        style={{ animationDelay: "100ms" }}
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-ember opacity-75 animate-ping" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ember" />
        </span>
        Senior Software Engineer · London, UK
      </div>

      <h1 className="font-display font-medium leading-[0.86] tracking-[-0.04em] text-[clamp(4.5rem,16vw,12rem)]">
        {lines.map((line, li) => (
          <span key={line} className="block overflow-hidden">
            <span className="inline-block">
              {line.split("").map((ch, ci) => (
                <span
                  key={`${li}-${ci}`}
                  className="animate-char inline-block"
                  style={{ animationDelay: `${150 + (li * line.length + ci) * 55}ms` }}
                >
                  {ch}
                </span>
              ))}
            </span>
          </span>
        ))}
      </h1>

      <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <p
          className="animate-reveal max-w-[46ch] text-pretty text-base sm:text-lg leading-relaxed text-foreground/70"
          style={{ animationDelay: "900ms" }}
        >
          15+ years building mission-critical platforms — gaming, housing,
          fraud detection, workforce systems. Recently shipping with Rails,
          Terraform, and Claude. Writing about engineering, AI, and the road
          between <span className="text-foreground">Nepal</span> and{" "}
          <span className="text-foreground">the UK</span>.
        </p>

        <div
          className="animate-reveal flex items-center gap-4"
          style={{ animationDelay: "1050ms" }}
        >
          <div className="h-px w-12 origin-left bg-ember animate-line" />
          <span className="font-display text-[13px] uppercase tracking-[0.3em] text-ember">
            One step at a time
          </span>
        </div>
      </div>
    </section>
  );
}

/* ───── Writing feed ───── */

function Writing({ essays }: { essays: typeof posts }) {
  return (
    <section className="relative z-10 mx-auto max-w-[1100px] px-6 pb-32">
      <SectionHeader index="01" label="Writing" caption="Recent essays" />
      <ul className="mt-10 flex flex-col">
        {essays.map((e, i) => (
          <EssayRow key={e.slug} essay={e} index={i + 1} />
        ))}
      </ul>
      <div className="mt-10 flex justify-end">
        <Link
          to="/writing"
          className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-foreground/55 hover:text-ember transition-colors"
        >
          All essays
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}

function EssayRow({ essay, index }: { essay: (typeof posts)[number]; index: number }) {
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
        params={{ slug: essay.slug }}
        className="relative grid grid-cols-[auto_1fr_auto] items-baseline gap-4 sm:gap-8 py-7 sm:py-9 px-1"
      >
        <span className="font-display text-[11px] uppercase tracking-[0.25em] text-foreground/35 tabular-nums">
          {String(index).padStart(2, "0")}
        </span>

        <div className="min-w-0">
          <h3 className="font-display text-xl sm:text-3xl font-medium tracking-tight text-balance text-foreground group-hover:text-ember-glow transition-colors">
            {essay.title}
          </h3>
          <p className="mt-2 sm:mt-3 max-w-[58ch] text-sm sm:text-[15px] leading-relaxed text-foreground/55 sm:max-h-0 sm:overflow-hidden sm:opacity-0 sm:translate-y-1 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100 group-hover:translate-y-0">
            {essay.excerpt}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] uppercase tracking-[0.22em] text-foreground/40">
            <span className="tabular-nums">{essay.date}</span>
            <span className="size-1 rounded-full bg-foreground/25" />
            <span>{essay.readingTime} read</span>
            <span className="size-1 rounded-full bg-foreground/25" />
            <span>{essay.location}</span>
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

/* ───── Projects ───── */

function ProjectsStrip({ items }: { items: typeof projects }) {
  return (
    <section className="relative z-10 mx-auto max-w-[1100px] px-6 pb-32">
      <SectionHeader index="02" label="Projects" caption="Things built lately" />
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {items.map((p) => (
          <div
            key={p.title}
            className="group relative overflow-hidden rounded-lg border border-foreground/10 bg-ink-soft/60 backdrop-blur-sm hover:border-ember/40 transition-colors"
          >
            {p.image && (
              <div className="overflow-hidden bg-ink-soft">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-36 object-contain opacity-80 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            )}
            <div className="p-6">
            <div className="flex items-baseline justify-between gap-3">
              <h4 className="font-display text-lg font-medium tracking-tight">
                {p.title}
              </h4>
              <span className="text-[10px] font-mono tabular-nums text-foreground/40 uppercase tracking-[0.2em]">
                {p.status ?? "live"}
              </span>
            </div>
            <p className="mt-2 text-sm text-foreground/55 leading-relaxed line-clamp-3">
              {p.description}
            </p>
            {(p.demo || p.github) && (
              <div className="mt-4 flex gap-4 text-[11px] uppercase tracking-[0.25em]">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ember hover:text-ember-glow transition-colors inline-flex items-center gap-1.5"
                  >
                    Live <span aria-hidden>↗</span>
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/55 hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                  >
                    Source <span aria-hidden>↗</span>
                  </a>
                )}
              </div>
            )}
            </div>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-px scale-x-0 origin-left bg-gradient-to-r from-ember/80 via-ember/20 to-transparent transition-transform duration-500 group-hover:scale-x-100"
            />
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-end">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-foreground/55 hover:text-ember transition-colors"
        >
          All projects
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}

/* ───── Hire ───── */

function HireBlock() {
  return (
    <section className="relative z-10 mx-auto max-w-[1100px] px-6 pb-40">
      <div className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-gradient-to-br from-ink-soft to-ink p-10 sm:p-14">
        <div
          aria-hidden
          className="absolute -top-32 -right-32 h-80 w-80 rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(245,165,36,0.6) 0%, transparent 70%)",
          }}
        />
        <div className="relative flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[42ch]">
            <span className="font-display text-[11px] uppercase tracking-[0.25em] text-ember">
              Currently
            </span>
            <h3 className="mt-3 font-display text-3xl sm:text-4xl font-medium tracking-tight text-balance">
              Available for hire — Senior / Staff engineering.
            </h3>
            <p className="mt-4 text-foreground/60 leading-relaxed">
              Distributed systems, Rails platforms, observability rollouts,
              and AI-assisted dev workflows. Open to contract or full-time.
            </p>
          </div>
          <div className="flex flex-col sm:items-end gap-3">
            <Link
              to="/hire"
              className="group inline-flex items-center gap-3 self-start rounded-full bg-ember px-7 py-3.5 font-display text-[12px] uppercase tracking-[0.25em] text-ink hover:bg-ember-glow transition-colors"
            >
              Hire me
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              to="/cv"
              className="text-[11px] uppercase tracking-[0.25em] text-foreground/55 hover:text-ember transition-colors"
            >
              Read the CV →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
