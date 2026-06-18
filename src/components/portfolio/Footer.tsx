import { Github, Linkedin, Mail } from "lucide-react";
import { NAV_LINKS, SOCIALS } from "../../lib/portfolio-data";

export function Footer() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative border-t border-border px-4 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
        <div className="text-center md:text-left">
          <button
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-2 text-base font-bold"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--gradient-primary)] text-xs text-primary-foreground">
              AT
            </span>
            <span className="text-gradient">Agnan Toro</span>
          </button>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Full Stack Developer & AI Enthusiast building scalable, intelligent digital solutions.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex gap-3">
          {[
            { Icon: Github, href: SOCIALS.github },
            { Icon: Linkedin, href: SOCIALS.linkedin },
            { Icon: Mail, href: `mailto:${SOCIALS.email}` },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/40 text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Agnan Toro. Crafted with passion & purple.
      </div>
    </footer>
  );
}
