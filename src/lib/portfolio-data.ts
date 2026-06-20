import helpdeskImg from "../assets/projects/helpdesk.jpg";
import hcmsImg from "../assets/projects/hcms.jpg";
import internifyImg from "../assets/projects/internify.jpg";
import sibacaImg from "../assets/projects/sibaca.jpg";
import kickpayImg from "../assets/projects/kickpay.jpg";
import bumdesImg from "../assets/projects/bumdes.jpg";
import blogspaceImg from "../assets/projects/blogspace.jpg";
import seaCateringImg from "../assets/projects/seacatering.jpg";
import ahliwarisImg from "../assets/projects/ahliwaris.jpg";
import hmTifImg from "../assets/projects/hmtif.jpg";
import productivemeImg from "../assets/projects/productiveme.jpg";
import skpiImg from "../assets/projects/skpi.jpg";
import raizenImg from "../assets/projects/raizen.jpg";
import weddingINVImg from "../assets/projects/wedding.jpg";
import sitealraImg from "../assets/projects/sitealra.jpg";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const ABOUT_FACTS = [
  { label: "University", value: "Universitas Islam Sultan Agung" },
  { label: "GPA", value: "3.78 / 4.00" },
  { label: "Location", value: "Semarang, Indonesia" },
  { label: "Career Focus", value: "Full Stack Developer" },
];

