import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Shell, SectionHeader } from "@/components/site/Chrome";

const GAME_URL = "https://warden-zero.vercel.app";
const SOURCE_URL = "https://github.com/rajgurung/warden-zero";

export const Route = createFileRoute("/game")({
  head: () => ({
    meta: [
      { title: "Warden Zero — Raj Gurung" },
      {
        name: "description",
        content:
          "Warden Zero — a browser arena survival shooter built with Unity 6 and WebGL. Play it right here.",
      },
      { property: "og:title", content: "Warden Zero — a browser game by Raj Gurung" },
      {
        property: "og:description",
        content:
          "A chaotic top-down arena horde shooter. Survive 8 waves, level up, beat the boss.",
      },
    ],
  }),
  component: GamePage,
});

const TECH = ["Unity 6", "C#", "URP", "WebGL"];

const CONTROLS: Array<[string, string]> = [
  ["WASD", "Move"],
  ["Mouse", "Aim"],
  ["Click", "Shoot"],
  ["Space", "Dash"],
  ["R-Click", "Bomb / Strike"],
  ["Esc", "Pause"],
];

// Newest first. Each screenshot is the same moment (wave 8, the Colossus) so the versions compare.
const VERSIONS = [
  {
    tag: "v3 · Unity 6",
    date: "Oct 2026",
    image: "/images/game/v3-unity.webp",
    what: "A rigged 3D Warden that turns a full 360° with two-handed rifle aim. URP lighting with bloom, both game modes and touch controls.",
    why: "More realism. Real lighting and an animated 3D character.",
  },
  {
    tag: "v2 · Babylon.js",
    date: "Oct 2026",
    image: "/images/game/v2-babylon.webp",
    what: "Rebuilt in real-time 3D on the same gameplay data. Shadows, glow, ACES tone mapping and a follow camera.",
    why: "Better graphics than a 2D sprite engine could give.",
  },
  {
    tag: "v1 · Phaser 3",
    date: "Jun 2026",
    image: "/images/game/v1-phaser.webp",
    what: "The 2D top-down original. Eight waves, gems and XP, 16 upgrades and the Colossus boss.",
    why: null,
  },
];

// The enemies are flat cartoon art, so they're drawn as dark silhouettes with an amber rim
// to sit in the same world as the painted Warden.
const SILHOUETTE =
  "brightness(0) drop-shadow(2px -1px 0 rgba(245,165,36,0.7)) drop-shadow(0 0 14px rgba(245,165,36,0.18))";

const parallax = (depth: number): React.CSSProperties => ({
  transform: `translate(calc(var(--px, 0) * ${-depth}px), calc(var(--py, 0) * ${-depth / 2}px))`,
  transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
});

