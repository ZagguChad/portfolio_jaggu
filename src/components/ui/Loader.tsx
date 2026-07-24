'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GREETINGS } from '@/data/portfolioData';

export default function Loader() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // 1. Cycling greetings
    const wordInterval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < GREETINGS.length - 1) {
          return prev + 1;
        } else {
          clearInterval(wordInterval);
          return prev;
        }
      });
    }, 160);

    // 2. Progress percentage
    const startTime = Date.now();
    const totalDuration = GREETINGS.length * 160;

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.floor((elapsed / totalDuration) * 100), 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(progressInterval);
        setTimeout(() => {
          setIsFinished(true);
        }, 250);
      }
    }, 25);

    return () => {
      clearInterval(wordInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="loader-overlay"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999999] flex flex-col justify-between items-center bg-[#FFFAEF] text-[#141111] overflow-hidden p-8 md:p-12 select-none"
        >
          {/* Top subtle badge */}
          <div className="w-full flex justify-between items-center text-xs font-mono tracking-widest uppercase font-bold opacity-60">
            <span>ZAGGU SYSTEM</span>
            <span>PORTFOLIO '26</span>
          </div>

          {/* Center Greeting Word */}
          <div className="flex flex-col items-center justify-center my-auto">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#141111] animate-ping" />
              <motion.h1
                key={currentIndex}
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.15 }}
                className="font-grotesk text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
              >
                {GREETINGS[currentIndex]}
              </motion.h1>
            </div>
          </div>

          {/* Bottom Progress Bar */}
          <div className="w-full max-w-xl flex flex-col gap-3">
            <div className="w-full h-3 bg-white brutal-border overflow-hidden rounded-full p-[2px]">
              <div
                className="h-full bg-[#141111] rounded-full transition-all duration-75 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between items-center font-mono text-xs md:text-sm font-bold tracking-wider">
              <span>PORTFOLIO '26 — ZAGGU</span>
              <span>{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
