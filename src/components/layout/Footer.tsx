'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0c] border-t border-white/10 py-8 relative z-10">
      <div className="max-w-5xl mx-auto px-4 text-center space-y-4 font-mono text-xs text-neutral-400">
        <p className="tracking-widest uppercase text-amber-400">
          ♪ LOADING UP DREAMS ✦ BUILT IN VIJAYAWADA ✦ PROJECTS SHIPPED: 10+ ✦ NEXT.JS & THREE.JS ✦
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-white/10 pt-4 text-neutral-500">
          <span>© 2026 ZAGGU (K. Jagadish Sai Ram)</span>
          <span>Amrita Vishwa Vidyapeetham</span>
        </div>
      </div>
    </footer>
  );
}
