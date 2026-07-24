'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { WorkProject } from '@/types/portfolio';

interface ProjectModalProps {
  project: WorkProject | null;
  isOpen: boolean;
  onClose: () => void;
  allProjects?: WorkProject[];
  isAllWorkMode?: boolean;
  onSelectProject?: (proj: WorkProject) => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
  allProjects = [],
  isAllWorkMode = false,
  onSelectProject,
}: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#141111]/75 backdrop-blur-sm"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-3xl bg-[#FFFAEF] brutal-border rounded-3xl p-6 md:p-8 shadow-brutal-xl max-h-[90vh] overflow-y-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b-2 border-[#141111] pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#FF6B8B] brutal-border-sm" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#FFD000] brutal-border-sm" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#A8E66C] brutal-border-sm" />
              <span className="ml-3 font-mono text-xs md:text-sm font-bold text-[#141111]">
                {isAllWorkMode ? 'ALL_REPOSITORIES.sh' : project?.filename || 'project_details.info'}
              </span>
            </div>

            <button
              onClick={onClose}
              className="px-3 py-1 bg-[#FF6B8B] text-white brutal-border-sm rounded-lg font-mono text-xs font-bold hover:bg-[#141111] transition-colors"
            >
              ✕ CLOSE
            </button>
          </div>

          {/* MODE A: All Projects Catalog Modal */}
          {isAllWorkMode ? (
            <div>
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-[#FFD000] brutal-border-sm font-mono text-xs font-extrabold uppercase mb-2">
                  ✦ GITHUB REPOSITORY CATALOG
                </span>
                <h2 className="font-grotesk text-3xl font-extrabold text-[#141111]">
                  All Open-Source Projects
                </h2>
                <p className="font-mono text-xs md:text-sm text-[#141111]/70 font-semibold mt-1">
                  Click any project to inspect details or visit GitHub repo.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allProjects.map((proj) => (
                  <div
                    key={proj.id}
                    onClick={() => onSelectProject?.(proj)}
                    className="bg-white brutal-border p-4 rounded-xl shadow-brutal-sm hover:shadow-brutal hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between font-mono text-xs font-bold text-[#141111]/70 mb-1">
                        <span>{proj.filename}</span>
                        <span className="px-2 py-0.5 bg-[#141111] text-[#FFFAEF] text-[10px] rounded uppercase">
                          {proj.accentColor}
                        </span>
                      </div>
                      <h3 className="font-grotesk font-extrabold text-base text-[#141111]">
                        {proj.title}
                      </h3>
                      <p className="font-sans text-xs text-[#141111]/80 mt-1 line-clamp-2">
                        {proj.summary}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-neutral-200">
                      {proj.techStack?.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-neutral-100 brutal-border-sm text-[10px] font-mono font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t-2 border-[#141111] flex flex-wrap justify-between items-center gap-4">
                <a
                  href="https://github.com/ZagguChad?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-[#FFD000] brutal-border rounded-xl font-mono text-xs md:text-sm font-extrabold uppercase hover:bg-[#A8E66C] transition-colors"
                >
                  Visit Full GitHub Repositories Page ↗
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-neutral-200 brutal-border rounded-xl font-mono text-xs font-bold uppercase hover:bg-neutral-300"
                >
                  Done Exploring
                </button>
              </div>
            </div>
          ) : project ? (
            /* MODE B: Single Project Detail Modal */
            <div>
              {/* Title & Badge */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-[#A8E66C] brutal-border-sm font-mono text-xs font-extrabold uppercase">
                  {project.filename}
                </span>
                {project.featured && (
                  <span className="px-3 py-1 bg-[#FFD000] brutal-border-sm font-mono text-xs font-extrabold uppercase">
                    ★ FEATURED WORK
                  </span>
                )}
              </div>

              <h2 className="font-grotesk text-3xl md:text-4xl font-extrabold text-[#141111] mb-2">
                {project.title}
              </h2>
              <p className="font-mono text-xs md:text-sm font-bold text-[#27CCF3] bg-[#141111] px-3 py-1.5 rounded-lg inline-block mb-6">
                {project.subtitle}
              </p>

              {/* Summary & Full Description */}
              <div className="space-y-4 mb-6">
                <div className="bg-white brutal-border p-4 rounded-xl shadow-brutal-sm">
                  <h4 className="font-mono text-xs font-bold text-[#141111]/70 uppercase mb-1">
                    System Overview
                  </h4>
                  <p className="font-sans text-base text-[#141111] leading-relaxed font-medium">
                    {project.fullDescription || project.summary}
                  </p>
                </div>

                {/* Tech Stack Chips */}
                {project.techStack && (
                  <div>
                    <h4 className="font-mono text-xs font-bold text-[#141111]/70 uppercase mb-2">
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#27CCF3] brutal-border-sm font-mono text-xs font-bold text-[#141111] rounded-lg shadow-brutal-sm"
                        >
                          #{tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Terminal Log Console */}
              <div className="bg-[#141111] text-[#FFFAEF] brutal-border rounded-xl p-4 font-mono text-xs mb-8 shadow-brutal">
                <div className="flex justify-between items-center border-b border-white/20 pb-2 mb-3 text-white/50 text-[10px] uppercase">
                  <span>TERMINAL EMULATOR</span>
                  <span>STATUS: EXECUTED</span>
                </div>
                {project.promptCommand && (
                  <div className="text-[#FFD000] font-bold mb-2 flex items-center gap-2">
                    <span className="text-[#A8E66C]">❯</span>
                    <span>{project.promptCommand}</span>
                    <span className="cursor-blink" />
                  </div>
                )}
                <div className="space-y-1 text-neutral-300">
                  {project.previewLines.map((line, idx) => (
                    <div
                      key={idx}
                      className={
                        line.header
                          ? 'text-[#27CCF3] font-bold uppercase'
                          : line.highlight
                          ? 'text-[#A8E66C] font-bold'
                          : line.error
                          ? 'text-[#FF6B8B] font-bold'
                          : ''
                      }
                    >
                      {line.text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 justify-end pt-4 border-t-2 border-[#141111]">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-[#FFD000] brutal-border rounded-xl font-mono text-xs md:text-sm font-extrabold uppercase hover:bg-[#A8E66C] shadow-brutal hover:shadow-brutal-lg transition-all"
                >
                  View Repository on GitHub ↗
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-neutral-200 brutal-border rounded-xl font-mono text-xs md:text-sm font-bold uppercase hover:bg-neutral-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : null}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
