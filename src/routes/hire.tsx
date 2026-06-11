import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, SectionHeader } from "@/components/site/Chrome";
import { cv } from "@/content/cv";
import { projects } from "@/content/projects";
import { Linkedin } from "lucide-react";

export const Route = createFileRoute("/hire")({
  head: () => ({
    meta: [
      { title: "Hire Raj Gurung — Senior Software Engineer & Technical Partner" },
      {
        name: "description",
        content:
          "Available for hire. 15 years building systems at scale — distributed architectures, performance, observability, and AI-assisted dev workflows.",
      },
      { property: "og:title", content: "Hire Raj Gurung — Senior / Staff Engineering" },
      {
        property: "og:description",
        content:
          "Pragmatic architecture, production observability, and teams that own their systems end-to-end. Open to contract or full-time.",
      },
    ],
  }),
  component: HirePage,
});

const skills = [
  { e: "💎", l: "Ruby" },
  { e: "🛤️", l: "Rails" },
  { e: "⚗️", l: "Elixir" },
  { e: "🔥", l: "Phoenix" },
  { e: "🐘", l: "PostgreSQL" },
  { e: "📦", l: "Redis" },
  { e: "☁️", l: "AWS" },
  { e: "📨", l: "Kafka" },
  { e: "❄️", l: "Snowflake" },
  { e: "⚙️", l: "Sidekiq" },
  { e: "⚛️", l: "React" },
  { e: "📜", l: "JavaScript" },
  { e: "📘", l: "TypeScript" },
  { e: "🐳", l: "Docker" },
  { e: "🔄", l: "CI/CD" },
  { e: "🌐", l: "Distributed Systems" },
];

const testimonials = [
  {
    quote:
      "I had the privilege of managing Raj for a few years at Indeed Flex. I watched him grow from a highly capable engineer to a strong colleague enabler. Raj is the rare engineer who is as aware of the human element of software development as he is the technical. During our time together, I was impressed by his skill in breaking down work according to the technical aspects while also considering the people on both the implementation and user sides. For example, during our work on the Service Excellence team, Raj was more than capable of triaging any issue that arrived on our desk. He could use his extensive knowledge to correctly diagnose the problem and highlight likely solutions, ready for another engineer to pick up. Additionally, he would consistently consider how quickly an issue could be patched in order to unblock the user who had reported it. This two-tier approach — enabling his colleagues while ensuring users were also unblocked — allowed us to make a significant impact on our incoming support issues, freeing up engineers for deeper work. Beyond that, Raj is also a solid mentor, having successfully onboarded many new engineers into the team, while also working closely with less senior engineers to help them grow and progress. Raj embodies the Tech Lead attitude, and I wouldn't hesitate to work with him again.",
    author: "Jonathan Barrett",
    role: "Software Engineering Manager · Indeed",
    linkedin: "https://www.linkedin.com/in/jonathan-e-barrett/",
  },
  {
    quote:
      "Working with Raj has been an absolute pleasure. He is not only a highly talented backend engineer, but also the kind of teammate that every group wishes to have. His technical skills are outstanding — from designing robust architectures to solving complex challenges with creativity and precision. Raj has an impressive ability to balance writing clean, maintainable code with delivering practical solutions that move projects forward.",
    author: "Francisco Javier López",
    role: "Staff Backend Engineer",
    linkedin: "https://www.linkedin.com/in/fjlopez/",
  },
  {
    quote:
      "Raj is an exceptional engineering partner — proactive, responsive, and always willing to jump in to help solve problems. He brings clarity to complex situations, asks the right questions, and ensures everyone is aligned before moving forward.",
    author: "Palak Jain",
    role: "Senior Product Manager",
    linkedin: "https://www.linkedin.com/in/palak13/",
  },
  {
    quote:
      "I worked alongside Raj during our time at Indeed and I couldn't have asked for a better colleague to run ideas past. We worked together on the Agency team when I joined and I remember he was always willing to give a helping hand in my early days. He presented a deep and knowledgeable insight of the system and was ready to walk me through everything with patience.",
    author: "Adrian Booth",
    role: "Software Developer",
    linkedin: "https://www.linkedin.com/in/adrianfbooth/",
  },
  {
    quote:
      "I had the pleasure to work with Raj during my time at Indeed Flex. He is everything you'd want in a software engineer: highly technically skilled and caring for his craft, but also a thoughtful communicator, and an empathetic human being. Any team or organisation would be lucky to have him.",
    author: "Gosha Tcherednitchenko",
    role: "Full-Stack Software Engineer",
    linkedin: "https://www.linkedin.com/in/goshatch/",
  },
  {
    quote:
      "I had the pleasure of working with Raj, and I can confidently say he is an exceptional software engineer. Technically strong and highly dependable, Raj consistently delivers high-quality work while maintaining a collaborative and supportive attitude. He's a true team player, always eager to help others, share knowledge and contribute to the success of the team. I would gladly work with him again and highly recommend him to any team looking for a talented and reliable engineer.",
    author: "Aliki Giakou",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/alikigiakou/",
  },
  {
    quote:
      "Raj is one of the best back-end developers I have ever worked with, and it was always a pleasure to collaborate with him on the same projects. He is not only highly knowledgeable and helpful but also an exceptional team player and a great person to work with. I was particularly impressed by his ability to lead cross-functional teams, ensuring smooth collaboration between different departments and driving projects to successful completion. Any company would be fortunate to have Raj on their team, both for his technical expertise and his leadership skills.",
    author: "Boris Jakubik",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/boris-jakubik/",
  },
  {
    quote:
      "I worked with Raj on a Ruby project. He has great skills there, and is very easygoing. Raj has deep knowledge of Ruby on Rails — he can solve any issue within minutes. In addition he managed meetings for the team, and has great ability to deal with his peers. I was very glad working with him on the team, and for sure I would work with him again.",
    author: "Bhanu Vaddi",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/bhanuvaddi/",
  },
  {
    quote:
      "I had the pleasure of working closely with Raj for over two and a half years, and honestly, he's one of those engineers who just makes everything better. What struck me most about Raj is how he combines deep technical expertise with genuine leadership. He took on the SET leader role and didn't just manage, he actually improved how we worked. The handover template he created? Game-changer. The playbooks he helped build? We still use them. These aren't the flashy things that get celebrated, but they're the things that actually make a team function well. Raj has this rare ability to understand complex business logic and then build elegant solutions around it. Whether it was the agency cascade logic, allocation prediction services, or client management systems, he didn't just code features, he really understood the problems we were solving. His work on the Cascade Brief showed how effectively he can collaborate with cross-functional teams and actually get things done. But here's what I appreciated most: Raj is genuinely helpful. He's the person who'll jump on a call when you're stuck, who'll take the time to explain something properly, who makes you feel like your questions matter. He's proactive approach to collaboration is what makes someone invaluable to a team. Any team would be lucky to have Raj. He brings technical skill, yes, but also the kind of thoughtful leadership and collaborative spirit that lifts everyone around him.",
    author: "David Silva",
    role: "Senior Backend Engineer · Indeed",
    linkedin: "https://www.linkedin.com/in/davidslv/",
  },
];

