'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '@/data/portfolioData';
import { Terminal, ExternalLink, Github } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section id="work" className="py-24 relative overflow-hidden bg-hud-grid">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-12">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-red-500/20 text-red-400 font-mono text-xs font-bold">
              05
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-sans uppercase text-white tracking-wider">
              SHIPPED WORK & REPOSITORIES
            </h2>
          </div>
          <a
            href="https://github.com/ZagguChad?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-white transition-colors"
          >
            <span>see all work</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel rounded-2xl border border-white/10 overflow-hidden group hover:border-white/20 transition-all flex flex-col justify-between"
            >
              {/* Terminal Header */}
              <div className="px-4 py-2.5 bg-neutral-900/90 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="text-xs font-mono text-neutral-400 ml-2">
                    {project.fileName}
                  </span>
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1 text-xs font-mono"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>github ↗</span>
                </a>
              </div>

              {/* Terminal Body */}
              <div className="p-6 space-y-4 font-mono text-xs">
                <div className="p-3 bg-black/60 rounded-xl border border-white/5 space-y-1 text-neutral-300">
                  <div className="text-amber-400 flex items-center gap-2 font-bold">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>❯ {project.previewPrompt}</span>
                  </div>
                  {project.previewLines.map((line, lIdx) => (
                    <div key={lIdx} className="text-[11px] text-neutral-400 pl-5">
                      {line}
                    </div>
                  ))}
                </div>

                {/* Project Info */}
                <div className="space-y-1 pt-2">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold font-sans text-white uppercase">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-sans">
                    {project.subTitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
