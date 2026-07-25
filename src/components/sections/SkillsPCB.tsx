'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MarqueeBanner from '@/components/ui/MarqueeBanner';
import { MicrochipIC, PCBTrace } from '@/components/decor';
import { useNightShift } from '@/context/NightShiftContext';

interface SkillComponent {
  id: string;
  name: string;
  category: 'IC Chip' | 'Resistor' | 'Capacitor' | 'Transistor';
  code: string;
  spec: string;
  rating: string;
  color: string;
  accentHex: string;
  description: string;
}

const SKILL_COMPONENTS: SkillComponent[] = [
  {
    id: 'ic-pytorch',
    name: 'PyTorch / ML Core',
    category: 'IC Chip',
    code: 'IC-LM358-PYT',
    spec: 'Tensor Operations & Neural Network Training',
    rating: '3.3V / 99.4% Acc',
    color: 'bg-[#FF6B8B]',
    accentHex: '#FF6B8B',
    description: 'Core engine for AI model fine-tuning, transformer embeddings, and synthetic data generation pipelines.',
  },
  {
    id: 'res-ts',
    name: 'TypeScript',
    category: 'Resistor',
    code: 'RES-10K-TS',
    spec: 'Strict Type-Safe System Logic',
    rating: '10kΩ / 0.1% Tol',
    color: 'bg-[#27CCF3]',
    accentHex: '#27CCF3',
    description: 'High-precision type validation maintaining 100% full-stack code safety across Next.js and Node microservices.',
  },
  {
    id: 'ic-next',
    name: 'Next.js 15 & React 19',
    category: 'IC Chip',
    code: 'IC-NXT-150',
    spec: 'App Router & Server Component Controller',
    rating: '60 FPS / Edge SSR',
    color: 'bg-[#FFD000]',
    accentHex: '#FFD000',
    description: 'Architecting ultra-fast web applications, SSR routing, and interactive Neo-Brutalist user interfaces.',
  },
  {
    id: 'cap-pg',
    name: 'PostgreSQL & Vector DB',
    category: 'Capacitor',
    code: 'CAP-100UF-PG',
    spec: 'Relational Data Storage & pgvector Indexing',
    rating: '450V / High Cap',
    color: 'bg-[#A8E66C]',
    accentHex: '#A8E66C',
    description: 'High-capacity relational data storage integrated with vector search embeddings for RAG AI workflows.',
  },
  {
    id: 'ic-fastapi',
    name: 'FastAPI & Python',
    category: 'IC Chip',
    code: 'IC-PY-FAST',
    spec: 'Asynchronous AI API Gateway',
    rating: 'AsyncIO / 10k req/s',
    color: 'bg-[#C0A0FF]',
    accentHex: '#C0A0FF',
    description: 'Ultra-low-latency backend microservices executing AI models and streaming real-time JSON responses.',
  },
  {
    id: 'res-cpp',
    name: 'C++ & Systems',
    category: 'Resistor',
    code: 'RES-470R-CPP',
    spec: 'Low-Level Memory & Algorithmic Optimization',
    rating: '470Ω / High Speed',
    color: 'bg-[#FFFAEF]',
    accentHex: '#141111',
    description: 'Core algorithmic problem solving, memory pointer control, and high-performance computing structures.',
  },
  {
    id: 'cap-docker',
    name: 'Docker & Microservices',
    category: 'Capacitor',
    code: 'CAP-220UF-DCK',
    spec: 'Containerization & Cloud Deployment',
    rating: 'Isolated Spec',
    color: 'bg-[#27CCF3]',
    accentHex: '#27CCF3',
    description: 'Reproducible containerization for machine learning workloads, API services, and CI/CD deployment pipelines.',
  },
  {
    id: 'trans-langchain',
    name: 'LangChain & OpenAI',
    category: 'Transistor',
    code: 'TR-2N2222-AI',
    spec: 'Autonomous Agentic Workflow Switching',
    rating: 'NPN Switching',
    color: 'bg-[#FF6B8B]',
    accentHex: '#FF6B8B',
    description: 'Building multi-step reasoning agents, custom prompt chains, tool execution loops, and structured LLM outputs.',
  },
];

