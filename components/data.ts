// components/data.ts
import { Mail, Phone } from 'lucide-react';
import { GithubIcon, InstagramIcon } from './ui/Icons';

export const CONTACTS = [
  { icon: Mail, label: 'Email', href: 'mailto:shofapwi22@gmail.com' },
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/shofaardianpitt' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com/shofaardian' },
  { icon: Phone, label: 'WhatsApp', href: 'https://wa.me/6287773945614' },
];

export const SKILLS = [
  'Laravel', 'Flutter', 'Next.js', 'React', 'Tailwind CSS',
  'Python', 'REST API', 'MySQL', 'Machine Learning', 'Git'
];

export const EDUCATION = [
  {
    period: '2024 — SEKARANG',
    degree: 'D4 Rekayasa Perangkat Lunak',
    institution: 'Politeknik Negeri Bali',
    location: 'Jimbaran, Bali',
    logo: '/Logo_Politeknik_Negeri_Bali.png',
  },
  {
    period: '2021 — 2024',
    degree: 'Teknik Komputer & Jaringan',
    institution: 'SMKN 3 Depok',
    location: 'Kota Depok, Jawa Barat',
    logo: '/smkn3depok.png',
  },
];

export const CERTIFICATIONS = [
  {
    id: 'aws-cert',
    title: 'AWS Academy Graduate - Cloud Foundations',
    issuer: 'AWS Academy',
    date: '2026',
    hours: '20 Jam Training',
    image: '/awsAcademy_sertifikasi.jpg',
  },
  {
    id: 'ccna-cert',
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    date: '2026',
    hours: 'Course Completion',
    image: '/ccna_sertifikasi.jpg',
  },
];

export const ORGANIZATIONS = [
  {
    period: '2024 — SEKARANG',
    role: 'Anggota UKM',
    organization: 'Politeknik Negeri Bali',
    description: 'Aktif dalam kegiatan keorganisasian dan pengembangan karakter mahasiswa.',
  },
];

export const PROJECTS = [
  {
    id: '01',
    title: 'KulinFind',
    category: 'Mobile Application',
    description: 'Aplikasi pencarian kuliner lokal berbasis Flutter dan Laravel REST API.',
    tags: ['Flutter', 'Laravel', 'REST API', 'MySQL'],
    link: 'https://github.com/shofaardianpitt',
  },
];