'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GREETINGS = [
  'Hello',
  'Namaste',
  'Bonjour',
  'Hola',
  'Ciao',
  'Kon’nichiwa',
  'Kashiyya',
  'INITIALIZING SYSTEM...',
  'ZAGGU',
];

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Progress counter timer
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    // Text cycling interval
    const textInterval = setInterval(() => {
      setIndex((prev) => (prev < GREETINGS.length - 1 ? prev + 1 : prev));
    }, 200);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#0a0a0c] text-white px-8 py-12 select-none"
        >
          {/* Top Bar Status */}
          <div className="w-full flex justify-between items-center text-xs font-mono text-white/40 uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              CORE_LOADER // V1.0
            </span>
            <span>AMRITA CSE • UTC+5:30</span>
          </div>

          {/* Centered Text Loop Inspired by d33pak.space */}
          <div className="relative h-24 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ y: 40, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -40, opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="text-4xl md:text-6xl font-black font-sans uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-red-400 drop-shadow-lg"
              >
                {GREETINGS[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Bottom Progress Bar */}
          <div className="w-full max-w-md space-y-3">
            <div className="flex justify-between items-center text-xs font-mono text-neutral-400">
              <span>LOADING ASSETS</span>
              <span className="font-bold text-amber-400">{progress}%</span>
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-red-500 via-amber-500 to-green-400"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
