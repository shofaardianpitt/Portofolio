'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACTS } from '../data';
import { TypewriterHeading } from '../ui/TypewriterHeading';
import ShapeBlur from '../ui/ShapeBlur';
import BorderGlow from '../ui/BorderGlow';

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
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // 3D Tilt
    const tiltX = -(y - rect.height / 2) * 0.08;
    const tiltY = (x - rect.width / 2) * 0.08;
    setRotate({ x: tiltX, y: tiltY });

    // Interactive Spotlight Position
    const posX = (x / rect.width) * 100;
    const posY = (y / rect.height) * 100;
    setMousePos({ x: posX, y: posY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center pt-24 pb-12 px-4 md:px-8 relative overflow-hidden bg-transparent">
      {/* Ambient Background */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-purple-500/[0.08] rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 z-10 text-center md:text-left"
      >
        {/* Frame Profil */}
        <motion.div
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{ rotateX: rotate.x, rotateY: rotate.y }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center shrink-0 group cursor-pointer"
        >
          {/* Canvas WebGL ShapeBlur Background */}
          <div className="absolute -inset-20 md:-inset-28 z-0 pointer-events-none">
            <ShapeBlur
              variation={0}
              shapeSize={1.1}
              roundness={0.45}
              borderSize={0.08}
              circleSize={0.6}
              circleEdge={0.8}
            />
          </div>

          {/* BORDER GLOW SUPER TERANG & NEON (Cyber Violet & Electric Cyan) */}
          <BorderGlow
            edgeSensitivity={15}             /* Sensitivitas tinggi biar pendaran cepat terpicu */
            glowColor="280 100 75"           /* HSL: Neon Violet Super Terang */
            backgroundColor="#0d0d0f"
            borderRadius={40}
            glowRadius={50}                  /* Pendaran outer glow makin tebal & luas */
            glowIntensity={2.5}              /* Intensitas dinaikkan dari 1.2 -> 2.5 (Super Bright) */
            coneSpread={40}                  /* Sudut sorotan cahaya diperluas */
            animated={false}
            colors={['#c084fc', '#e879f9', '#38bdf8', '#818cf8']} /* Gradient Violet, Pink, Sky Blue, Magenta */
            fillOpacity={0.75}               /* Pendaran tepi dalam lebih pekat */
            className="w-full h-full z-10"
          >
            {/* Foto Profil Original */}
            <img
              src="/ShofaArdianPittProfile.jpeg"
              alt="Shofa Ardian Palwadi"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />

            {/* LIGHT SWEEP / SHINE BEAM */}
            <motion.div
              animate={{
                x: ['-180%', '280%'],
              }}
              transition={{
                repeat: Infinity,
                repeatDelay: 4.5,
                duration: 3.2,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 pointer-events-none z-20 opacity-80"
              style={{
                background:
                  'linear-gradient(115deg, transparent 35%, rgba(255, 255, 255, 0.45) 49%, rgba(192, 132, 252, 0.35) 52%, transparent 65%)',
                transform: 'skewX(-25deg)',
              }}
            />

            {/* Interactive Cursor Spotlight Glow */}
            <div
              className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300 bg-gradient-to-br from-white/20 via-purple-500/20 to-transparent"
              style={{
                opacity: isHovered ? 1 : 0,
                WebkitMaskImage: `radial-gradient(circle 120px at ${mousePos.x}% ${mousePos.y}%, black 20%, transparent 80%)`,
                maskImage: `radial-gradient(circle 120px at ${mousePos.x}% ${mousePos.y}%, black 20%, transparent 80%)`,
              }}
            />
          </BorderGlow>
        </motion.div>

        {/* Teks */}
        <div className="flex flex-col items-center md:items-start flex-1">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-semibold tracking-wider mb-3 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
            </span>
            STILL LEARNING
          </div>

          <TypewriterHeading
            text="Shofa Ardian Palwadi"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#ecece9] mb-2 min-h-[1.2em]"
          />

          <p className="text-xs sm:text-sm text-emerald-400/90 font-mono tracking-[0.25em] uppercase font-semibold mb-4">
            Web & Mobile Developer
          </p>

          <p className="text-sm md:text-base text-[#ecece9]/70 leading-relaxed mb-6 max-w-xl font-normal">
            Mahasiswa D4 Teknologi Rekayasa Perangkat Lunak Politeknik Negeri Bali yang berfokus di ruang lingkup pembuatan aplikasi Web & Mobile modern.
          </p>

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

export default Hero;