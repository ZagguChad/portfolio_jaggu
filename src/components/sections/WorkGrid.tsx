'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MarqueeBanner from '@/components/ui/MarqueeBanner';
import ProjectModal from '@/components/ui/ProjectModal';
import { WORK_PROJECTS } from '@/data/portfolioData';
import { WorkProject } from '@/types/portfolio';
import { CassetteTapeIcon } from '@/components/decor';

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
  const [isInsertingTape, setIsInsertingTape] = useState(false);
  const [insertedTapeTitle, setInsertedTapeTitle] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAllWorkMode, setIsAllWorkMode] = useState(false);

  // Featured subset to display directly on the page
  const featuredProjects = WORK_PROJECTS.filter((p) => p.featured);

  const handleOpenProject = (project: WorkProject) => {
    // Play Cassette Deck insertion animation effect
    setInsertedTapeTitle(project.title);
    setIsInsertingTape(true);

    setTimeout(() => {
      setIsInsertingTape(false);
      setSelectedProject(project);
      setIsAllWorkMode(false);
      setIsModalOpen(true);
    }, 450);
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
    <section id="work" className="relative py-16 texture-blueprint">
      <MarqueeBanner text="selected work ✦ cassette tape cartridges ✦ software blueprints ✦ selected work ✦" colorClass="bg-[#FFD000]" />

      {/* Cassette Deck Insertion Overlay Animation */}
      <AnimatePresence>
        {isInsertingTape && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#141111]/90 flex flex-col items-center justify-center pointer-events-none select-none"
          >
            <div className="bg-[#FFFAEF] brutal-border p-8 rounded-3xl shadow-brutal-xl flex flex-col items-center gap-4 text-center max-w-sm">
              <CassetteTapeIcon size={64} className="animate-reel-spin" />
              <div className="font-mono text-xs font-bold uppercase bg-[#FFD000] px-3 py-1 brutal-border-sm">
                ▶ INSERTING CASSETTE DECK
              </div>
              <div className="font-grotesk text-xl font-extrabold text-[#141111]">
                {insertedTapeTitle}
              </div>
              <div className="font-mono text-[10px] text-[#141111]/60">
                LOADING TAPE COUNTER 00:01…
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full max-w-6xl mx-auto px-4 mt-12">
        {/* Section 03 Heading */}
        <div className="flex items-center gap-3 mb-8 border-b-2 border-[#141111] pb-3">
          <span className="px-3 py-1 bg-[#141111] text-[#FFFAEF] brutal-border-sm font-mono text-xs font-extrabold uppercase tracking-wider">
            SECTION // 03
          </span>
          <h2 className="font-grotesk text-xs md:text-sm font-bold text-[#141111]/80 uppercase tracking-widest">
            Selected Work & Software Cassette Cartridges
          </h2>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8">
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
                {/* Physical Cassette Tape Shell */}
                <div
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => handleOpenProject(project)}
                  className="bg-[#FFFAEF] brutal-border rounded-2xl sm:rounded-3xl p-4 xs:p-5 shadow-brutal hover:shadow-brutal-xl transition-all duration-200 group cursor-pointer relative overflow-hidden"
                >
                  {/* Cassette Tape Top Screws & Titlebar */}
                  <div className="flex items-center justify-between border-b-2 border-[#141111] pb-2.5 xs:pb-3 mb-3 xs:mb-4">
                    <div className="flex items-center gap-1.5 xs:gap-2">
                      {/* Screw heads */}
                      <span className="w-3 h-3 rounded-full brutal-border-sm bg-neutral-300 flex items-center justify-center font-mono text-[8px] font-bold">+</span>
                      <span className="w-3 h-3 rounded-full brutal-border-sm bg-neutral-300 flex items-center justify-center font-mono text-[8px] font-bold">+</span>
                      <span className="ml-1 font-mono text-[10px] xs:text-xs font-bold text-[#141111] uppercase tracking-wider truncate max-w-[130px] xs:max-w-[200px] sm:max-w-none">
                        SIDE A // {project.filename}
                      </span>
                    </div>

                    <span className="px-2 xs:px-2.5 py-0.5 bg-[#FFD000] brutal-border-sm font-mono text-[9px] xs:text-[10px] font-bold uppercase shadow-brutal-sm group-hover:bg-[#A8E66C] transition-colors shrink-0">
                      ▶ DECK
                    </span>
                  </div>

                  {/* Cassette Spool Window & Terminal Preview */}
                  <div className="bg-[#141111] text-[#FFFAEF] brutal-border rounded-xl xs:rounded-2xl p-3 xs:p-4 min-h-[160px] xs:min-h-[185px] flex flex-col justify-between mb-3 xs:mb-4 relative overflow-hidden">
                    {/* Spool Reels Graphic */}
                    <div className="flex items-center justify-between border-b border-white/20 pb-2 mb-2.5 xs:mb-3">
                      <div className="flex items-center gap-1.5 xs:gap-2">
                        <div className={`w-4 h-4 xs:w-5 xs:h-5 rounded-full border-2 border-white flex items-center justify-center ${isHovered ? 'animate-reel-spin' : ''}`}>
                          <span className="w-1 h-1 bg-[#FFD000] rounded-full" />
                        </div>
                        <span className="font-mono text-[8px] xs:text-[9px] text-[#FFD000] font-bold uppercase">
                          REEL 01
                        </span>
                      </div>

                      <span className="font-mono text-[8px] xs:text-[9px] text-white/50 font-bold uppercase hidden 2xs:inline">
                        60 MIN TAPE
                      </span>

                      <div className="flex items-center gap-1.5 xs:gap-2">
                        <span className="font-mono text-[8px] xs:text-[9px] text-[#A8E66C] font-bold uppercase">
                          REEL 02
                        </span>
                        <div className={`w-4 h-4 xs:w-5 xs:h-5 rounded-full border-2 border-white flex items-center justify-center ${isHovered ? 'animate-reel-spin' : ''}`}>
                          <span className="w-1 h-1 bg-[#A8E66C] rounded-full" />
                        </div>
                      </div>
                    </div>

                    {/* Prompt Header */}
                    {project.promptCommand && (
                      <div className="font-mono text-[11px] xs:text-xs text-[#FFD000] font-bold flex items-center gap-1.5 xs:gap-2 mb-2 truncate">
                        <span className="text-[#A8E66C]">
                          {project.promptIcon || '❯'}
                        </span>
                        <span className="truncate">{project.promptCommand}</span>
                        <span className="cursor-blink shrink-0" />
                      </div>
                    )}

                    {/* Terminal Lines */}
                    <div className="space-y-1 xs:space-y-1.5 font-mono text-[10px] xs:text-xs flex-1">
                      {project.previewLines.map((line, lineIdx) => {
                        const show = isHovered;

                        return (
                          <motion.div
                            key={lineIdx}
                            initial={{ opacity: 0.4, x: -4 }}
                            animate={show ? { opacity: 1, x: 0 } : { opacity: 0.4, x: 0 }}
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

                    {/* Magnetic tape accent strip */}
                    <div className={`h-1.5 xs:h-2 w-full rounded-full mt-2.5 xs:mt-3 ${accentClasses[project.accentColor]}`} />
                  </div>

                  {/* Cassette Title & Tech Stack Footer */}
                  <div>
                    <h3 className="font-grotesk font-extrabold text-lg xs:text-xl text-[#141111] uppercase tracking-wide group-hover:text-[#27CCF3] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs text-[#141111]/80 font-medium mt-1 leading-snug">
                      {project.summary}
                    </p>

                    {/* Tech Stack Chips */}
                    {project.techStack && (
                      <div className="flex flex-wrap gap-1 xs:gap-1.5 mt-2.5 xs:mt-3 pt-2.5 xs:pt-3 border-t border-neutral-200">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-1.5 xs:px-2 py-0.5 bg-[#FFFAEF] brutal-border-sm text-[9px] xs:text-[10px] font-mono font-bold text-[#141111]"
                          >
                            #{tech}
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
        <div className="mt-8 xs:mt-12 text-center flex flex-col items-center gap-3">
          <button
            onClick={handleOpenAllWork}
            className="w-full sm:w-auto px-6 xs:px-8 py-3 xs:py-3.5 bg-[#FFD000] brutal-border rounded-full font-mono text-xs xs:text-sm font-extrabold uppercase shadow-brutal hover:shadow-brutal-xl hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <CassetteTapeIcon size={22} color="#141111" />
            <span>SEE ALL WORK (10+ CARTRIDGES) ↗</span>
          </button>
          <span className="font-mono text-[11px] xs:text-xs text-[#141111]/60 font-semibold">
            Opens complete cassette deck repository catalog
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
