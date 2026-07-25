'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MarqueeBanner from '@/components/ui/MarqueeBanner';
import ProjectModal from '@/components/ui/ProjectModal';
import { WORK_PROJECTS } from '@/data/portfolioData';
import { WorkProject } from '@/types/portfolio';
import { CassetteTapeIcon } from '@/components/decor';
import { useNightShift } from '@/context/NightShiftContext';

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
  const { isNightMode, playFx } = useNightShift();

  // Featured subset to display directly on the page
  const featuredProjects = WORK_PROJECTS.filter((p) => p.featured);

  const handleOpenProject = (project: WorkProject) => {
    playFx('radio');
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
    playFx('click');
    setSelectedProject(null);
    setIsAllWorkMode(true);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    playFx('click');
    setIsModalOpen(false);
    setSelectedProject(null);
    setIsAllWorkMode(false);
  };

  return (
    <section id="work" className="relative py-16 texture-blueprint">
      <MarqueeBanner
        text={
          isNightMode
            ? "CLASSIFIED MISSION FILES ✦ SECURE PROTOTYPE ARCHIVES ✦ TOP SECRET DOSSIERS ✦"
            : "selected work ✦ cassette tape cartridges ✦ software blueprints ✦ selected work ✦"
        }
        colorClass={isNightMode ? "bg-[#C8A94D] text-[#0F1012]" : "bg-[#FFD000]"}
      />

      {/* Cassette Deck / Mission File Insertion Overlay Animation */}
      <AnimatePresence>
        {isInsertingTape && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0F1012]/90 backdrop-blur-sm flex flex-col items-center justify-center pointer-events-none select-none"
          >
            <div className="bg-[#17181B] text-[#ECECEC] brutal-border border-[#3A3A3A] p-8 rounded-3xl shadow-brutal-xl flex flex-col items-center gap-4 text-center max-w-sm crt-scanlines">
              <CassetteTapeIcon size={64} className="animate-reel-spin" color={isNightMode ? "#C8A94D" : "#141111"} />
              <div className="font-mono text-xs font-bold uppercase bg-[#C8A94D] text-[#0F1012] px-3 py-1 brutal-border-sm">
                {isNightMode ? '▶ DECRYPTING MISSION FILE' : '▶ INSERTING CASSETTE DECK'}
              </div>
              <div className="font-grotesk text-xl font-extrabold text-[#ECECEC]">
                {insertedTapeTitle}
              </div>
              <div className="font-mono text-[10px] text-[#9A9A9A]">
                ACCESSING SECURE DOSSIER 00:01…
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full max-w-6xl mx-auto px-4 mt-12">
        {/* Section 03 Heading */}
        <div className={`flex items-center gap-3 mb-8 border-b-2 pb-3 ${isNightMode ? 'border-[#3A3A3A]' : 'border-[#141111]'}`}>
          <span className={`px-3 py-1 brutal-border-sm font-mono text-xs font-extrabold uppercase tracking-wider ${
            isNightMode ? 'bg-[#C8A94D] text-[#0F1012] border-[#3A3A3A]' : 'bg-[#141111] text-[#FFFAEF]'
          }`}>
            SECTION // 03
          </span>
          <h2 className={`font-grotesk text-xs md:text-sm font-bold uppercase tracking-widest ${isNightMode ? 'text-[#9A9A9A]' : 'text-[#141111]/80'}`}>
            {isNightMode ? 'Classified Mission Files & Engineering Archives' : 'Selected Work & Software Cassette Cartridges'}
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
                whileHover={{ y: -6, scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={project.rotationClass}
              >
                {/* Physical Cassette / Mission File Shell */}
                <div
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => handleOpenProject(project)}
                  className={`brutal-border rounded-2xl sm:rounded-3xl p-4 xs:p-5 shadow-brutal hover:shadow-brutal-xl transition-all duration-200 group cursor-pointer relative overflow-hidden ${
                    isNightMode
                      ? 'bg-[#17181B] text-[#ECECEC] border-[#3A3A3A] hover:border-[#C8A94D] texture-carbon'
                      : 'bg-[#FFFAEF] text-[#141111] border-[#141111]'
                  }`}
                >
                  {/* Cassette Tape Top Screws & Titlebar */}
                  <div className={`flex items-center justify-between border-b-2 pb-2.5 xs:pb-3 mb-3 xs:mb-4 ${
                    isNightMode ? 'border-[#3A3A3A]' : 'border-[#141111]'
                  }`}>
                    <div className="flex items-center gap-1.5 xs:gap-2">
                      {/* Screw heads */}
                      <span className={`w-3 h-3 rounded-full brutal-border-sm flex items-center justify-center font-mono text-[8px] font-bold ${
                        isNightMode ? 'bg-[#3A3A3A] border-[#3A3A3A] text-[#ECECEC]' : 'bg-neutral-300 text-[#141111]'
                      }`}>+</span>
                      <span className={`w-3 h-3 rounded-full brutal-border-sm flex items-center justify-center font-mono text-[8px] font-bold ${
                        isNightMode ? 'bg-[#3A3A3A] border-[#3A3A3A] text-[#ECECEC]' : 'bg-neutral-300 text-[#141111]'
                      }`}>+</span>
                      <span className={`ml-1 font-mono text-[10px] xs:text-xs font-bold uppercase tracking-wider truncate max-w-[130px] xs:max-w-[200px] sm:max-w-none ${
                        isNightMode ? 'text-[#C8A94D]' : 'text-[#141111]'
                      }`}>
                        {isNightMode ? 'CLASSIFIED //' : 'SIDE A //'} {project.filename}
                      </span>
                    </div>

                    <span className={`px-2 xs:px-2.5 py-0.5 brutal-border-sm font-mono text-[9px] xs:text-[10px] font-bold uppercase shadow-brutal-sm transition-colors shrink-0 ${
                      isNightMode ? 'bg-[#C8A94D] text-[#0F1012] border-[#3A3A3A] group-hover:bg-[#6BD26B]' : 'bg-[#FFD000] text-[#141111] group-hover:bg-[#A8E66C]'
                    }`}>
                      {isNightMode ? '▶ DOSSIER' : '▶ DECK'}
                    </span>
                  </div>

                  {/* Terminal / Storage Preview Window */}
                  <div className={`brutal-border rounded-xl xs:rounded-2xl p-3 xs:p-4 min-h-[160px] xs:min-h-[185px] flex flex-col justify-between mb-3 xs:mb-4 relative overflow-hidden ${
                    isNightMode ? 'bg-[#0F1012] text-[#ECECEC] border-[#3A3A3A] crt-scanlines' : 'bg-[#141111] text-[#FFFAEF] border-[#141111]'
                  }`}>
                    {/* Spool Reels / Optical Reader Graphic */}
                    <div className="flex items-center justify-between border-b border-white/20 pb-2 mb-2.5 xs:mb-3">
                      <div className="flex items-center gap-1.5 xs:gap-2">
                        <div className={`w-4 h-4 xs:w-5 xs:h-5 rounded-full border-2 border-white flex items-center justify-center ${isHovered ? 'animate-reel-spin' : ''}`}>
                          <span className={`w-1 h-1 rounded-full ${isNightMode ? 'bg-[#C8A94D]' : 'bg-[#FFD000]'}`} />
                        </div>
                        <span className={`font-mono text-[8px] xs:text-[9px] font-bold uppercase ${isNightMode ? 'text-[#C8A94D]' : 'text-[#FFD000]'}`}>
                          {isNightMode ? 'SECTOR 01' : 'REEL 01'}
                        </span>
                      </div>

                      <span className="font-mono text-[8px] xs:text-[9px] text-white/50 font-bold uppercase hidden 2xs:inline">
                        {isNightMode ? 'ENCRYPTED' : '60 MIN TAPE'}
                      </span>

                      <div className="flex items-center gap-1.5 xs:gap-2">
                        <span className={`font-mono text-[8px] xs:text-[9px] font-bold uppercase ${isNightMode ? 'text-[#6BD26B]' : 'text-[#A8E66C]'}`}>
                          {isNightMode ? 'SECTOR 02' : 'REEL 02'}
                        </span>
                        <div className={`w-4 h-4 xs:w-5 xs:h-5 rounded-full border-2 border-white flex items-center justify-center ${isHovered ? 'animate-reel-spin' : ''}`}>
                          <span className={`w-1 h-1 rounded-full ${isNightMode ? 'bg-[#6BD26B]' : 'bg-[#A8E66C]'}`} />
                        </div>
                      </div>
                    </div>

                    {/* Prompt Header */}
                    {project.promptCommand && (
                      <div className={`font-mono text-[11px] xs:text-xs font-bold flex items-center gap-1.5 xs:gap-2 mb-2 truncate ${
                        isNightMode ? 'text-[#D8B04C]' : 'text-[#FFD000]'
                      }`}>
                        <span className={isNightMode ? 'text-[#6BD26B]' : 'text-[#A8E66C]'}>
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
                                ? isNightMode ? 'text-[#27CCF3] font-bold uppercase' : 'text-[#27CCF3] font-bold uppercase'
                                : line.highlight
                                ? isNightMode ? 'text-[#6BD26B] font-bold' : 'text-[#A8E66C] font-bold'
                                : line.error
                                ? isNightMode ? 'text-[#D85B5B] font-bold' : 'text-[#FF6B8B] font-bold'
                                : 'text-neutral-300'
                            }`}
                          >
                            <span>{line.text}</span>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Magnetic tape accent strip */}
                    <div className={`h-1.5 xs:h-2 w-full rounded-full mt-2.5 xs:mt-3 ${
                      isNightMode ? 'bg-[#C8A94D]' : accentClasses[project.accentColor]
                    }`} />
                  </div>

                  {/* Cassette Title & Tech Stack Footer */}
                  <div>
                    <h3 className={`font-grotesk font-extrabold text-lg xs:text-xl uppercase tracking-wide transition-colors ${
                      isNightMode ? 'text-[#ECECEC] group-hover:text-[#C8A94D]' : 'text-[#141111] group-hover:text-[#27CCF3]'
                    }`}>
                      {project.title}
                    </h3>
                    <p className={`font-sans text-xs font-medium mt-1 leading-snug ${
                      isNightMode ? 'text-[#9A9A9A]' : 'text-[#141111]/80'
                    }`}>
                      {project.summary}
                    </p>

                    {/* Tech Stack Chips */}
                    {project.techStack && (
                      <div className={`flex flex-wrap gap-1 xs:gap-1.5 mt-2.5 xs:mt-3 pt-2.5 xs:pt-3 border-t ${
                        isNightMode ? 'border-[#3A3A3A]' : 'border-neutral-200'
                      }`}>
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-1.5 xs:px-2 py-0.5 brutal-border-sm text-[9px] xs:text-[10px] font-mono font-bold ${
                              isNightMode ? 'bg-[#202226] text-[#C8A94D] border-[#3A3A3A]' : 'bg-[#FFFAEF] text-[#141111]'
                            }`}
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
            className={`w-full sm:w-auto px-6 xs:px-8 py-3 xs:py-3.5 brutal-border rounded-full font-mono text-xs xs:text-sm font-extrabold uppercase shadow-brutal hover:shadow-brutal-xl hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2 ${
              isNightMode
                ? 'bg-[#C8A94D] text-[#0F1012] border-[#3A3A3A] hover:bg-[#D8B04C]'
                : 'bg-[#FFD000] text-[#141111] border-[#141111] hover:bg-[#A8E66C]'
            }`}
          >
            <CassetteTapeIcon size={22} color={isNightMode ? "#0F1012" : "#141111"} />
            <span>{isNightMode ? 'CLASSIFIED DOSSIER CATALOG (10+ MISSIONS) ↗' : 'SEE ALL WORK (10+ CARTRIDGES) ↗'}</span>
          </button>
          <span className={`font-mono text-[11px] xs:text-xs font-semibold ${isNightMode ? 'text-[#9A9A9A]' : 'text-[#141111]/60'}`}>
            Opens complete classified repository archive
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
