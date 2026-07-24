'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import MarqueeBanner from '@/components/ui/MarqueeBanner';
import { ROLES } from '@/data/portfolioData';

export default function RolesRadio() {
  const [activeIndex, setActiveIndex] = useState(ROLES.length - 1);
  const [isStatic, setIsStatic] = useState(false);
  const dialRef = useRef<HTMLDivElement>(null);

  const currentRole = ROLES[activeIndex];

  const changeStation = (newIndex: number) => {
    if (newIndex < 0 || newIndex >= ROLES.length) return;

    setIsStatic(true);
    setTimeout(() => setIsStatic(false), 300);

    setActiveIndex(newIndex);

    // Animate dial rotation with GSAP
    if (dialRef.current) {
      const rotation = (newIndex / (ROLES.length - 1)) * 270 - 135;
      gsap.to(dialRef.current, {
        rotate: rotation,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  };

  return (
    <section id="roles" className="relative py-16 texture-dots">
      <MarqueeBanner text="roles ✷ on air ✷ roles ✷ on air ✷ roles ✷ on air ✷" colorClass="bg-[#27CCF3]" />

      <div className="w-full max-w-5xl mx-auto px-4 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#FFFAEF] brutal-border rounded-3xl p-6 md:p-10 shadow-brutal-xl relative"
        >
          {/* Corner dots */}
          <span className="absolute top-4 left-4 w-3 h-3 rounded-full bg-[#141111]" />
          <span className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#141111]" />
          <span className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-[#141111]" />
          <span className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-[#141111]" />

          {/* Radio Top Header */}
          <div className="flex justify-between items-center pb-6 border-b-2 border-[#141111] mb-8">
            <span className="px-3 py-1 bg-[#FFD000] brutal-border-sm font-mono text-xs font-extrabold uppercase">
              ✷ roles · FM
            </span>

            {/* Equalizer Animation */}
            <div className="flex items-end gap-1 h-6">
              {[12, 18, 8, 22, 14, 20, 10, 16, 24].map((h, i) => (
                <span
                  key={i}
                  className="w-1.5 bg-[#141111] rounded-full animate-eq"
                  style={{ animationDelay: `${i * 0.1}s`, height: `${h}px` }}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Tuner Controls */}
            <div className="lg:col-span-4 flex flex-col gap-6 bg-white brutal-border p-6 rounded-2xl shadow-brutal">
              <div className="flex justify-between items-center font-mono text-xs font-bold uppercase border-b-2 border-[#141111] pb-2">
                <span>Station Selector</span>
                <span>{currentRole.freq} MHz</span>
              </div>

              {/* Station Buttons */}
              <div className="flex flex-col gap-2">
                {ROLES.map((role, idx) => (
                  <button
                    key={role.id}
                    onClick={() => changeStation(idx)}
                    className={`flex items-center justify-between p-3 rounded-xl brutal-border-sm font-mono text-xs font-bold transition-all ${
                      idx === activeIndex
                        ? 'bg-[#FFD000] shadow-brutal-sm scale-[1.02]'
                        : 'bg-[#FFFAEF] hover:bg-neutral-100'
                    }`}
                  >
                    <span>{role.freq} FM</span>
                    <span>{role.org}</span>
                  </button>
                ))}
              </div>

              {/* Prev / Next controls */}
              <div className="flex gap-3">
                <button
                  onClick={() => changeStation(activeIndex - 1)}
                  disabled={activeIndex === 0}
                  className="flex-1 py-2.5 bg-neutral-100 brutal-border-sm rounded-xl font-mono text-xs font-bold uppercase hover:bg-[#27CCF3] disabled:opacity-40 transition-colors"
                >
                  ‹ prev
                </button>
                <button
                  onClick={() => changeStation(activeIndex + 1)}
                  disabled={activeIndex === ROLES.length - 1}
                  className="flex-1 py-2.5 bg-neutral-100 brutal-border-sm rounded-xl font-mono text-xs font-bold uppercase hover:bg-[#27CCF3] disabled:opacity-40 transition-colors"
                >
                  next ›
                </button>
              </div>

              {/* Tuning Knob Dial */}
              <div className="flex items-center justify-between pt-4 border-t-2 border-[#141111]">
                <div className="flex items-center gap-3">
                  <div
                    ref={dialRef}
                    className="w-12 h-12 rounded-full bg-[#141111] border-2 border-white relative flex items-center justify-center shadow-brutal-sm"
                  >
                    <span className="w-1 h-4 bg-[#FFD000] rounded-full absolute top-1" />
                  </div>
                  <div className="font-mono text-[10px] font-bold uppercase text-[#141111]/70">
                    <div>TUNING DIAL</div>
                    <div>88 — 108 MHz</div>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className="flex gap-1 items-end h-5">
                    {[6, 10, 14, 18, 22].map((h, idx) => (
                      <span
                        key={idx}
                        className={`w-1 rounded-full ${
                          idx <= activeIndex + 1 ? 'bg-[#A8E66C]' : 'bg-neutral-300'
                        }`}
                        style={{ height: `${h}px` }}
                      />
                    ))}
                  </div>
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#141111]/60 mt-1">
                    SIGNAL
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Display Screen */}
            <div className="lg:col-span-8 bg-[#141111] text-[#FFFAEF] brutal-border p-6 md:p-8 rounded-2xl shadow-brutal min-h-[360px] flex flex-col justify-between relative overflow-hidden">
              {/* Static Noise Overlay */}
              <AnimatePresence>
                {isStatic && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="absolute inset-0 z-20 bg-neutral-900 flex items-center justify-center font-mono text-sm font-bold text-[#FFD000]"
                  >
                    ▒ SEARCHING FREQUENCY… ▒
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Station Lock Bar */}
              <div className="flex justify-between items-center font-mono text-xs font-bold text-[#FFD000] border-b border-white/20 pb-4 mb-6">
                <span>{currentRole.freq} FM · SIGNAL LOCKED</span>
                <span>{currentRole.period}</span>
              </div>

              {/* Main Content */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-2.5 py-1 bg-[#FFD000] text-[#141111] font-mono text-xs font-bold uppercase rounded">
                    {currentRole.type}
                  </span>
                  {currentRole.current && (
                    <span className="px-2.5 py-1 bg-[#A8E66C] text-[#141111] font-mono text-xs font-bold uppercase rounded">
                      CURRENT
                    </span>
                  )}
                  <span className="font-mono text-xs text-white/70">
                    ⌖ {currentRole.location}
                  </span>
                </div>

                <h3 className="font-grotesk text-2xl md:text-4xl font-extrabold text-white mb-2">
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

                <p className="font-mono text-sm text-[#27CCF3] font-bold mb-6">
                  {currentRole.role}
                </p>

                <ul className="space-y-2.5 font-sans text-sm md:text-base text-neutral-200">
                  {currentRole.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#FFD000] font-bold">›</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center font-mono text-[10px] text-white/50 uppercase">
                <span>FM BROADCAST SYSTEM</span>
                <span>CHANNEL {activeIndex + 1} OF {ROLES.length}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
