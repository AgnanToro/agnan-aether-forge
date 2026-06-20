import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../lib/portfolio-data";
import { SubNav } from "../components/portfolio/SubNav";
import { Footer } from "../components/portfolio/Footer";
import { SectionHeading, staggerContainer, staggerItem } from "../components/portfolio/ui";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "All Projects — Agnan Toro" },
      {
        name: "description",
        content:
          "Daftar lengkap proyek Agnan Toro: Berbagai proyek yang saya kembangkan selama perkuliahan, magang, dan pembelajaran mandiri.",
      },
      { property: "og:title", content: "All Projects — Agnan Toro" },
      {
        property: "og:description",
        content:
          "Daftar lengkap proyek Agnan Toro: Berbagai proyek yang saya kembangkan selama perkuliahan, magang, dan pembelajaran mandiri.",
      },
    ],
  }),
  component: AllProjects,
});

function AllProjects() {
  return (
    <>
      <SubNav />
      <main className="relative min-h-screen overflow-hidden px-4 pb-24 pt-32">
        <div className="pointer-events-none absolute inset-0 aurora-bg opacity-60" />
        <div className="relative mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Portfolio"
            title="All Projects"
            subtitle="Berbagai proyek yang saya kembangkan selama perkuliahan, magang, dan pembelajaran mandiri."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {PROJECTS.map((p) => (
              <motion.div key={p.slug} variants={staggerItem} whileHover={{ y: -8 }}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass transition-shadow duration-300 hover:shadow-[var(--shadow-glow)]"
                >
                  <div className="relative h-40 overflow-hidden">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={`${p.title} preview`}
                        loading="lazy"
                        width={1024}
                        height={640}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${p.accent}`}
                      >
                        <span className="px-6 text-center text-base font-bold text-white/95">
                          {p.title}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                    {p.status === "building" && (
                      <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                        Building
                      </span>
                    )}
                    <span className="absolute right-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-xs font-medium text-white/90 backdrop-blur">
                      {p.year}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-medium text-primary">{p.category}</p>
                    <h3 className="mt-1 text-base font-semibold">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary">
                      View Details
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
