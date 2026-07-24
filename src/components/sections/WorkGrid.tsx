'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import MarqueeBanner from '@/components/ui/MarqueeBanner';
import { WORK_PROJECTS } from '@/data/portfolioData';
import { WorkProject } from '@/types/portfolio';

const accentClasses: Record<WorkProject['accentColor'], string> = {
  lime: 'bg-[#A8E66C]',
  cyan: 'bg-[#27CCF3]',
  pink: 'bg-[#FF6B8B]',
  lavender: 'bg-[#C0A0FF]',
  yellow: 'bg-[#FFD000]',
};

export default function WorkGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="work" className="relative py-16">
      <MarqueeBanner text="selected work ✦ selected work ✦ selected work ✦ selected work ✦" colorClass="bg-[#FFD000]" />

      <div className="w-full max-w-6xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WORK_PROJECTS.map((project, index) => {
            const isHovered = hoveredId === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                className={project.rotationClass}
              >
                <div
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="bg-[#FFFAEF] brutal-border rounded-2xl p-5 shadow-brutal hover:shadow-brutal-xl transition-all duration-200 group cursor-default relative"
                >
                  {/* Titlebar */}
                  <div className="flex items-center justify-between border-b-2 border-[#141111] pb-3 mb-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#FF6B8B] brutal-border-sm" />
                      <span className="w-3 h-3 rounded-full bg-[#FFD000] brutal-border-sm" />
                      <span className="w-3 h-3 rounded-full bg-[#A8E66C] brutal-border-sm" />
                      <span className="ml-2 font-mono text-xs font-bold text-[#141111]/80">
                        {project.filename}
                      </span>
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs font-bold text-[#141111] hover:text-[#27CCF3] transition-colors flex items-center gap-1"
                    >
                      github ↗
                    </a>
                  </div>

                  {/* Body preview area */}
                  <div className="bg-[#141111] text-[#FFFAEF] brutal-border rounded-xl p-4 min-h-[170px] flex flex-col justify-between mb-4 relative overflow-hidden">
                    <span className="absolute top-2 right-3 font-mono text-[10px] text-white/40 uppercase font-bold">
                      ▶ hover to run
                    </span>

                    {/* Prompt Header */}
                    {project.promptCommand && (
                      <div className="font-mono text-xs text-[#FFD000] font-bold flex items-center gap-2 mb-3">
                        <span className="text-[#A8E66C]">
                          {project.promptIcon || '❯'}
                        </span>
                        <span>{project.promptCommand}</span>
                        <span className="cursor-blink" />
                      </div>
                    )}

                    {/* Preview lines */}
                    <div className="space-y-1.5 font-mono text-xs flex-1">
                      {project.previewLines.map((line, lineIdx) => {
                        const show = isHovered;

                        return (
                          <motion.div
                            key={lineIdx}
                            initial={{ opacity: 0.3, x: -5 }}
                            animate={show ? { opacity: 1, x: 0 } : { opacity: 0.3, x: 0 }}
                            transition={{ duration: 0.2, delay: show ? line.delay / 1000 : 0 }}
                            className={`flex items-start gap-1.5 ${
                              line.header
                                ? 'text-[#27CCF3] font-bold uppercase'
                                : line.highlight
                                ? 'text-[#A8E66C] font-bold'
                                : line.error
                                ? 'text-[#FF6B8B] font-bold'
                                : 'text-neutral-300'
                            }`}
                          >
                            <span>{line.text}</span>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Color accent strip */}
                    <div className={`h-1.5 w-full rounded-full mt-4 ${accentClasses[project.accentColor]}`} />
                  </div>

                  {/* Card Info Footer */}
                  <div>
                    <h3 className="font-grotesk font-extrabold text-lg text-[#141111] uppercase tracking-wide">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-[#141111]/70 font-semibold mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* See All Work CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/ZagguChad?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-3.5 bg-[#FFD000] brutal-border rounded-full font-mono text-sm font-extrabold uppercase shadow-brutal hover:shadow-brutal-xl hover:-translate-y-0.5 transition-all"
          >
            see all work ↗
          </a>
        </div>
      </div>
    </section>
  );
}
