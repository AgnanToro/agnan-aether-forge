import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { EXPERIENCES } from "../../lib/portfolio-data";
import { Reveal, SectionHeading } from "./ui";

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Career"
          title="Experience"
          subtitle="Pengalaman magang industri dan kontribusi profesional saya."
        />

        <div className="relative mt-14 pl-8 sm:pl-10">
          {/* Timeline track */}
          <div className="absolute left-[7px] top-2 h-full w-[2px] bg-border sm:left-[11px]" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-[7px] top-2 h-full w-[2px] origin-top bg-[var(--gradient-primary)] sm:left-[11px]"
          />

          <div className="space-y-9">
            {EXPERIENCES.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.05}>
                <div className="group relative">
                  <span className="absolute -left-8 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-background sm:-left-[42px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  <div className="rounded-2xl glass p-6 transition-shadow duration-300 hover:shadow-[var(--shadow-glow)]">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-primary" />
                        <h3 className="text-base font-semibold">{exp.role}</h3>
                      </div>
                      <span className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-primary">{exp.company}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{exp.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-border bg-secondary/30 px-2.5 py-1 text-xs text-foreground/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
