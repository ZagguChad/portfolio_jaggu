'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import MarqueeBanner from '@/components/ui/MarqueeBanner';
import { ROLES } from '@/data/portfolioData';
import { VUMeterIcon } from '@/components/decor';
import { useNightShift } from '@/context/NightShiftContext';

export default function RolesRadio() {
  const [activeIndex, setActiveIndex] = useState(ROLES.length - 1);
  const [isStatic, setIsStatic] = useState(false);
  const dialRef = useRef<HTMLDivElement>(null);
  const { isNightMode, playFx } = useNightShift();

  const currentRole = ROLES[activeIndex];

  const changeStation = (newIndex: number) => {
    if (newIndex < 0 || newIndex >= ROLES.length) return;

    playFx('radio');
    setIsStatic(true);
    setTimeout(() => setIsStatic(false), 350);

    setActiveIndex(newIndex);

    // Animate dial rotation with GSAP
    if (dialRef.current) {
      const rotation = (newIndex / (ROLES.length - 1)) * 270 - 135;
      gsap.to(dialRef.current, {
        rotate: rotation,
        duration: 0.45,
        ease: 'back.out(1.4)',
      });
    }
  };

  return (
    <section id="roles" className="relative py-16 texture-blueprint">
      <MarqueeBanner
        text={
          isNightMode
            ? "TACTICAL TRANSCEIVER ✷ SECURE FREQUENCY BAND 88.5 MHz ✷ NIGHT SHIFT COMMS ✷"
            : "roles ✷ on air broadcast ✷ experience ✷ broadcast studio ✷"
        }
        colorClass={isNightMode ? "bg-[#27CCF3] text-[#0F1012]" : "bg-[#27CCF3]"}
      />

      <div className="w-full max-w-5xl mx-auto px-4 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`brutal-border rounded-2xl sm:rounded-3xl p-4 xs:p-6 md:p-10 shadow-brutal-xl relative transition-colors ${
            isNightMode
              ? 'bg-[#17181B] text-[#ECECEC] border-[#3A3A3A]'
              : 'bg-[#FFFAEF] text-[#141111] border-[#141111]'
          }`}
        >
          {/* Section 02 Heading */}
          <div className={`flex items-center gap-2.5 xs:gap-3 mb-6 xs:mb-8 border-b-2 pb-3 ${
            isNightMode ? 'border-[#3A3A3A]' : 'border-[#141111]'
          }`}>
            <span className={`px-2.5 xs:px-3 py-1 brutal-border-sm font-mono text-[10px] xs:text-xs font-extrabold uppercase tracking-wider ${
              isNightMode ? 'bg-[#C8A94D] text-[#0F1012] border-[#3A3A3A]' : 'bg-[#141111] text-[#FFFAEF]'
            }`}>
              SECTION // 02
            </span>
            <h2 className={`font-grotesk text-[11px] xs:text-xs md:text-sm font-bold uppercase tracking-widest ${
              isNightMode ? 'text-[#9A9A9A]' : 'text-[#141111]/80'
            }`}>
              {isNightMode ? 'Tactical Communications & Transceiver Station' : 'Roles & FM Broadcast Console'}
            </h2>
          </div>

          {/* Broadcast Console Hardware Top Header */}
          <div className={`flex flex-wrap justify-between items-center pb-4 xs:pb-6 border-b-2 mb-6 xs:mb-8 gap-3 xs:gap-4 ${
            isNightMode ? 'border-[#3A3A3A]' : 'border-[#141111]'
          }`}>
            <div className="flex flex-wrap items-center gap-2 xs:gap-3">
              <span className={`px-2.5 xs:px-3 py-1 brutal-border-sm font-mono text-[10px] xs:text-xs font-extrabold uppercase shadow-brutal-sm ${
                isNightMode ? 'bg-[#C8A94D] text-[#0F1012] border-[#3A3A3A]' : 'bg-[#FFD000] text-[#141111]'
              }`}>
                {isNightMode ? '✷ TRANSCEIVER · BAND 88.5-108 MHz' : '✷ ROLES · FM BROADCAST 88.5-108 MHz'}
              </span>

              {/* ON AIR Indicator light */}
              <div className={`flex items-center gap-1.5 px-2.5 xs:px-3 py-1 text-white brutal-border-sm font-mono text-[10px] xs:text-xs font-extrabold rounded-lg animate-pulse-gentle ${
                isNightMode ? 'bg-[#D85B5B] border-[#3A3A3A]' : 'bg-[#FF6B8B] border-[#141111]'
              }`}>
                <span className="w-2 h-2 rounded-full bg-white animate-led" />
                <span>{isNightMode ? 'TRANSMITTING' : 'ON AIR'}</span>
              </div>
            </div>

            {/* Hardware VU Meter & Audio Spectrum */}
            <div className="flex items-center gap-3 xs:gap-4">
              <VUMeterIcon size={34} color={isNightMode ? "#C8A94D" : "#141111"} />
              <div className={`flex items-end gap-1 h-6 p-1.5 rounded brutal-border-sm ${
                isNightMode ? 'bg-[#0F1012] border-[#3A3A3A]' : 'bg-[#141111]'
              }`}>
                {[14, 20, 10, 24, 16, 22, 12, 18, 24].map((h, i) => (
                  <span
                    key={i}
                    className={`w-1 xs:w-1.5 rounded-full animate-eq ${
                      isNightMode ? 'bg-[#C8A94D]' : 'bg-[#FFD000]'
                    }`}
                    style={{ animationDelay: `${i * 0.12}s`, height: `${h}px` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xs:gap-8 items-start">
            {/* Left Column: Mechanical Tuner & Switches */}
            <div className={`lg:col-span-4 flex flex-col gap-4 xs:gap-6 brutal-border p-4 xs:p-6 rounded-2xl shadow-brutal transition-colors ${
              isNightMode ? 'bg-[#202226] border-[#3A3A3A] texture-carbon' : 'bg-white border-[#141111]'
            }`}>
              <div className={`flex justify-between items-center font-mono text-[11px] xs:text-xs font-bold uppercase border-b-2 pb-2 ${
                isNightMode ? 'border-[#3A3A3A]' : 'border-[#141111]'
              }`}>
                <span>STATION TUNER</span>
                <span className={isNightMode ? 'text-[#C8A94D]' : 'text-[#FF6B8B]'}>{currentRole.freq} MHz</span>
              </div>

              {/* Station Mechanical Buttons */}
              <div className="flex flex-col gap-2">
                {ROLES.map((role, idx) => (
                  <button
                    key={role.id}
                    onClick={() => changeStation(idx)}
                    className={`flex items-center justify-between p-2.5 xs:p-3 rounded-xl brutal-border-sm font-mono text-[11px] xs:text-xs font-bold transition-all cursor-pointer ${
                      idx === activeIndex
                        ? isNightMode
                          ? 'bg-[#C8A94D] text-[#0F1012] border-[#3A3A3A] shadow-brutal-sm scale-[1.01]'
                          : 'bg-[#FFD000] text-[#141111] shadow-brutal-sm scale-[1.01]'
                        : isNightMode
                        ? 'bg-[#17181B] text-[#ECECEC] border-[#3A3A3A] hover:bg-[#3A3A3A]'
                        : 'bg-[#FFFAEF] text-[#141111] hover:bg-neutral-100'
                    }`}
                  >
                    <span className="flex items-center gap-1.5 xs:gap-2 shrink-0">
                      <span className={`w-2 h-2 rounded-full ${
                        idx === activeIndex ? (isNightMode ? 'bg-[#6BD26B]' : 'bg-[#FF6B8B]') : 'bg-neutral-500'
                      }`} />
                      {role.freq} FM
                    </span>
                    <span className="truncate max-w-[100px] xs:max-w-[140px] sm:max-w-none">{role.org}</span>
                  </button>
                ))}
              </div>

              {/* Prev / Next hardware controls */}
              <div className="flex gap-2 xs:gap-3">
                <button
                  onClick={() => changeStation(activeIndex - 1)}
                  disabled={activeIndex === 0}
                  className={`flex-1 py-2 xs:py-2.5 brutal-border-sm rounded-xl font-mono text-[10px] xs:text-xs font-bold uppercase disabled:opacity-40 transition-all cursor-pointer shadow-brutal-sm ${
                    isNightMode ? 'bg-[#17181B] text-[#ECECEC] border-[#3A3A3A] hover:bg-[#27CCF3] hover:text-[#0F1012]' : 'bg-neutral-100 text-[#141111] hover:bg-[#27CCF3]'
                  }`}
                >
                  ‹ PREV FREQ
                </button>
                <button
                  onClick={() => changeStation(activeIndex + 1)}
                  disabled={activeIndex === ROLES.length - 1}
                  className={`flex-1 py-2 xs:py-2.5 brutal-border-sm rounded-xl font-mono text-[10px] xs:text-xs font-bold uppercase disabled:opacity-40 transition-all cursor-pointer shadow-brutal-sm ${
                    isNightMode ? 'bg-[#17181B] text-[#ECECEC] border-[#3A3A3A] hover:bg-[#27CCF3] hover:text-[#0F1012]' : 'bg-neutral-100 text-[#141111] hover:bg-[#27CCF3]'
                  }`}
                >
                  NEXT FREQ ›
                </button>
              </div>

              {/* Tuning Knob Dial */}
              <div className={`flex items-center justify-between pt-3 xs:pt-4 border-t-2 ${
                isNightMode ? 'border-[#3A3A3A]' : 'border-[#141111]'
              }`}>
                <div className="flex items-center gap-2.5 xs:gap-3">
                  <div
                    ref={dialRef}
                    className={`w-12 h-12 xs:w-14 xs:h-14 rounded-full border-2 relative flex items-center justify-center shadow-brutal-sm cursor-grab active:cursor-grabbing shrink-0 ${
                      isNightMode ? 'bg-[#0F1012] border-[#C8A94D]' : 'bg-[#141111] border-white'
                    }`}
                  >
                    <span className={`w-1.5 h-4 xs:h-5 rounded-full absolute top-1 ${
                      isNightMode ? 'bg-[#C8A94D]' : 'bg-[#FFD000]'
                    }`} />
                    <div className="w-3.5 h-3.5 xs:w-4 xs:h-4 rounded-full bg-neutral-800" />
                  </div>
                  <div className={`font-mono text-[9px] xs:text-[10px] font-bold uppercase ${
                    isNightMode ? 'text-[#9A9A9A]' : 'text-[#141111]/70'
                  }`}>
                    <div>ANALOG TUNER</div>
                    <div>FREQ BAND: FM</div>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className="flex gap-1 items-end h-5">
                    {[6, 10, 14, 18, 22].map((h, idx) => (
                      <span
                        key={idx}
                        className={`w-1 rounded-full ${
                          idx <= activeIndex + 1 ? (isNightMode ? 'bg-[#6BD26B]' : 'bg-[#A8E66C]') : 'bg-neutral-600'
                        }`}
                        style={{ height: `${h}px` }}
                      />
                    ))}
                  </div>
                  <span className={`font-mono text-[8px] xs:text-[9px] font-bold uppercase tracking-wider mt-1 ${
                    isNightMode ? 'text-[#9A9A9A]' : 'text-[#141111]/60'
                  }`}>
                    SIGNAL LOCK
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Display Screen */}
            <div className={`lg:col-span-8 brutal-border p-4 xs:p-6 md:p-8 rounded-2xl shadow-brutal min-h-[320px] xs:min-h-[380px] flex flex-col justify-between relative overflow-hidden transition-colors ${
              isNightMode
                ? 'bg-[#0F1012] text-[#ECECEC] border-[#3A3A3A] crt-scanlines'
                : 'bg-[#141111] text-[#FFFAEF] border-[#141111] texture-blueprint-dark'
            }`}>
              {/* Static Noise Transition Overlay */}
              <AnimatePresence>
                {isStatic && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.95 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="absolute inset-0 z-20 bg-neutral-950 flex flex-col items-center justify-center font-mono text-xs xs:text-sm font-bold text-[#C8A94D] gap-2 p-4 text-center"
                  >
                    <div className="animate-spin-slow text-xl xs:text-2xl">📻</div>
                    <div>▒ TUNING FREQUENCY… SCANNING SIGNAL ▒</div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Station Lock Header */}
              <div className={`flex justify-between items-center font-mono text-[10px] xs:text-xs font-bold border-b pb-3 xs:pb-4 mb-4 xs:mb-6 ${
                isNightMode ? 'text-[#C8A94D] border-[#3A3A3A]' : 'text-[#FFD000] border-white/20'
              }`}>
                <span className="flex items-center gap-1.5 xs:gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6BD26B] animate-led" />
                  {currentRole.freq} FM · BROADCAST LOCKED
                </span>
                <span>{currentRole.period}</span>
              </div>

              {/* Main Role Content */}
              <div>
                <div className="flex flex-wrap items-center gap-1.5 xs:gap-2 mb-3 xs:mb-4">
                  <span className={`px-2 xs:px-2.5 py-0.5 xs:py-1 font-mono text-[10px] xs:text-xs font-bold uppercase rounded ${
                    isNightMode ? 'bg-[#C8A94D] text-[#0F1012]' : 'bg-[#FFD000] text-[#141111]'
                  }`}>
                    {currentRole.type}
                  </span>
                  {currentRole.current && (
                    <span className={`px-2 xs:px-2.5 py-0.5 xs:py-1 font-mono text-[10px] xs:text-xs font-bold uppercase rounded ${
                      isNightMode ? 'bg-[#6BD26B] text-[#0F1012]' : 'bg-[#A8E66C] text-[#141111]'
                    }`}>
                      CURRENT ROLE
                    </span>
                  )}
                  <span className="font-mono text-[10px] xs:text-xs text-white/70">
                    ⌖ {currentRole.location}
                  </span>
                </div>

                <h3 className="font-grotesk text-xl xs:text-2xl md:text-4xl font-extrabold text-white mb-1.5 xs:mb-2">
                  {currentRole.orgUrl ? (
                    <a
                      href={currentRole.orgUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[#27CCF3] transition-colors underline decoration-[#27CCF3] decoration-2 underline-offset-4"
                    >
                      {currentRole.org} ↗
                    </a>
                  ) : (
                    currentRole.org
                  )}
                </h3>

                <p className={`font-mono text-xs xs:text-sm font-bold mb-4 xs:mb-6 ${
                  isNightMode ? 'text-[#D8B04C]' : 'text-[#27CCF3]'
                }`}>
                  {currentRole.role}
                </p>

                <ul className="space-y-2 font-sans text-xs xs:text-sm md:text-base text-neutral-200">
                  {currentRole.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className={isNightMode ? 'text-[#C8A94D] font-bold' : 'text-[#FFD000] font-bold'}>›</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Station Footer */}
              <div className="mt-6 xs:mt-8 pt-3 xs:pt-4 border-t border-white/10 flex justify-between items-center font-mono text-[9px] xs:text-[10px] text-white/50 uppercase">
                <span>FM BROADCAST SYSTEM // BAND CH-{activeIndex + 1}</span>
                <span>TRANSMITTER OK</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
