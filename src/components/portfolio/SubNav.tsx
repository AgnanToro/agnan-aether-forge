import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function SubNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-3 shadow-[var(--shadow-soft)]"
      >
        <Link to="/" className="flex items-center gap-2 text-sm font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary text-xs text-primary-foreground">
            AT
          </span>
          <span className="text-gradient text-base">Agnan Toro</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground sm:inline-flex"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <ThemeToggle />
        </div>
      </motion.nav>
    </header>
  );
}
