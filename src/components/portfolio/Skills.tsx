import { motion } from "framer-motion";
import { Server, Layout, BrainCircuit, Wrench } from "lucide-react";
import { SKILL_GROUPS } from "../../lib/portfolio-data";
import { getSkillIcon } from "./skill-icons";
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold">{group.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const { Icon: SkillIcon, color } = getSkillIcon(skill.name);

                    return (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/30 px-3 py-2 text-sm font-medium text-foreground/90 transition-colors hover:border-primary hover:text-primary"
                      >
                        <SkillIcon className="h-4 w-4" style={{ color }} />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2.5">
          {SKILL_GROUPS.flatMap((g) => g.skills.map((s) => s.name)).map((name) => {
            const { Icon: SkillIcon, color } = getSkillIcon(name);
            return (
              <span
                key={name}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/30 px-3.5 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-primary hover:text-primary"
              >
                <SkillIcon className="h-3.5 w-3.5" style={{ color }} />
                {name}
              </span>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
