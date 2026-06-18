import { motion } from "framer-motion";
import { Trophy, Medal, ScrollText, Swords, Star } from "lucide-react";
import { ACHIEVEMENTS } from "../../lib/portfolio-data";
import { SectionHeading, staggerContainer, staggerItem } from "./ui";

const ICONS = [Trophy, ScrollText, Medal, Swords, Star];

export function Achievements() {
  return (
    <section id="achievements" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Recognition"
          title="Achievements"
          subtitle="Sertifikasi, kompetisi, dan pencapaian akademik sepanjang perjalanan saya."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ACHIEVEMENTS.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl glass p-6 transition-shadow duration-300 hover:shadow-[var(--shadow-glow)]"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gradient-primary)] text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="mt-4 inline-block rounded-full border border-border bg-secondary/40 px-2.5 py-0.5 text-xs text-muted-foreground">
                    {item.tag}
                  </span>
                  <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
