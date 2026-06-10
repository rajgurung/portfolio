import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Shell } from "@/components/site/Chrome";
import { getPostBySlug, posts } from "@/content/posts";

export const Route = createFileRoute("/writing/$slug")({
  loader: ({ params }) => {
    const found = getPostBySlug(params.slug);
    if (!found) throw notFound();
    return found;
  },
  head: ({ loaderData }) => {
    const meta = loaderData?.meta;
    const title = meta ? `${meta.title} — Raj Gurung` : "Essay — Raj Gurung";
    const desc = meta?.excerpt ?? "";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: PostPage,
  notFoundComponent: () => (
    <Shell>
      <div className="mx-auto max-w-[800px] px-6 py-32 text-center">
        <p className="font-mono text-ember text-sm">404</p>
        <h1 className="mt-3 font-display text-3xl">Essay not found.</h1>
        <Link to="/writing" className="mt-6 inline-block text-ember hover:underline">
          ← Back to writing
        </Link>
      </div>
    </Shell>
  ),
});

function PostPage() {
  const { meta, body } = Route.useLoaderData();
  const idx = posts.findIndex((p) => p.slug === meta.slug);
  const prev = posts[idx + 1];
  const next = posts[idx - 1];

  return (
    <Shell>
      <article className="relative z-10 mx-auto max-w-[1100px] px-6 pt-10 pb-24 sm:pt-16">
        <Link
          to="/writing"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-foreground/45 hover:text-ember transition-colors"
        >
          <span aria-hidden>←</span> All essays
        </Link>

        <header className="mt-10 border-b border-foreground/10 pb-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] uppercase tracking-[0.25em] text-foreground/45">
            <span className="tabular-nums">{meta.date}</span>
            <span className="size-1 rounded-full bg-foreground/25" />
            <span>{meta.readingTime} read</span>
            <span className="size-1 rounded-full bg-foreground/25" />
            <span>{meta.location}</span>
          </div>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl font-medium leading-[1.05] tracking-[-0.025em] text-balance">
            {meta.title}
          </h1>
          <p className="mt-5 text-lg text-foreground/65 leading-relaxed text-pretty">
            {meta.excerpt}
          </p>
        </header>

        <div className="prose-essay mt-12">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
        </div>

        <nav className="mt-20 grid grid-cols-2 gap-4 border-t border-foreground/10 pt-8 text-[11px] uppercase tracking-[0.22em]">
          <div>
            {prev && (
              <Link
                to="/writing/$slug"
                params={{ slug: prev.slug }}
                className="group block text-foreground/45 hover:text-ember transition-colors"
              >
                <span className="block text-foreground/30">← Older</span>
                <span className="mt-1 block font-display text-sm normal-case tracking-normal text-foreground/80 group-hover:text-ember">
                  {prev.title}
                </span>
              </Link>
            )}
          </div>
          <div className="text-right">
            {next && (
              <Link
                to="/writing/$slug"
                params={{ slug: next.slug }}
                className="group block text-foreground/45 hover:text-ember transition-colors"
              >
                <span className="block text-foreground/30">Newer →</span>
                <span className="mt-1 block font-display text-sm normal-case tracking-normal text-foreground/80 group-hover:text-ember">
                  {next.title}
                </span>
              </Link>
            )}
          </div>
        </nav>
      </article>
    </Shell>
  );
}
