'use client';

import React from 'react';
import { ExternalLink, FolderGit2, Smartphone, Cpu, Globe } from 'lucide-react';
import MagicBento, { BentoItem } from '@/components/ui/MagicBento';

const projectsList = [
  {
    id: 'kulinfind-2',
    title: 'KulinFind 2.0',
    category: 'Mobile Application',
    description: 'Versi pembaruan dari KulinFind dengan peningkatan arsitektur UI/UX, performa API yang lebih cepat, dan fitur rekomendasi kuliner lokal.',
    tags: ['Flutter', 'Laravel', 'REST API', 'MySQL'],
    categoryIcon: Smartphone,
    driveUrl: 'https://drive.google.com/drive/folders/1IrogL8Vy4zwRraw_zuhAdICYQZ-TB3dJ?usp=sharing',
    isFeatured: true,
  },
  {
    id: 'kulinfind-1',
    title: 'KulinFind 1.0',
    category: 'Web Application',
    description: 'Platform pencarian kuliner berbasis web generasi pertama yang terintegrasi dengan backend REST API.',
    tags: ['Laravel', 'REST API', 'MySQL',],
    categoryIcon: Globe,
    driveUrl: 'https://drive.google.com/your-kulinfind1-folder',
    isFeatured: false,
  },
  {
    id: 'waste-classification',
    title: 'Klasifikasi Sampah',
    category: 'AI Model Project',
    description: 'Sistem deteksi dan klasifikasi jenis sampah otomatis berbasis Machine Learning untuk membantu pemilahan sampah lingkungan.',
    tags: ['Python', 'OpenCV', 'AI Model'],
    categoryIcon: Cpu,
    driveUrl: 'https://drive.google.com/drive/folders/12d3Zwcn-ugJf-N9cKh7QynLcaDu5G9lz?usp=sharing',
    isFeatured: false,
  },
];

export const Projects = () => {
  const bentoItems: BentoItem[] = projectsList.map((project) => {
    const CategoryIcon = project.categoryIcon;

    return {
      id: project.id,
      className: `md:col-span-1 flex flex-col justify-between p-6 !min-h-[auto] ${
        project.isFeatured ? '!border-emerald-500/30' : ''
      }`,
      content: (
        <div className="flex flex-col justify-between h-full w-full relative z-10">
          <div>
            {/* Top Header Card: Kategori & Tombol Link Drive */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-400 font-medium">
                <CategoryIcon className="w-3.5 h-3.5" />
                {project.category}
              </span>

              {/* Tombol Akses Folder Drive */}
              <a
                href={project.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Buka Folder Drive Proyek"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all flex items-center gap-1.5 text-xs font-mono"
              >
                <FolderGit2 className="w-4 h-4" />
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Judul Proyek */}
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors flex items-center justify-between">
              <span>{project.title}</span>
              {project.isFeatured && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Latest
                </span>
              )}
            </h3>

            {/* Deskripsi */}
            <p className="text-xs sm:text-sm text-[#ecece9]/70 leading-relaxed mb-6">
              {project.description}
            </p>
          </div>

          {/* Bottom Section: Tech Stack Tags & Action Button */}
          <div className="pt-4 border-t border-white/5 flex flex-col gap-4">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[#ecece9]/80"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Link Opsional */}
            <a
              href={project.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/80 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-500/40 transition-all flex items-center justify-center gap-2 group/btn"
            >
              <span>Lihat Berkas Proyek</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      ),
    };
  });

  return (
    <section id="Projects" className="py-20 px-4 md:px-8 max-w-5xl mx-auto text-[#ecece9]">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-emerald-400 text-sm md:text-base font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          03.
        </span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
          Proyek Unggulan
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
        className="!grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3"
      />
    </section>
  );
};