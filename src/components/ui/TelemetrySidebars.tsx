'use client';

import { useNightShift } from '@/context/NightShiftContext';
import { SOCIAL_LINKS } from '@/data/portfolioData';

export default function TelemetrySidebars() {
  const { isNightMode, playFx } = useNightShift();

  if (!isNightMode) return null;

  return (
    <>
      {/* Left Tactical Telemetry Panel (Visible on xl+ screens) */}
      <aside className="fixed top-28 left-4 z-40 hidden 2xl:flex flex-col gap-4 w-52 bg-[#17181B] brutal-border border-[#3A3A3A] p-3.5 rounded-2xl shadow-brutal text-[#ECECEC] font-mono text-[10px] select-none crt-scanlines">
        {/* Radar & Compass */}
        <div className="border-b border-[#3A3A3A] pb-3">
          <div className="flex items-center justify-between text-[#C8A94D] font-bold uppercase mb-2">
            <span>TACTICAL RADAR</span>
            <span className="w-2 h-2 rounded-full bg-[#6BD26B] animate-led" />
          </div>

          <div className="w-full h-24 bg-[#0F1012] brutal-border-sm border-[#3A3A3A] rounded-xl relative flex items-center justify-center overflow-hidden">
            {/* Concentric radar rings */}
            <div className="w-20 h-20 rounded-full border border-[#C8A94D]/30 absolute" />
            <div className="w-12 h-12 rounded-full border border-[#C8A94D]/30 absolute" />
            <div className="w-full h-[1px] bg-[#C8A94D]/20 absolute" />
            <div className="h-full w-[1px] bg-[#C8A94D]/20 absolute" />
            
            {/* Rotating radar sweep */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#C8A94D]/40 to-transparent animate-spin-slow absolute origin-center" />
            
            <span className="text-[8px] text-[#C8A94D] font-bold absolute bottom-1 right-1">⌖ 80.64°E</span>
          </div>
        </div>

        {/* Telemetry Metrics */}
        <div className="space-y-2.5">
          <div className="flex justify-between items-center">
            <span className="text-[#9A9A9A]">LAT / LON:</span>
            <span className="text-[#D8B04C] font-bold">16.50°N / 80.64°E</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[#9A9A9A]">BATTERY:</span>
            <span className="text-[#6BD26B] font-bold">98% OPTIMAL</span>
          </div>

          <div>
            <div className="flex justify-between items-center text-[#9A9A9A] mb-1">
              <span>MISSION PROGRESS:</span>
              <span className="text-[#C8A94D] font-bold">85%</span>
            </div>
            <div className="w-full bg-[#202226] brutal-border-sm border-[#3A3A3A] h-2 rounded-full p-0.5">
              <div className="w-[85%] h-full bg-[#C8A94D] rounded-full" />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[#9A9A9A]">RADIO BAND:</span>
            <span className="text-[#27CCF3] font-bold">88.5 MHz FM</span>
          </div>
        </div>
      </aside>

      {/* Right Communication Console (Visible on xl+ screens) */}
      <aside className="fixed top-28 right-4 z-40 hidden 2xl:flex flex-col gap-4 w-52 bg-[#17181B] brutal-border border-[#3A3A3A] p-3.5 rounded-2xl shadow-brutal text-[#ECECEC] font-mono text-[10px] select-none crt-scanlines">
        <div className="border-b border-[#3A3A3A] pb-2.5 flex justify-between items-center">
          <span className="text-[#C8A94D] font-bold uppercase">COMM CONSOLE</span>
          <span className="px-1.5 py-0.5 bg-[#6BD26B] text-[#0F1012] font-bold rounded text-[8px]">
            ONLINE
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href={SOCIAL_LINKS.email}
            onClick={() => playFx('click')}
            className="p-2 bg-[#202226] brutal-border-sm border-[#3A3A3A] rounded-xl hover:bg-[#C8A94D] hover:text-[#0F1012] font-bold transition-all text-center uppercase"
          >
            ✉ Email Briefing
          </a>

          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noreferrer"
            onClick={() => playFx('click')}
            className="p-2 bg-[#202226] brutal-border-sm border-[#3A3A3A] rounded-xl hover:bg-[#D8B04C] hover:text-[#0F1012] font-bold transition-all text-center uppercase"
          >
            ↗ GitHub Catalog
          </a>

          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            onClick={() => playFx('click')}
            className="p-2 bg-[#202226] brutal-border-sm border-[#3A3A3A] rounded-xl hover:bg-[#27CCF3] hover:text-[#0F1012] font-bold transition-all text-center uppercase"
          >
            ↗ LinkedIn Profile
          </a>

          <a
            href={SOCIAL_LINKS.resumePdf}
            download="Zaggu_Resume.pdf"
            onClick={() => playFx('click')}
            className="p-2 bg-[#202226] brutal-border-sm border-[#3A3A3A] rounded-xl hover:bg-[#6BD26B] hover:text-[#0F1012] font-bold transition-all text-center uppercase"
          >
            ↓ Resume PDF
          </a>
        </div>

        <div className="pt-2 border-t border-[#3A3A3A] text-[9px] text-[#9A9A9A] text-center font-bold">
          SECURITY LEVEL 04 ENCRYPTED
        </div>
      </aside>
    </>
  );
}
