'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MarqueeBanner from '@/components/ui/MarqueeBanner';
import { CHECKLIST_ITEMS, SOCIAL_LINKS } from '@/data/portfolioData';

export default function ConnectChecklist() {
  const [checkedIds, setCheckedIds] = useState<number[]>([]);

  const toggleCheck = (id: number) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isUnlocked = checkedIds.length === CHECKLIST_ITEMS.length;

  return (
    <section id="connect" className="relative py-16 texture-dots">
      <MarqueeBanner text="let's connect ✦ let's connect ✦ let's connect ✦ let's connect ✦" colorClass="bg-[#FF6B8B]" />

      <div className="w-full max-w-5xl mx-auto px-4 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#FFFAEF] brutal-border rounded-3xl p-6 md:p-10 shadow-brutal-xl"
        >
          {/* Section 04 Heading */}
          <div className="flex items-center gap-3 mb-8 border-b-2 border-[#141111] pb-3">
            <span className="px-3 py-1 bg-[#141111] text-[#FFFAEF] brutal-border-sm font-mono text-xs font-extrabold uppercase tracking-wider">
              SECTION // 04
            </span>
            <h2 className="font-grotesk text-xs md:text-sm font-bold text-[#141111]/80 uppercase tracking-widest">
              Let's Connect & Collaborate
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Checklist */}
            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 bg-[#FF6B8B] text-white brutal-border-sm font-mono text-xs font-bold uppercase mb-4">
                what I look for
              </span>
              <h2 className="font-grotesk text-3xl md:text-5xl font-extrabold text-[#141111] mb-2">
                Let's build something real.
              </h2>
              <p className="font-mono text-xs md:text-sm text-[#141111]/70 font-semibold mb-6">
                nodding along? tick the boxes ↓
              </p>

              {/* Checklist Items */}
              <div className="space-y-3">
                {CHECKLIST_ITEMS.map((item) => {
                  const isChecked = checkedIds.includes(item.id);

                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleCheck(item.id)}
                      className={`w-full flex items-center gap-3.5 p-3.5 rounded-xl brutal-border text-left font-mono text-xs md:text-sm font-bold transition-all ${
                        isChecked
                          ? 'bg-[#A8E66C] shadow-brutal-sm scale-[1.01]'
                          : 'bg-white hover:bg-neutral-50'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-md brutal-border-sm flex items-center justify-center shrink-0 transition-colors ${
                          isChecked ? 'bg-[#141111] text-[#A8E66C]' : 'bg-white'
                        }`}
                      >
                        {isChecked && '✓'}
                      </div>
                      <span className={isChecked ? 'line-through opacity-80' : ''}>
                        {item.text}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Counter & Unlock Card */}
            <div className="lg:col-span-5 bg-white brutal-border p-6 rounded-2xl shadow-brutal flex flex-col items-center justify-center text-center min-h-[280px]">
              <div className="mb-4">
                <div className="font-grotesk text-5xl font-extrabold text-[#141111]">
                  <span className="text-[#FF6B8B]">{checkedIds.length}</span> / {CHECKLIST_ITEMS.length}
                </div>
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#141111]/60 mt-1">
                  boxes checked
                </div>
              </div>

              {!isUnlocked ? (
                <p className="font-mono text-xs text-[#141111]/70 font-semibold bg-[#FFD000]/30 brutal-border-sm px-3 py-2 rounded-lg">
                  something unlocks when you relate to all of it
                </p>
              ) : (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full flex flex-col gap-3"
                  >
                    <p className="font-mono text-xs font-bold text-[#141111] uppercase bg-[#A8E66C] brutal-border-sm py-1.5 rounded-lg">
                      Now we're talking. Let's connect 👇
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center pt-2">
                      <a
                        href={SOCIAL_LINKS.email}
                        className="px-3 py-2 bg-[#27CCF3] brutal-border-sm rounded-lg font-mono text-xs font-bold hover:bg-[#FFD000] transition-colors"
                      >
                        ✉ Email
                      </a>
                      <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-2 bg-[#C0A0FF] brutal-border-sm rounded-lg font-mono text-xs font-bold hover:bg-[#FFD000] transition-colors"
                      >
                        LinkedIn ↗
                      </a>
                      <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-2 bg-[#FFD000] brutal-border-sm rounded-lg font-mono text-xs font-bold hover:bg-[#A8E66C] transition-colors"
                      >
                        GitHub ↗
                      </a>
                      <a
                        href={SOCIAL_LINKS.x}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-2 bg-[#FF6B8B] text-white brutal-border-sm rounded-lg font-mono text-xs font-bold hover:bg-[#141111] transition-colors"
                      >
                        X ↗
                      </a>
                      <a
                        href={SOCIAL_LINKS.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-2 bg-[#A8E66C] brutal-border-sm rounded-lg font-mono text-xs font-bold hover:bg-[#27CCF3] transition-colors"
                      >
                        Instagram ↗
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
