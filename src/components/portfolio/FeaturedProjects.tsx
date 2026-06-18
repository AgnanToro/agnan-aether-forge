import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FEATURED_PROJECTS } from "../../lib/portfolio-data";
import { MagneticButton, SectionHeading, staggerContainer, staggerItem } from "./ui";

export function FeaturedProjects() {
  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          subtitle="Aplikasi enterprise dan produk berbasis AI yang telah saya bangun."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURED_PROJECTS.map((p) => (
            <motion.div key={p.slug} variants={staggerItem} whileHover={{ y: -10 }}>
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass transition-shadow duration-300 hover:shadow-[var(--shadow-glow)]"
              >
                <div className="relative h-44 overflow-hidden">
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
                      <span className="px-6 text-center text-lg font-bold text-white/95">
                        {p.title}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {p.status === "building" && (
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                      Building
                    </span>
                  )}
                  <span className="absolute right-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-xs font-medium text-white/90 backdrop-blur">
                    {p.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  {p.subtitle && (
                    <p className="mt-0.5 text-xs font-medium text-primary">{p.subtitle}</p>
                  )}
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-secondary/30 px-2.5 py-1 text-xs text-foreground/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-1.5 border-t border-border pt-4 text-sm font-medium text-primary">
                    View Details
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <MagneticButton as="a" href="/projects">
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
