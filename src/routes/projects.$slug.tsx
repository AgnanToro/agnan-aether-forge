import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, Github } from "lucide-react";
import { getProject, PROJECTS } from "../lib/portfolio-data";
import { SubNav } from "../components/portfolio/SubNav";
import { Footer } from "../components/portfolio/Footer";
import { getSkillIcon } from "../components/portfolio/skill-icons";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project — Agnan Toro" }] };
    return {
      meta: [
        { title: `${p.title} — Agnan Toro` },
        { name: "description", content: p.description },
        { property: "og:title", content: `${p.title} — Agnan Toro` },
        { property: "og:description", content: p.description },
        ...(p.image ? [{ property: "og:image", content: p.image }] : []),
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <>
      <SubNav />
      <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <p className="mt-2 text-muted-foreground">Proyek yang kamu cari tidak tersedia.</p>
        <Link
          to="/projects"
          className="mt-6 inline-flex items-center gap-2 rounded-full gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          View all projects
        </Link>
      </main>
    </>
  );
}

function ProjectDetail() {
  const { project: p } = Route.useLoaderData();
  const related = PROJECTS.filter((x) => x.slug !== p.slug && x.featured).slice(0, 3);

  return (
    <>
      <SubNav />
      <main className="relative overflow-hidden pb-24 pt-28">
        <div className="pointer-events-none absolute inset-0 aurora-bg opacity-50" />
        <article className="relative mx-auto max-w-4xl px-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            All Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
              <span className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-primary">
                {p.category}
              </span>
              <span className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-muted-foreground">
                {p.year}
              </span>
              {p.status === "building" && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/40 px-3 py-1 text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  In Progress
                </span>
              )}
            </div>
            <h1 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              <span className="text-gradient">{p.title}</span>
            </h1>
            {p.subtitle && <p className="mt-2 text-base font-medium text-primary">{p.subtitle}</p>}
          </motion.div>

          {p.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 overflow-hidden rounded-2xl glow-border"
            >
              <img
                src={p.image}
                alt={`${p.title} preview`}
                width={1024}
                height={640}
                className="w-full object-cover"
              />
            </motion.div>
          )}

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
            <div>
              <h2 className="text-xl font-semibold">Overview</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.overview}</p>

              <h2 className="mt-10 text-xl font-semibold">Key Highlights</h2>
              <ul className="mt-4 space-y-3">
                {p.highlights.map((h: string) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full gradient-primary text-primary-foreground">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm text-foreground/90">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl glass p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Tech Stack
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t: string) => {
                    const { Icon, color } = getSkillIcon(t);
                    return (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary/30 px-3 py-1.5 text-xs font-medium text-foreground/90"
                      >
                        <Icon className="h-3.5 w-3.5" style={{ color }} />
                        {t}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-[filter] hover:brightness-110"
                  >
                    Live Demo
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary/30 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary/60"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                )}
              </div>
            </aside>
          </div>

          {related.length > 0 && (
            <div className="mt-16 border-t border-border pt-10">
              <h2 className="text-xl font-semibold">More Projects</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to="/projects/$slug"
                    params={{ slug: r.slug }}
                    className="group overflow-hidden rounded-xl glass transition-shadow hover:shadow-[var(--shadow-glow)]"
                  >
                    {r.image && (
                      <img
                        src={r.image}
                        alt={r.title}
                        loading="lazy"
                        width={1024}
                        height={640}
                        className="h-28 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div className="p-4">
                      <p className="text-sm font-semibold">{r.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{r.category}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
