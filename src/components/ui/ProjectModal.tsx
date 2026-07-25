'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { WorkProject } from '@/types/portfolio';
import MechanicalScrollArea from '@/components/ui/MechanicalScrollArea';
import { useNightShift } from '@/context/NightShiftContext';

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
  const { isNightMode, playFx } = useNightShift();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 select-none"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            playFx('click');
            onClose();
          }}
          className="fixed inset-0 bg-[#0F1012]/80 backdrop-blur-sm"
        />

        {/* Modal Outer Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className={`relative z-10 w-full max-w-3xl brutal-border rounded-2xl sm:rounded-3xl p-4 xs:p-5 md:p-7 shadow-brutal-xl flex flex-col max-h-[90vh] transition-colors ${
            isNightMode
              ? 'bg-[#17181B] text-[#ECECEC] border-[#3A3A3A] crt-scanlines'
              : 'bg-[#FFFAEF] text-[#141111] border-[#141111] texture-blueprint'
          }`}
        >
          {/* Header Bar */}
          <div className={`flex items-center justify-between border-b-2 pb-3 mb-3 xs:mb-4 shrink-0 ${
            isNightMode ? 'border-[#3A3A3A]' : 'border-[#141111]'
          }`}>
            <div className="flex items-center gap-1.5 xs:gap-2">
              <span className={`w-3 h-3 xs:w-3.5 xs:h-3.5 rounded-full brutal-border-sm ${isNightMode ? 'bg-[#D85B5B]' : 'bg-[#FF6B8B]'}`} />
              <span className={`w-3 h-3 xs:w-3.5 xs:h-3.5 rounded-full brutal-border-sm ${isNightMode ? 'bg-[#D8B04C]' : 'bg-[#FFD000]'}`} />
              <span className={`w-3 h-3 xs:w-3.5 xs:h-3.5 rounded-full brutal-border-sm ${isNightMode ? 'bg-[#6BD26B]' : 'bg-[#A8E66C]'}`} />
              <span className={`ml-2 xs:ml-3 font-mono text-[11px] xs:text-xs md:text-sm font-bold uppercase tracking-wider truncate max-w-[140px] xs:max-w-[220px] sm:max-w-none ${
                isNightMode ? 'text-[#C8A94D]' : 'text-[#141111]'
              }`}>
                {isNightMode
                  ? isAllWorkMode ? 'MISSION_ARCHIVES_CLASSIFIED.db' : `MISSION DOSSIER // ${project?.filename || 'dossier.info'}`
                  : isAllWorkMode ? 'ALL_REPOSITORIES.sh' : project?.filename || 'project_details.info'}
              </span>
            </div>

            <button
              onClick={() => {
                playFx('click');
                onClose();
              }}
              className={`px-2.5 xs:px-3 py-1 brutal-border-sm rounded-lg font-mono text-[10px] xs:text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                isNightMode ? 'bg-[#D85B5B] text-white hover:bg-[#202226]' : 'bg-[#FF6B8B] text-white hover:bg-[#141111]'
              }`}
            >
              ✕ CLOSE
            </button>
          </div>

          {/* Mechanical Engineering Scroll Area Wrapper */}
          <MechanicalScrollArea className="flex-1 min-h-0">
            {/* MODE A: All Projects Catalog Modal */}
            {isAllWorkMode ? (
              <div className="pr-1 xs:pr-2">
                <div className="mb-4 xs:mb-6">
                  <span className={`inline-block px-2.5 xs:px-3 py-1 brutal-border-sm font-mono text-[10px] xs:text-xs font-extrabold uppercase mb-2 shadow-brutal-sm ${
                    isNightMode ? 'bg-[#C8A94D] text-[#0F1012] border-[#3A3A3A]' : 'bg-[#FFD000] text-[#141111]'
                  }`}>
                    {isNightMode ? '✦ CLASSIFIED REPOSITORY CATALOG' : '✦ GITHUB REPOSITORY CATALOG'}
                  </span>
                  <h2 className={`font-grotesk text-2xl xs:text-3xl font-extrabold ${isNightMode ? 'text-[#ECECEC]' : 'text-[#141111]'}`}>
                    {isNightMode ? 'All Secure Mission Files' : 'All Open-Source Projects'}
                  </h2>
                  <p className={`font-mono text-xs md:text-sm font-semibold mt-1 ${isNightMode ? 'text-[#9A9A9A]' : 'text-[#141111]/70'}`}>
                    Click any dossier file to inspect technical specifications.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-4">
                  {allProjects.map((proj) => (
                    <div
                      key={proj.id}
                      onClick={() => {
                        playFx('click');
                        onSelectProject?.(proj);
                      }}
                      className={`brutal-border p-3.5 xs:p-4 rounded-xl shadow-brutal-sm hover:shadow-brutal hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between ${
                        isNightMode ? 'bg-[#202226] border-[#3A3A3A] hover:border-[#C8A94D]' : 'bg-white border-[#141111]'
                      }`}
                    >
                      <div>
                        <div className={`flex items-center justify-between font-mono text-[10px] xs:text-xs font-bold mb-1 ${
                          isNightMode ? 'text-[#C8A94D]' : 'text-[#141111]/70'
                        }`}>
                          <span>{proj.filename}</span>
                          <span className={`px-1.5 xs:px-2 py-0.5 text-[9px] xs:text-[10px] rounded uppercase font-bold ${
                            isNightMode ? 'bg-[#0F1012] text-[#6BD26B]' : 'bg-[#141111] text-[#FFFAEF]'
                          }`}>
                            {proj.accentColor}
                          </span>
                        </div>
                        <h3 className={`font-grotesk font-extrabold text-sm xs:text-base ${isNightMode ? 'text-[#ECECEC]' : 'text-[#141111]'}`}>
                          {proj.title}
                        </h3>
                        <p className={`font-sans text-xs mt-1 line-clamp-2 ${isNightMode ? 'text-[#9A9A9A]' : 'text-[#141111]/80'}`}>
                          {proj.summary}
                        </p>
                      </div>

                      <div className={`flex flex-wrap gap-1 xs:gap-1.5 mt-2.5 xs:mt-3 pt-2.5 xs:pt-3 border-t ${
                        isNightMode ? 'border-[#3A3A3A]' : 'border-neutral-200'
                      }`}>
                        {proj.techStack?.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-1.5 xs:px-2 py-0.5 brutal-border-sm text-[9px] xs:text-[10px] font-mono font-bold ${
                              isNightMode ? 'bg-[#0F1012] text-[#C8A94D] border-[#3A3A3A]' : 'bg-neutral-100 text-[#141111]'
                            }`}
                          >
                            #{tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className={`mt-6 xs:mt-8 pt-4 xs:pt-6 border-t-2 flex flex-col sm:flex-row justify-between items-center gap-3 ${
                  isNightMode ? 'border-[#3A3A3A]' : 'border-[#141111]'
                }`}>
                  <a
                    href="https://github.com/ZagguChad?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => playFx('click')}
                    className={`w-full sm:w-auto px-5 xs:px-6 py-2.5 xs:py-3 brutal-border rounded-xl font-mono text-xs md:text-sm font-extrabold uppercase shadow-brutal transition-all text-center ${
                      isNightMode ? 'bg-[#C8A94D] text-[#0F1012] border-[#3A3A3A] hover:bg-[#D8B04C]' : 'bg-[#FFD000] text-[#141111] hover:bg-[#A8E66C]'
                    }`}
                  >
                    Visit Full GitHub Repositories Page ↗
                  </a>
                  <button
                    onClick={() => {
                      playFx('click');
                      onClose();
                    }}
                    className={`w-full sm:w-auto px-5 xs:px-6 py-2.5 xs:py-3 brutal-border rounded-xl font-mono text-xs font-bold uppercase transition-colors ${
                      isNightMode ? 'bg-[#202226] text-[#ECECEC] border-[#3A3A3A] hover:bg-[#3A3A3A]' : 'bg-neutral-200 text-[#141111] hover:bg-neutral-300'
                    }`}
                  >
                    Done Exploring
                  </button>
                </div>
              </div>
            ) : project ? (
              /* MODE B: Single Project Detail Modal */
              <div className="pr-1 xs:pr-2">
                {/* Title & Badge */}
                <div className="flex flex-wrap items-center gap-1.5 xs:gap-2 mb-2.5 xs:mb-3">
                  <span className={`px-2.5 xs:px-3 py-1 brutal-border-sm font-mono text-[10px] xs:text-xs font-extrabold uppercase shadow-brutal-sm ${
                    isNightMode ? 'bg-[#6BD26B] text-[#0F1012] border-[#3A3A3A]' : 'bg-[#A8E66C] text-[#141111]'
                  }`}>
                    {project.filename}
                  </span>
                  {project.featured && (
                    <span className={`px-2.5 xs:px-3 py-1 brutal-border-sm font-mono text-[10px] xs:text-xs font-extrabold uppercase shadow-brutal-sm ${
                      isNightMode ? 'bg-[#C8A94D] text-[#0F1012] border-[#3A3A3A]' : 'bg-[#FFD000] text-[#141111]'
                    }`}>
                      ★ FEATURED DOSSIER
                    </span>
                  )}
                </div>

                <h2 className={`font-grotesk text-2xl xs:text-3xl md:text-4xl font-extrabold mb-1.5 xs:mb-2 ${
                  isNightMode ? 'text-[#ECECEC]' : 'text-[#141111]'
                }`}>
                  {project.title}
                </h2>
                <p className={`font-mono text-xs md:text-sm font-bold px-2.5 xs:px-3 py-1.5 rounded-lg inline-block mb-4 xs:mb-6 ${
                  isNightMode ? 'bg-[#0F1012] text-[#D8B04C] border border-[#3A3A3A]' : 'bg-[#141111] text-[#27CCF3]'
                }`}>
                  {project.subtitle}
                </p>

                {/* Summary & Full Description */}
                <div className="space-y-3 xs:space-y-4 mb-4 xs:mb-6">
                  <div className={`brutal-border p-3.5 xs:p-4 rounded-xl shadow-brutal-sm ${
                    isNightMode ? 'bg-[#202226] border-[#3A3A3A]' : 'bg-white border-[#141111]'
                  }`}>
                    <h4 className={`font-mono text-[10px] xs:text-xs font-bold uppercase mb-1 ${
                      isNightMode ? 'text-[#C8A94D]' : 'text-[#141111]/70'
                    }`}>
                      System Overview & Mission Briefing
                    </h4>
                    <p className={`font-sans text-xs xs:text-sm md:text-base leading-relaxed font-medium ${
                      isNightMode ? 'text-[#ECECEC]' : 'text-[#141111]'
                    }`}>
                      {project.fullDescription || project.summary}
                    </p>
                  </div>

                  {/* Tech Stack Chips */}
                  {project.techStack && (
                    <div>
                      <h4 className={`font-mono text-[10px] xs:text-xs font-bold uppercase mb-1.5 xs:mb-2 ${
                        isNightMode ? 'text-[#9A9A9A]' : 'text-[#141111]/70'
                      }`}>
                        Hardware & Software Stack
                      </h4>
                      <div className="flex flex-wrap gap-1.5 xs:gap-2">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-2.5 xs:px-3 py-1 brutal-border-sm font-mono text-[10px] xs:text-xs font-bold rounded-lg shadow-brutal-sm ${
                              isNightMode ? 'bg-[#0F1012] text-[#27CCF3] border-[#3A3A3A]' : 'bg-[#27CCF3] text-[#141111]'
                            }`}
                          >
                            #{tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Terminal Log Console */}
                <div className={`brutal-border rounded-xl p-3 xs:p-4 font-mono text-[11px] xs:text-xs mb-6 xs:mb-8 shadow-brutal ${
                  isNightMode ? 'bg-[#0F1012] text-[#ECECEC] border-[#3A3A3A] crt-scanlines' : 'bg-[#141111] text-[#FFFAEF] border-[#141111]'
                }`}>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2 mb-3 text-white/50 text-[9px] xs:text-[10px] uppercase">
                    <span>TERMINAL EMULATOR</span>
                    <span className="text-[#6BD26B]">STATUS: EXECUTED // OK</span>
                  </div>
                  {project.promptCommand && (
                    <div className={`font-bold mb-2 flex items-center gap-1.5 xs:gap-2 truncate ${
                      isNightMode ? 'text-[#D8B04C]' : 'text-[#FFD000]'
                    }`}>
                      <span className={isNightMode ? 'text-[#6BD26B]' : 'text-[#A8E66C]'}>❯</span>
                      <span className="truncate">{project.promptCommand}</span>
                      <span className="cursor-blink shrink-0" />
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
                            ? isNightMode ? 'text-[#6BD26B] font-bold' : 'text-[#A8E66C] font-bold'
                            : line.error
                            ? isNightMode ? 'text-[#D85B5B] font-bold' : 'text-[#FF6B8B] font-bold'
                            : ''
                        }
                      >
                        {line.text}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className={`flex flex-col sm:flex-row gap-2.5 xs:gap-3 justify-end pt-3 xs:pt-4 border-t-2 ${
                  isNightMode ? 'border-[#3A3A3A]' : 'border-[#141111]'
                }`}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => playFx('click')}
                    className={`w-full sm:w-auto px-5 xs:px-6 py-2.5 xs:py-3 brutal-border rounded-xl font-mono text-xs md:text-sm font-extrabold uppercase shadow-brutal hover:shadow-brutal-lg transition-all text-center ${
                      isNightMode ? 'bg-[#C8A94D] text-[#0F1012] border-[#3A3A3A] hover:bg-[#D8B04C]' : 'bg-[#FFD000] text-[#141111] hover:bg-[#A8E66C]'
                    }`}
                  >
                    View Repository on GitHub ↗
                  </a>
                  <button
                    onClick={() => {
                      playFx('click');
                      onClose();
                    }}
                    className={`w-full sm:w-auto px-5 xs:px-6 py-2.5 xs:py-3 brutal-border rounded-xl font-mono text-xs md:text-sm font-bold uppercase transition-colors cursor-pointer text-center ${
                      isNightMode ? 'bg-[#202226] text-[#ECECEC] border-[#3A3A3A] hover:bg-[#3A3A3A]' : 'bg-neutral-200 text-[#141111] hover:bg-neutral-300'
                    }`}
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : null}
          </MechanicalScrollArea>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
