// components/sections/Certifications.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../data';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
          <span className="text-emerald-400 font-mono text-lg">04.</span> Sertifikasi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-emerald-400">{cert.issuer} • {cert.date}</span>
                <h3 className="text-base font-semibold text-white mt-1 mb-2">{cert.title}</h3>
              </div>
              <span className="text-xs text-[#ecece9]/50 font-mono">{cert.hours}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};