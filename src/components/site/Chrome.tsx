import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function AmbientBackdrop() {
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background:
          "radial-gradient(900px circle at var(--cursor-x, 50%) var(--cursor-y, 30%), rgba(245,165,36,0.12), transparent 40%)",
      }}
    />
  );
}

export function Nav() {
  return (
    <nav className="relative z-20 mx-auto flex max-w-[1100px] items-center justify-between px-6 py-7">
      <Link
        to="/"
        className="font-display text-lg font-bold tracking-[0.2em] uppercase text-foreground/90 hover:text-ember transition-colors"
      >
        RG<span className="text-ember">.</span>
      </Link>
      <div className="flex items-center gap-5 sm:gap-7 text-[13px] font-medium uppercase tracking-[0.22em] text-foreground/55">
        <Link
          to="/writing"
          className="hover:text-foreground transition-colors"
          activeProps={{ className: "text-foreground" }}
        >
          Writing
        </Link>
        <Link
          to="/projects"
          className="hover:text-foreground transition-colors"
          activeProps={{ className: "text-foreground" }}
        >
          Projects
        </Link>
        <Link
          to="/cv"
          className="hover:text-foreground transition-colors"
          activeProps={{ className: "text-foreground" }}
        >
          CV
        </Link>
        <Link
          to="/hire"
          className="hidden sm:inline-flex items-center gap-2 rounded-full border border-ember/40 px-3.5 py-1.5 text-ember hover:bg-ember hover:text-ink transition-colors"
          activeProps={{ className: "bg-ember text-ink" }}
        >
          Hire me
          <span aria-hidden>→</span>
        </Link>
      </div>
    </nav>
  );
}

export function Footer() {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const fmt = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/London",
        hour12: false,
      });
      setTime(fmt.format(d));
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative z-10 border-t border-foreground/10">
      <div className="mx-auto max-w-[1100px] px-6 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-foreground/40">
          <span>© {new Date().getFullYear()} Raj Gurung</span>
          <span className="size-1 rounded-full bg-foreground/25" />
          <span className="inline-flex items-center gap-1.5">
            LDN
            <span className="tabular-nums text-foreground/60">{time}</span>
            <span className="animate-blink text-ember">▍</span>
          </span>
        </div>
        <div className="flex gap-6 text-[11px] uppercase tracking-[0.25em]">
          {[
            { label: "GitHub", href: "https://github.com/rajgurung" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/raj---gurung" },
            { label: "Email", href: "mailto:gurungraj26@gmail.com" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-foreground/55 hover:text-ember transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function SectionHeader({
  index,
  label,
  caption,
}: {
  index: string;
  label: string;
  caption: string;
}) {
  return (
    <div className="flex items-end justify-between border-b border-foreground/10 pb-4">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[11px] tabular-nums text-ember">/ {index}</span>
        <h2 className="font-display text-xs sm:text-sm font-medium uppercase tracking-[0.3em] text-foreground/85">
          {label}
        </h2>
      </div>
      <span className="hidden sm:block font-mono text-[11px] text-foreground/40">{caption}</span>
    </div>
  );
}

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="grain min-h-screen bg-background text-foreground font-body relative overflow-x-clip">
      <AmbientBackdrop />
      <Nav />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
}
