'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACTS } from '../data';
import WarpText from '../ui/WarpText';
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

    const tiltX = -(y - rect.height / 2) * 0.08;
    const tiltY = (x - rect.width / 2) * 0.08;
    setRotate({ x: tiltX, y: tiltY });

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
    <section className="min-h-screen w-full flex items-center justify-center pt-20 pb-12 px-4 md:px-8 relative overflow-hidden bg-transparent">
      {/* Ambient Background */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-purple-500/[0.08] rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 z-10 text-center md:text-left"
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

          <BorderGlow
            edgeSensitivity={15}
            glowColor="280 100 75"
            backgroundColor="#0d0d0f"
            borderRadius={40}
            glowRadius={50}
            glowIntensity={2.5}
            coneSpread={40}
            animated={false}
            colors={['#c084fc', '#e879f9', '#38bdf8', '#818cf8']}
            fillOpacity={0.75}
            className="w-full h-full z-10"
          >
            <img
              src="/ShofaArdianPittProfile.jpeg"
              alt="Shofa Ardian Palwadi"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />

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
        <div className="flex flex-col items-center md:items-start flex-1 w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-[11px] font-semibold tracking-wider mb-1 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
            </span>
            STILL LEARNING
          </div>

          {/* WarpText Nama */}
          <div className="w-full max-w-2xl my-0 flex justify-center md:justify-start">
            <WarpText
              text="Shofa Ardian Palwadi"
              color="#ecece9"
              warpStrength={0.06}
              warpScale={1.5}
              speed={0.4}
              pointerInfluence={0.35}
              pointerStrength={0.3}
              refraction={0.015}
              ripple
              fontSize="clamp(2.0rem, 4vw, 3.2rem)"
              fontWeight={800}
              fontFamily="inherit"
              letterSpacing={-0.03}
              lineHeight={1.0}
              style={{ height: '80px', width: '100%' }}
            />
          </div>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-emerald-400/90 font-mono tracking-[0.2em] uppercase font-semibold mt-1 mb-3">
            Web & Mobile Developer
          </p>

          {/* Deskripsi */}
          <p className="text-sm md:text-base text-[#ecece9]/75 leading-relaxed mb-5 max-w-xl font-normal">
            Mahasiswa D4 Teknologi Rekayasa Perangkat Lunak Politeknik Negeri Bali yang berfokus di ruang lingkup pembuatan aplikasi Web & Mobile modern.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2.5 mb-5">
            {CONTACTS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-xl bg-white/[0.04] border border-white/10 hover:bg-emerald-500 hover:text-black hover:border-emerald-400 transition-all duration-300 text-[#ecece9] shadow-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] group"
                >
                  <Icon className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Skills Badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-1.5 max-w-lg">
            {CATEGORIZED_SKILLS.map((skill) => (
              <span
                key={skill.name}
                className={`px-2.5 py-1 text-[11px] font-mono rounded-lg border backdrop-blur-md transition-all hover:scale-105 cursor-default ${skill.color}`}
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