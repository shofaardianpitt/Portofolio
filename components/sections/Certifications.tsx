'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MorphSlider, { MorphSliderItem } from '../ui/MorphSlider';

const certificationItems: MorphSliderItem[] = [
  {
    image: '/awsAcademy_sertifikasi.jpg', 
    caption: 'Cloud Foundations - AWS Academy', 
  },
  {
    image: '/ccna_sertifikasi.jpg',
    caption: 'Certificate of Course Completion - Cisco Networking Academy (CCNA)',
  },
];

export const Certifications = () => {
  return (
    <section id="Certifications" className="py-20 px-4 md:px-8 max-w-6xl mx-auto text-[#ecece9]">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-emerald-400 text-sm md:text-base font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          04.
        </span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
          Sertifikasi & Pencapaian
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-white/15 to-transparent ml-2" />
      </div>

      {/* Morph Slider Container */}
      <motion.div
        initial={{ opacity: 0.9, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative w-full aspect-[1.5/1] min-h-[350px] max-h-[600px] rounded-2xl md:rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-emerald-950/20"
      >
        <MorphSlider
          items={certificationItems}
          transition="melt"
          duration={1.2}
          intensity={0.4}
          aberration={0.2}
          drift={0.2}
          autoplay
          autoplayDelay={5}
          overlayColor="#000000"
          className="w-full h-full"
        />
      </motion.div>
    </section>
  );
};