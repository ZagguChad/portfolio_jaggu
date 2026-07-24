'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CINEMATIC_DATA } from '@/data/portfolioData';
import { Film, Play, Aperture, Video } from 'lucide-react';

export default function CinematicVaultSection() {
  const [selectedFilm, setSelectedFilm] = useState<string | null>(null);

  return (
    <section id="cinematic" className="py-24 relative overflow-hidden bg-hud-grid">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 border-b border-white/10 pb-4">
          <span className="px-2.5 py-1 rounded bg-purple-500/20 text-purple-400 font-mono text-xs font-bold">
            04
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-sans uppercase text-white tracking-wider">
            CINEMATIC NOIR VAULT (SHORT FILMS AS DOP)
          </h2>
        </div>

        {/* Film Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CINEMATIC_DATA.map((film) => (
            <motion.div
              key={film.id}
              whileHover={{ y: -6 }}
              className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4 relative group"
            >
              {/* Aspect Ratio Preview Window */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-white/10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="z-10 flex flex-col items-center gap-2 text-center p-4">
                  <button
                    onClick={() => setSelectedFilm(film.title)}
                    className="p-3.5 rounded-full bg-red-500 text-white shadow-xl group-hover:scale-110 transition-transform cursor-pointer"
                    aria-label={`Play preview for ${film.title}`}
                  >
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </button>
                  <h3 className="text-xl font-black text-white uppercase font-sans tracking-tight">
                    {film.title}
                  </h3>
                  <p className="text-xs font-mono text-amber-400 font-bold">
                    {film.role}
                  </p>
                </div>
              </div>

              {/* Specs & Info */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono text-neutral-400 border-b border-white/10 pb-2">
                  <span className="flex items-center gap-1.5 text-white font-bold">
                    <Aperture className="w-3.5 h-3.5 text-red-400" />
                    {film.specs}
                  </span>
                  <span>{film.aspectRatio}</span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {film.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Trigger Banner */}
        {selectedFilm && (
          <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="glass-panel p-8 rounded-2xl border border-white/20 max-w-md w-full space-y-4 text-center">
              <Film className="w-12 h-12 text-red-400 mx-auto animate-pulse" />
              <h3 className="text-2xl font-black text-white uppercase font-sans">
                {selectedFilm}
              </h3>
              <p className="text-xs font-mono text-amber-400">
                [DIRECTOR OF PHOTOGRAPHY PREVIEW]
              </p>
              <p className="text-sm text-neutral-300">
                Cinematic showcase reel stream is queued. Full 4K anamorphic master available upon requested screening.
              </p>
              <button
                onClick={() => setSelectedFilm(null)}
                className="w-full py-2.5 rounded-xl bg-white text-black font-mono font-bold text-xs uppercase hover:bg-neutral-200 transition-colors"
              >
                Close Vault
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
