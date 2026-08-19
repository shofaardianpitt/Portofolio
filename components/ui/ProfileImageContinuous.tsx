// components/ui/ProfileImageContinuous.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProfileImageProps {
  src: string;
  alt: string;
}

export const ProfileImageContinuous = ({ src, alt }: ProfileImageProps) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  // Interaksi 3D Tilt ringan saat hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y / 14);
    setRotateY(x / 14);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0, 8, 0],
      }}
      transition={{
        y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
        opacity: { duration: 0.8 },
        scale: { duration: 0.8, ease: 'easeOut' },
      }}
      style={{ perspective: 1000 }}
      className="relative flex justify-center items-center flex-shrink-0 z-20"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
        whileHover={{ scale: 1.03 }}
        className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-[22px] p-[2px] overflow-hidden group cursor-pointer shadow-[0_0_30px_rgba(16,185,129,0.12)] hover:shadow-[0_0_45px_rgba(245,158,11,0.28)] transition-shadow duration-500"
      >
        {/* Border Conic Gradient Berputar Pelan */}
        <div className="absolute inset-[-100%] animate-[spin_9s_linear_infinite] bg-[conic-gradient(from_0deg,#f59e0b,#10b981,#06b6d4,#f59e0b)]" />

        {/* Container Utama Frame Foto dengan Inner Shadow */}
        <div className="relative w-full h-full bg-[#0a0a0c] rounded-[20px] p-1 overflow-hidden flex items-center justify-center">
          <Image
            src={src}
            alt={alt}
            width={320}
            height={320}
            className="rounded-[18px] object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
            priority
          />
          {/* Inner Shadow untuk Efek Kedalaman */}
          <div className="absolute inset-0 rounded-[18px] shadow-[inset_0_0_15px_rgba(0,0,0,0.65)] pointer-events-none" />
        </div>
      </motion.div>
    </motion.div>
  );
};