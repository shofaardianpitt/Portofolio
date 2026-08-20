'use client';

import React from 'react';
import { MapPin, GraduationCap, BookOpen } from 'lucide-react';
import MagicBento, { BentoItem } from '@/components/ui/MagicBento';

const educationList = [
  {
    id: 'pnb',
    period: '2024 — SEKARANG',
    isCurrent: true,
    title: 'D4 Rekayasa Perangkat Lunak',
    institution: 'Politeknik Negeri Bali',
    location: 'Jimbaran, Bali',
    logo: '/Logo_Politeknik_Negeri_Bali.png', 
    description: 'Fokus pada arsitektur perangkat lunak, pengembangan aplikasi Web & Mobile, serta sistem basis data.',
    tags: ['Software Architecture', 'Web & Mobile Dev', 'Database Systems', 'Agile']
  },
  {
    id: 'smkn3depok',
    period: '2021 — 2024',
    isCurrent: false,
    title: 'Teknik Komputer & Jaringan',
    institution: 'SMKN 3 Depok',
    location: 'Kota Depok, Jawa Barat',
    logo: '/smkn3depok.png',
    description: 'Mendalami dasarnya infrastruktur jaringan komputer, administrasi server, serta troubleshooting.',
    tags: ['Computer Network', 'MikroTik & Cisco', 'Hardware']
  }
];

export const Education = () => {
  const bentoItems: BentoItem[] = educationList.map((item) => ({
    id: item.id,
    className: 'md:col-span-1 flex flex-col justify-between p-6 sm:p-7 !min-h-[auto]',
    content: (
      <div className="flex flex-col justify-between h-full w-full relative z-10">
        <div>
          {/* Badge Periode */}
          <div className="flex items-center justify-between mb-4">
            <span className={`inline-flex items-center gap-2 text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full border ${
              item.isCurrent 
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                : 'bg-white/5 border-white/10 text-white/60'
            }`}>
              {item.isCurrent && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              )}
              {item.period}
            </span>
          </div>

          {/* Logo & Judul */}
          <div className="flex items-start gap-3.5 sm:gap-4 mb-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/5 border border-white/10 p-2 flex items-center justify-center shrink-0 group-hover:border-emerald-500/40 transition-colors">
              {item.logo ? (
                <img 
                  src={item.logo} 
                  alt={item.institution} 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.innerHTML = '<span class="text-emerald-400"><svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></span>';
                    }
                  }}
                />
              ) : (
                <GraduationCap className="w-6 h-6 text-emerald-400" />
              )}
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-1 group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#ecece9]/70 font-medium flex items-center gap-1.5 flex-wrap">
                <span className="text-white/90">{item.institution}</span>
                <span className="text-white/30">•</span>
                <span className="text-white/50 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-400/80 shrink-0" />
                  {item.location}
                </span>
              </p>
            </div>
          </div>

          {/* Deskripsi Singkat */}
          <p className="text-xs sm:text-sm text-[#ecece9]/70 leading-relaxed mb-5">
            {item.description}
          </p>
        </div>

        {/* Bottom Section: Tag Fokus / Skills */}
        <div className="pt-4 border-t border-white/5">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-white/40 mb-2">
            <BookOpen className="w-3 h-3 text-emerald-400" />
            <span>Fokus Pembelajaran:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag, tagIdx) => (
              <span
                key={tagIdx}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[#ecece9]/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }));

  return (
    <section id="Education" className="py-20 px-4 md:px-8 max-w-5xl mx-auto text-[#ecece9]">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-emerald-400 text-sm md:text-base font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          02.
        </span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
          Pendidikan
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-white/15 to-transparent ml-2" />
      </div>

      {/* Magic Bento Grid Side-by-Side */}
      <MagicBento
        items={bentoItems}
        glowColor="16, 185, 129"
        enableTilt={true}
        clickEffect={true}
        enableMagnetism={true}
        className="!grid-cols-1 md:!grid-cols-2"
      />
    </section>
  );
};