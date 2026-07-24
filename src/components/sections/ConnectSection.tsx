'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Check, Mail, Linkedin, Github, Twitter, Instagram, Send } from 'lucide-react';

const CHECKLIST = [
  'Hard problems with real-world impact',
  'AI-shaped opportunities & research',
  'Teams that ship ambitious products',
  'India, remote, or anywhere ambitious',
];

export default function ConnectSection() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>([
    true,
    true,
    true,
    true,
  ]);

  const toggleCheck = (idx: number) => {
    const updated = [...checkedItems];
    updated[idx] = !updated[idx];
    setCheckedItems(updated);
  };

  const checkedCount = checkedItems.filter(Boolean).length;

  return (
    <section id="connect" className="py-24 relative overflow-hidden bg-hud-grid">
      <div className="max-w-5xl mx-auto px-4">
        {/* Marquee Banner */}
        <div className="w-full overflow-hidden bg-red-500 text-white font-mono text-xs font-bold py-2 rounded-full mb-12 uppercase tracking-widest text-center shadow-lg">
          LET&apos;S CONNECT ✦ BUILD SOMETHING AMBITIOUS ✦ REACH OUT BELOW ✦
        </div>

        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Checklist */}
          <div className="md:col-span-7 space-y-6">
            <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-400 font-mono text-xs font-bold uppercase">
              WHAT I LOOK FOR
            </span>
            <h2 className="text-3xl font-black font-sans uppercase text-white">
              Let&apos;s build something real.
            </h2>
            <p className="text-xs font-mono text-neutral-400">
              nodding along? tick the boxes ↓
            </p>

            <div className="space-y-3">
              {CHECKLIST.map((item, idx) => (
                <button
                  key={item}
                  onClick={() => toggleCheck(idx)}
                  className="w-full text-left flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all cursor-pointer group"
                >
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${
                      checkedItems[idx]
                        ? 'bg-red-500 border-red-500 text-white'
                        : 'border-white/30 group-hover:border-white'
                    }`}
                  >
                    {checkedItems[idx] && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <span className="text-sm font-sans text-neutral-200">
                    {item}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Unlocked Connect Links */}
          <div className="md:col-span-5 glass-card p-6 rounded-2xl border border-white/10 space-y-6 text-center">
            <div className="space-y-1">
              <div className="text-3xl font-black font-mono text-amber-400">
                {checkedCount}/4
              </div>
              <p className="text-xs font-mono text-neutral-400 uppercase">
                CRITERIA MATCHED
              </p>
            </div>

            <p className="text-sm font-bold text-white uppercase font-sans">
              Now we&apos;re talking. Let&apos;s connect 👇
            </p>

            {/* Social Links */}
            <div className="flex flex-col gap-2.5">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-500 to-amber-500 text-white font-mono text-xs font-bold flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-transform"
              >
                <Mail className="w-4 h-4" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl glass-panel text-neutral-300 hover:text-white flex items-center justify-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5 text-purple-400" />
                  <span>LinkedIn ↗</span>
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl glass-panel text-neutral-300 hover:text-white flex items-center justify-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5 text-amber-400" />
                  <span>GitHub ↗</span>
                </a>
                <a
                  href={PERSONAL_INFO.x}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl glass-panel text-neutral-300 hover:text-white flex items-center justify-center gap-1.5"
                >
                  <Twitter className="w-3.5 h-3.5 text-blue-400" />
                  <span>X ↗</span>
                </a>
                <a
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl glass-panel text-neutral-300 hover:text-white flex items-center justify-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>Instagram ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
