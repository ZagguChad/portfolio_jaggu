'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MarqueeBanner from '@/components/ui/MarqueeBanner';
import { CHECKLIST_ITEMS, SOCIAL_LINKS } from '@/data/portfolioData';
import { CoffeeMug, PaperClip } from '@/components/decor';

interface StickyNoteItem {
  tag: string;
  lines: string[];
}

const STICKY_NOTES: StickyNoteItem[] = [
  {
    tag: "TODAY'S GOAL",
    lines: ['☑ Learn', '☑ Build', '☑ Repeat'],
  },
  {
    tag: 'CURRENT STATUS',
    lines: ['Probably debugging something.'],
  },
  {
    tag: 'REMINDER',
    lines: ['Commit your code.', 'Drink water.'],
  },
  {
    tag: 'RANDOM THOUGHT',
    lines: ['The best projects usually start as', '"what if..."'],
  },
  {
    tag: 'CURRENTLY LISTENING TO',
    lines: ['🎧 Lo-fi while fixing bugs.'],
  },
];

const COUNTER_MESSAGES: Record<number, { text: string; subtext?: string }> = {
  0: { text: 'Still getting to know each other.' },
  1: { text: 'Nice.' },
  2: { text: "We're on the same wavelength." },
  3: { text: 'This sounds promising.' },
  4: { text: "Looks like we'd get along pretty well.", subtext: "👇 Let's talk." },
};

