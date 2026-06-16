export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const CURRENTLY_BUILDING = [
  {
    title: "Internify",
    description: "AI Internship Recommendation Platform",
  },
  {
    title: "SIBACA",
    description: "Sistem Balance Cairan Terintegrasi",
  },
  {
    title: "Domain Adaptive Pretraining",
    description: "For Sentiment Analysis",
  },
];

export const ABOUT_FACTS = [
  { label: "University", value: "Universitas Islam Sultan Agung" },
  { label: "GPA", value: "3.85 / 4.00" },
  { label: "Location", value: "Semarang, Indonesia" },
  { label: "Career Focus", value: "Full Stack & AI Engineering" },
];

export const EXPERIENCES = [
  {
    role: "Backend Developer Intern",
    company: "Dafidea Technocraft",
    period: "2025",
    description:
      "Membangun dan memelihara REST API serta arsitektur backend untuk produk SaaS internal dengan fokus pada performa dan keandalan.",
    tech: ["Laravel", "MySQL", "REST API", "Docker"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "BID TIK Polda Jawa Tengah",
    period: "2024",
    description:
      "Mengembangkan sistem internal end-to-end, dari antarmuka pengguna hingga logika backend dan integrasi database.",
    tech: ["Laravel", "Vue", "Inertia", "MySQL"],
  },
  {
    role: "Backend Developer",
    company: "BUMDES Sarimarta",
    period: "2024",
    description:
      "Merancang sistem manajemen keuangan untuk badan usaha desa dengan pelaporan dan kontrol akses yang aman.",
    tech: ["Laravel", "MySQL", "REST API"],
  },
  {
    role: "Lab Assistant — OOP",
    company: "UNISSULA",
    period: "2024",
    description:
      "Mendampingi mahasiswa dalam praktikum Pemrograman Berorientasi Objek serta menyusun materi dan penilaian.",
    tech: ["Java", "OOP", "Teaching"],
  },
];

export interface Project {
  title: string;
  subtitle?: string;
  description: string;
  tech: string[];
  accent: string;
}

export const FEATURED_PROJECTS: Project[] = [
  {
    title: "Helpdesk Internal Ticketing System",
    description:
      "Platform tiket internal untuk pelacakan, eskalasi, dan resolusi permintaan dukungan secara terstruktur.",
    tech: ["Laravel", "React", "TypeScript", "MySQL"],
    accent: "from-[#4c1d95] to-[#7c3aed]",
  },
  {
    title: "HCMS Performance & KPI Management",
    description:
      "Sistem manajemen kinerja dan KPI karyawan dengan dashboard analitik dan alur penilaian.",
    tech: ["Laravel", "Vue", "Inertia", "MySQL"],
    accent: "from-[#26124a] to-[#4c1d95]",
  },
  {
    title: "Internify",
    subtitle: "AI Internship Recommendation Platform",
    description:
      "Platform rekomendasi magang berbasis AI yang mencocokkan mahasiswa dengan peluang relevan.",
    tech: ["Laravel", "React", "Recommendation System"],
    accent: "from-[#5b21b6] to-[#8b5cf6]",
  },
  {
    title: "SIBACA",
    subtitle: "Sistem Balance Cairan Terintegrasi",
    description:
      "Sistem kesehatan untuk memantau keseimbangan cairan pasien secara real-time dan terintegrasi.",
    tech: ["Laravel", "React", "Healthcare System"],
    accent: "from-[#4c1d95] to-[#6d28d9]",
  },
  {
    title: "Kick & Pay",
    description:
      "Platform manajemen komunitas sepak bola untuk penjadwalan, pembayaran, dan koordinasi anggota.",
    tech: ["Laravel", "React", "Payments"],
    accent: "from-[#312e81] to-[#4c1d95]",
  },
  {
    title: "BUMDES Sarimarta Finance",
    description:
      "Sistem manajemen keuangan badan usaha desa dengan pencatatan transaksi dan pelaporan otomatis.",
    tech: ["Laravel", "MySQL", "Reporting"],
    accent: "from-[#26124a] to-[#7c3aed]",
  },
];

export const OTHER_PROJECTS = [
  { title: "BlogSpace", tag: "Web Platform" },
  { title: "SEA Catering", tag: "Web App" },
  { title: "Islamic Inheritance Calculator", tag: "Utility" },
  { title: "HM-TIF Website", tag: "Organization" },
  { title: "E-Lapor SPTI", tag: "Reporting" },
  { title: "ProductiveMe", tag: "Productivity" },
  { title: "Raizen", tag: "Web App" },
];

export const SKILL_GROUPS = [
  {
    title: "Backend",
    skills: [
      { name: "Laravel", level: 92 },
      { name: "PHP", level: 90 },
      { name: "REST API", level: 88 },
      { name: "MySQL", level: 86 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 88 },
      { name: "Vue.js", level: 82 },
      { name: "TypeScript", level: 84 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Artificial Intelligence",
    skills: [
      { name: "NLP", level: 80 },
      { name: "Sentiment Analysis", level: 82 },
      { name: "Text Summarization", level: 76 },
      { name: "Machine Learning", level: 78 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "Proxmox", level: 72 },
      { name: "Linux", level: 84 },
    ],
  },
];

export const TECH_MARQUEE = [
  "Laravel",
  "React",
  "Vue",
  "TypeScript",
  "PHP",
  "Python",
  "MySQL",
  "Docker",
  "Git",
  "Linux",
];

export const STATS = [
  { value: 25, suffix: "+", label: "Projects Completed" },
  { value: 4, suffix: "", label: "Internship Experiences" },
  { value: 18, suffix: "+", label: "Technologies Used" },
  { value: 12, suffix: "+", label: "Academic Projects" },
];

export const ACHIEVEMENTS = [
  {
    title: "AWS AI Academy",
    description:
      "Menyelesaikan program AWS AI Academy yang berfokus pada machine learning dan layanan AI di cloud.",
    tag: "Certification",
  },
  {
    title: "Technical Workshops",
    description:
      "Aktif mengikuti workshop pengembangan perangkat lunak modern, DevOps, dan AI.",
    tag: "Workshops",
  },
  {
    title: "Professional Certifications",
    description:
      "Sertifikasi di bidang web development, backend engineering, dan dasar-dasar AI.",
    tag: "Certifications",
  },
  {
    title: "Coding Competitions",
    description:
      "Berpartisipasi dalam kompetisi pemrograman dan hackathon tingkat kampus dan nasional.",
    tag: "Competitions",
  },
  {
    title: "Academic Excellence",
    description:
      "Mempertahankan prestasi akademik yang tinggi dengan berbagai proyek riset terapan.",
    tag: "Academic",
  },
];

export const SOCIALS = {
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  email: "agnantoro@example.com",
};
