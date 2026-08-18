'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  ArrowUpRight,
  MapPin,
  Copy,
  Check,
  Code2,
  GraduationCap,
  FolderGit2,
  User,
  Users,
  Sparkles,
  Award,
  Maximize2,
  X
} from 'lucide-react';

// Custom SVG Icons
const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64 7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const CONTACTS = [
  { icon: Mail, label: 'Email', href: 'mailto:shofapwi22@gmail.com' },
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/shofaardianpitt' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com/shofaardian' },
  { icon: Phone, label: 'WhatsApp', href: 'https://wa.me/6287773945614' },
];

const SKILLS = [
  'Laravel', 'Flutter', 'Next.js', 'React', 'Tailwind CSS',
  'Python', 'REST API', 'MySQL', 'Machine Learning', 'Git'
];

const EDUCATION = [
  {
    period: '2024 — SEKARANG',
    degree: 'D4 Rekayasa Perangkat Lunak',
    institution: 'Politeknik Negeri Bali',
    location: 'Jimbaran, Kuta Selatan, Bali',
    logo: '/Logo_Politeknik_Negeri_Bali.png',
  },
  {
    period: '2021 — 2024',
    degree: 'Teknik Komputer & Jaringan',
    institution: 'SMKN 3 Depok',
    location: 'Kec. Cilodong, Kota Depok, Jawa Barat',
    logo: '/smkn3depok.png',
  },
];

const CERTIFICATIONS = [
  {
    id: 'aws-cert',
    title: 'AWS Academy Graduate - Cloud Foundations',
    issuer: 'AWS Academy',
    date: '27 Juli 2026',
    hours: '20 Jam Training',
    image: '/awsAcademy_sertifikasi.jpg',
  },
  {
    id: 'ccna-cert',
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    date: '08 Januari 2026',
    hours: 'Course Completion',
    image: '/ccna_sertifikasi.jpg',
  },
];

const PROJECTS = [
  {
    id: '01',
    title: 'KulinFind 2.0',
    category: 'Mobile Application',
    description: 'Aplikasi reservasi restoran berbasis mobile dengan arsitektur REST API modern dan sistem integrasi data real-time.',
    tags: ['Flutter', 'REST API', 'Laravel', 'State Management'],
  },
  {
    id: '02',
    title: 'KulinFind 1.0',
    category: 'Web System',
    description: 'Sistem manajemen & reservasi restoran berbasis web dengan skema database terstruktur dan panel admin yang komprehensif.',
    tags: ['Laravel', 'MySQL', 'JavaScript', 'Tailwind CSS'],
  },
  {
    id: '03',
    title: 'Trash Classification System',
    category: 'AI & Computer Vision',
    description: 'Sistem otomatisasi pemilahan sampah rumah tangga (Organik, Plastik, Kertas) berbasis Machine Learning dan pemrosesan citra digital.',
    tags: ['Python', 'AI Model', 'OpenCV', 'TensorFlow'],
  },
  {
    id: '04',
    title: 'Personal Web Engine',
    category: 'Frontend Engineering',
    description: 'Platform portofolio interaktif statis berperforma tinggi dengan animasi halus dan arsitektur komponen terstruktur.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
  },
];

const ORGANIZATIONS = [
  {
    role: "Staff Divisi Web Development",
    organization: "UKM Computer Club",
    subText: "Politeknik Negeri Bali",
    type: "Organisasi",
    logo: "/logoUKM_Putih.png",
    period: "September 2024 — Juli 2025",
    description: "Mengembangkan struktur dan tampilan antarmuka web responsif menggunakan HTML, CSS, serta framework Tailwind CSS melalui kolaborasi, diskusi teknis, dan pembelajaran mandiri dalam front-end development.",
  },
  {
    role: "Staff Divisi Lomba",
    organization: "EAGLES",
    subText: "Program Kerja UKM Computer Club",
    type: "Kepanitiaan",
    logo: "/logoEagles.png",
    period: "Maret 2025 — Mei 2025",
    description: "Mendampingi peserta, memimpin pertandingan Mobile Legends sesuai regulasi, dan mengelola komunikasi operasional antara panitia dan peserta untuk memastikan kelancaran alur acara.",
  },
  {
    role: "Staff Divisi Lomba",
    organization: "INTECHFEST",
    subText: "Program Kerja UKM Computer Club",
    type: "Kepanitiaan",
    logo: "/logoIntech.png",
    period: "Juli 2025 — September 2025",
    description: "Mendampingi peserta divisi Capture The Flag (CTF), menyampaikan alur serta regulasi kompetisi, dan mengelola operasional perlombaan agar berjalan tepat waktu dan lancar.",
  },
];

function TypewriterHeading({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < text.length) {
      timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, 90);
    } else if (!isDeleting && displayedText.length === text.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 3500);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length - 1));
      }, 40);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, text]);

  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4 flex items-center min-h-[1.25em]">
      <span>{displayedText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-1 md:w-1.5 h-[0.85em] bg-emerald-400 ml-1.5 rounded-sm"
      />
    </h1>
  );
}

