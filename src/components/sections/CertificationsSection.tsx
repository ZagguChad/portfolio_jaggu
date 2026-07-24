'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS_DATA } from '@/data/portfolioData';
import { Award, ShieldCheck } from 'lucide-react';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-hud-grid">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 border-b border-white/10 pb-4">
          <span className="px-2.5 py-1 rounded bg-green-500/20 text-green-400 font-mono text-xs font-bold">
            07
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-sans uppercase text-white tracking-wider">
            CERTIFICATIONS & HONORS
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3 relative corner-brackets"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white font-sans text-base">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono text-red-400">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>
                <ShieldCheck className="w-5 h-5 text-green-400 shrink-0" />
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed pt-1">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
