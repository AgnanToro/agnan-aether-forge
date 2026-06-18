import type { CSSProperties, ComponentType } from "react";
import {
  SiLaravel,
  SiPhp,
  SiMysql,
  SiReact,
  SiVuedotjs,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiLinux,
  SiProxmox,
  SiPython,
} from "react-icons/si";
import {
  Webhook,
  BrainCircuit,
  MessageSquareHeart,
  FileText,
  Bot,
} from "lucide-react";

interface IconMeta {
  Icon: ComponentType<{ className?: string; style?: CSSProperties }>;
  color: string;
}

const ICONS: Record<string, IconMeta> = {
  Laravel: { Icon: SiLaravel, color: "#FF2D20" },
  PHP: { Icon: SiPhp, color: "#777BB4" },
  "REST API": { Icon: Webhook, color: "#8b5cf6" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  React: { Icon: SiReact, color: "#61DAFB" },
  "Vue.js": { Icon: SiVuedotjs, color: "#4FC08D" },
  Vue: { Icon: SiVuedotjs, color: "#4FC08D" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  Git: { Icon: SiGit, color: "#F05032" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Linux: { Icon: SiLinux, color: "#A6A6A6" },
  Proxmox: { Icon: SiProxmox, color: "#E57000" },
  Python: { Icon: SiPython, color: "#3776AB" },
  NLP: { Icon: BrainCircuit, color: "#a78bfa" },
  "Sentiment Analysis": { Icon: MessageSquareHeart, color: "#c084fc" },
  "Text Summarization": { Icon: FileText, color: "#a78bfa" },
  "Machine Learning": { Icon: Bot, color: "#c084fc" },
};

const FALLBACK: IconMeta = { Icon: Bot, color: "#8b5cf6" };

export function getSkillIcon(name: string): IconMeta {
  return ICONS[name] ?? FALLBACK;
}
