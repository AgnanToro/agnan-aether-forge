import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Mail,
  Sparkles,
  Code2,
  Database,
  Cpu,
  GitBranch,
  Boxes,
  Terminal,
} from "lucide-react";
import { MagneticButton } from "./ui";
import { AuroraBackground } from "./effects";

const ROLES = ["Full Stack Developer", "Backend Developer", "AI Enthusiast"];

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const speed = deleting ? 45 : 95;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

const FLOATING_ICONS = [
  { Icon: Code2, top: "18%", left: "8%", d: 0 },
  { Icon: Database, top: "62%", left: "12%", d: 0.6 },
  { Icon: Cpu, top: "26%", left: "86%", d: 1.1 },
  { Icon: GitBranch, top: "70%", left: "82%", d: 0.3 },
  { Icon: Boxes, top: "12%", left: "60%", d: 0.9 },
  { Icon: Terminal, top: "80%", left: "46%", d: 1.4 },
];

export function Hero() {
  const typed = useTypewriter(ROLES);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-28"
    >
      <AuroraBackground particles={22} />

      {FLOATING_ICONS.map(({ Icon, top, left, d }, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute hidden lg:flex"
          style={{ top, left }}
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, delay: d, ease: "easeInOut" }}
        >
          <div className="glass flex h-12 w-12 items-center justify-center rounded-xl text-primary">
            <Icon className="h-5 w-5" />
          </div>
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Available for internships & collaborations
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-5xl font-extrabold leading-[1.05] sm:text-6xl md:text-7xl"
        >
          <span className="text-gradient">Agnan Toro</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-5 flex items-center justify-center text-xl font-semibold text-foreground sm:text-2xl"
        >
          <span className="text-muted-foreground">I'm a&nbsp;</span>
          <span className="text-primary">{typed}</span>
          <span className="ml-0.5 inline-block h-6 w-[2px] animate-pulse bg-primary" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mx-auto mt-5 max-w-xl text-base font-medium text-foreground/90"
        >
          Building Scalable Web Applications and Intelligent Digital Solutions
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground"
        >
          Saya adalah mahasiswa Teknik Informatika yang berfokus pada Full Stack Development,
          Backend Engineering, dan Artificial Intelligence. Saya senang membangun solusi digital
          yang modern, scalable, dan memberikan dampak nyata bagi pengguna.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton onClick={() => scrollTo("#projects")}>View Projects</MagneticButton>
          <a href="/Agnan_Toro_CV.pdf" download>
            <MagneticButton variant="outline">
              <Download className="h-4 w-4" />
              Download Resume
            </MagneticButton>
          </a>
          <MagneticButton variant="ghost" onClick={() => scrollTo("#contact")}>
            <Mail className="h-4 w-4" />
            Contact Me
          </MagneticButton>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("#about")}
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.button>
    </section>
  );
}
