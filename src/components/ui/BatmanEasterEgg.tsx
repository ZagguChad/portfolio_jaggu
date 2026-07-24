'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BATMAN_QUOTES = [
  "I am Vengeance. I am the Night. I am ZAGGU.",
  "It's not who I am underneath, but what I do that defines me.",
  "Gotham needs code. Jagadish delivers.",
  "Why do we fall? So we can learn to pick ourselves up.",
  "A hero can be anyone. Even a developer putting a coat around a bug."
];

export default function BatmanEasterEgg() {
  const [keySequence, setKeySequence] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Keyboard listener for typing 'batman'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user typing in input/textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      const char = e.key.toLowerCase();
      if (/^[a-z]$/.test(char)) {
        const nextSeq = (keySequence + char).slice(-6);
        setKeySequence(nextSeq);

        if (nextSeq === 'batman') {
          triggerBatmanModal();
          setKeySequence('');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keySequence]);

  const triggerBatmanModal = () => {
    setQuoteIndex(Math.floor(Math.random() * BATMAN_QUOTES.length));
    setIsOpen(true);
  };

  return (
    <>
      {/* Floating Bat-Signal Launcher */}
      <motion.button
        onClick={triggerBatmanModal}
        whileHover={{ scale: 1.1, rotate: 12 }}
        whileTap={{ scale: 0.95 }}
        title="Summon Bat-Signal (or type 'batman')"
        className="fixed bottom-4 xs:bottom-6 right-4 xs:right-6 z-40 bg-[#141111] text-[#FFD000] brutal-border p-2.5 xs:p-3 rounded-full shadow-brutal-lg flex items-center justify-center cursor-pointer group"
      >
        <span className="text-lg xs:text-xl leading-none transition-transform group-hover:scale-125">🦇</span>
      </motion.button>

      {/* Gotham Mode Overlay Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#090A0F]/90 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 30 }}
              transition={{ type: 'spring', damping: 20 }}
              className="relative z-10 w-full max-w-xl bg-[#141111] text-[#FFFAEF] brutal-border border-[#FFD000] rounded-2xl sm:rounded-3xl p-5 xs:p-6 md:p-10 shadow-[0_0_50px_rgba(255,208,0,0.3)] text-center relative overflow-hidden"
            >
              {/* Bat Signal Glow background */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#FFD000]/10 to-transparent pointer-events-none" />

              {/* Bat Icon Header */}
              <div className="w-16 h-16 xs:w-20 xs:h-20 mx-auto mb-3 xs:mb-4 bg-[#FFD000] text-[#141111] brutal-border rounded-full flex items-center justify-center text-3xl xs:text-4xl shadow-[0_0_30px_#FFD000]">
                🦇
              </div>

              <span className="inline-block px-2.5 xs:px-3 py-1 bg-[#FFD000] text-[#141111] font-mono text-[10px] xs:text-xs font-extrabold uppercase tracking-widest rounded-full mb-3">
                SECRET EASTER EGG UNLOCKED
              </span>

              <h2 className="font-grotesk text-2xl xs:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3 xs:mb-4">
                THE BAT-SIGNAL HAS BEEN SUMMONED
              </h2>

              <div className="bg-[#1A1A1A] brutal-border border-white/20 p-4 xs:p-5 rounded-xl xs:rounded-2xl mb-4 xs:mb-6">
                <p className="font-mono text-sm xs:text-base md:text-lg text-[#FFD000] font-bold italic leading-relaxed">
                  "{BATMAN_QUOTES[quoteIndex]}"
                </p>
                <p className="font-mono text-[11px] xs:text-xs text-neutral-400 mt-2">
                  — Jagadish Sai Ram (a.k.a ZAGGU)
                </p>
              </div>

              <div className="font-mono text-[11px] xs:text-xs text-neutral-400 mb-4 xs:mb-6">
                💡 <span className="text-[#FFD000]">Pro Tip:</span> You can summon this anytime by typing <code className="bg-[#2A2A2A] px-1.5 xs:px-2 py-0.5 rounded text-white font-bold">b-a-t-m-a-n</code> on your keyboard.
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-full sm:w-auto px-6 xs:px-8 py-3 xs:py-3.5 bg-[#FFD000] text-[#141111] brutal-border rounded-full font-mono text-xs md:text-sm font-extrabold uppercase shadow-[4px_4px_0px_#FFFFFF] hover:bg-white transition-all cursor-pointer"
              >
                Return to Gotham 🦇
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
