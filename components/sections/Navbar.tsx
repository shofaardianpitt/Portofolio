// components/Navbar.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { name: 'Tentang', href: '#About' },
  { name: 'Pendidikan', href: '#Education' },
  { name: 'Sertifikasi', href: '#Certifications' },
  { name: 'Proyek', href: '#Projects' },
  { name: 'Kontak', href: '#Contacts' },
];

export const Navbar = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Smooth scroll handler
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    
    const element = 
      document.getElementById(targetId) || 
      document.getElementById(targetId.toLowerCase());

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center items-center px-3 sm:px-4 pointer-events-none">
      {/* Container Nav dengan scroll horizontal untuk HP */}
      <nav className="pointer-events-auto relative flex items-center gap-1 sm:gap-2 px-2.5 py-1.5 sm:py-2 rounded-full border border-white/10 bg-[#0d0d0f]/35 backdrop-blur-md shadow-2xl transition-all duration-300 max-w-full overflow-x-auto no-scrollbar whitespace-nowrap touch-pan-x">
        {NAV_ITEMS.map((item, idx) => {
          const isHovered = hoveredIdx === idx;
          return (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="relative isolate shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-colors duration-300 rounded-full select-none cursor-pointer"
            >
              {/* Highlight Pill Emerald Green Glowing */}
              {isHovered && (
                <motion.div
                  layoutId="navHoverPill"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 24,
                    mass: 0.8,
                  }}
                  className="absolute inset-0 bg-emerald-500 rounded-full z-0 shadow-[0_0_20px_rgba(16,185,129,0.6),0_0_35px_rgba(16,185,129,0.35)] pointer-events-none"
                >
                  {/* Layer Glow Tambahan (Blur Emerald) */}
                  <div className="absolute inset-0 bg-emerald-400 rounded-full blur-md opacity-70 pointer-events-none" />
                </motion.div>
              )}

              {/* Teks Menu */}
              <span
                className={`relative z-10 transition-colors duration-300 ${
                  isHovered ? 'text-black font-bold' : 'text-[#ecece9]/80'
                }`}
              >
                {item.name}
              </span>
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;