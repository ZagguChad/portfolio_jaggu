'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE_DATA } from '@/data/portfolioData';
import { Milestone } from 'lucide-react';

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-24 relative overflow-hidden bg-hud-grid">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 border-b border-white/10 pb-4">
          <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-400 font-mono text-xs font-bold">
            06
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-sans uppercase text-white tracking-wider">
            JOURNEY TIMELINE & MILESTONES
          </h2>
        </div>

        {/* Vertical Timeline Path */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-10">
          {TIMELINE_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative glass-panel p-6 rounded-2xl border border-white/10 space-y-2 group"
            >
              {/* Timeline Pin Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full bg-gradient-to-r from-red-500 to-amber-500 border-4 border-[#0a0a0c] shadow-lg group-hover:scale-125 transition-transform" />

              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
                <span className="text-xl font-black font-mono text-amber-400">
                  {item.year}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white font-mono text-xs font-bold">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold font-sans text-white uppercase pt-1 flex items-center gap-2">
                <Milestone className="w-4 h-4 text-red-400" />
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
