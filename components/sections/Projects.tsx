// components/sections/Projects.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data';

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
          <span className="text-emerald-400 font-mono text-lg">03.</span> Proyek Unggulan
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/40 transition-all group relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-mono text-emerald-400">{project.category}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-[#ecece9]/70 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[10px] font-mono rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};