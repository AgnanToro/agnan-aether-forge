import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(100, p + Math.random() * 16 + 6);
      });
    }, 160);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(() => {
        setVisible(false);
        setTimeout(onDone, 600);
      }, 350);
      return () => clearTimeout(t);
    }
  }, [progress, onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 aurora-bg opacity-60" />
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-10 rounded-full bg-primary/40 blur-3xl animate-pulse-glow" />
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--gradient-primary)] text-2xl font-bold text-primary-foreground shadow-[var(--shadow-glow)]">
                AT
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-7 text-xl font-semibold tracking-tight"
            >
              <span className="text-gradient">Agnan Toro</span>
            </motion.h1>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Full Stack · AI
            </p>

            <div className="mt-8 h-[3px] w-56 overflow-hidden rounded-full bg-secondary/60">
              <motion.div
                className="h-full bg-[var(--gradient-primary)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <p className="mt-3 text-xs tabular-nums text-muted-foreground">
              {Math.round(progress)}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
