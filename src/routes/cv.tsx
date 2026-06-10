import { createFileRoute } from "@tanstack/react-router";
import { Shell, SectionHeader } from "@/components/site/Chrome";
import { cv } from "@/content/cv";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Raj Gurung" },
      {
        name: "description",
        content:
          "Senior Software Engineer with 10+ years on distributed systems. Indeed, Syft, Ai Corporation, In4System.",
      },
      { property: "og:title", content: "CV — Raj Gurung" },
      {
        property: "og:description",
        content: "10+ years on distributed systems — Indeed, Syft, Ai Corporation.",
      },
    ],
  }),
  component: CvPage,
});

function CvPage() {
  return (
    <Shell>
      <section className="relative z-10 mx-auto max-w-[900px] px-6 pt-10 pb-12 sm:pt-16">
        <span className="font-display text-[11px] uppercase tracking-[0.3em] text-ember">
          The résumé
        </span>
        <h1 className="mt-4 font-display text-5xl sm:text-7xl font-medium leading-[0.95] tracking-[-0.03em]">
          {cv.name}.
        </h1>
        <p className="mt-3 font-display text-lg text-foreground/65">{cv.title}</p>

        <div className="mt-6 flex flex-wrap gap-4 text-[11px] uppercase tracking-[0.22em] text-foreground/55">
          <a href={`mailto:${cv.email}`} className="hover:text-ember transition-colors">
            {cv.email}
          </a>
          <span className="text-foreground/25">·</span>
          <a href={cv.linkedin} target="_blank" rel="noreferrer" className="hover:text-ember transition-colors">
            LinkedIn
          </a>
          <span className="text-foreground/25">·</span>
          <a href={cv.github} target="_blank" rel="noreferrer" className="hover:text-ember transition-colors">
            GitHub
          </a>
        </div>

        <p className="mt-8 text-foreground/70 leading-relaxed text-pretty">
          {cv.summary}
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-[900px] px-6 pb-16">
        <SectionHeader index="01" label="Experience" caption="2012 — present" />
        <ol className="mt-10 flex flex-col gap-12">
          {cv.experience.map((r) => (
            <li key={r.company + r.dates} className="grid sm:grid-cols-[160px_1fr] gap-4 sm:gap-10">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember tabular-nums">
                  {r.dates}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-foreground/40">
                  {r.location}
                </p>
              </div>
              <div>
                <h3 className="font-display text-2xl font-medium tracking-tight">
                  {r.title} <span className="text-foreground/40">·</span>{" "}
                  <span className="text-ember">{r.company}</span>
                </h3>
                <p className="mt-2 text-sm text-foreground/55">{r.description}</p>
                <ul className="mt-4 space-y-2 text-[15px] text-foreground/75 leading-relaxed">
                  {r.bullets.map((b) => (
                    <li key={b} className="relative pl-5">
                      <span className="absolute left-0 top-[0.65em] size-1 rounded-full bg-ember/70" />
                      {b}
                    </li>
                  ))}
                </ul>
                {r.tech && (
                  <p className="mt-4 font-mono text-[11px] text-foreground/45">{r.tech}</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="relative z-10 mx-auto max-w-[900px] px-6 pb-16">
        <SectionHeader index="02" label="Skills" caption="Tools of the trade" />
        <dl className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-6">
          {Object.entries(cv.skills).map(([k, v]) => (
            <div key={k}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember">
                {k}
              </dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {v.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-foreground/10 px-2.5 py-1 text-[11px] text-foreground/65"
                  >
                    {t}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="relative z-10 mx-auto max-w-[900px] px-6 pb-32">
        <SectionHeader index="03" label="Education" caption="" />
        <ul className="mt-10 flex flex-col gap-6">
          {cv.education.map((e) => (
            <li key={e.degree} className="grid sm:grid-cols-[160px_1fr] gap-4 sm:gap-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember tabular-nums">
                {e.years}
              </p>
              <div>
                <p className="font-display text-lg">{e.degree}</p>
                <p className="text-sm text-foreground/55">{e.school}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Shell>
  );
}
