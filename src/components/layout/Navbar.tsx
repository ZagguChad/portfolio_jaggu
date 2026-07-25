'use client';

import { useState, useEffect } from 'react';
import { useNightShift } from '@/context/NightShiftContext';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('top');
  const [currentTime, setCurrentTime] = useState('');
  const { isNightMode, toggleNightMode, soundEnabled, toggleSound, playFx } = useNightShift();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'roles', 'work', 'connect'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    playFx('click');
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const targetPos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex flex-col items-center pointer-events-none px-2 sm:px-4 gap-2">
      {/* Top Navigation Capsule Bar */}
      <nav
        className={`pointer-events-auto flex items-center gap-1.5 sm:gap-2 p-1.5 backdrop-blur-md brutal-border rounded-full shadow-brutal text-xs sm:text-sm font-mono font-bold select-none max-w-full overflow-x-auto no-scrollbar transition-colors ${
          isNightMode
            ? 'bg-[#17181B]/95 text-[#ECECEC] border-[#3A3A3A]'
            : 'bg-[#FFFAEF]/90 text-[#141111] border-[#141111]'
        }`}
      >
        <button
          onClick={() => scrollTo('top')}
          className={`w-7 h-7 sm:w-9 sm:h-9 shrink-0 flex items-center justify-center rounded-full transition-all brutal-border-sm ${
            activeSection === 'top'
              ? isNightMode
                ? 'bg-[#C8A94D] text-[#0F1012]'
                : 'bg-[#FFD000] text-[#141111]'
              : isNightMode
              ? 'bg-[#202226] hover:bg-[#3A3A3A] text-[#ECECEC]'
              : 'bg-white hover:bg-neutral-100 text-[#141111]'
          }`}
          aria-label="Back to top"
        >
          {isNightMode ? '⚙' : 'ツ'}
        </button>

        <button
          onClick={() => scrollTo('roles')}
          className={`px-2.5 xs:px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full transition-all brutal-border-sm uppercase tracking-wider text-[10px] xs:text-xs sm:text-sm shrink-0 ${
            activeSection === 'roles'
              ? isNightMode
                ? 'bg-[#27CCF3] text-[#0F1012]'
                : 'bg-[#27CCF3] text-[#141111]'
              : isNightMode
              ? 'bg-[#202226] hover:bg-[#3A3A3A] text-[#ECECEC]'
              : 'bg-white hover:bg-neutral-100 text-[#141111]'
          }`}
        >
          {isNightMode ? 'TRANSMITTER' : 'roles'}
        </button>

        <button
          onClick={() => scrollTo('work')}
          className={`px-2.5 xs:px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full transition-all brutal-border-sm uppercase tracking-wider text-[10px] xs:text-xs sm:text-sm shrink-0 ${
            activeSection === 'work'
              ? isNightMode
                ? 'bg-[#D8B04C] text-[#0F1012]'
                : 'bg-[#FFD000] text-[#141111]'
              : isNightMode
              ? 'bg-[#202226] hover:bg-[#3A3A3A] text-[#ECECEC]'
              : 'bg-white hover:bg-neutral-100 text-[#141111]'
          }`}
        >
          {isNightMode ? 'MISSIONS' : 'work'}
        </button>

        <button
          onClick={() => scrollTo('connect')}
          className={`px-2.5 xs:px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full transition-all brutal-border-sm uppercase tracking-wider text-[10px] xs:text-xs sm:text-sm shrink-0 ${
            activeSection === 'connect'
              ? isNightMode
                ? 'bg-[#D85B5B] text-white'
                : 'bg-[#FF6B8B] text-[#141111]'
              : isNightMode
              ? 'bg-[#202226] hover:bg-[#3A3A3A] text-[#ECECEC]'
              : 'bg-white hover:bg-neutral-100 text-[#141111]'
          }`}
        >
          {isNightMode ? 'COMMS' : 'connect'}
        </button>

        {/* Night Shift Workshop Mode Switch */}
        <button
          onClick={toggleNightMode}
          className={`px-3 py-1 sm:py-1.5 rounded-full transition-all brutal-border-sm font-mono text-[10px] xs:text-xs font-extrabold uppercase shrink-0 flex items-center gap-1.5 cursor-pointer ${
            isNightMode
              ? 'bg-[#C8A94D] text-[#0F1012] shadow-[0_0_12px_rgba(200,169,77,0.4)]'
              : 'bg-[#141111] text-[#FFD000] hover:bg-[#2A2A2A]'
          }`}
          title={isNightMode ? 'Switch to Builder OS (Day Mode)' : 'Switch to Night Workshop (Gotham Mode)'}
        >
          <span>{isNightMode ? '🌙 NIGHT WORKSHOP' : '☀️ BUILDER OS'}</span>
        </button>

        {/* Audio Mute Switch */}
        <button
          onClick={toggleSound}
          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full brutal-border-sm flex items-center justify-center font-mono text-[10px] sm:text-xs shrink-0 ${
            soundEnabled
              ? isNightMode
                ? 'bg-[#202226] text-[#6BD26B]'
                : 'bg-white text-[#141111]'
              : 'bg-neutral-700 text-neutral-400 line-through'
          }`}
          title={soundEnabled ? 'Mute UI Sound FX' : 'Enable UI Sound FX'}
        >
          {soundEnabled ? '🔊' : '🔇'}
        </button>
      </nav>

      {/* Telemetry Status Line (Night Mode) */}
      {isNightMode && (
        <div className="pointer-events-auto hidden md:flex items-center gap-4 px-3 py-1 bg-[#17181B]/90 backdrop-blur-sm brutal-border-sm border-[#3A3A3A] rounded-full text-[9px] font-mono font-bold text-[#9A9A9A] uppercase shadow-brutal-sm select-none">
          <span className="flex items-center gap-1.5 text-[#6BD26B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6BD26B] animate-led" />
            MISSION CONTROL
          </span>
          <span>•</span>
          <span>NIGHT SHIFT ACTIVE</span>
          <span>•</span>
          <span>TIME: <span className="text-[#C8A94D]">{currentTime || '00:00:00'}</span></span>
          <span>•</span>
          <span>CPU: <span className="text-[#27CCF3]">12%</span></span>
          <span>•</span>
          <span>GPU: <span className="text-[#D8B04C]">24%</span></span>
          <span>•</span>
          <span>BUILD: <span className="text-[#6BD26B]">OK</span></span>
        </div>
      )}
    </header>
  );
}
