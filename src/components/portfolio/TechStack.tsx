import { TECH_MARQUEE } from "../../lib/portfolio-data";

export function TechStack() {
  const items = [...TECH_MARQUEE, ...TECH_MARQUEE];
  return (
    <section className="relative overflow-hidden py-12">
      <div className="relative flex">
        <div className="flex shrink-0 animate-marquee items-center gap-4 pr-4">
          {items.map((tech, i) => (
            <span
              key={i}
              className="flex items-center gap-3 whitespace-nowrap rounded-full border border-border bg-secondary/30 px-6 py-3 text-base font-semibold text-foreground/80"
            >
              <span className="h-2 w-2 rounded-full bg-primary" />
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </section>
  );
}
