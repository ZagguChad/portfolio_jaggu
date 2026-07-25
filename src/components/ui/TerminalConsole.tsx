'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNightShift } from '@/context/NightShiftContext';
import { SOCIAL_LINKS, WORK_PROJECTS } from '@/data/portfolioData';

interface TerminalLine {
  type: 'input' | 'output' | 'system' | 'error';
  text: string;
  color?: string;
}

export default function TerminalConsole() {
  const { isNightMode, toggleNightMode, playFx, soundEnabled, toggleSound } = useNightShift();
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'system', text: 'ZAGGU BUILDER OS // TERMINAL ENGINE v4.2', color: isNightMode ? '#C8A94D' : '#141111' },
    { type: 'system', text: 'Type "help" to view available commands.', color: isNightMode ? '#9A9A9A' : '#141111' },
  ]);
  const [isCrtFlicker, setIsCrtFlicker] = useState(true);
  const historyContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (historyContainerRef.current) {
      historyContainerRef.current.scrollTop = historyContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const rawCmd = cmdStr.trim();
    if (!rawCmd) return;

    playFx('beep');
    const cmd = rawCmd.toLowerCase();

    const newHistory: TerminalLine[] = [...history, { type: 'input', text: `❯ ${rawCmd}` }];

    switch (cmd) {
      case 'help':
        newHistory.push(
          { type: 'output', text: 'AVAILABLE COMMANDS:', color: isNightMode ? '#C8A94D' : '#141111' },
          { type: 'output', text: '  whoami    - Builder ID profile & mission status' },
          { type: 'output', text: '  projects  - List software mission files' },
          { type: 'output', text: '  skills    - View hardware PCB skill matrix' },
          { type: 'output', text: '  build     - Run simulated system build process' },
          { type: 'output', text: '  status    - View live telemetry & coffee status' },
          { type: 'output', text: '  contact   - Display secure email & social endpoints' },
          { type: 'output', text: '  resume    - Download engineering resume PDF' },
          { type: 'output', text: '  github    - Open GitHub repository catalog' },
          { type: 'output', text: '  night     - Toggle Night Workshop mode' },
          { type: 'output', text: '  sound     - Toggle mechanical UI sound effects' },
          { type: 'output', text: '  clear     - Clear terminal screen' },
          { type: 'output', text: '  coffee    - [Secret] Restores caffeine levels' },
          { type: 'output', text: '  music     - [Secret] Radio static frequency check' }
        );
        break;

      case 'whoami':
        newHistory.push(
          { type: 'output', text: 'BUILDER: Jagadish Sai Ram (a.k.a ZAGGU)' },
          { type: 'output', text: 'ROLE: AI System Architect & Full-Stack Engineer' },
          { type: 'output', text: 'LOCATION: Vijayawada, India (UTC+5:30)' },
          { type: 'output', text: 'CLEARANCE: Level 04 Verified Engineer' }
        );
        break;

      case 'projects':
        newHistory.push({ type: 'output', text: 'CLASSIFIED MISSION FILES:', color: isNightMode ? '#C8A94D' : '#141111' });
        WORK_PROJECTS.forEach((p) => {
          newHistory.push({ type: 'output', text: `  [${p.filename}] - ${p.title} (${p.subtitle})` });
        });
        break;

      case 'skills':
        newHistory.push(
          { type: 'output', text: 'BREADBOARD SKILL MATRIX:', color: isNightMode ? '#6BD26B' : '#141111' },
          { type: 'output', text: '  • PyTorch / ML Core (IC-LM358-PYT)' },
          { type: 'output', text: '  • TypeScript & Next.js 15 (IC-NXT-150)' },
          { type: 'output', text: '  • PostgreSQL & Vector DB (CAP-100UF-PG)' },
          { type: 'output', text: '  • FastAPI & Python AsyncIO (IC-PY-FAST)' },
          { type: 'output', text: '  • C++ & Low-Level Memory (RES-470R-CPP)' }
        );
        break;

      case 'build':
        newHistory.push(
          { type: 'output', text: 'BUILDING PROTOTYPE SUITE…', color: isNightMode ? '#D8B04C' : '#141111' },
          { type: 'output', text: '✔ Compiling TypeScript 5.4' },
          { type: 'output', text: '✔ Optimizing Next.js SSR bundle' },
          { type: 'output', text: '✔ Calibrating WebGL Three.js shaders' },
          { type: 'output', text: 'BUILD SUCCESSFUL — 0 ERRORS / 0 WARNINGS', color: '#6BD26B' }
        );
        break;

      case 'status':
        newHistory.push(
          { type: 'output', text: 'TELEMETRY STATUS:', color: isNightMode ? '#C8A94D' : '#141111' },
          { type: 'output', text: '  SYSTEM: 100% OPERATIONAL' },
          { type: 'output', text: '  COFFEE LEVEL: STABLE ☕' },
          { type: 'output', text: '  MODE: ' + (isNightMode ? 'NIGHT WORKSHOP (GOTHAM)' : 'BUILDER OS (DAY)') }
        );
        break;

      case 'contact':
        newHistory.push(
          { type: 'output', text: `EMAIL: ${SOCIAL_LINKS.email}` },
          { type: 'output', text: `GITHUB: ${SOCIAL_LINKS.github}` },
          { type: 'output', text: `LINKEDIN: ${SOCIAL_LINKS.linkedin}` },
          { type: 'output', text: `X / TWITTER: ${SOCIAL_LINKS.x}` }
        );
        break;

      case 'resume':
        newHistory.push({ type: 'output', text: 'Downloading resume PDF…', color: '#6BD26B' });
        if (typeof window !== 'undefined') {
          window.open(SOCIAL_LINKS.resumePdf, '_blank');
        }
        break;

      case 'github':
        newHistory.push({ type: 'output', text: 'Opening GitHub repository catalog…', color: '#27CCF3' });
        if (typeof window !== 'undefined') {
          window.open(SOCIAL_LINKS.github, '_blank');
        }
        break;

      case 'night':
        toggleNightMode();
        newHistory.push({ type: 'output', text: 'Toggling Night Workshop mode…', color: '#C8A94D' });
        break;

      case 'sound':
        toggleSound();
        newHistory.push({ type: 'output', text: `Sound effects: ${!soundEnabled ? 'ENABLED' : 'DISABLED'}`, color: '#6BD26B' });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'coffee':
        newHistory.push({ type: 'output', text: '☕ Caffeine level restored to 100%. Midnight coding session active.', color: '#D8B04C' });
        break;

      case 'music':
        playFx('radio');
        newHistory.push({ type: 'output', text: '📻 Radio static scan initiated. Tactical broadcast on 88.5 FM.', color: '#27CCF3' });
        break;

      default:
        newHistory.push({ type: 'error', text: `Command not recognized: "${rawCmd}". Type "help" for command menu.` });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div
      className={`rounded-2xl border p-4 font-mono text-xs shadow-brutal transition-colors ${
        isNightMode
          ? 'bg-[#17181B] text-[#ECECEC] border-[#3A3A3A] crt-scanlines'
          : 'bg-[#141111] text-[#FFFAEF] border-[#141111]'
      } ${isCrtFlicker && isNightMode ? 'crt-flicker' : ''}`}
    >
      {/* Top Header Bar */}
      <div className="flex justify-between items-center border-b border-neutral-700 pb-2.5 mb-3 text-[10px] uppercase font-bold tracking-wider">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#6BD26B] animate-led" />
          <span className={isNightMode ? 'text-[#C8A94D]' : 'text-[#FFD000]'}>
            TERMINAL EMULATOR // CRT-v4.2
          </span>
        </div>

        <div className="flex items-center gap-3">
          {isNightMode && (
            <button
              onClick={() => setIsCrtFlicker(!isCrtFlicker)}
              className="text-[9px] px-2 py-0.5 rounded border border-[#3A3A3A] text-[#9A9A9A] hover:text-[#ECECEC]"
            >
              CRT SCAN: {isCrtFlicker ? 'ON' : 'OFF'}
            </button>
          )}
          <span className="text-neutral-400">INPUT: READY</span>
        </div>
      </div>

      {/* History Output Lines */}
      <div ref={historyContainerRef} className="space-y-1.5 min-h-[140px] max-h-[260px] overflow-y-auto no-scrollbar pr-1">
        {history.map((line, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-1.5 ${
              line.type === 'error'
                ? 'text-[#D85B5B]'
                : line.type === 'input'
                ? 'text-[#C8A94D] font-bold'
                : ''
            }`}
            style={{ color: line.color }}
          >
            <span>{line.text}</span>
          </div>
        ))}
      </div>

      {/* Command Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCommand(inputVal);
        }}
        className="mt-3 pt-2.5 border-t border-neutral-700 flex items-center gap-2"
      >
        <span className={isNightMode ? 'text-[#D8B04C] font-bold' : 'text-[#A8E66C] font-bold'}>❯</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type command (e.g. 'help', 'whoami', 'projects', 'coffee')..."
          className="flex-1 bg-transparent text-xs font-mono font-semibold focus:outline-none placeholder:text-neutral-500"
          style={{ color: isNightMode ? '#ECECEC' : '#FFFAEF' }}
        />
        <button
          type="submit"
          className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase transition-all ${
            isNightMode
              ? 'bg-[#C8A94D] text-[#0F1012] hover:bg-[#D8B04C]'
              : 'bg-[#FFD000] text-[#141111] hover:bg-[#A8E66C]'
          }`}
        >
          EXECUTE
        </button>
      </form>
    </div>
  );
}