function ProfileImageContinuous({ src }: { src: string }) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
      className="relative w-36 h-36 md:w-48 md:h-48 group shrink-0"
    >
      <motion.div
        animate={{ opacity: [0.25, 0.55, 0.25], scale: [0.98, 1.02, 0.98] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 via-teal-500/20 to-blue-500/30 rounded-2xl blur-lg"
      />

      <motion.div
        animate={{ borderColor: ['rgba(39, 39, 42, 0.8)', 'rgba(161, 161, 170, 0.8)', 'rgba(39, 39, 42, 0.8)'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -inset-2 border rounded-2xl pointer-events-none z-10"
      />

      <motion.span
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-2.5 -left-2.5 w-3 h-3 border-t-2 border-l-2 border-emerald-400 z-20"
      />
      <motion.span
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -top-2.5 -right-2.5 w-3 h-3 border-t-2 border-r-2 border-emerald-400 z-20"
      />
      <motion.span
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-2.5 -left-2.5 w-3 h-3 border-b-2 border-l-2 border-emerald-400 z-20"
      />
      <motion.span
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute -bottom-2.5 -right-2.5 w-3 h-3 border-b-2 border-r-2 border-emerald-400 z-20"
      />

      <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-900 border border-zinc-700/80 shadow-2xl">
        <motion.div
          animate={{ x: ['-150%', '200%'] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 4,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 pointer-events-none"
        />

        <Image
          src={src}
          alt="Shofa Ardian Palwadi"
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          priority
        />
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [selectedCert, setSelectedCert] = useState<typeof CERTIFICATIONS[0] | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shofapwi22@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#0e0e11] text-[#ecece9] antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
      <div className="max-w-5xl mx-auto border-x border-zinc-800/60 min-h-screen flex flex-col justify-between">

        {/* HERO SECTION */}
        <section className="p-6 sm:p-8 md:p-14 border-b border-zinc-800/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span>STILL LEARNING BOSKU!</span>
            </div>

            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 bg-zinc-900/50 px-3 py-1 rounded-full border border-zinc-800/50">
              <MapPin className="w-3 h-3 text-emerald-400" />
              DEPOK, JAWA BARAT, INDONESIA
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start md:items-center">
            <ProfileImageContinuous src="/ShofaArdianPittProfile.jpeg" />

            <div className="flex flex-col justify-center flex-1">
              <TypewriterHeading text="Shofa Ardian Palwadi" />

              <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-normal mb-6 max-w-xl">
                Web & Mobile Developer. Mahasiswa D4 Rekayasa Perangkat Lunak PNB yang berfokus membangun aplikasi web responsif, arsitektur REST API kokoh, dan aplikasi mobile berperforma tinggi.
              </p>

              <div className="flex flex-wrap items-center gap-2.5">
                {CONTACTS.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800/90 text-zinc-300 hover:text-white text-xs font-mono transition-all hover:border-zinc-700 hover:shadow-lg group"
                    >
                      <Icon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                      <span>{contact.label}</span>
                      <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  );
                })}

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-900/50 hover:bg-zinc-800/80 border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-all"
                  title="Salin Email"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="p-6 sm:p-8 md:p-14 border-b border-zinc-800/60">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-xs text-zinc-500">01 /</span>
            <h2 className="text-sm font-mono tracking-wider uppercase text-zinc-300">TENTANG SAYA</h2>
          </div>

          <div className="max-w-3xl text-zinc-300 text-base md:text-lg leading-relaxed space-y-4">
            <p>
              Mahasiswa Politeknik Negeri Bali, saya memfokuskan studi dan eksperimen pada ruang lingkup rekayasa perangkat lunak. Kemampuan saya mencakup pengembangan backend dengan <span className="text-white font-medium underline decoration-emerald-500/50 underline-offset-4">Laravel</span>, aplikasi mobile dengan <span className="text-white font-medium underline decoration-emerald-500/50 underline-offset-4">Flutter</span>, serta pengelolaan basis data relational & RESTful API.
            </p>
            <p className="text-zinc-400 text-sm md:text-base">
              Saya memprioritaskan arsitektur kode yang bersih, integrasi API yang terstruktur, dan pengalaman pengguna yang intuitif tanpa visual yang berlebihan.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-800/40">
            <div className="flex items-center gap-2 mb-3">
              <Code2 className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Teknologi & Tools</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-md bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-300 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="p-6 sm:p-8 md:p-14 border-b border-zinc-800/60">
          <div className="flex items-center gap-3 mb-8">
            <FolderGit2 className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-xs text-zinc-500">02 /</span>
            <h2 className="text-sm font-mono tracking-wider uppercase text-zinc-300">PROYEK PILIHAN</h2>
          </div>

          <div className="divide-y divide-zinc-800/80 border-t border-b border-zinc-800/80">
            {PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="py-6 group transition-all hover:bg-zinc-900/40 px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-xl border border-transparent hover:border-zinc-800/80"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-emerald-400 font-semibold">{project.id}</span>
                    <h3 className="text-xl font-medium text-white group-hover:text-emerald-300 transition-colors flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800 self-start md:self-auto">
                    {project.category}
                  </span>
                </div>

                <p className="text-zinc-400 text-sm max-w-2xl mb-4 ml-0 md:ml-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 ml-0 md:ml-8">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-zinc-900/90 text-zinc-400 border border-zinc-800 group-hover:border-zinc-700/80 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="p-6 sm:p-8 md:p-14 border-b border-zinc-800/60">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-xs text-zinc-500">03 /</span>
            <h2 className="text-sm font-mono tracking-wider uppercase text-zinc-300">PENDIDIKAN</h2>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {EDUCATION.map((edu, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg shrink-0 group-hover:border-emerald-500/30 transition-colors">
                    <Image
                      src={edu.logo}
                      alt={edu.institution}
                      width={36}
                      height={36}
                      className="w-9 h-9 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-white group-hover:text-emerald-300 transition-colors">{edu.degree}</h3>
                    <p className="text-xs text-zinc-400 mt-0.5">{edu.institution}</p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end justify-between text-xs font-mono text-zinc-500 gap-1">
                  <span className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">{edu.period}</span>
                  <span className="flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    {edu.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section className="p-6 sm:p-8 md:p-14 border-b border-zinc-800/60">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Award className="w-4 h-4 text-emerald-400" />
              <span className="font-mono text-xs text-zinc-500">04 /</span>
              <h2 className="text-sm font-mono tracking-wider uppercase text-zinc-300">SERTIFIKASI</h2>
            </div>
            <span className="hidden sm:block text-[11px] font-mono text-zinc-500">
              *Klik gambar untuk memperbesar
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative flex flex-col justify-between p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700/80 transition-all hover:bg-zinc-900/60"
              >
                <div>
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="relative w-full aspect-[16/11] rounded-xl overflow-hidden bg-[#0a0a0d] mb-5 border border-zinc-800/90 flex items-center justify-center p-2.5 cursor-pointer shadow-inner group/img"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:12px_12px] opacity-40" />

                    <div className="relative w-full h-full">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain transition-transform duration-500 group-hover/img:scale-[1.02]"
                      />
                    </div>

                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity backdrop-blur-[2px] flex items-center justify-center gap-2 text-xs font-mono text-white">
                      <Maximize2 className="w-4 h-4 text-emerald-400" />
                      <span>Lihat Ukuran Penuh</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                    <span className="text-emerald-400 font-medium px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      {cert.issuer}
                    </span>
                    <span className="text-zinc-500">{cert.date}</span>
                  </div>

                  <h3 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>{cert.hours}</span>
                  <span className="inline-flex items-center gap-1 text-emerald-400/80 text-[11px] group-hover:text-emerald-300">
                    <Sparkles className="w-3 h-3" /> Certified
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ORGANIZATIONS & COMMITTEES SECTION */}
        <section className="p-6 sm:p-8 md:p-14 border-b border-zinc-800/60">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-xs text-zinc-500">05 /</span>
            <h2 className="text-sm font-mono tracking-wider uppercase text-zinc-300">ORGANISASI & KEPANITIAAN</h2>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {ORGANIZATIONS.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-all group flex flex-col sm:flex-row items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center p-2 shrink-0 group-hover:border-zinc-700 transition-colors">
                  <img
                    src={item.logo}
                    alt={item.organization}
                    className="w-full h-full object-contain filter drop-shadow-sm"
                  />
                </div>

                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-1.5">
                    <div>
                      <h3 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors inline-flex items-center gap-2 flex-wrap">
                        <span>{item.role}</span>
                        <span className="text-zinc-500 font-normal">@ {item.organization}</span>
                      </h3>
                      <p className="text-xs text-zinc-500 font-mono">{item.subText}</p>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto mt-2 sm:mt-0">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800/60 text-zinc-400 border border-zinc-700/50">
                        {item.type}
                      </span>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-2 max-w-3xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LIGHTBOX MODAL FULLSCREEN */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-4 sm:p-8 flex flex-col items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center bg-zinc-900/90 border border-zinc-800 rounded-2xl overflow-hidden p-4 sm:p-6 shadow-2xl"
              >
                <div className="w-full flex items-center justify-between pb-4 border-b border-zinc-800 mb-4">
                  <div>
                    <h3 className="text-white font-medium text-sm sm:text-base">{selectedCert.title}</h3>
                    <p className="text-xs font-mono text-zinc-400">{selectedCert.issuer} • {selectedCert.date}</p>
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="relative w-full h-[60vh] max-h-[600px] flex items-center justify-center">
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FOOTER */}
        <footer className="p-6 sm:p-8 border-t border-zinc-800/60 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-500 bg-zinc-950/40">
          <p>© {new Date().getFullYear()} Shofa Ardian Palwadi. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Built with Next.js & Tailwind CSS</span>
          </div>
        </footer>

      </div>
    </main>
  );
}