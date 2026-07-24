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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFAEF] text-[#141111] relative">
      <TechnicalOverlayHUD />
      <ParallaxDecorLayer />
      <Loader />
      <Navbar />
      <Hero />
      <SkillsPCB />
      <RolesRadio />
      <WorkGrid />
      <ConnectChecklist />
      <Footer />
      <BatmanEasterEgg />
    </main>
  );
}
