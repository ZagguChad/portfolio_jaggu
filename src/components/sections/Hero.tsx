'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '@/data/portfolioData';
import { BuilderBadge, PaperClip, MicrochipIC } from '@/components/decor';
import { useNightShift } from '@/context/NightShiftContext';

const HeroScene = dynamic(() => import('@/components/3d/HeroScene'), {
  ssr: false,
});

export default function Hero() {
  const { isNightMode, toggleNightMode, playFx } = useNightShift();

  return (
    <section id="top" className="relative min-h-screen pt-24 sm:pt-28 pb-12 sm:pb-16 px-3 sm:px-4 texture-blueprint flex items-center justify-center overflow-hidden">
      {/* 3D Procedural Background Scene */}
      <HeroScene />

      <div className="relative z-10 w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`brutal-border rounded-2xl sm:rounded-3xl p-4 xs:p-6 md:p-10 shadow-brutal-xl relative overflow-hidden transition-colors ${
            isNightMode
              ? 'bg-[#17181B] text-[#ECECEC] border-[#3A3A3A]'
              : 'bg-[#FFFAEF] text-[#141111] border-[#141111]'
          }`}
        >
          {/* Top corner technical dots & crosshairs */}
          <span className={`absolute top-2 xs:top-3 left-2 xs:left-3 font-mono text-[8px] xs:text-[10px] font-bold hidden 2xs:block ${isNightMode ? 'text-[#C8A94D]/60' : 'text-[#141111]/40'}`}>
            ⌖ 01.A // {isNightMode ? 'NIGHT_WORKSHOP' : 'BUILDER_OS'}
          </span>
          <span className={`absolute top-2 xs:top-3 right-2 xs:right-3 font-mono text-[8px] xs:text-[10px] font-bold hidden 2xs:block ${isNightMode ? 'text-[#C8A94D]/60' : 'text-[#141111]/40'}`}>
            REV 4.2 ⌖
          </span>

          {/* Section 01 Heading with DYMO Label */}
          <div className={`flex flex-wrap items-center justify-between gap-2.5 mb-6 md:mb-8 border-b-2 pb-3 ${isNightMode ? 'border-[#3A3A3A]' : 'border-[#141111]'}`}>
            <div className="flex flex-wrap items-center gap-2 xs:gap-3">
              <span className={`px-2.5 xs:px-3 py-1 brutal-border-sm font-mono text-[10px] xs:text-xs font-extrabold uppercase tracking-wider ${
                isNightMode ? 'bg-[#C8A94D] text-[#0F1012] border-[#3A3A3A]' : 'bg-[#141111] text-[#FFFAEF]'
              }`}>
                SECTION // 01
              </span>
              <h2 className={`font-grotesk text-[11px] xs:text-xs md:text-sm font-bold uppercase tracking-widest ${isNightMode ? 'text-[#9A9A9A]' : 'text-[#141111]/80'}`}>
                {isNightMode ? 'TACTICAL ID & MISSION CONTROL' : 'Profile & Overview Workbench'}
              </h2>
            </div>
            <div className={`font-mono text-[9px] xs:text-[10px] font-bold flex items-center gap-1.5 xs:gap-2 ${isNightMode ? 'text-[#C8A94D]' : 'text-[#141111]/70'}`}>
              <span className="w-2 h-2 rounded-full bg-[#6BD26B] animate-led" />
              STATUS: {isNightMode ? 'NIGHT SHIFT CLEARANCE // LEVEL 04' : 'ONLINE // VERIFIED'}
            </div>
          </div>

          {/* Main Hero Header: Builder ID Card + Details */}
          <div className="flex flex-col lg:flex-row items-center gap-6 xs:gap-8 md:gap-12 mb-8 xs:mb-12 relative">
            {/* Paperclip / Metal clip graphic top */}
            <div className="absolute -top-6 left-4 xs:left-8 z-30 pointer-events-none hidden xs:block">
              {isNightMode ? (
                <div className="w-8 h-10 border-2 border-[#C8A94D] rounded-t-lg bg-[#202226] flex items-center justify-center font-mono text-[8px] font-bold text-[#C8A94D]">
                  CLIP
                </div>
              ) : (
                <PaperClip size={40} color="#141111" />
              )}
            </div>

            {/* Avatar Builder ID Badge Frame */}
            <motion.div
              whileHover={{ rotate: 2, scale: 1.03 }}
              className="relative shrink-0 mx-auto lg:mx-0"
            >
              <span className={`pin-marker -top-3 left-1/2 -translate-x-1/2 z-20 ${isNightMode ? 'bg-[#C8A94D]' : ''}`} />
              
              <div className={`brutal-border p-3 xs:p-4 shadow-brutal rounded-2xl rotate-[-1deg] xs:rotate-[-2deg] relative max-w-full transition-colors ${
                isNightMode ? 'bg-[#202226] border-[#3A3A3A]' : 'bg-white border-[#141111]'
              }`}>
                {/* Inspection Seal Stamp Overlay */}
                <div className="absolute -bottom-3 -right-2 xs:-bottom-4 xs:-right-4 z-20 pointer-events-none">
                  <span className={`stamp-approved text-[8px] xs:text-[10px] ${isNightMode ? 'border-[#C8A94D] text-[#C8A94D]' : ''}`}>
                    {isNightMode ? 'VERIFIED ENGINEER' : 'VERIFIED BUILDER'}
                  </span>
                </div>

                <div className={`w-36 h-36 xs:w-44 xs:h-44 md:w-52 md:h-52 overflow-hidden rounded-xl brutal-border relative aspect-square ${
                  isNightMode ? 'border-[#3A3A3A] bg-[#0F1012]' : 'border-[#141111] bg-neutral-200'
                }`}>
                  <img
                    src="/assets/avatar.jpg"
                    alt="Jagadish Sai Ram (a.k.a ZAGGU)"
                    className={`w-full h-full object-cover ${isNightMode ? 'grayscale contrast-125 brightness-90' : ''}`}
                    onError={(e) => {
                      e.currentTarget.src = 'https://api.dicebear.com/7.x/bottts/svg?seed=Zaggu';
                    }}
                  />
                  {/* Photo frame measurement overlay */}
                  <div className={`absolute bottom-1 right-2 font-mono text-[8px] px-1 rounded font-bold ${
                    isNightMode ? 'bg-[#C8A94D] text-[#0F1012]' : 'bg-[#141111] text-[#FFFAEF]'
                  }`}>
                    50x50mm
                  </div>
                </div>

                <div className={`mt-2.5 xs:mt-3 flex items-center justify-between font-mono text-[11px] xs:text-xs font-bold uppercase tracking-wider border-t pt-2 ${
                  isNightMode ? 'border-[#3A3A3A] text-[#ECECEC]' : 'border-[#141111]/20 text-[#141111]'
                }`}>
                  <span>{isNightMode ? 'NIGHT SHIFT' : "ZAGGU '26"}</span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded border ${
                    isNightMode ? 'bg-[#C8A94D] text-[#0F1012] border-[#3A3A3A]' : 'bg-[#FFD000] text-[#141111] border-[#141111]'
                  }`}>
                    ID: #0492
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Info Column */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 xs:gap-2 mb-3">
                <span className={`inline-block px-2.5 xs:px-3 py-1 brutal-border-sm text-[11px] xs:text-xs font-mono font-bold tracking-wider uppercase shadow-brutal-sm ${
                  isNightMode ? 'bg-[#6BD26B] text-[#0F1012] border-[#3A3A3A]' : 'bg-[#A8E66C] text-[#141111]'
                }`}>
                  {isNightMode ? '✷ TACTICAL PASS — CLEARANCE 04' : '✷ builder pass — 2026'}
                </span>
                <span className={`inline-block px-2 xs:px-2.5 py-1 brutal-border-sm text-[9px] xs:text-[10px] font-mono font-bold uppercase shadow-brutal-sm ${
                  isNightMode ? 'bg-[#202226] text-[#27CCF3] border-[#3A3A3A]' : 'bg-[#27CCF3] text-[#141111]'
                }`}>
                  AI SYSTEM ARCHITECT
                </span>
              </div>

              <h1 className={`font-grotesk text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 leading-none ${
                isNightMode ? 'text-[#ECECEC]' : 'text-[#141111]'
              }`}>
                Jagadish Sai Ram
              </h1>
              <div className={`inline-block px-2.5 xs:px-3 py-1 brutal-border-sm font-mono text-xs xs:text-sm md:text-base font-extrabold rounded-lg mb-3 xs:mb-4 shadow-brutal-sm ${
                isNightMode ? 'bg-[#D8B04C] text-[#0F1012] border-[#3A3A3A]' : 'bg-[#FFD000] text-[#141111]'
              }`}>
                (a.k.a ZAGGU)
              </div>
              <p className={`font-sans text-sm xs:text-base md:text-xl font-medium leading-relaxed mb-4 max-w-2xl ${
                isNightMode ? 'text-[#9A9A9A]' : 'text-[#141111]/90'
              }`}>
                Building intelligent products that solve real-world problems through AI, automation, and thoughtful engineering.
              </p>

              <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-2 xs:gap-4 font-mono text-[11px] xs:text-xs font-bold brutal-border-sm p-2.5 xs:p-3 rounded-xl ${
                isNightMode ? 'bg-[#202226] border-[#3A3A3A] text-[#ECECEC]' : 'bg-[#141111]/5 text-[#141111]/80'
              }`}>
                <span>📍 Vijayawada, India</span>
                <span>🕒 UTC+5:30</span>
                <span className={isNightMode ? 'text-[#D8B04C]' : 'text-[#FF6B8B]'}>🚀 Projects Shipped: 10+</span>
              </div>
            </div>
          </div>

          {/* Proof of Work & Sticker Board / Asset Rack */}
          <div className={`brutal-border rounded-2xl p-4 xs:p-6 relative shadow-brutal transition-colors ${
            isNightMode ? 'bg-[#202226] border-[#3A3A3A]' : 'bg-white border-[#141111]'
          }`}>
            <span className={`absolute -top-3 left-4 xs:left-6 px-2.5 xs:px-3 py-0.5 brutal-border-sm font-mono text-[10px] xs:text-xs font-bold uppercase tracking-wider ${
              isNightMode ? 'bg-[#C8A94D] text-[#0F1012] border-[#3A3A3A]' : 'bg-[#FFD000] text-[#141111]'
            }`}>
              {isNightMode ? 'EQUIPMENT & ASSET RACK' : 'proof of work & stickers'}
            </span>

            <div className="grid grid-cols-2 xs:grid-cols-4 lg:grid-cols-8 gap-2.5 xs:gap-3 pt-3 xs:pt-4">
              {/* 1. Resume PDF */}
              <motion.a
                href={SOCIAL_LINKS.resumePdf}
                download="Zaggu_Resume.pdf"
                onClick={() => playFx('click')}
                whileHover={{ scale: 1.08, rotate: -4 }}
                className={`brutal-border p-2.5 xs:p-3 shadow-brutal-sm rounded-xl flex flex-col items-center justify-center gap-1 transition-colors group cursor-pointer ${
                  isNightMode ? 'bg-[#17181B] border-[#3A3A3A] hover:bg-[#C8A94D] hover:text-[#0F1012]' : 'bg-white hover:bg-[#FFD000]'
                }`}
              >
                <span className="font-mono text-[11px] xs:text-xs font-bold uppercase">Resume</span>
                <span className={`px-1.5 xs:px-2 py-0.5 font-mono text-[9px] xs:text-[10px] font-bold rounded ${
                  isNightMode ? 'bg-[#C8A94D] text-[#0F1012]' : 'bg-[#141111] text-[#FFFAEF]'
                }`}>
                  PDF ↓
                </span>
              </motion.a>

              {/* 2. GitHub */}
              <motion.a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => playFx('click')}
                whileHover={{ scale: 1.08, rotate: 5 }}
                className={`brutal-border p-2.5 xs:p-3 shadow-brutal-sm rounded-xl flex flex-col items-center justify-center gap-1 transition-colors cursor-pointer ${
                  isNightMode ? 'bg-[#27CCF3] text-[#0F1012] border-[#3A3A3A] hover:bg-[#17181B] hover:text-[#ECECEC]' : 'bg-[#27CCF3] hover:bg-white'
                }`}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 xs:w-6 xs:h-6 fill-current">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                <span className="font-mono text-[9px] xs:text-[10px] font-bold">GitHub</span>
              </motion.a>

              {/* 3. Amrita Shield */}
              <motion.div
                whileHover={{ scale: 1.08, rotate: -3 }}
                className={`brutal-border p-2 shadow-brutal-sm rounded-xl flex flex-col items-center justify-center text-center ${
                  isNightMode ? 'bg-[#17181B] border-[#3A3A3A]' : 'bg-white border-[#141111]'
                }`}
              >
                <span className="font-grotesk font-extrabold text-[11px] xs:text-xs">AMRITA</span>
                <span className={`font-mono text-[8px] xs:text-[9px] font-bold ${isNightMode ? 'text-[#C8A94D]' : 'text-[#141111]/80'}`}>B.TECH CSE</span>
                <span className="font-mono text-[8px] text-[#9A9A9A]">2027</span>
              </motion.div>

              {/* 4. MLSA Badge */}
              <motion.div
                whileHover={{ scale: 1.08, rotate: 4 }}
                className={`brutal-border p-2 shadow-brutal-sm rounded-xl flex flex-col items-center justify-center text-center ${
                  isNightMode ? 'bg-[#202226] border-[#3A3A3A] text-[#27CCF3]' : 'bg-[#27CCF3] text-white'
                }`}
              >
                <span className="font-grotesk font-bold text-[8px] xs:text-[9px] leading-tight">MICROSOFT</span>
                <span className="font-grotesk font-bold text-[8px] xs:text-[9px] leading-tight">LEARN SA</span>
                <span className={`mt-0.5 px-1 brutal-border-sm font-mono text-[7px] font-bold ${
                  isNightMode ? 'bg-[#C8A94D] text-[#0F1012] border-[#3A3A3A]' : 'bg-[#FFFAEF] text-[#141111]'
                }`}>HEAD EXEC</span>
              </motion.div>

              {/* 5. LinkedIn */}
              <motion.a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => playFx('click')}
                whileHover={{ scale: 1.08, rotate: -5 }}
                className={`brutal-border p-2.5 xs:p-3 shadow-brutal-sm rounded-xl flex flex-col items-center justify-center gap-1 transition-colors cursor-pointer ${
                  isNightMode ? 'bg-[#17181B] border-[#3A3A3A] hover:bg-[#D8B04C] hover:text-[#0F1012]' : 'bg-[#C0A0FF] hover:bg-white'
                }`}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 xs:w-5 xs:h-5 fill-current">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="font-mono text-[9px] xs:text-[10px] font-bold">LinkedIn</span>
              </motion.a>

              {/* 6. Twitter / X */}
              <motion.a
                href={SOCIAL_LINKS.x}
                target="_blank"
                rel="noreferrer"
                onClick={() => playFx('click')}
                whileHover={{ scale: 1.08, rotate: 3 }}
                className={`brutal-border p-2.5 xs:p-3 shadow-brutal-sm rounded-xl flex flex-col items-center justify-center gap-1 transition-colors cursor-pointer ${
                  isNightMode ? 'bg-[#D85B5B] text-white border-[#3A3A3A] hover:bg-[#17181B]' : 'bg-[#FF6B8B] hover:bg-white'
                }`}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 xs:w-5 xs:h-5 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="font-mono text-[9px] xs:text-[10px] font-bold">X.com</span>
              </motion.a>

              {/* 7. Instagram */}
              <motion.a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                onClick={() => playFx('click')}
                whileHover={{ scale: 1.08, rotate: -4 }}
                className={`brutal-border p-2.5 xs:p-3 shadow-brutal-sm rounded-xl flex flex-col items-center justify-center gap-1 transition-colors cursor-pointer ${
                  isNightMode ? 'bg-[#6BD26B] text-[#0F1012] border-[#3A3A3A] hover:bg-[#17181B] hover:text-[#ECECEC]' : 'bg-[#A8E66C] hover:bg-white'
                }`}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 xs:w-5 xs:h-5 fill-current">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                <span className="font-mono text-[9px] xs:text-[10px] font-bold">Instagram</span>
              </motion.a>

              {/* 8. Night Shift / Gotham Mode Toggle Tag */}
              <motion.button
                onClick={toggleNightMode}
                whileHover={{ scale: 1.08, rotate: 6 }}
                className={`brutal-border p-2 shadow-brutal-sm rounded-xl flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${
                  isNightMode
                    ? 'bg-[#C8A94D] text-[#0F1012] border-[#3A3A3A]'
                    : 'bg-[#141111] text-[#FFD000] border-[#FFD000]'
                }`}
              >
                <span className="text-xs xs:text-sm">{isNightMode ? '⚙' : '🦇'}</span>
                <span className="font-grotesk font-extrabold text-[8px] xs:text-[9px] leading-none mt-0.5">
                  {isNightMode ? 'DAY' : 'GOTHAM'}
                </span>
                <span className="font-mono text-[7px] opacity-80">MODE</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
