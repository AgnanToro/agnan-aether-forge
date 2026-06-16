import { motion } from "framer-motion";
import { Server, Layout, BrainCircuit, Wrench } from "lucide-react";
import { SKILL_GROUPS } from "../../lib/portfolio-data";
import { Reveal, SectionHeading, staggerContainer, staggerItem } from "./ui";

const GROUP_ICONS = [Server, Layout, BrainCircuit, Wrench];

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills"
          subtitle="Teknologi dan keahlian yang saya gunakan untuk membangun produk."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {SKILL_GROUPS.map((group, gi) => {
            const Icon = GROUP_ICONS[gi];
            return (
              <motion.div
                key={group.title}
                variants={staggerItem}
                className="rounded-2xl glass p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--gradient-primary)] text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold">{group.title}</h3>
                </div>
                <div className="mt-5 space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-secondary/60">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full bg-[var(--gradient-primary)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2.5">
          {SKILL_GROUPS.flatMap((g) => g.skills.map((s) => s.name)).map(
            (name) => (
              <span
                key={name}
                className="rounded-full border border-border bg-secondary/30 px-3.5 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-primary hover:text-primary"
              >
                {name}
              </span>
            ),
          )}
        </Reveal>
      </div>
    </section>
  );
}
