import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award, Target } from "lucide-react";
import profileImg from "../../assets/agnan-profile.jpg";
import { ABOUT_FACTS } from "../../lib/portfolio-data";
import { Reveal, SectionHeading } from "./ui";

const ICONS = [GraduationCap, Award, MapPin, Target];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Who I Am" title="About Me" />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] bg-[var(--gradient-primary)] opacity-30 blur-2xl" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[1.75rem] glow-border"
            >
              <div className="absolute inset-0 rounded-[1.75rem] p-[1.5px] [background:linear-gradient(135deg,var(--accent),transparent,var(--accent))] [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude] opacity-60" />
              <img
                src={profileImg}
                alt="Agnan Toro, Full Stack Developer and AI Enthusiast"
                width={768}
                height={896}
                loading="lazy"
                className="relative w-full object-cover"
              />
            </motion.div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-base leading-relaxed text-muted-foreground">
                Mahasiswa Teknik Informatika Universitas Islam Sultan Agung dengan minat pada Full
                Stack Development, Backend Engineering, Artificial Intelligence, dan NLP. Memiliki
                pengalaman magang industri dan pengalaman membangun berbagai sistem enterprise serta
                aplikasi berbasis web modern.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {ABOUT_FACTS.map((fact, i) => {
                const Icon = ICONS[i];
                return (
                  <Reveal key={fact.label} delay={i * 0.08}>
                    <div className="group flex items-start gap-3 rounded-xl glass p-4 transition-shadow hover:shadow-[var(--shadow-glow)]">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/60 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          {fact.label}
                        </p>
                        <p className="mt-0.5 text-sm font-semibold">{fact.value}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
