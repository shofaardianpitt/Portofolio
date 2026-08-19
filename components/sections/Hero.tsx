// components/sections/Hero.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CONTACTS } from '../data';
import { TypewriterHeading } from '../ui/TypewriterHeading';
import { ProfileImageContinuous } from '../ui/ProfileImageContinuous';

const CATEGORIZED_SKILLS = [
  { name: 'Next.js', category: 'frontend', color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300' },
  { name: 'React', category: 'frontend', color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300' },
  { name: 'Tailwind CSS', category: 'frontend', color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300' },
  { name: 'Laravel', category: 'backend', color: 'border-amber-500/30 bg-amber-500/10 text-amber-300' },
  { name: 'MySQL', category: 'backend', color: 'border-amber-500/30 bg-amber-500/10 text-amber-300' },
  { name: 'REST API', category: 'backend', color: 'border-amber-500/30 bg-amber-500/10 text-amber-300' },
  { name: 'Flutter', category: 'mobile', color: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300' },
  { name: 'Python', category: 'ai', color: 'border-purple-500/30 bg-purple-500/10 text-purple-300' },
  { name: 'Git', category: 'tools', color: 'border-zinc-500/40 bg-zinc-500/10 text-zinc-300' },
];

export const Hero = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center pt-24 pb-12 px-4 md:px-8 relative overflow-hidden bg-transparent">
      {/* Ambient Glows Halus (Tanpa Noise/Grain) */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-amber-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 z-10 text-center md:text-left"
      >
        {/* Frame Foto Profil */}
        <div className="flex justify-center items-center">
          <ProfileImageContinuous
            src="/ShofaArdianPittProfile.jpeg"
            alt="Shofa Ardian Palwadi"
          />
        </div>

        {/* Konten Teks & Informasi */}
        <div className="flex flex-col items-center md:items-start flex-1">
          {/* Badge Status */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-semibold tracking-wider mb-3 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
            </span>
            STILL LEARNING
          </div>

          {/* Heading Nama Typewriter */}
          <TypewriterHeading
            text="Shofa Ardian Palwadi"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#ecece9] mb-2 min-h-[1.2em]"
          />

          {/* Title */}
          <p className="text-xs sm:text-sm text-emerald-400/90 font-mono tracking-[0.25em] uppercase font-semibold mb-4">
            Web & Mobile Developer
          </p>

          {/* Deskripsi 1 Baris */}
          <p className="text-sm md:text-base text-[#ecece9]/70 leading-relaxed mb-6 max-w-xl font-normal">
            Mahasiswa D4 RPL Politeknik Negeri Bali yang berfokus membangun ekosistem aplikasi Web & Mobile modern.
          </p>

          {/* Social Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-7">
            {CONTACTS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium rounded-xl bg-white/[0.04] border border-white/10 hover:bg-emerald-500 hover:text-black hover:border-emerald-400 transition-all duration-300 text-[#ecece9] shadow-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] group"
                >
                  <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Skill Tags */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 max-w-lg">
            {CATEGORIZED_SKILLS.map((skill) => (
              <span
                key={skill.name}
                className={`px-3 py-1 text-[11px] font-mono rounded-lg border backdrop-blur-md transition-all hover:scale-105 cursor-default ${skill.color}`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};