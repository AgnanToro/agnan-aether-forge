import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { FEATURED_PROJECTS, OTHER_PROJECTS } from "../../lib/portfolio-data";
import { Reveal, SectionHeading, staggerContainer, staggerItem } from "./ui";

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
            <motion.article
              key={p.title}
              variants={staggerItem}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl glass transition-shadow duration-300 hover:shadow-[var(--shadow-glow)]"
            >
              <div
                className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${p.accent}`}
              >
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <span className="relative px-6 text-center text-lg font-bold text-white/95">
                  {p.title}
                </span>
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-base font-semibold">{p.title}</h3>
                {p.subtitle && (
                  <p className="mt-0.5 text-xs font-medium text-primary">
                    {p.subtitle}
                  </p>
                )}
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-secondary/30 px-2.5 py-1 text-xs text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    Demo <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Other projects */}
        <div className="mt-20">
          <Reveal className="text-center">
            <h3 className="text-xl font-semibold">
              <span className="text-gradient">Other Projects</span>
            </h3>
          </Reveal>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {OTHER_PROJECTS.map((p) => (
              <motion.a
                key={p.title}
                href="#"
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="group flex items-center justify-between rounded-xl glass px-5 py-4 transition-shadow hover:shadow-[var(--shadow-glow)]"
              >
                <div>
                  <p className="text-sm font-semibold">{p.title}</p>
                  <p className="text-xs text-muted-foreground">{p.tag}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
