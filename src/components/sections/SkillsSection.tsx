'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '@/data/portfolioData';
import { Code2, Sparkles } from 'lucide-react';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-hud-grid">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 border-b border-white/10 pb-4">
          <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-400 font-mono text-xs font-bold">
            02
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-sans uppercase text-white tracking-wider">
            SKILLS & TECHNICAL MATRIX
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 mb-8 pb-2">
          {SKILLS_DATA.map((cat, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-red-500 to-amber-500 text-white font-bold shadow-lg scale-105'
                    : 'glass-panel text-neutral-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white font-sans uppercase flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              {SKILLS_DATA[activeTab].title}
            </h3>
            <p className="text-sm text-neutral-400 font-mono mt-1">
              {SKILLS_DATA[activeTab].description}
            </p>
          </div>

          {/* Skill Progress Bars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {SKILLS_DATA[activeTab].skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-white font-semibold flex items-center gap-2">
                    {skill.name}
                    {skill.tag && (
                      <span className="px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 text-[10px]">
                        {skill.tag}
                      </span>
                    )}
                  </span>
                  <span className="text-amber-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-red-500 to-amber-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
