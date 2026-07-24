'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { FileDown, Github, MapPin, Award } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="top" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center px-4 overflow-hidden">
      <div className="max-w-5xl w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Background Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Row: Avatar + Info */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Avatar Polaroid Frame */}
            <div className="md:col-span-4 flex justify-center">
              <motion.div
                whileHover={{ rotate: -2, scale: 1.03 }}
                className="relative p-3 bg-neutral-900 border-2 border-white/10 rounded-2xl shadow-2xl corner-brackets"
              >
                <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-xl overflow-hidden bg-black">
                  <Image
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.fullName}
                    fill
                    priority
                    className="object-cover filter contrast-110 hover:contrast-125 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 px-2 py-1 bg-black/70 backdrop-blur-md rounded-lg border border-white/10 text-center font-mono text-[10px] text-amber-400 font-bold">
                    [OPERATIVE: ZAGGU] • LEVEL_05
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Main Info Header */}
            <div className="md:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-amber-400">
                <Award className="w-3.5 h-3.5 text-red-400" />
                <span>BUILDER PASS — 2026</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black font-sans uppercase tracking-tight text-white">
                {PERSONAL_INFO.name}
              </h1>

              <p className="text-sm sm:text-base font-mono text-red-400 font-bold">
                {PERSONAL_INFO.title}
              </p>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {PERSONAL_INFO.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 pt-2 border-t border-white/10">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {PERSONAL_INFO.location}
                </span>
                <span>• projects shipped: 10+</span>
              </div>
            </div>
          </div>

          {/* Proof of Work Sticker Board */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
              // PROOF OF WORK & ACCREDITATION
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Resume Download Sticker */}
              <motion.a
                whileHover={{ scale: 1.03, y: -4 }}
                href={PERSONAL_INFO.resumeUrl}
                download="Zaggu_Resume.pdf"
                className="p-4 rounded-xl bg-gradient-to-br from-neutral-900 to-black border border-white/10 flex items-center justify-between group cursor-pointer"
              >
                <div className="space-y-1">
                  <span className="text-xs font-mono text-amber-400 font-bold block">
                    CURRICULUM VITAE
                  </span>
                  <span className="text-xs text-neutral-400 block">
                    Download Resume (PDF)
                  </span>
                </div>
                <div className="w-9 h-9 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <FileDown className="w-5 h-5" />
                </div>
              </motion.a>

              {/* GitHub Sticker */}
              <motion.a
                whileHover={{ scale: 1.03, y: -4 }}
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-gradient-to-br from-neutral-900 to-black border border-white/10 flex items-center justify-between group cursor-pointer"
              >
                <div className="space-y-1">
                  <span className="text-xs font-mono text-red-400 font-bold block">
                    GITHUB PROFILE
                  </span>
                  <span className="text-xs text-neutral-400 block">
                    @ZagguChad • 10+ Repos
                  </span>
                </div>
                <div className="w-9 h-9 rounded-lg bg-white/10 text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <Github className="w-5 h-5" />
                </div>
              </motion.a>

              {/* Amrita University Shield */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="p-4 rounded-xl bg-gradient-to-br from-neutral-900 to-black border border-white/10 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-mono font-bold text-xs">
                  AU
                </div>
                <div className="space-y-0.5">
                  <span className="text-xs font-mono text-white font-bold block">
                    AMRITA CSE
                  </span>
                  <span className="text-[11px] text-neutral-400 block">
                    CGPA 8.34 • Batch of 2027
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
