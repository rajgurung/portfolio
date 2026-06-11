import { createFileRoute } from "@tanstack/react-router";
import { Shell, SectionHeader } from "@/components/site/Chrome";
import { projects } from "@/content/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Raj Gurung" },
      {
        name: "description",
        content:
          "Selected side projects by Raj Gurung — voting platforms, ML stock analysis, Slack bots and more.",
      },
      { property: "og:title", content: "Projects — Raj Gurung" },
      {
        property: "og:description",
        content: "Selected side projects — voting platforms, ML stock analysis, bots and more.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Shell>
      <section className="relative z-10 mx-auto max-w-[1100px] px-6 pt-10 pb-16 sm:pt-16">
        <span className="font-display text-[11px] uppercase tracking-[0.3em] text-ember">
          The workshop
        </span>
        <h1 className="mt-4 font-display text-5xl sm:text-7xl font-medium leading-[0.95] tracking-[-0.03em]">
          Projects.
        </h1>
        <p className="mt-6 max-w-[55ch] text-foreground/65 leading-relaxed">
          Things I've built outside of work — some shipped, some shelved, all
          taught me something.
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-[1100px] px-6 pb-16">
        <SectionHeader index="01" label="Featured" caption="Live & in progress" />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {featured.map((p) => (
            <FeaturedCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1100px] px-6 pb-32">
        <SectionHeader index="02" label="Archive" caption="Tinkering, learning" />
        <ul className="mt-10 divide-y divide-foreground/10 border-y border-foreground/10">
          {rest.map((p) => (
            <li key={p.title} className="py-7 grid sm:grid-cols-[1fr_auto] gap-3 sm:gap-8">
              <div>
                <h3 className="font-display text-xl font-medium tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-1 max-w-[60ch] text-sm text-foreground/55 leading-relaxed">
                  {p.description}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-foreground/45">
                {p.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-foreground/10 px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Shell>
  );
}

function FeaturedCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-foreground/10 bg-ink-soft/60 backdrop-blur-sm hover:border-ember/40 transition-colors">
      {project.image && (
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        </div>
      )}
      <div className="p-7">
      <div className="flex items-baseline justify-between">
        <h3 className="font-display text-2xl font-medium tracking-tight">
          {project.title}
        </h3>
        {project.status && (
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/35">
            {project.status}
          </span>
        )}
      </div>
      <p className="mt-3 text-sm text-foreground/65 leading-relaxed">
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-foreground/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground/55"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-6 flex gap-5 text-[11px] uppercase tracking-[0.25em]">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-ember hover:text-ember-glow transition-colors inline-flex items-center gap-1.5"
          >
            Live <span aria-hidden>↗</span>
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-foreground/55 hover:text-foreground transition-colors inline-flex items-center gap-1.5"
          >
            Source <span aria-hidden>↗</span>
          </a>
        )}
      </div>
      </div>
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px scale-x-0 origin-left bg-gradient-to-r from-ember/80 via-ember/20 to-transparent transition-transform duration-500 group-hover:scale-x-100"
      />
    </div>
  );
}
