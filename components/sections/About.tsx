// components/sections/About.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Sparkles, Terminal, Calendar, Globe } from 'lucide-react';

export const About = () => {
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

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch">
        
        {/* Card Utama - Profil & Bio (Spans 2 Kolom) */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="md:col-span-2 p-6 sm:p-8 rounded-2xl bg-[#0d0d0f]/60 border border-white/10 backdrop-blur-md relative overflow-hidden group shadow-xl flex flex-col justify-between"
        >
          {/* Ambient Glow saat Hover */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/[0.08] transition-all duration-500" />
          
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
        </motion.div>

        {/* Kolom Kanan - Kartu Pendidikan & Lokasi (Presisi Vertikal Rata Atas-Bawah) */}
        <div className="flex flex-col gap-4 md:gap-6 h-full">
          
          {/* Card Pendidikan */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="flex-1 p-6 sm:p-7 rounded-2xl bg-[#0d0d0f]/60 border border-white/10 backdrop-blur-md relative overflow-hidden flex flex-col justify-between group"
          >
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
          </motion.div>

          {/* Card Lokasi */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="flex-1 p-6 sm:p-7 rounded-2xl bg-[#0d0d0f]/60 border border-white/10 backdrop-blur-md relative overflow-hidden flex flex-col justify-between group"
          >
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
          </motion.div>

        </div>

        {/* Card Bawah - Fokus Saat Ini (Spans 3 Kolom) */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="md:col-span-3 p-6 sm:p-7 rounded-2xl bg-[#0d0d0f]/60 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Fokus Saat Ini</h4>
              <p className="text-xs sm:text-sm text-[#ecece9]/60">Clean Code, Scalability, & UI/UX</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Full-Stack Dev
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-medium">
              Mobile App Dev
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};  