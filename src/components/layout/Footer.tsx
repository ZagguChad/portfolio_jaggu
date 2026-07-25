'use client';

import MarqueeBanner from '@/components/ui/MarqueeBanner';
import { useNightShift } from '@/context/NightShiftContext';

export default function Footer() {
  const { isNightMode } = useNightShift();

  return (
    <footer className={`relative mt-16 transition-colors ${isNightMode ? 'bg-[#0F1012]' : 'bg-[#FFFAEF]'}`}>
      <MarqueeBanner
        text={
          isNightMode
            ? "⚡ NIGHT WORKSHOP ACTIVE ✦ BUILT IN VIJAYAWADA ✦ MISSIONS DEPLOYED: 10+ ✦ TACTICAL SYSTEMS ONLINE ✦"
            : "♪ loading up dreams ✦ built in vijayawada ✦ projects shipped: 10+ ✦ neo brutal since 2026 ✦"
        }
        colorClass={isNightMode ? "bg-[#C8A94D] text-[#0F1012]" : "bg-[#C0A0FF]"}
        speedSec={112}
      />

      <div className={`w-full max-w-6xl mx-auto px-4 py-6 sm:py-8 flex flex-col sm:flex-row justify-between items-center font-mono text-[11px] sm:text-xs font-bold gap-3 sm:gap-4 text-center sm:text-left ${
        isNightMode ? 'text-[#9A9A9A]' : 'text-[#141111]/80'
      }`}>
        <span>© 2026 Zaggu</span>
        <span>K. Jagadish Sai Ram · Amrita Vishwa Vidyapeetham</span>
      </div>
    </footer>
  );
}
