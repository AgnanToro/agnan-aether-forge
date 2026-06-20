import { TECH_MARQUEE } from "../../lib/portfolio-data";
import { getSkillIcon } from "./skill-icons";

export function TechStack() {
  const items = [...TECH_MARQUEE, ...TECH_MARQUEE];

  return (
    <section className="relative overflow-hidden py-12">
      <div className="relative flex">
        <div className="flex shrink-0 animate-marquee items-center gap-4 pr-4">
          {items.map((tech, i) => {
            const { Icon, color } = getSkillIcon(tech);

            return (
              <span
                key={`${tech}-${i}`}
                className="flex items-center gap-3 whitespace-nowrap rounded-full border border-border bg-secondary/30 px-5 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:border-primary hover:text-primary"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-secondary/40">
                  <Icon className="h-4 w-4" style={{ color }} />
                </span>

                {tech}
              </span>
            );
          })}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </section>
  );
}