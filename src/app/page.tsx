'use client';

import Loader from '@/components/ui/Loader';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import SkillsPCB from '@/components/sections/SkillsPCB';
import RolesRadio from '@/components/sections/RolesRadio';
import WorkGrid from '@/components/sections/WorkGrid';
import ConnectChecklist from '@/components/sections/ConnectChecklist';
import Footer from '@/components/layout/Footer';
import ParallaxDecorLayer from '@/components/decor/ParallaxDecorLayer';
import BatmanEasterEgg from '@/components/ui/BatmanEasterEgg';
import TechnicalOverlayHUD from '@/components/ui/TechnicalOverlayHUD';
import NightBootSequence from '@/components/ui/NightBootSequence';
import TelemetrySidebars from '@/components/ui/TelemetrySidebars';
import TerminalConsole from '@/components/ui/TerminalConsole';
import { useNightShift } from '@/context/NightShiftContext';

export default function Home() {
  const { isNightMode } = useNightShift();

  return (
    <main className={`min-h-screen relative transition-colors duration-500 ${
      isNightMode
        ? 'bg-[#0F1012] text-[#ECECEC]'
        : 'bg-[#FFFAEF] text-[#141111]'
    }`}>
      <NightBootSequence />
      <TechnicalOverlayHUD />
      <ParallaxDecorLayer />
      <TelemetrySidebars />
      <Loader />
      <Navbar />
      <Hero />
      <SkillsPCB />
      <RolesRadio />
      <WorkGrid />
      <ConnectChecklist />
      <Footer />
      <TerminalConsole />
      <BatmanEasterEgg />
    </main>
  );
}

