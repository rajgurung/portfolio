import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/site/Chrome";

const GAME_URL = "https://warden-zero.vercel.app";
const SOURCE_URL = "https://github.com/rajgurung/warden-zero";

export const Route = createFileRoute("/game")({
  head: () => ({
    meta: [
      { title: "Warden Zero — Raj Gurung" },
      {
        name: "description",
        content:
          "Warden Zero — a browser arena survival shooter built with Phaser 3, TypeScript and Vite. Play it right here.",
      },
      { property: "og:title", content: "Warden Zero — a browser game by Raj Gurung" },
      {
        property: "og:description",
        content: "A chaotic top-down arena horde shooter. Survive 8 waves, level up, beat the boss.",
      },
    ],
  }),
  component: GamePage,
});

const TECH = ["Phaser 3", "TypeScript", "Vite", "WebGL"];

const CONTROLS: Array<[string, string]> = [
  ["WASD", "Move"],
  ["Mouse", "Aim"],
  ["Click", "Shoot"],
  ["Space", "Dash"],
  ["R-Click", "Bomb / Strike"],
  ["Esc", "Pause"],
];

function GamePage() {
  return (
    <Shell>
      <section className="relative z-10 mx-auto max-w-[1100px] px-6 pt-10 pb-10 sm:pt-16">
        <span className="font-display text-[11px] uppercase tracking-[0.3em] text-ember">
          Playable · built from scratch
        </span>
        <h1 className="mt-4 font-display text-5xl sm:text-7xl font-medium leading-[0.95] tracking-[-0.03em]">
          Warden Zero.
        </h1>
        <p className="mt-6 max-w-[60ch] text-foreground/65 leading-relaxed">
          A chaotic horde shooter with two modes: an arena where you survive eight
          escalating waves, level up and fell the Warden Colossus — and Operation
          Greenfang, a 2.5D jungle assault where you call in artillery and air
          strikes. Built end to end with Phaser 3, TypeScript and Vite.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href={GAME_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ember/40 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.25em] text-ember hover:bg-ember hover:text-ink transition-colors"
          >
            Play fullscreen <span aria-hidden>↗</span>
          </a>
          <a
            href={SOURCE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-foreground/55 hover:text-foreground transition-colors"
          >
            Source <span aria-hidden>↗</span>
          </a>
          <div className="flex flex-wrap gap-1.5">
            {TECH.map((t) => (
              <span
                key={t}
                className="rounded-full border border-foreground/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground/55"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1100px] px-6 pb-8">
        <div className="overflow-hidden rounded-xl border border-foreground/10 bg-ink-soft/60 shadow-2xl">
          <div className="relative aspect-video w-full bg-black">
            <iframe
              src={GAME_URL}
              title="Warden Zero"
              className="absolute inset-0 h-full w-full"
              allow="autoplay; fullscreen; gamepad"
              loading="lazy"
            />
          </div>
        </div>
        <p className="mt-3 text-center text-[11px] uppercase tracking-[0.2em] text-foreground/40">
          Click the game to capture keyboard · desktop with mouse recommended
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-[1100px] px-6 pb-32">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {CONTROLS.map(([key, action]) => (
            <div
              key={key}
              className="rounded-lg border border-foreground/10 bg-ink-soft/40 px-4 py-3 text-center"
            >
              <div className="font-mono text-sm font-bold text-foreground">{key}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-foreground/45">
                {action}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Shell>
  );
}