function HirePage() {
  return (
    <Shell>
      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-[1100px] px-6 pt-10 pb-24">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] uppercase tracking-[0.28em] text-foreground/55">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-70" />
            <span className="relative inline-flex size-2 rounded-full bg-ember" />
          </span>
          Currently at Hexarad
          <span className="size-1 rounded-full bg-foreground/25" />
          <span>London, UK · GMT</span>
          <span className="hidden sm:inline size-1 rounded-full bg-foreground/25" />
          <span className="hidden sm:inline">Open to conversations</span>
        </div>

        <h1 className="mt-8 font-display text-[clamp(3rem,9vw,7.5rem)] font-medium leading-[0.92] tracking-tight text-balance">
          Raj <span className="text-ember">Gurung</span>.
        </h1>
        <p className="mt-4 font-display text-xl sm:text-2xl text-foreground/75 max-w-[42ch]">
          Senior Software Engineer & Technical Partner.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-[1.4fr_1fr] items-start">
          <p className="text-foreground/70 leading-relaxed text-[15px]">
            I build systems that need to work at scale. Over{" "}
            <span className="text-foreground">15 years</span>, I've worked on platforms where
            downtime isn't an option — real-time fraud detection, workforce scheduling at{" "}
            <span className="text-foreground">12M weekly requests</span>, and gaming
            infrastructure across devices. At Indeed, I reduced critical API response times
            from <span className="text-foreground">60+ seconds to sub-second</span> by
            redesigning data access and caching, led the{" "}
            <span className="text-foreground">Agency Partners</span> vertical with SLO-driven
            monitoring and automated rollbacks, and integrated ML inference into production
            workflows while holding reliability targets.
          </p>
          <p className="text-foreground/55 leading-relaxed text-[14px] border-l border-ember/40 pl-5">
            I care about pragmatic architecture, production observability, and teams that own
            their systems end-to-end. Strongest in backend systems, distributed architectures,
            and performance optimisation. The kind of work where details matter.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="mailto:gurungraj26@gmail.com"
            className="group inline-flex items-center gap-3 rounded-full bg-ember px-6 py-3 font-display text-[12px] uppercase tracking-[0.25em] text-ink hover:bg-ember-glow transition-colors"
          >
            Send me an email
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="/raj-gurung-cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-3 font-display text-[12px] uppercase tracking-[0.25em] text-foreground/75 hover:border-ember/50 hover:text-ember transition-colors"
          >
            Download CV
          </a>
          <Link
            to="/cv"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-3 font-display text-[12px] uppercase tracking-[0.25em] text-foreground/75 hover:border-ember/50 hover:text-ember transition-colors"
          >
            View on-site CV
          </Link>
          <a
            href="https://github.com/rajgurung"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/10 px-5 py-3 font-display text-[12px] uppercase tracking-[0.25em] text-foreground/55 hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/raj---gurung/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/10 px-5 py-3 font-display text-[12px] uppercase tracking-[0.25em] text-foreground/55 hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="relative z-10 mx-auto max-w-[1100px] px-6 pb-24">
        <SectionHeader index="01" label="Work Experience" caption="2012 — Present" />
        <ol className="mt-10 space-y-10">
          {cv.experience.map((role, i) => (
            <li
              key={role.company}
              className="grid gap-6 sm:grid-cols-[120px_1fr] items-start"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/40">
                <div className="text-ember">/ {String(i + 1).padStart(2, "0")}</div>
                <div className="mt-2 text-foreground/55">{role.dates}</div>
                <div className="mt-1 text-foreground/35">{role.location}</div>
              </div>
              <div className="border-l border-foreground/10 pl-6">
                <div className="font-display text-[11px] uppercase tracking-[0.25em] text-ember">
                  {role.company}
                </div>
                <h3 className="mt-2 font-display text-2xl tracking-tight">{role.title}</h3>
                <p className="mt-3 text-foreground/60 leading-relaxed text-[14px]">
                  {role.description}
                </p>
                <ul className="mt-4 space-y-2 text-foreground/70 text-[14px] leading-relaxed">
                  {role.bullets.slice(0, 3).map((b) => (
                    <li key={b} className="flex gap-3">
                      <span aria-hidden className="text-ember mt-1.5">·</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {role.tech && (
                  <div className="mt-4 font-mono text-[11px] text-foreground/45">
                    {role.tech}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* SKILLS */}
      <section className="relative z-10 mx-auto max-w-[1100px] px-6 pb-24">
        <SectionHeader index="02" label="Skills" caption="Stack & focus" />
        <div className="mt-8 flex flex-wrap gap-2.5">
          {skills.map((s) => (
            <span
              key={s.l}
              className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-ink-soft/50 px-4 py-2 text-[13px] text-foreground/75 hover:border-ember/40 hover:text-foreground transition-colors"
            >
              <span aria-hidden>{s.e}</span>
              {s.l}
            </span>
          ))}
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="relative z-10 mx-auto max-w-[1100px] px-6 pb-24">
        <SectionHeader index="03" label="Selected Projects" caption="Shipped & shelved" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-ink-soft/40 p-7 hover:border-ember/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl tracking-tight">{p.title}</h3>
                {p.status && (
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/40">
                    {p.status}
                  </span>
                )}
              </div>
              <p className="mt-3 text-foreground/65 leading-relaxed text-[14px]">
                {p.description}
              </p>
              {p.tech && (
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-foreground/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/55"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-5 flex gap-4">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.25em] text-ember hover:text-ember-glow transition-colors"
                  >
                    View site →
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.25em] text-foreground/55 hover:text-foreground transition-colors"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative z-10 mx-auto max-w-[1100px] px-6 pb-32">
        <SectionHeader index="04" label="Testimonials" caption="From peers & leads" />
        <div className="mt-10 columns-1 sm:columns-2 gap-6 [column-fill:_balance]">
          {[...testimonials].sort(() => Math.random() - 0.5).map((t, i) => (
            <figure
              key={i}
              className="mb-6 break-inside-avoid rounded-2xl border border-foreground/10 bg-ink-soft/40 p-6"
            >
              <span aria-hidden className="font-display text-3xl text-ember leading-none">
                "
              </span>
              <blockquote className="mt-2 text-foreground/75 leading-relaxed text-[14px]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-4">
                <div className="font-display text-[13px] text-foreground/85 inline-flex items-center gap-2">
                  {t.author}
                  {t.linkedin && (
                    <a href={t.linkedin} target="_blank" rel="noreferrer" className="text-foreground/40 hover:text-ember transition-colors" aria-label={`${t.author} on LinkedIn`}>
                      <Linkedin size={14} />
                    </a>
                  )}
                </div>
                <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/45">
                  {t.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
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
            <div className="max-w-[44ch]">
              <span className="font-display text-[11px] uppercase tracking-[0.25em] text-ember">
                Get in touch
              </span>
              <h3 className="mt-3 font-display text-3xl sm:text-4xl font-medium tracking-tight text-balance">
                Let's build something that holds up under load.
              </h3>
              <p className="mt-4 text-foreground/60 leading-relaxed">
                Always interested in new opportunities, challenging projects, or just
                connecting with fellow developers.
              </p>
            </div>
            <a
              href="mailto:gurungraj26@gmail.com"
              className="group inline-flex items-center gap-3 self-start rounded-full bg-ember px-7 py-3.5 font-display text-[12px] uppercase tracking-[0.25em] text-ink hover:bg-ember-glow transition-colors"
            >
              gurungraj26@gmail.com
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </Shell>
  );
}
