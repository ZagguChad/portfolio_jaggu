'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('top');

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
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const targetPos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <nav className="pointer-events-auto flex items-center gap-1.5 p-1.5 bg-[#FFFAEF]/90 backdrop-blur-md brutal-border rounded-full shadow-brutal text-sm font-mono font-bold select-none">
        <button
          onClick={() => scrollTo('top')}
          className={`w-9 h-9 flex items-center justify-center rounded-full transition-all brutal-border-sm ${
            activeSection === 'top'
              ? 'bg-[#FFD000] text-[#141111]'
              : 'bg-white hover:bg-neutral-100 text-[#141111]'
          }`}
          aria-label="Back to top"
        >
          ツ
        </button>

        <button
          onClick={() => scrollTo('roles')}
          className={`px-4 py-1.5 rounded-full transition-all brutal-border-sm uppercase tracking-wider ${
            activeSection === 'roles'
              ? 'bg-[#27CCF3] text-[#141111]'
              : 'bg-white hover:bg-neutral-100 text-[#141111]'
          }`}
        >
          roles
        </button>

        <button
          onClick={() => scrollTo('work')}
          className={`px-4 py-1.5 rounded-full transition-all brutal-border-sm uppercase tracking-wider ${
            activeSection === 'work'
              ? 'bg-[#FFD000] text-[#141111]'
              : 'bg-white hover:bg-neutral-100 text-[#141111]'
          }`}
        >
          work
        </button>

        <button
          onClick={() => scrollTo('connect')}
          className={`px-4 py-1.5 rounded-full transition-all brutal-border-sm uppercase tracking-wider ${
            activeSection === 'connect'
              ? 'bg-[#FF6B8B] text-[#141111]'
              : 'bg-white hover:bg-neutral-100 text-[#141111]'
          }`}
        >
          connect
        </button>
      </nav>
    </header>
  );
}
