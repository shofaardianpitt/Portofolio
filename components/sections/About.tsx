'use client';

import React from 'react';
import { GraduationCap, MapPin, Sparkles, Terminal, Calendar, Globe } from 'lucide-react';
import MagicBento, { BentoItem } from '@/components/ui/MagicBento';

export const About = () => {
  const bentoItems: BentoItem[] = [
    // 1. Profil Utama & Bio (Spans 2 Kolom, 2 Baris)
    {
      id: 'profile',
      className: 'md:col-span-2 md:row-span-2 flex flex-col justify-between p-6 sm:p-8',
      content: (
        <div className="flex flex-col justify-between h-full relative z-10">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-4">
              <Terminal className="w-4 h-4" />
              <span>Developer Profile</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Hi! Saya{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">
                Shofa Ardian Palwadi
              </span>
            </h3>

            <p className="text-sm sm:text-base text-[#ecece9]/80 leading-relaxed mb-4 font-normal">
              Seorang <strong className="text-white font-semibold">Web & Mobile Developer</strong> yang saat ini berfokus pada pembangunan aplikasi fungsional, responsif, dan berperforma tinggi. Berkomitmen menciptakan solusi digital yang efisien dan mengutamakan pengalaman pengguna.
            </p>

            <p className="text-sm sm:text-base text-[#ecece9]/80 leading-relaxed font-normal">
              Saya terbiasa menangani ruang lingkup backend maupun frontend, mulai dari merancang database & REST API menggunakan{' '}
              <span className="inline-block px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs font-semibold">
                Laravel
              </span>
              , hingga membangun antarmuka interaktif yang modern menggunakan{' '}
              <span className="inline-block px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold">
                Next.js
              </span>{' '}
              dan{' '}
              <span className="inline-block px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold">
                Flutter
              </span>
              .
            </p>
          </div>
        </div>
      ),
    },

    // 2. Pendidikan
    {
      id: 'education',
      className: 'md:col-span-1 flex flex-col justify-between p-6 sm:p-7',
      content: (
        <div className="flex flex-col justify-between h-full w-full relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
              Pendidikan
            </span>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-1">
              D4 Rekayasa Perangkat Lunak
            </h4>
            <p className="text-xs sm:text-sm text-[#ecece9]/70 font-medium mb-3">
              Politeknik Negeri Bali
            </p>

            <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400/90 pt-3 border-t border-white/5">
              <Calendar className="w-3.5 h-3.5" />
              <span>Mahasiswa Aktif</span>
            </div>
          </div>
        </div>
      ),
    },

    // 3. Lokasi
    {
      id: 'location',
      className: 'md:col-span-1 flex flex-col justify-between p-6 sm:p-7',
      content: (
        <div className="flex flex-col justify-between h-full w-full relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <MapPin className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
              Lokasi
            </span>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-1">
              Bali, Indonesia
            </h4>
            <p className="text-xs sm:text-sm text-[#ecece9]/70 font-medium mb-3">
              Saat ini tinggal di Bali
            </p>

            <div className="flex items-center gap-1.5 text-xs font-mono text-amber-400/90 pt-3 border-t border-white/5">
              <Globe className="w-3.5 h-3.5" />
              <span>Remote & Hybrid Ready</span>
            </div>
          </div>
        </div>
      ),
    },

    // 4. Fokus Saat Ini (Spans 3 Kolom)
    {
      id: 'focus',
      className: 'md:col-span-3 !min-h-[auto] py-4 px-6 sm:py-4 sm:px-7', // Override min-height & perkecil padding vertikal
      content: (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">Fokus Saat Ini</h4>
              <p className="text-xs text-[#ecece9]/60">Clean Code, Scalability, & UI/UX</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Full-Stack Dev
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-medium">
              Mobile App Dev
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="About" className="py-20 px-4 md:px-8 max-w-5xl mx-auto text-[#ecece9]">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-emerald-400 text-sm md:text-base font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          01.
        </span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
          Tentang Saya
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-white/15 to-transparent ml-2" />
      </div>

      {/* Magic Bento Grid */}
      <MagicBento
        items={bentoItems}
        glowColor="16, 185, 129"
        enableTilt={true}
        clickEffect={true}
        enableMagnetism={true}
        className="!grid-cols-1 md:!grid-cols-3"
      />
    </section>
  );
};