export default function ConnectChecklist() {
  const [checkedIds, setCheckedIds] = useState<number[]>([]);
  const [activeNote, setActiveNote] = useState<StickyNoteItem>(STICKY_NOTES[0]);

  // Pick a random sticky note on page load
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * STICKY_NOTES.length);
    setActiveNote(STICKY_NOTES[randomIndex]);
  }, []);

  const toggleCheck = (id: number) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isUnlocked = checkedIds.length === CHECKLIST_ITEMS.length;
  const currentMsg = COUNTER_MESSAGES[checkedIds.length] || COUNTER_MESSAGES[0];

  return (
    <section id="connect" className="relative py-16 texture-blueprint">
      <MarqueeBanner text="build together ✦ let's connect ✦ build together ✦ let's connect ✦" colorClass="bg-[#FF6B8B]" />

      <div className="w-full max-w-5xl mx-auto px-4 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#FFFAEF] brutal-border rounded-2xl sm:rounded-3xl p-4 xs:p-6 md:p-10 shadow-brutal-xl relative overflow-hidden"
        >
          {/* Paperclip top right */}
          <div className="absolute top-3 xs:top-4 right-4 xs:right-8 z-20 pointer-events-none hidden xs:block">
            <PaperClip size={40} color="#141111" />
          </div>

          {/* Section 04 Heading */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 mb-6 xs:mb-8 border-b-2 border-[#141111] pb-3">
            <div className="flex items-center gap-2.5 xs:gap-3">
              <span className="px-2.5 xs:px-3 py-1 bg-[#141111] text-[#FFFAEF] brutal-border-sm font-mono text-[10px] xs:text-xs font-extrabold uppercase tracking-wider">
                SECTION // 04
              </span>
              <h2 className="font-grotesk text-[11px] xs:text-xs md:text-sm font-bold text-[#141111]/80 uppercase tracking-widest">
                BUILD TOGETHER
              </h2>
            </div>
            <div className="flex items-center gap-2 font-mono text-[9px] xs:text-[10px] text-[#141111]/60 font-bold uppercase">
              <span>REVISION 4.2</span>
              <span>•</span>
              <span>COFFEE LEVEL: STABLE ☕</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xs:gap-8 items-stretch relative">
            {/* Left Column: Interactive Checklist */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2.5 xs:mb-3">
                  <span className="inline-block px-2.5 xs:px-3 py-1 bg-[#FF6B8B] text-white brutal-border-sm font-mono text-[10px] xs:text-xs font-bold uppercase shadow-brutal-sm">
                    CHECKLIST
                  </span>
                  <CoffeeMug size={26} color="#141111" />
                </div>

                <h2 className="font-grotesk text-2xl xs:text-3xl md:text-5xl font-extrabold text-[#141111] mb-2 xs:mb-3 leading-tight">
                  Let's build something cool.
                </h2>
                <p className="font-sans text-xs xs:text-sm md:text-base text-[#141111]/80 font-medium mb-4 xs:mb-6 leading-relaxed">
                  If you're into building useful things, experimenting with ideas, or just geeking out over tech, we'll probably get along.
                </p>

                {/* Checklist Items */}
                <div className="space-y-2.5 xs:space-y-3">
                  {CHECKLIST_ITEMS.map((item) => {
                    const isChecked = checkedIds.includes(item.id);

                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => toggleCheck(item.id)}
                        whileHover={{ y: -2, scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full flex items-center gap-2.5 xs:gap-3.5 p-3 xs:p-4 rounded-xl brutal-border text-left font-mono text-xs xs:text-sm font-bold transition-all cursor-pointer select-none ${
                          isChecked
                            ? 'bg-[#A8E66C] shadow-brutal-sm'
                            : 'bg-white hover:bg-neutral-50 hover:shadow-brutal-sm'
                        }`}
                      >
                        {/* Checkbox with self-drawing checkmark */}
                        <div
                          className={`w-5 h-5 xs:w-6 xs:h-6 rounded-md brutal-border-sm flex items-center justify-center shrink-0 transition-colors ${
                            isChecked ? 'bg-[#141111] text-[#A8E66C]' : 'bg-white'
                          }`}
                        >
                          {isChecked && (
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <motion.path
                                d="M4 12L9 17L20 6"
                                stroke="#A8E66C"
                                strokeWidth="3.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.25, ease: 'easeOut' }}
                              />
                            </svg>
                          )}
                        </div>

                        <span className={isChecked ? 'line-through opacity-85 text-[#141111]' : 'text-[#141111]'}>
                          {item.text}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Micro Status Footer */}
              <div className="mt-4 xs:mt-6 pt-3 xs:pt-4 border-t border-[#141111]/20 flex flex-wrap justify-between items-center font-mono text-[9px] xs:text-[10px] text-[#141111]/60 font-bold uppercase gap-2">
                <span>BUILD STATUS: ONLINE</span>
                <span>LAST COMMIT: RECENTLY</span>
              </div>
            </div>

            {/* Right Column: Rotating Sticky Note & Builder Sync Counter Card */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4 xs:gap-6">
              {/* Rotating Engineer Sticky Note */}
              <div className="bg-[#FFD000] brutal-border p-4 xs:p-5 rounded-2xl shadow-brutal rotate-[-1deg] xs:rotate-[-2deg] relative">
                <span className="pin-marker -top-3 left-1/2 -translate-x-1/2" />
                
                <div className="flex items-center justify-between border-b border-[#141111]/30 pb-2 mb-3">
                  <span className="font-mono text-[11px] xs:text-xs font-bold uppercase tracking-wider text-[#141111]">
                    📌 {activeNote.tag}
                  </span>
                  <span className="font-mono text-[8px] xs:text-[9px] font-bold text-[#141111]/60">
                    PINNED NOTE
                  </span>
                </div>

                <div className="space-y-1 xs:space-y-1.5 font-mono text-xs xs:text-sm font-bold text-[#141111]">
                  {activeNote.lines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>

                <div className="text-right font-mono text-[8px] xs:text-[9px] font-bold text-[#141111]/60 mt-3 pt-2 border-t border-[#141111]/20">
                  REVIEWED TODAY // ZAGGU
                </div>
              </div>

              {/* Counter & Builder Sync Card */}
              <div className="bg-white brutal-border p-4 xs:p-6 rounded-2xl shadow-brutal flex flex-col items-center justify-center text-center flex-1 min-h-[220px] xs:min-h-[260px]">
                {/* Counter Number */}
                <div className="mb-2 xs:mb-3">
                  <div className="font-grotesk text-4xl xs:text-5xl font-extrabold text-[#141111]">
                    <motion.span
                      key={checkedIds.length}
                      initial={{ scale: 0.8, opacity: 0.5 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="text-[#FF6B8B]"
                    >
                      {checkedIds.length}
                    </motion.span>{' '}
                    / {CHECKLIST_ITEMS.length}
                  </div>
                  <div className="font-mono text-[11px] xs:text-xs font-extrabold uppercase tracking-wider text-[#141111] mt-1">
                    BUILDER SYNC
                  </div>
                </div>

                {/* State Message */}
                <div className="min-h-[40px] xs:min-h-[44px] flex flex-col items-center justify-center mb-3 xs:mb-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={checkedIds.length}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="font-mono text-[11px] xs:text-xs text-[#141111] font-semibold bg-[#FFD000]/30 brutal-border-sm px-2.5 xs:px-3 py-1.5 xs:py-2 rounded-lg"
                    >
                      <p>{currentMsg.text}</p>
                      {currentMsg.subtext && (
                        <p className="font-bold text-[#FF6B8B] mt-0.5">{currentMsg.subtext}</p>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Activation Button & Social Triggers */}
                <div className="w-full">
                  {!isUnlocked ? (
                    <div className="flex flex-col items-center gap-1.5">
                      <button
                        disabled
                        className="w-full py-2.5 xs:py-3 bg-neutral-200 text-neutral-500 brutal-border-sm rounded-xl font-mono text-xs xs:text-sm font-bold uppercase cursor-not-allowed opacity-60"
                      >
                        Say Hello
                      </button>
                      <span className="font-mono text-[9px] xs:text-[10px] text-[#141111]/50 font-bold uppercase">
                        Check all 4 boxes to activate
                      </span>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col gap-2.5 xs:gap-3"
                    >
                      <a
                        href={SOCIAL_LINKS.email}
                        className="w-full py-2.5 xs:py-3 bg-[#A8E66C] text-[#141111] brutal-border rounded-xl font-mono text-xs xs:text-sm font-extrabold uppercase shadow-brutal hover:bg-[#FFD000] hover:shadow-brutal-lg transition-all text-center"
                      >
                        Say Hello ✉
                      </a>

                      <div className="grid grid-cols-2 xs:grid-cols-4 sm:flex flex-wrap gap-1.5 justify-center">
                        <a
                          href={SOCIAL_LINKS.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2 xs:px-2.5 py-1.5 bg-[#C0A0FF] brutal-border-sm rounded-lg font-mono text-[10px] xs:text-[11px] font-bold hover:bg-[#FFD000] transition-colors text-center"
                        >
                          LinkedIn ↗
                        </a>
                        <a
                          href={SOCIAL_LINKS.github}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2 xs:px-2.5 py-1.5 bg-[#FFD000] brutal-border-sm rounded-lg font-mono text-[10px] xs:text-[11px] font-bold hover:bg-[#A8E66C] transition-colors text-center"
                        >
                          GitHub ↗
                        </a>
                        <a
                          href={SOCIAL_LINKS.x}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2 xs:px-2.5 py-1.5 bg-[#FF6B8B] text-white brutal-border-sm rounded-lg font-mono text-[10px] xs:text-[11px] font-bold hover:bg-[#141111] transition-colors text-center"
                        >
                          X ↗
                        </a>
                        <a
                          href={SOCIAL_LINKS.instagram}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2 xs:px-2.5 py-1.5 bg-[#27CCF3] brutal-border-sm rounded-lg font-mono text-[10px] xs:text-[11px] font-bold hover:bg-[#A8E66C] transition-colors text-center"
                        >
                          Instagram ↗
                        </a>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
