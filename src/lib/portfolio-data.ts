import helpdeskImg from "../assets/projects/helpdesk.jpg";
import hcmsImg from "../assets/projects/hcms.jpg";
import internifyImg from "../assets/projects/internify.jpg";
import sibacaImg from "../assets/projects/sibaca.jpg";
import kickpayImg from "../assets/projects/kickpay.jpg";
import bumdesImg from "../assets/projects/bumdes.jpg";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
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
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  year: string;
  status: "completed" | "building";
  description: string;
  overview: string;
  highlights: string[];
  tech: string[];
  accent: string;
  image?: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: "helpdesk-ticketing",
    title: "Helpdesk Internal Ticketing System",
    category: "Enterprise Web App",
    year: "2025",
    status: "completed",
    description:
      "Platform tiket internal untuk pelacakan, eskalasi, dan resolusi permintaan dukungan secara terstruktur.",
    overview:
      "Sistem helpdesk internal yang membantu tim support mengelola permintaan pengguna dari awal hingga selesai. Setiap tiket memiliki status, prioritas, dan jalur eskalasi yang jelas, lengkap dengan dashboard analitik untuk memantau beban kerja dan waktu penyelesaian.",
    highlights: [
      "Alur tiket end-to-end: open, in-progress, escalated, resolved",
      "Role-based access untuk agent, supervisor, dan admin",
      "Dashboard analitik SLA dan waktu respon",
      "Notifikasi real-time dan riwayat aktivitas tiket",
    ],
    tech: ["Laravel", "React", "TypeScript", "MySQL"],
    accent: "from-[#4c1d95] to-[#7c3aed]",
    image: helpdeskImg,
    github: "https://github.com/",
    demo: "#",
    featured: true,
  },
  {
    slug: "hcms-kpi",
    title: "HCMS Performance & KPI Management",
    category: "Enterprise Web App",
    year: "2024",
    status: "completed",
    description:
      "Sistem manajemen kinerja dan KPI karyawan dengan dashboard analitik dan alur penilaian.",
    overview:
      "Human Capital Management System yang berfokus pada pengukuran kinerja karyawan melalui indikator KPI yang terukur. Manajer dapat menetapkan target, melakukan penilaian periodik, dan melihat visualisasi performa tim secara menyeluruh.",
    highlights: [
      "Penetapan dan tracking KPI per individu dan tim",
      "Alur penilaian periodik dengan approval bertingkat",
      "Dashboard analitik performa dengan grafik interaktif",
      "Ekspor laporan kinerja untuk evaluasi manajemen",
    ],
    tech: ["Laravel", "Vue", "Inertia", "MySQL"],
    accent: "from-[#26124a] to-[#4c1d95]",
    image: hcmsImg,
    github: "https://github.com/",
    demo: "#",
    featured: true,
  },
  {
    slug: "internify",
    title: "Internify",
    subtitle: "AI Internship Recommendation Platform",
    category: "AI Platform",
    year: "2025",
    status: "building",
    description:
      "Platform rekomendasi magang berbasis AI yang mencocokkan mahasiswa dengan peluang relevan.",
    overview:
      "Internify menggunakan sistem rekomendasi untuk mencocokkan profil, skill, dan minat mahasiswa dengan lowongan magang yang paling relevan. Setiap rekomendasi disertai skor kecocokan sehingga mahasiswa dapat memprioritaskan peluang terbaik.",
    highlights: [
      "Recommendation engine berbasis profil & skill mahasiswa",
      "Match score untuk setiap lowongan magang",
      "Manajemen lowongan untuk perusahaan mitra",
      "Filter cerdas berdasarkan lokasi, bidang, dan durasi",
    ],
    tech: ["Laravel", "React", "Recommendation System", "Python"],
    accent: "from-[#5b21b6] to-[#8b5cf6]",
    image: internifyImg,
    github: "https://github.com/",
    demo: "#",
    featured: true,
  },
  {
    slug: "sibaca",
    title: "SIBACA",
    subtitle: "Sistem Balance Cairan Terintegrasi",
    category: "Healthcare System",
    year: "2025",
    status: "building",
    description:
      "Sistem kesehatan untuk memantau keseimbangan cairan pasien secara real-time dan terintegrasi.",
    overview:
      "SIBACA membantu tenaga medis memantau intake dan output cairan pasien secara real-time. Data tercatat secara terstruktur dan tervisualisasi sehingga perawat dapat mengambil keputusan klinis lebih cepat dan akurat.",
    highlights: [
      "Pencatatan intake & output cairan pasien real-time",
      "Visualisasi tren balance cairan per periode",
      "Peringatan ketika balance melewati ambang aman",
      "Integrasi data antar unit perawatan",
    ],
    tech: ["Laravel", "React", "Healthcare System", "MySQL"],
    accent: "from-[#4c1d95] to-[#6d28d9]",
    image: sibacaImg,
    github: "https://github.com/",
    demo: "#",
    featured: true,
  },
  {
    slug: "kick-and-pay",
    title: "Kick & Pay",
    category: "Community Platform",
    year: "2024",
    status: "completed",
    description:
      "Platform manajemen komunitas sepak bola untuk penjadwalan, pembayaran, dan koordinasi anggota.",
    overview:
      "Kick & Pay mempermudah komunitas sepak bola mengelola jadwal pertandingan, iuran anggota, dan pembayaran dalam satu aplikasi. Pengurus dapat memantau status pembayaran sementara anggota mendapat pengingat otomatis.",
    highlights: [
      "Penjadwalan pertandingan dan konfirmasi kehadiran",
      "Manajemen iuran dan pembayaran anggota",
      "Rekap keuangan komunitas otomatis",
      "Pengingat pembayaran untuk anggota",
    ],
    tech: ["Laravel", "React", "Payments", "MySQL"],
    accent: "from-[#312e81] to-[#4c1d95]",
    image: kickpayImg,
    github: "https://github.com/",
    demo: "#",
    featured: true,
  },
  {
    slug: "bumdes-finance",
    title: "BUMDES Sarimarta Finance",
    category: "Finance System",
    year: "2024",
    status: "completed",
    description:
      "Sistem manajemen keuangan badan usaha desa dengan pencatatan transaksi dan pelaporan otomatis.",
    overview:
      "Sistem keuangan untuk Badan Usaha Milik Desa yang mencatat seluruh transaksi pemasukan dan pengeluaran secara rapi. Laporan keuangan dihasilkan otomatis sehingga pengelolaan dana desa menjadi transparan dan akuntabel.",
    highlights: [
      "Pencatatan transaksi pemasukan & pengeluaran",
      "Laporan keuangan otomatis per periode",
      "Kontrol akses aman untuk pengurus desa",
      "Dashboard ringkasan kondisi keuangan",
    ],
    tech: ["Laravel", "MySQL", "Reporting"],
    accent: "from-[#26124a] to-[#7c3aed]",
    image: bumdesImg,
    github: "https://github.com/",
    demo: "#",
    featured: true,
  },
  {
    slug: "blogspace",
    title: "BlogSpace",
    category: "Web Platform",
    year: "2024",
    status: "completed",
    description:
      "Platform blogging modern dengan editor kaya fitur dan manajemen konten yang rapi.",
    overview:
      "BlogSpace adalah platform menulis dan publikasi artikel dengan editor yang nyaman, kategori, dan halaman publik yang SEO-friendly.",
    highlights: [
      "Editor artikel dengan dukungan rich text",
      "Manajemen kategori dan tag",
      "Halaman publik yang ramah SEO",
    ],
    tech: ["Laravel", "Blade", "MySQL"],
    accent: "from-[#4c1d95] to-[#7c3aed]",
    github: "https://github.com/",
    featured: false,
  },
  {
    slug: "sea-catering",
    title: "SEA Catering",
    category: "Web App",
    year: "2024",
    status: "completed",
    description:
      "Aplikasi pemesanan katering dengan paket langganan dan manajemen menu.",
    overview:
      "SEA Catering memudahkan pelanggan memesan paket katering dan langganan makanan, lengkap dengan manajemen menu dan pesanan untuk admin.",
    highlights: [
      "Paket langganan makanan",
      "Manajemen menu dan pesanan",
      "Alur checkout yang sederhana",
    ],
    tech: ["Laravel", "React", "MySQL"],
    accent: "from-[#26124a] to-[#4c1d95]",
    github: "https://github.com/",
    featured: false,
  },
  {
    slug: "islamic-inheritance-calculator",
    title: "Islamic Inheritance Calculator",
    category: "Utility",
    year: "2023",
    status: "completed",
    description:
      "Kalkulator pembagian waris Islam (faraidh) yang akurat dan mudah digunakan.",
    overview:
      "Aplikasi yang menghitung pembagian harta waris sesuai kaidah faraidh berdasarkan ahli waris yang dimasukkan, dengan penjelasan hasil yang transparan.",
    highlights: [
      "Perhitungan faraidh otomatis",
      "Penjelasan rincian pembagian",
      "Antarmuka yang ramah pengguna",
    ],
    tech: ["JavaScript", "React"],
    accent: "from-[#5b21b6] to-[#8b5cf6]",
    github: "https://github.com/",
    featured: false,
  },
  {
    slug: "hm-tif-website",
    title: "HM-TIF Website",
    category: "Organization",
    year: "2023",
    status: "completed",
    description:
      "Website resmi himpunan mahasiswa Teknik Informatika dengan profil dan publikasi kegiatan.",
    overview:
      "Website organisasi yang menampilkan profil himpunan, program kerja, berita, dan dokumentasi kegiatan mahasiswa.",
    highlights: [
      "Profil organisasi dan program kerja",
      "Publikasi berita dan kegiatan",
      "Galeri dokumentasi",
    ],
    tech: ["Laravel", "Blade", "MySQL"],
    accent: "from-[#4c1d95] to-[#6d28d9]",
    github: "https://github.com/",
    featured: false,
  },
  {
    slug: "e-lapor-spti",
    title: "E-Lapor SPTI",
    category: "Reporting",
    year: "2024",
    status: "completed",
    description:
      "Sistem pelaporan digital untuk mempermudah pengajuan dan pemantauan laporan.",
    overview:
      "E-Lapor SPTI memungkinkan pengguna mengirim laporan secara digital dan memantau status tindak lanjutnya secara transparan.",
    highlights: [
      "Pengajuan laporan digital",
      "Pemantauan status tindak lanjut",
      "Rekap laporan untuk pengelola",
    ],
    tech: ["Laravel", "MySQL", "Reporting"],
    accent: "from-[#312e81] to-[#4c1d95]",
    github: "https://github.com/",
    featured: false,
  },
  {
    slug: "productiveme",
    title: "ProductiveMe",
    category: "Productivity",
    year: "2023",
    status: "completed",
    description:
      "Aplikasi produktivitas untuk manajemen tugas dan kebiasaan harian.",
    overview:
      "ProductiveMe membantu pengguna mengelola daftar tugas, melacak kebiasaan, dan tetap fokus pada target harian mereka.",
    highlights: [
      "Manajemen tugas dan prioritas",
      "Pelacakan kebiasaan harian",
      "Ringkasan progres mingguan",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS"],
    accent: "from-[#26124a] to-[#7c3aed]",
    github: "https://github.com/",
    featured: false,
  },
  {
    slug: "raizen",
    title: "Raizen",
    category: "Web App",
    year: "2024",
    status: "completed",
    description:
      "Aplikasi web modern dengan fokus pada pengalaman pengguna yang mulus.",
    overview:
      "Raizen adalah aplikasi web yang menekankan antarmuka modern, performa cepat, dan pengalaman pengguna yang mulus.",
    highlights: [
      "Antarmuka modern dan responsif",
      "Performa cepat",
      "Komponen yang dapat digunakan ulang",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS"],
    accent: "from-[#4c1d95] to-[#7c3aed]",
    github: "https://github.com/",
    featured: false,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
export const OTHER_PROJECTS = PROJECTS.filter((p) => !p.featured);

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

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
