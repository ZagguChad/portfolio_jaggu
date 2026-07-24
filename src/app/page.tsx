'use client';

import Loader from '@/components/ui/Loader';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import RolesRadio from '@/components/sections/RolesRadio';
import WorkGrid from '@/components/sections/WorkGrid';
import ConnectChecklist from '@/components/sections/ConnectChecklist';
import Footer from '@/components/layout/Footer';
import ParallaxDecorLayer from '@/components/decor/ParallaxDecorLayer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFAEF] text-[#141111] relative">
      <ParallaxDecorLayer />
      <Loader />
      <Navbar />
      <Hero />
      <RolesRadio />
      <WorkGrid />
      <ConnectChecklist />
      <Footer />
    </main>
  );
}

