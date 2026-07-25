'use client';

import React, { useEffect, useState } from 'react';
import { useNightShift } from '@/context/NightShiftContext';

export default function TechnicalOverlayHUD() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [fps, setFps] = useState(60);
  const { isNightMode } = useNightShift();

  useEffect(() => {
    // Track mouse coordinates
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // FPS estimation
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const measureFps = () => {
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(measureFps);
    };

    animId = requestAnimationFrame(measureFps);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className={`pointer-events-none fixed inset-0 z-30 select-none overflow-hidden font-mono text-[10px] uppercase font-bold tracking-widest hidden lg:block ${
      isNightMode ? 'text-[#9A9A9A]' : 'text-[#141111]/70'
    }`}>
      {/* Top Left Bracket & HUD */}
      <div className={`absolute top-4 left-6 flex flex-col gap-1 border p-2 rounded shadow-brutal-sm pointer-events-auto ${
        isNightMode ? 'bg-[#17181B]/90 border-[#3A3A3A]' : 'bg-[#FFFAEF]/90 border-[#141111]/30'
      }`}>
        <div className={`flex items-center gap-2 border-b pb-1 ${isNightMode ? 'border-[#3A3A3A]' : 'border-[#141111]/20'}`}>
          <span className={`w-2 h-2 rounded-full animate-led ${isNightMode ? 'bg-[#6BD26B]' : 'bg-[#A8E66C]'}`} />
          <span>SYS // NOMINAL</span>
        </div>
        <div className={`text-[9px] ${isNightMode ? 'text-[#9A9A9A]/70' : 'text-[#141111]/60'}`}>
          BUILD: 2026.07.24 // REV 4.2.0
        </div>
      </div>

      {/* Top Right Coordinate Readout */}
      <div className={`absolute top-4 right-6 border p-2 rounded shadow-brutal-sm flex items-center gap-3 pointer-events-auto ${
        isNightMode ? 'bg-[#17181B]/90 border-[#3A3A3A]' : 'bg-[#FFFAEF]/90 border-[#141111]/30'
      }`}>
        <div>
          X: <span className={`font-extrabold ${isNightMode ? 'text-[#D8B04C]' : 'text-[#FF6B8B]'}`}>{coords.x}</span> | Y: <span className={`font-extrabold ${isNightMode ? 'text-[#6BD26B]' : 'text-[#27CCF3]'}`}>{coords.y}</span>
        </div>
        <div className={`px-1.5 py-0.5 rounded text-[9px] ${
          isNightMode ? 'bg-[#C8A94D] text-[#0F1012]' : 'bg-[#FFD000] text-[#141111]'
        }`}>
          {fps} FPS
        </div>
      </div>

      {/* Bottom Left Corner Mark */}
      <div className={`absolute bottom-4 left-6 text-[9px] ${isNightMode ? 'text-[#9A9A9A]/60' : 'text-[#141111]/50'}`}>
        ⌖ LAT: 16.5062° N // LON: 80.6480° E
      </div>

      {/* Bottom Right Approved Stamp */}
      <div className={`absolute bottom-4 right-6 text-[9px] flex items-center gap-2 ${isNightMode ? 'text-[#9A9A9A]/60' : 'text-[#141111]/50'}`}>
        <span>SCALE 1:1</span>
        <span className={`px-2 py-0.5 border rounded ${
          isNightMode ? 'border-[#3A3A3A] bg-[#17181B]' : 'border-[#141111]/40 bg-white'
        }`}>
          VERIFIED BUILDER
        </span>
      </div>
    </div>
  );
}

