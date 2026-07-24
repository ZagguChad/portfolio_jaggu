'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { GraduationCap, Cpu, Camera } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-hud-grid">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 border-b border-white/10 pb-4">
          <span className="px-2.5 py-1 rounded bg-red-500/20 text-red-400 font-mono text-xs font-bold">
            01
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-sans uppercase text-white tracking-wider">
            WAYNE TECH BIOGRAPHY
          </h2>
        </div>

        {/* Bio Paragraphs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-start">
          <div className="md:col-span-12 space-y-4 glass-card p-6 sm:p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold font-sans uppercase text-amber-400">
              Engineering Precision with Cinematic Empathy
            </h3>
            {PERSONAL_INFO.bio.map((paragraph, index) => (
              <p key={index} className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: Academics */}
          <motion.div
            whileHover={{ y: -6 }}
            className="glass-panel p-6 rounded-2xl border border-white/10 corner-brackets space-y-4"
          >
            <GraduationCap className="w-8 h-8 text-red-400" />
            <h4 className="font-bold text-lg text-white uppercase font-sans">
              ACADEMICS
            </h4>
            <p className="text-xs font-mono text-amber-400 font-bold">
              {PERSONAL_INFO.education.institution}
            </p>
            <p className="text-sm text-neutral-300">
              {PERSONAL_INFO.education.degree}
            </p>
            <div className="pt-3 border-t border-white/10 flex justify-between text-xs font-mono text-neutral-400">
              <span>CGPA: {PERSONAL_INFO.education.cgpa}</span>
              <span>BATCH: {PERSONAL_INFO.education.expectedGraduation}</span>
            </div>
          </motion.div>

          {/* Pillar 2: AI / ML Architecture */}
          <motion.div
            whileHover={{ y: -6 }}
            className="glass-panel p-6 rounded-2xl border border-white/10 corner-brackets space-y-4"
          >
            <Cpu className="w-8 h-8 text-amber-400" />
            <h4 className="font-bold text-lg text-white uppercase font-sans">
              AI / ML ARCHITECTURE
            </h4>
            <p className="text-xs font-mono text-amber-400 font-bold">
              FEDERATED EDGE & LOCAL LLMs
            </p>
            <p className="text-sm text-neutral-300">
              Specializing in federated edge AI (Flower FL), digital twin modeling (LSTM), local LLM orchestration (Ollama), and computer vision.
            </p>
          </motion.div>

          {/* Pillar 3: Cinematography */}
          <motion.div
            whileHover={{ y: -6 }}
            className="glass-panel p-6 rounded-2xl border border-white/10 corner-brackets space-y-4"
          >
            <Camera className="w-8 h-8 text-green-400" />
            <h4 className="font-bold text-lg text-white uppercase font-sans">
              CINEMATOGRAPHY
            </h4>
            <p className="text-xs font-mono text-amber-400 font-bold">
              DIRECTOR OF PHOTOGRAPHY
            </p>
            <p className="text-sm text-neutral-300">
              Director of Photography for narrative short films (&quot;High Stakes&quot;, &quot;Echoes of Silence&quot;), blending anamorphic framing and visual moodboards.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
