'use client';

import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '@/data/portfolioData';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-[5000] transition-all duration-300 w-[94%] max-w-4xl ${
        scrolled ? 'top-3 scale-95' : 'top-5'
      }`}
    >
      <nav className="glass-panel rounded-full px-4 py-2 flex items-center justify-between shadow-2xl border border-white/10">
        {/* Home Pin Pill */}
        <a
          href="#top"
          className="w-9 h-9 rounded-full bg-gradient-to-tr from-red-500 to-amber-500 flex items-center justify-center font-bold text-white shadow-md hover:scale-105 transition-transform text-sm"
          aria-label="Back to top"
        >
          ツ
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-black font-bold shadow-lg scale-105'
                    : 'text-neutral-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name.toLowerCase()}
              </a>
            );
          })}
        </div>

        {/* Mobile Horizontal Scroll Nav */}
        <div className="flex md:hidden overflow-x-auto no-scrollbar gap-1 max-w-[220px]">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`px-2.5 py-1 rounded-full text-[11px] font-mono whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-white text-black font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {item.name.toLowerCase()}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
