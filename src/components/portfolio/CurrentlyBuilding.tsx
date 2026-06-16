import { motion } from "framer-motion";
import { Hammer } from "lucide-react";
import { CURRENTLY_BUILDING } from "../../lib/portfolio-data";
import { SectionHeading, staggerContainer, staggerItem } from "./ui";

export function CurrentlyBuilding() {
  return (
    <section id="building" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="In Progress"
          title="Currently Building"
          subtitle="Proyek yang sedang saya kerjakan saat ini, dari platform AI hingga sistem kesehatan."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {CURRENTLY_BUILDING.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-shadow duration-300 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gradient-primary)] text-primary-foreground">
                  <Hammer className="h-5 w-5" />
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                  Building
                </span>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
