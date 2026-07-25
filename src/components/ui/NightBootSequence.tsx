'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useNightShift } from '@/context/NightShiftContext';
import { useEffect, useState } from 'react';

const BOOT_LOGS = [
  'BUILDER OS // SWITCHING TO NIGHT WORKSHOP…',
  '[SYSTEM] Initializing Night Shift Clearance Level 04…',
  '[MODULES] Loading tactical command console…',
  '[AI] Calibrating neural model engines…',
  '[GRID] Initializing dark blueprint drafting matrix…',
  '[TERMINAL] Connecting CRT shell [OK]',
  'MISSION CONTROL READY.',
];

export default function NightBootSequence() {
  const { isBooting } = useNightShift();
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    if (isBooting) {
      setLogIndex(0);
      const interval = setInterval(() => {
        setLogIndex((prev) => (prev < BOOT_LOGS.length - 1 ? prev + 1 : prev));
      }, 200);

      return () => clearInterval(interval);
    }
  }, [isBooting]);

  return (
    <AnimatePresence>
      {isBooting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[99999] bg-[#0F1012] text-[#ECECEC] flex flex-col justify-center items-center p-6 select-none font-mono crt-scanlines"
        >
          <div className="w-full max-w-lg bg-[#17181B] brutal-border border-[#3A3A3A] p-6 rounded-2xl shadow-[0_0_40px_rgba(200,169,77,0.15)] flex flex-col gap-4">
            {/* Header indicator */}
            <div className="flex justify-between items-center border-b border-[#3A3A3A] pb-3 text-xs text-[#C8A94D] font-bold uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6BD26B] animate-led" />
                SYSTEM BOOT SEQUENCE
              </span>
              <span>REV 4.2.0</span>
            </div>

            {/* Terminal log lines */}
            <div className="space-y-2 min-h-[160px] text-xs">
              {BOOT_LOGS.slice(0, logIndex + 1).map((log, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex items-start gap-2 ${
                    idx === BOOT_LOGS.length - 1
                      ? 'text-[#6BD26B] font-bold'
                      : 'text-[#9A9A9A]'
                  }`}
                >
                  <span className="text-[#D8B04C]">❯</span>
                  <span>{log}</span>
                </motion.div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-[#202226] brutal-border-sm border-[#3A3A3A] h-2.5 rounded-full overflow-hidden p-0.5">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="h-full bg-[#C8A94D] rounded-full"
              />
            </div>

            <div className="text-right text-[10px] text-[#9A9A9A] uppercase font-bold">
              BOOT STATUS: ACTIVE
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