export const EXPERIENCES = [
  {
    role: "Lab Assistant — OOP",
    company: "UNISSULA",
    period: "September - Januari 2026",
    description:
      "Membantu mahasiswa memahami konsep inti OOP seperti kelas, objek, pewarisan, dan polimorfisme. Serta mendukung penilaian, sesi debugging, dan diskusi kelas untuk meningkatkan hasil pembelajaran.",
    tech: ["Java", "OOP", "Teaching"],
  },
  {
    role: "Backend Developer Intern",
    company: "Dafidea Technocraft",
    period: "September - Desember 2025",
    description:
      "Membangun dan memelihara REST API serta arsitektur backend untuk produk SaaS internal dengan fokus pada performa dan keandalan.",
    tech: ["Laravel", "Vue", "Gitlab", "Intertia.js", "Jam.Dev", "MySQL", "Tailwind CSS"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "BID TIK Polda Jawa Tengah",
    period: "September - November  2025",
    description:
      "Mengembangkan sistem internal end-to-end, dari antarmuka pengguna hingga logika backend dan integrasi database.",
    tech: ["Laravel", "React", "Tailwind CSS", "MySQL"],
  },
  {
    role: "Backend Developer",
    company: "BUMDes Sarimarta (Pengabdian Masyarakat HMTIF - FTI UNISSULA)",
    period: "Juli - Agustus 2025",
    description:
      "Mengembangkan backend sistem manajemen keuangan BUMDes Sarimarta dalam program pengabdian masyarakat HMTIF untuk membantu digitalisasi pencatatan dan pelaporan keuangan.",
    tech: ["CodeIgniter 4", "MySQL", "Bootstrap 5", "PhpSpreadsheet", "DomPDF"],
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
  githubLabel?: string;
  demoLabel?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "internify",
    title: "Internify",
    subtitle: "AI Internship Recommendation Platform",
    category: "AI Platform",
    year: "2026",
    status: "building",
    description:
      "Platform rekomendasi magang berbasis AI yang mencocokkan mahasiswa dengan peluang relevan.",
    overview:
      "Internify merupakan project UAS untuk mata kuliah Sistem Pendukung Keputusan, Internify menggunakan model saw, toopsis dan sistem rekomendasi AI untuk mencocokkan profil, skill, dan minat mahasiswa dengan lowongan magang yang paling relevan. Setiap rekomendasi disertai skor kecocokan sehingga mahasiswa dapat memprioritaskan peluang terbaik.",
    highlights: [
      "Recommendation engine berbasis profil & skill mahasiswa",
      "Match score untuk setiap lowongan magang",
      "Filter cerdas berdasarkan lokasi, bidang, dan durasi",
    ],
    tech: ["Laravel", "React", "Recommendation System", "Python"],
    accent: "from-[#5b21b6] to-[#8b5cf6]",
    image: internifyImg,
    github: undefined,
    githubLabel: "Private Repository",
    demo: undefined,
    demoLabel: "Live Demo Tidak Tersedia",
    featured: true,
  },
  {
    slug: "Wedding-Invitation-Website",
    title: "Wedding Invitation Website",
    subtitle: "Custom Wedding Invitation Platform",
    category: "Web Development",
    year: "2026",
    status: "completed",
    description:
      "Website undangan pernikahan digital yang menyediakan informasi acara, galeri foto, cerita pasangan, dan konfirmasi kehadiran tamu.",
    overview:
      "Website undangan pernikahan berbasis web yang dirancang untuk memudahkan penyebaran informasi acara secara digital. Platform menyediakan detail acara, galeri foto, peta lokasi, buku tamu, serta fitur RSVP untuk konfirmasi kehadiran tamu secara online.",
    highlights: [
      "Informasi acara akad dan resepsi dalam satu halaman",
      "Galeri foto dan cerita pasangan",
      "Integrasi peta lokasi acara",
      "Fitur RSVP untuk konfirmasi kehadiran tamu",
    ],
    tech: ["Next.Js", "Tailwind CSS", "Supabase"],
    accent: "from-[#5b21b6] to-[#8b5cf6]",
    image: weddingINVImg,
    github: "https://github.com/AgnanToro/Wedding",
    demo: "https://azis-laeli-weddinginvitation.vercel.app/",
    featured: true,
  },
  {
    slug: "sibaca",
    title: "SIBACA",
    subtitle: "Sistem Balance Cairan Terintegrasi",
    category: "Healthcare System",
    year: "2026",
    status: "completed",
    description:
      "Sistem kesehatan untuk memantau keseimbangan cairan pasien secara real-time dan terintegrasi.",
    overview:
      "SIBACA membantu tenaga medis memantau intake dan output cairan pasien secara real-time. Data tercatat secara terstruktur dan tervisualisasi sehingga perawat dapat mengambil keputusan klinis lebih cepat dan akurat.",
    highlights: [
      "Pencatatan intake & output cairan pasien real-time",
      "Visualisasi tren balance cairan per periode",
    ],
    tech: ["React", "Healthcare System", "Supabase", "Tailwind CSS"],
    accent: "from-[#4c1d95] to-[#6d28d9]",
    image: sibacaImg,
    github: "https://github.com/AgnanToro/Sibaca",
    demo: "https://sibaca-sistem-balance-cairan.vercel.app/",
    featured: true,
  },
  {
    slug: "sitealra",
    title: "SiteAlra",
    subtitle: "AI-Powered Website Builder for UMKM",
    category: "AI SaaS Platform",
    year: "2026",
    status: "completed",
    description:
      "Platform pembuatan website berbasis AI yang membantu UMKM membangun, mengelola, dan mengembangkan kehadiran digital secara lebih cepat.",
    overview:
      "SiteAlra memungkinkan pelaku UMKM membuat website profesional tanpa keahlian teknis yang mendalam. Dilengkapi dengan SIRA (SiteAlra Intelligent Response Assistant), platform ini membantu pengguna dalam pembuatan konten, pengelolaan website, dan pengembangan strategi digital bisnis secara efisien.",
    highlights: [
      "Pembuatan website profesional dengan bantuan AI",
      "SIRA AI Assistant untuk mendukung kebutuhan bisnis pengguna",
      "Dashboard manajemen website yang intuitif dan mudah digunakan",
      "Desain responsif dan optimal untuk berbagai perangkat",
      "Integrasi autentikasi modern dan layanan cloud",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Gemini AI", "Vercel"],
    accent: "from-[#4c1d95] to-[#7c3aed]",
    image: sitealraImg,
    github: "https://github.com/AgnanToro/sitealra",
    demo: "https://site-alra.vercel.app/",
    featured: true,
  },
  {
    slug: "kick-and-pay",
    title: "Kick & Pay",
    category: "Internship Project",
    year: "2025",
    status: "completed",
    description:
      "Platform manajemen komunitas sepak bola untuk penjadwalan, pembayaran, dan koordinasi anggota.",
    overview:
      "Kick & Pay merupakan platform digital yang dirancang untuk membantu komunitas olahraga seperti sepak bola, futsal, dan mini soccer dalam mengelola aktivitas tim secara lebih efisien. Sistem menyediakan fitur pengelolaan anggota, pembayaran iuran, penjadwalan pertandingan, laporan keuangan, serta komunikasi tim dalam satu platform terintegrasi. Selama menjalani program magang di Dafidea Technocraft, saya berkontribusi dalam meningkatkan kualitas dan stabilitas aplikasi melalui perbaikan bug, penyempurnaan alur pembuatan event, validasi data, peningkatan proses autentikasi, serta optimalisasi responsivitas antarmuka berdasarkan hasil pengujian QA.",
    highlights: [
      "Manajemen anggota dan aktivitas komunitas olahraga",
      "Pengelolaan pembayaran dan laporan keuangan tim",
      "Penyempurnaan workflow pembuatan event dan validasi data",
      "Peningkatan stabilitas sistem dan responsivitas antarmuka",
    ],
    tech: ["Laravel", "Vue.js", "Inertia.js", "Tailwind CSS", "MySQL"],
    accent: "from-[#312e81] to-[#4c1d95]",
    image: kickpayImg,
    github: undefined,
    githubLabel: "Private Repository",
    demo: undefined,
    demoLabel: "Live Demo Tidak Tersedia",
    featured: true,
  },
  {
    slug: "helpdesk-ticketing",
    title: "Helpdesk Internal Ticketing System",
    category: "Internship Project",
    year: "2025",
    status: "completed",
    description:
      "Project Magang saya di BID TIK Polda Jawa Tengah berupa sistem helpdesk internal untuk pengelolaan tiket, penugasan teknisi, dan pelacakan progres pekerjaan.",
    overview:
      "Helpdesk merupakan proyek yang saya kembangkan selama magang di BID TIK Polda Jawa Tengah untuk mendukung proses pelaporan dan penanganan tiket secara terstruktur. Sistem mencakup alur lengkap mulai dari pembuatan tiket oleh pengguna, validasi admin, penugasan teknisi, pelaporan progres, hingga penyelesaian pekerjaan dengan dukungan dokumentasi dan ekspor laporan.",
    highlights: [
      "Alur tiket end-to-end: open, in-progress, escalated, resolved",
      "Role-based access untuk agent, supervisor, dan admin",
      "Dashboard analitik SLA dan waktu respon",
      "Notifikasi real-time dan riwayat aktivitas tiket",
    ],
    tech: ["Laravel", "React", "TypeScript", "MySQL"],
    accent: "from-[#4c1d95] to-[#7c3aed]",
    image: helpdeskImg,
    github: "https://github.com/AgnanToro/Helpdesk",
    demo: undefined,
    demoLabel: "Live Demo Tidak Tersedia",
    featured: true,
  },
  {
    slug: "hcms-kpi",
    title: "HCMS Performance & KPI Management",
    category: "Internship Project",
    year: "2025",
    status: "completed",
    description:
      "Project Magang saya di Dafidea Technocraft berupa sistem Human Capital Management untuk pengelolaan KPI, reviewer, dan proses evaluasi kinerja karyawan.",
    overview:
      "HCMS (Human Capital Management System) merupakan aplikasi web internal yang digunakan untuk mengelola proses evaluasi kinerja karyawan dan KPI dalam organisasi. Sistem ini mengintegrasikan data karyawan, penugasan reviewer, periode penilaian, serta workflow evaluasi yang terhubung dengan sistem ERP perusahaan. Selama menjalani program magang di Dafidea Technocraft, saya berkontribusi pada pengembangan backend modul Reviewer Management dan Performance Period, termasuk implementasi logika penugasan reviewer, validasi data, operasi CRUD, serta workflow yang mendukung proses penilaian kinerja secara terstruktur dan efisien.",
    highlights: [
      "Manajemen reviewer dan mapping penilaian",
      "Pengaturan periode evaluasi KPI",
      "Validasi dan pengelolaan workflow penilaian",
      "Integrasi data karyawan dengan sistem internal",
    ],
    tech: ["Laravel", "Vue", "Inertia.js", "SCCS", "MySQL"],
    accent: "from-[#26124a] to-[#4c1d95]",
    image: hcmsImg,
    github: undefined,
    githubLabel: "Private Repository",
    demo: undefined,
    demoLabel: "Live Demo Tidak Tersedia",
    featured: true,
  },

  {
    slug: "bumdes-finance",
    title: "BUMDES Sarimarta Finance",
    category: "Finance System",
    year: "2025",
    status: "completed",
    description:
      "Sistem manajemen keuangan badan usaha desa dengan pencatatan transaksi dan pelaporan otomatis.",
    overview:
      "Sistem manajemen keuangan untuk BUMDes yang dikembangkan dalam program Pengabdian Masyarakat HMTIF x HIMA PGSD UNISSULA. Sistem mendukung pencatatan transaksi, pengelolaan kategori keuangan, perhitungan saldo otomatis, serta pembuatan laporan dalam format Excel dan PDF.",
    highlights: [
      "Pencatatan transaksi pemasukan & pengeluaran",
      "Laporan keuangan otomatis per periode",
      "Kontrol akses aman untuk pengurus desa",
      "Dashboard ringkasan kondisi keuangan",
    ],
    tech: ["CodeIgniter 4", "MySQL", "Bootstrap 5", "PhpSpreadsheet", "DomPDF"],
    accent: "from-[#26124a] to-[#7c3aed]",
    image: bumdesImg,
    github: undefined,
    githubLabel: "Private Repository",
    demo: "https://sarimarta.id/",
    featured: true,
  },
  {
    slug: "blogspace",
    title: "BlogSpace",
    category: "Web Platform",
    year: "2025",
    status: "completed",
    description:
      "Take-home project untuk proses seleksi magang yang menampilkan implementasi CRUD, autentikasi, dan manajemen konten blog.",
    overview:
      "BlogSpace merupakan aplikasi manajemen blog yang memungkinkan pengguna membuat, mengelola, mengedit, dan menghapus artikel melalui antarmuka yang sederhana dan responsif. Sistem dilengkapi dengan autentikasi pengguna, kontrol akses berbasis peran, serta pengelolaan konten yang terstruktur untuk mendukung alur publikasi artikel. Proyek ini dikembangkan sebagai technical assessment dalam proses seleksi magang di Dafidea Technocraft dengan fokus pada implementasi CRUD, autentikasi, desain basis data relasional, dan praktik pengembangan aplikasi full-stack.",
    highlights: [
      "Manajemen artikel dengan operasi CRUD",
      "Autentikasi dan otorisasi berbasis peran",
      "Desain basis data relasional",
      "Implementasi arsitektur full-stack Laravel dan Vue.js",
    ],
    tech: ["Laravel", "Vue.js", "MySQL", "Tailwind CSS "],
    accent: "from-[#4c1d95] to-[#7c3aed]",
    image: blogspaceImg,
    github: "https://github.com/AgnanToro/BlogApp-Laravel12",
    demo: undefined,
    demoLabel: "Live Demo Tidak Tersedia",
    featured: false,
  },
  {
    slug: "sea-catering",
    title: "SEA Catering",
    category: "Web App",
    year: "2025",
    status: "completed",
    description: "Aplikasi pemesanan katering dengan paket langganan dan manajemen menu.",
    overview:
      "Aplikasi web full-stack yang dikembangkan untuk COMPfest Technical Challenge, menawarkan layanan pengiriman makanan sehat berbasis langganan Pengguna dapat menelusuri paket makanan (Diet, Protein, Royal) menyesuaikan jadwal pengiriman (sarapan, makan siang, makan malam), dan mengelola preferensi diet. Dasbor admin mencakup analitik bisnis, manajemen langganan, dan penanganan kontak.",
    highlights: [
      "Paket langganan makanan",
      "Manajemen menu dan pesanan",
      "Alur checkout yang sederhana",
    ],
    tech: ["Codeigniter 4", "MySQL", "Tailwind CSS", "Alpine.js", "Chart.js"],
    accent: "from-[#26124a] to-[#4c1d95]",
    image: seaCateringImg,
    github: "https://github.com/AgnanToro/sea-catering/tree/master",
    demo: undefined,
    demoLabel: "Live Demo Tidak Tersedia",
    featured: false,
  },
  {
    slug: "islamic-inheritance-calculator",
    title: "Islamic Inheritance Calculator",
    category: "Utility",
    year: "2025",
    status: "completed",
    description: "Kalkulator pembagian waris Islam (faraidh) yang akurat dan mudah digunakan.",
    overview:
      "Aplikasi web yang dirancang untuk membantu perhitungan dan pembagian harta waris berdasarkan hukum waris Islam (Faraid). Sistem mendukung perhitungan bagian ahli waris sesuai ketentuan syariah, termasuk mekanisme Faraid dan Asabah, dengan mempertimbangkan berbagai struktur hubungan keluarga. Selain menyediakan hasil perhitungan secara otomatis, aplikasi juga dilengkapi materi edukasi mengenai hukum waris Islam serta fitur pembuatan laporan untuk memudahkan pengguna memahami proses pembagian warisan secara transparan dan akurat.",
    highlights: [
      "Perhitungan faraidh otomatis",
      "Penjelasan rincian pembagian",
      "Antarmuka yang ramah pengguna",
    ],
    tech: ["JavaScript", "CodeIgniter 4", "MySQL", "Tailwind CSS", "Docker"],
    accent: "from-[#5b21b6] to-[#8b5cf6]",
    image: ahliwarisImg,
    github: "https://github.com/AgnanToro/kalkulator-ahli-waris",
    demo: undefined,
    demoLabel: "Live Demo Tidak Tersedia",
    featured: false,
  },
  {
    slug: "hm-tif-website",
    title: "HM-TIF Website",
    category: "Organization",
    year: "2025",
    status: "completed",
    description:
      "Website resmi HM-TIF UNISSULA untuk menampilkan profil organisasi, struktur kepengurusan, program kerja, dan informasi kegiatan secara digital.",
    overview:
      "Website resmi HM-TIF UNISSULA yang dikembangkan sebagai media informasi dan profil organisasi bagi mahasiswa, dosen, dan pihak terkait. Platform ini menyajikan struktur kepengurusan, program kerja, visi misi, dokumentasi kegiatan, serta berbagai informasi organisasi dalam tampilan yang responsif dan mudah diakses. Saya berkontribusi dalam pengembangan dan pemeliharaan website secara menyeluruh, termasuk pengembangan antarmuka, pengelolaan konten, pembaruan data anggota, serta peningkatan konsistensi dan responsivitas tampilan di berbagai perangkat.",
    highlights: [
      "Pengembangan dan pemeliharaan website organisasi",
      "Profil organisasi dan program kerja",
      "Publikasi berita dan kegiatan",
      "Galeri dokumentasi",
    ],
    tech: ["React", "Bootstrap 5", "MySQL"],
    accent: "from-[#4c1d95] to-[#6d28d9]",
    image: hmTifImg,
    github: undefined,
    githubLabel: "Private Repository",
    demo: "https://hmtifunissula.com/",
    featured: false,
  },
  {
    slug: "e-lapor-spti",
    title: "E-Lapor SPTI",
    category: "Reporting",
    year: "2025",
    status: "completed",
    description:
      "Platform pelaporan digital untuk membantu anggota serikat pekerja melaporkan pelanggaran, insiden keselamatan kerja, dan permasalahan ketenagakerjaan secara terstruktur.",
    overview:
      "E-Lapor SPTI merupakan platform pelaporan digital yang dirancang untuk mendukung proses pelaporan berbagai permasalahan ketenagakerjaan, seperti pelanggaran hak pekerja, insiden keselamatan kerja, hingga kasus pelecehan di lingkungan kerja. Sistem memungkinkan anggota mengirim laporan beserta bukti pendukung, memantau perkembangan laporan, serta berkomunikasi dengan administrator. Selain itu, platform menyediakan manajemen laporan berbasis peran untuk membantu proses penanganan kasus secara lebih terorganisir, transparan, dan mudah diakses.",
    highlights: [
      "Pelaporan pelanggaran dan permasalahan ketenagakerjaan",
      "Unggah bukti pendukung dan pelacakan status laporan",
      "Manajemen laporan berbasis peran",
      "Komunikasi antara pelapor dan administrator",
    ],
    tech: ["CodeIgniter 4", "MySQL", "Tailwind CSS", "Docker"],
    accent: "from-[#312e81] to-[#4c1d95]",
    image: skpiImg,
    github:
      "https://github.com/AgnanToro/E-Lapor-SPTI-Sistem-Pelaporan-Serikat-Pekerja-Transportasi-Indonesia",
    demo: undefined,
    demoLabel: "Live Demo Tidak Tersedia",
    featured: false,
  },
  {
    slug: "productiveme",
    title: "ProductiveMe",
    category: "Productivity",
    year: "2025",
    status: "completed",
    description:
      "Aplikasi manajemen tugas berbasis web yang membantu pengguna mengatur, memantau, dan menganalisis produktivitas melalui dashboard dan visualisasi data.",
    overview:
      "ProductiveMe merupakan aplikasi manajemen tugas berbasis web yang dirancang untuk membantu pengguna mengelola aktivitas harian secara lebih terorganisir. Sistem memungkinkan pengguna membuat, mengelompokkan, memperbarui, dan memantau tugas berdasarkan kategori yang berbeda. Selain fitur manajemen tugas, aplikasi juga menyediakan dashboard analitik yang menampilkan statistik dan visualisasi progres untuk membantu pengguna memahami pola produktivitas mereka. Dengan dukungan autentikasi pengguna, pengelolaan data yang terisolasi, dan antarmuka responsif, ProductiveMe dapat digunakan dengan nyaman di berbagai perangkat.",
    highlights: [
      "Manajemen tugas dengan operasi CRUD",
      "Pengelompokan tugas berdasarkan kategori",
      "Dashboard analitik dan visualisasi produktivitas",
      "Autentikasi pengguna dan isolasi data per akun",
    ],
    tech: ["CodeIgniter 3", "MySQL", "Bootstrap/CSS3", "Docker"],
    accent: "from-[#26124a] to-[#7c3aed]",
    image: productivemeImg,
    github: "https://github.com/AgnanToro/productiveme",
    demo: undefined,
    demoLabel: "Live Demo Tidak Tersedia",
    featured: false,
  },
  {
    slug: "raizen",
    title: "Raizen",
    category: "Travel Platform",
    year: "2024",
    status: "completed",
    description: "Aplikasi web modern dengan fokus pada pengalaman pengguna yang mulus.",
    overview:
      "Raizen merupakan proyek pengembangan web yang dibuat sebagai bagian dari tugas perkuliahan. Aplikasi ini dirancang untuk membantu pengguna menemukan informasi destinasi wisata Indonesia, melakukan pemesanan perjalanan, dan memperoleh referensi melalui konten wisata yang tersedia dalam platform.",
    highlights: [
      "Eksplorasi dan pencarian destinasi wisata",
      "Sistem pemesanan dengan pilihan tanggal dan jumlah pengunjung",
      "Artikel dan konten informasi perjalanan",
      "Antarmuka responsif dan interaktif",
    ],
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "Slick Carousel",
      "Font Awesome",
      "Google Fonts",
    ],
    accent: "from-[#4c1d95] to-[#7c3aed]",
    image: raizenImg,
    github: "https://github.com/AgnanToro/raizen",
    demo: "https://agnantoro.github.io/raizen/home.html",
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
  { value: 15, suffix: "+", label: "Projects Completed" },
  { value: 2, suffix: "", label: "Internship Experiences" },
  { value: 18, suffix: "+", label: "Technologies Used" },
  { value: 5, suffix: "+", label: "Academic Projects" },
];

export const ACHIEVEMENTS = [
  {
    title: "Fundamental Deep Learning - Dicoding",
    description:
      "Mempelajari penerapan deep learning untuk klasifikasi gambar dan teks, sistem rekomendasi, time series, hingga Generative AI.",
    tag: "Certification",
  },
  {
    title: "Machine Learning for Beginners - Dicoding",
    description:
      "Mempelajari konsep machine learning mulai dari supervised learning, unsupervised learning, hingga evaluasi dan peningkatan performa model.",
    tag: "Certification",
  },
  {
    title: "Google Developer Groups on Campus UIN Jakarta",
    description:
      "Mengikuti kelas rutin dan kegiatan komunitas yang berfokus pada Artificial Intelligence, Machine Learning, dan Web Development.",
    tag: "Community",
  },
  {
    title: "HM-TIF UNISSULA",
    description:
      "Terlibat dalam kepanitiaan dan pengembangan program kerja organisasi, termasuk pelatihan AI, kompetisi web programming, serta pengabdian masyarakat.",
    tag: "Organization",
  },
];

export const SOCIALS = {
  github: "https://github.com/AgnanToro",
  linkedin: "https://linkedin.com/in/agnantoro",
  email: "agnankun18@gmail.com",
};