export default function SkillsPCB() {
  const [selectedSkill, setSelectedSkill] = useState<SkillComponent>(SKILL_COMPONENTS[0]);
  const { isNightMode, playFx } = useNightShift();

  return (
    <section id="skills" className="relative py-16 texture-blueprint">
      <MarqueeBanner
        text={
          isNightMode
            ? "HARDWARE PCB MATRIX ⚡ COMPONENT SPECS ⚡ HARDWARE PCB MATRIX ⚡ COMPONENT SPECS ⚡"
            : "electronic components ⚡ technical skills ⚡ electronic components ⚡ technical skills ⚡"
        }
        colorClass={isNightMode ? "bg-[#6BD26B] text-[#0F1012]" : "bg-[#A8E66C]"}
      />

      <div className="w-full max-w-6xl mx-auto px-4 mt-12">
        {/* Section Heading */}
        <div className={`flex items-center gap-3 mb-8 border-b-2 pb-3 ${isNightMode ? 'border-[#3A3A3A]' : 'border-[#141111]'}`}>
          <span className={`px-3 py-1 brutal-border-sm font-mono text-xs font-extrabold uppercase tracking-wider ${
            isNightMode ? 'bg-[#C8A94D] text-[#0F1012] border-[#3A3A3A]' : 'bg-[#141111] text-[#FFFAEF]'
          }`}>
            SECTION // 02.B
          </span>
          <h2 className={`font-grotesk text-xs md:text-sm font-bold uppercase tracking-widest ${isNightMode ? 'text-[#9A9A9A]' : 'text-[#141111]/80'}`}>
            Hardware PCB & Technical Skill Matrix
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xs:gap-8 items-start">
          {/* PCB Breadboard Layout (Left Column) */}
          <div className={`lg:col-span-7 texture-pcb brutal-border rounded-2xl sm:rounded-3xl p-4 xs:p-6 md:p-8 shadow-brutal-xl relative overflow-hidden min-h-[360px] xs:min-h-[420px] flex flex-col justify-between ${
            isNightMode ? 'border-[#3A3A3A]' : 'border-[#141111]'
          }`}>
            {/* Header label */}
            <div className="flex items-center justify-between border-b border-[#A8E66C]/30 pb-3 xs:pb-4 mb-4 xs:mb-6">
              <div className="flex items-center gap-2 font-mono text-[10px] xs:text-xs text-[#A8E66C] font-bold uppercase">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6BD26B] animate-led" />
                <span>BREADBOARD CIRCUIT // MAIN BOARD</span>
              </div>
              <span className="font-mono text-[9px] xs:text-[10px] text-[#A8E66C]/70">REV 2026.1</span>
            </div>

            {/* Electronic Skill Components Grid */}
            <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-4 gap-2.5 xs:gap-3.5 my-auto relative z-10">
              {SKILL_COMPONENTS.map((comp) => {
                const isSelected = selectedSkill.id === comp.id;

                return (
                  <motion.button
                    key={comp.id}
                    onClick={() => {
                      playFx('beep');
                      setSelectedSkill(comp);
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ type: 'spring', stiffness: 420, damping: 24 }}
                    className={`p-2.5 xs:p-3.5 rounded-xl brutal-border-sm flex flex-col items-center justify-center gap-1.5 xs:gap-2 text-center transition-all cursor-pointer relative ${
                      isSelected
                        ? isNightMode
                          ? 'bg-[#C8A94D] text-[#0F1012] shadow-brutal border-[#C8A94D]'
                          : 'bg-[#FFFAEF] text-[#141111] shadow-brutal border-white ring-2 ring-[#FFD000]'
                        : 'bg-[#141111]/90 text-white hover:bg-neutral-900 border-[#A8E66C]/40'
                    }`}
                  >
                    {/* Visual icon representation */}
                    {comp.category === 'IC Chip' && (
                      <MicrochipIC size={28} label={comp.code.split('-')[1]} />
                    )}

                    {comp.category === 'Resistor' && (
                      <div className="w-8 xs:w-10 h-3.5 xs:h-4 bg-[#FFFAEF] brutal-border-sm rounded flex items-center justify-around px-0.5 xs:px-1">
                        <span className="w-1 xs:w-1.5 h-full bg-[#FF6B8B]" />
                        <span className="w-1 xs:w-1.5 h-full bg-[#FFD000]" />
                        <span className="w-1 xs:w-1.5 h-full bg-[#27CCF3]" />
                      </div>
                    )}

                    {comp.category === 'Capacitor' && (
                      <div className="w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-neutral-800 border-2 border-[#A8E66C] flex items-center justify-center font-mono text-[8px] xs:text-[9px] font-bold text-[#A8E66C]">
                        100µF
                      </div>
                    )}

                    {comp.category === 'Transistor' && (
                      <div className="w-6 h-6 xs:w-7 xs:h-7 bg-neutral-900 brutal-border-sm rounded-t-full flex items-center justify-center font-mono text-[7px] xs:text-[8px] font-bold text-[#FFD000]">
                        NPN
                      </div>
                    )}

                    <span className="font-mono text-[10px] xs:text-xs font-bold leading-tight">
                      {comp.name}
                    </span>
                    <span className="font-mono text-[7px] xs:text-[8px] opacity-70">
                      {comp.code}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Trace lines footer */}
            <div className="mt-4 xs:mt-6 pt-3 xs:pt-4 border-t border-[#A8E66C]/20 flex justify-between items-center font-mono text-[9px] xs:text-[10px] text-[#A8E66C]/60">
              <PCBTrace width={80} height={16} color="#A8E66C" />
              <span>SELECT COMPONENT TO READ DATASHEET</span>
            </div>
          </div>

          {/* Technical Component Datasheet Card (Right Column) */}
          <div className={`lg:col-span-5 brutal-border rounded-2xl sm:rounded-3xl p-4 xs:p-6 md:p-8 shadow-brutal-xl relative min-h-[360px] xs:min-h-[420px] flex flex-col justify-between transition-colors ${
            isNightMode
              ? 'bg-[#17181B] text-[#ECECEC] border-[#3A3A3A]'
              : 'bg-[#FFFAEF] text-[#141111] border-[#141111]'
          }`}>
            <div>
              {/* Header */}
              <div className={`flex flex-wrap items-center justify-between border-b-2 pb-3 mb-4 xs:mb-6 gap-2 ${
                isNightMode ? 'border-[#3A3A3A]' : 'border-[#141111]'
              }`}>
                <span className={`px-2.5 xs:px-3 py-1 brutal-border-sm font-mono text-[10px] xs:text-xs font-bold uppercase ${
                  isNightMode ? 'bg-[#C8A94D] text-[#0F1012] border-[#3A3A3A]' : 'bg-[#141111] text-[#FFFAEF]'
                }`}>
                  DATASHEET // {selectedSkill.code}
                </span>
                <span className={`font-mono text-[10px] xs:text-xs font-bold uppercase px-2 py-0.5 brutal-border-sm ${
                  isNightMode ? 'bg-[#D8B04C] text-[#0F1012] border-[#3A3A3A]' : 'bg-[#FFD000]'
                }`}>
                  {selectedSkill.category}
                </span>
              </div>

              {/* Title & Spec */}
              <h3 className={`font-grotesk text-xl xs:text-2xl md:text-3xl font-extrabold mb-1 ${
                isNightMode ? 'text-[#ECECEC]' : 'text-[#141111]'
              }`}>
                {selectedSkill.name}
              </h3>
              <p className={`font-mono text-[11px] xs:text-xs font-bold mb-3 xs:mb-4 ${
                isNightMode ? 'text-[#C8A94D]' : 'text-[#141111]/70'
              }`}>
                SPECIFICATION: {selectedSkill.spec}
              </p>

              {/* Rating badge */}
              <div className={`inline-block px-2.5 xs:px-3 py-1 brutal-border-sm font-mono text-[11px] xs:text-xs font-bold mb-4 xs:mb-6 shadow-brutal-sm ${
                isNightMode ? 'bg-[#202226] text-[#ECECEC] border-[#3A3A3A]' : 'bg-white text-[#141111]'
              }`}>
                ⚡ OPERATING RATING: <span className={isNightMode ? 'text-[#6BD26B]' : 'text-[#FF6B8B]'}>{selectedSkill.rating}</span>
              </div>

              {/* Description */}
              <div className={`brutal-border rounded-2xl p-3.5 xs:p-4 shadow-brutal-sm mb-4 xs:mb-6 ${
                isNightMode ? 'bg-[#202226] border-[#3A3A3A]' : 'bg-white border-[#141111]'
              }`}>
                <span className={`font-mono text-[9px] xs:text-[10px] font-bold uppercase block mb-1 ${
                  isNightMode ? 'text-[#9A9A9A]' : 'text-[#141111]/50'
                }`}>
                  // ENGINEERING APPLICATION NOTE
                </span>
                <p className={`font-sans text-xs xs:text-sm font-medium leading-relaxed ${
                  isNightMode ? 'text-[#ECECEC]' : 'text-[#141111]'
                }`}>
                  {selectedSkill.description}
                </p>
              </div>
            </div>

            {/* Verified Footer */}
            <div className={`pt-3 xs:pt-4 border-t-2 flex justify-between items-center font-mono text-[11px] xs:text-xs font-bold uppercase ${
              isNightMode ? 'border-[#3A3A3A] text-[#9A9A9A]' : 'border-[#141111] text-[#141111]/80'
            }`}>
              <span>CALIBRATED: 100% OK</span>
              <span className={`px-2 py-0.5 brutal-border-sm rounded text-[9px] xs:text-[10px] ${
                isNightMode ? 'bg-[#6BD26B] text-[#0F1012] border-[#3A3A3A]' : 'bg-[#A8E66C] text-[#141111]'
              }`}>
                PASSED TEST
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
