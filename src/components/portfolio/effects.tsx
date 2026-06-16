import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/** Thin gradient bar at the very top showing scroll progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-[var(--gradient-primary)]"
    />
  );
}

/** Cursor-following purple spotlight (desktop only). */
export function MouseSpotlight() {
  const [pos, setPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handle = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", handle);
    return () => window.removeEventListener("pointermove", handle);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 hidden lg:block"
      style={{
        background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, var(--accent-glow), transparent 70%)`,
        mixBlendMode: "screen",
      }}
    />
  );
}

interface AuroraBackgroundProps {
  particles?: number;
}

/** Aurora gradient + animated grid + floating particles. */
export function AuroraBackground({ particles = 18 }: AuroraBackgroundProps) {
  const dots = Array.from({ length: particles });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 aurora-bg" />
      <div className="absolute inset-0 grid-pattern opacity-70 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      {dots.map((_, i) => {
        const size = 2 + (i % 4);
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        const delay = (i % 6) * 0.7;
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-primary/70"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{ y: [0, -28, 0], opacity: [0.15, 0.8, 0.15] }}
            transition={{
              duration: 6 + (i % 5),
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}
