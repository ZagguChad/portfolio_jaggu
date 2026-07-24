'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '@/data/portfolioData';
import { Briefcase, Calendar } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-hud-grid">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 border-b border-white/10 pb-4">
          <span className="px-2.5 py-1 rounded bg-green-500/20 text-green-400 font-mono text-xs font-bold">
            03
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-sans uppercase text-white tracking-wider">
            EXPERIENCE & LEADERSHIP
          </h2>
        </div>

        {/* Experience Cards Grid */}
        <div className="space-y-6">
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4 hover:border-white/20 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-white font-sans flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-red-400" />
                    {exp.role}
                  </h3>
                  <p className="text-sm font-mono text-amber-400 font-semibold">
                    {exp.organization}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-white font-bold text-[10px]">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Bullet Descriptions */}
              <ul className="space-y-2 text-sm text-neutral-300">
                {exp.description.map((desc, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2">
                    <span className="text-red-400 font-bold font-mono">▸</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-neutral-300"
                  >
                    #{skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
