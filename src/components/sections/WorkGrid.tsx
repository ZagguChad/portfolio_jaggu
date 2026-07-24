'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import MarqueeBanner from '@/components/ui/MarqueeBanner';
import ProjectModal from '@/components/ui/ProjectModal';
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
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAllWorkMode, setIsAllWorkMode] = useState(false);

  // Featured subset to display directly on the page (first 4 or marked as featured)
  const featuredProjects = WORK_PROJECTS.filter((p) => p.featured);

  const handleOpenProject = (project: WorkProject) => {
    setSelectedProject(project);
    setIsAllWorkMode(false);
    setIsModalOpen(true);
  };

  const handleOpenAllWork = () => {
    setSelectedProject(null);
    setIsAllWorkMode(true);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setIsAllWorkMode(false);
  };

  return (
    <section id="work" className="relative py-16">
      <MarqueeBanner text="selected work ✦ selected work ✦ selected work ✦ selected work ✦" colorClass="bg-[#FFD000]" />

      <div className="w-full max-w-6xl mx-auto px-4 mt-12">
        {/* Section 03 Heading */}
        <div className="flex items-center gap-3 mb-8 border-b-2 border-[#141111] pb-3">
          <span className="px-3 py-1 bg-[#141111] text-[#FFFAEF] brutal-border-sm font-mono text-xs font-extrabold uppercase tracking-wider">
            SECTION // 03
          </span>
          <h2 className="font-grotesk text-xs md:text-sm font-bold text-[#141111]/80 uppercase tracking-widest">
            Selected Work & Featured Projects
          </h2>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => {
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
                  onClick={() => handleOpenProject(project)}
                  className="bg-[#FFFAEF] brutal-border rounded-2xl p-5 shadow-brutal hover:shadow-brutal-xl transition-all duration-200 group cursor-pointer relative"
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

                    <span className="px-2 py-0.5 bg-[#FFD000] brutal-border-sm font-mono text-[10px] font-bold uppercase">
                      Inspect ↗
                    </span>
                  </div>

                  {/* Body preview area */}
                  <div className="bg-[#141111] text-[#FFFAEF] brutal-border rounded-xl p-4 min-h-[170px] flex flex-col justify-between mb-4 relative overflow-hidden">
                    <span className="absolute top-2 right-3 font-mono text-[10px] text-white/40 uppercase font-bold">
                      ▶ click for details
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

                  {/* Card Info Footer with Brief & Tech Stack */}
                  <div>
                    <h3 className="font-grotesk font-extrabold text-lg text-[#141111] uppercase tracking-wide group-hover:text-[#27CCF3] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs text-[#141111]/80 font-medium mt-1 leading-snug">
                      {project.summary}
                    </p>

                    {/* Tech Badges */}
                    {project.techStack && (
                      <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-neutral-200">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-[#FFFAEF] brutal-border-sm text-[10px] font-mono font-bold text-[#141111]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* See All Work CTA Button */}
        <div className="mt-12 text-center flex flex-col items-center gap-3">
          <button
            onClick={handleOpenAllWork}
            className="px-8 py-3.5 bg-[#FFD000] brutal-border rounded-full font-mono text-sm font-extrabold uppercase shadow-brutal hover:shadow-brutal-xl hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            see all work (10+ repositories) ↗
          </button>
          <span className="font-mono text-xs text-[#141111]/60 font-semibold">
            Opens complete project catalog & GitHub repositories
          </span>
        </div>
      </div>

      {/* Pop-up Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        allProjects={WORK_PROJECTS}
        isAllWorkMode={isAllWorkMode}
        onSelectProject={(proj) => {
          setSelectedProject(proj);
          setIsAllWorkMode(false);
        }}
      />
    </section>
  );
}