function GamePage() {
  const [playing, setPlaying] = useState(false);
  const playRef = useRef<HTMLElement>(null);

  // Mouse parallax: layers further back move less. Skipped for touch and reduced motion.
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--px", String((e.clientX - r.left) / r.width - 0.5));
    e.currentTarget.style.setProperty("--py", String((e.clientY - r.top) / r.height - 0.5));
  };
  const onPointerLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--px", "0");
    e.currentTarget.style.setProperty("--py", "0");
  };

  const play = () => {
    setPlaying(true);
    playRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <Shell>
      <section className="relative z-10 mx-auto max-w-[1200px] px-4 pt-6 sm:px-6 sm:pt-10">
        {/* Always dark, like a game screen, in both site themes */}
        <div
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
          className="relative isolate h-[min(calc(100svh-150px),780px)] min-h-[540px] overflow-hidden rounded-2xl border border-white/10 bg-[#06060a] text-[#f5f5f7]"
        >
          <div
            aria-hidden
            className="absolute left-1/2 top-[55%] -z-10 h-[90%] w-[70%] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "radial-gradient(closest-side, rgba(64,224,232,0.30), rgba(64,224,232,0.08) 55%, transparent)",
            }}
          />

          <div className="absolute inset-x-0 top-5 flex items-center justify-between px-5 font-mono text-[10px] uppercase tracking-[0.3em] text-white/45 sm:px-7">
            <span>v3 · Unity 6</span>
            <span className="rounded-full border border-ember/40 px-2.5 py-0.5 text-ember">
              beta
            </span>
          </div>

          <h1
            className="absolute inset-x-0 top-[9%] flex flex-wrap justify-center gap-x-[0.25em] px-4 text-center font-display text-[clamp(56px,12vw,150px)] font-bold uppercase leading-[0.85] tracking-[-0.03em] text-white/90"
            style={parallax(6)}
          >
            <span className="animate-reveal">Warden</span>
            <span className="animate-reveal">Zero</span>
          </h1>

          <img
            src="/images/game/grunt.webp"
            alt=""
            aria-hidden
            className="absolute bottom-[14%] left-[12%] hidden h-[40%] sm:block"
            style={{ filter: SILHOUETTE, ...parallax(14) }}
          />
          <img
            src="/images/game/runner.webp"
            alt=""
            aria-hidden
            className="absolute bottom-[12%] right-[12%] hidden h-[38%] -scale-x-100 sm:block"
            style={{ filter: SILHOUETTE, ...parallax(14) }}
          />

          <div
            className="absolute bottom-[-22%] left-1/2 aspect-[1024/1360] h-[95%] -translate-x-1/2 sm:bottom-[-24%] sm:h-[112%]"
            style={parallax(24)}
          >
            <div className="relative h-full w-full origin-bottom motion-safe:animate-breathe">
              <img
                src="/images/game/warden.webp"
                alt="The Warden, an armoured soldier holding a rifle"
                className="h-full w-full"
              />
              {/* Sits over the visor in the art */}
              <div
                aria-hidden
                className="absolute left-[46.6%] top-[8.1%] h-[3%] w-[11%] -translate-x-1/2 -translate-y-1/2 mix-blend-screen motion-safe:animate-visor"
                style={{
                  background: "radial-gradient(closest-side, rgba(110,240,245,0.9), transparent)",
                }}
              />
            </div>
          </div>

          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#06060a] via-[#06060a]/85 to-transparent"
          />

          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-4 px-6 pb-8 text-center">
            <p className="max-w-[44ch] text-sm text-white/70 sm:text-base">
              Hold the line. Survive eight waves. Bring down the Colossus.
            </p>
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={play}
                className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.25em] text-[#06060a] shadow-[0_0_40px_rgba(245,165,36,0.35)] transition-colors hover:bg-ember-glow"
              >
                ▶ Play now
              </button>
              <a
                href={SOURCE_URL}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/55 transition-colors hover:text-white"
              >
                Source <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1100px] px-6 pt-12 pb-10">
        <p className="max-w-[62ch] text-foreground/65 leading-relaxed">
          A chaotic horde shooter with two modes: an arena where you survive eight escalating waves,
          level up and fell the Warden Colossus, and Operation Greenfang, a jungle assault where you
          call in artillery and air strikes. Built end to end in Unity 6 and shipped to the browser
          with WebGL.
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {TECH.map((t) => (
            <span
              key={t}
              className="rounded-full border border-foreground/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground/55"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      <section ref={playRef} className="relative z-10 mx-auto max-w-[1100px] px-6 pb-8">
        <div className="hidden overflow-hidden rounded-xl border border-foreground/10 bg-ink-soft/60 shadow-2xl md:block">
          <div className="relative aspect-video w-full bg-black">
            {playing ? (
              <iframe
                src={GAME_URL}
                title="Warden Zero"
                className="absolute inset-0 h-full w-full"
                allow="autoplay; fullscreen; gamepad"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group absolute inset-0 flex flex-col items-center justify-center gap-3 text-white"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-ember/50 text-xl text-ember transition-colors group-hover:bg-ember group-hover:text-[#06060a]">
                  ▶
                </span>
                <span className="text-[11px] uppercase tracking-[0.25em] text-white/50">
                  Load the game · about 16 MB
                </span>
              </button>
            )}
          </div>
        </div>
        <p className="mt-3 hidden text-center text-[11px] uppercase tracking-[0.2em] text-foreground/40 md:block">
          Click the game to capture keyboard ·{" "}
          <a href={GAME_URL} target="_blank" rel="noreferrer" className="hover:text-ember">
            Play fullscreen ↗
          </a>
        </p>
        <p className="rounded-xl border border-foreground/10 bg-ink-soft/40 px-5 py-6 text-center text-sm text-foreground/60 md:hidden">
          Best played on desktop with a keyboard and mouse.
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-[1100px] px-6 pb-24">
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
      <section className="relative z-10 mx-auto max-w-[1100px] px-6 pb-32">
        <SectionHeader index="01" label="How it was built" caption="Three engines, one Warden" />
        <ol>
          {VERSIONS.map((v) => (
            <li
              key={v.tag}
              className="grid gap-6 border-b border-foreground/10 py-10 md:grid-cols-[1.15fr_1fr] md:gap-10"
            >
              <a
                href={v.image}
                target="_blank"
                rel="noreferrer"
                className="block overflow-hidden rounded-lg border border-foreground/10"
              >
                <img
                  src={v.image}
                  alt={`Warden Zero ${v.tag}: the Warden fighting the Colossus`}
                  loading="lazy"
                  className="aspect-video w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </a>
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-ember">
                    {v.tag}
                  </span>
                  <span className="font-mono text-[11px] text-foreground/40">{v.date}</span>
                </div>
                <p className="mt-4 text-foreground/70 leading-relaxed">{v.what}</p>
                {v.why && (
                  <p className="mt-3 text-sm text-foreground/50">
                    <span className="text-foreground/75">Why:</span> {v.why}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </Shell>
  );
}
