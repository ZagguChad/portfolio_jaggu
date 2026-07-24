'use client';

import React from 'react';
import Preloader from '@/components/ui/Preloader';
import BackgroundCanvas from '@/components/3d/BackgroundCanvas';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import CinematicVaultSection from '@/components/sections/CinematicVaultSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TimelineSection from '@/components/sections/TimelineSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ConnectSection from '@/components/sections/ConnectSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0c] text-white selection:bg-red-500 selection:text-white overflow-hidden">
      {/* d33pak.space inspired preloader */}
      <Preloader />

      {/* Interactive Three.js Background Canvas */}
      <BackgroundCanvas />

      {/* Glassmorphic Navbar */}
      <Navbar />

      {/* Page Sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <CinematicVaultSection />
      <ProjectsSection />
      <TimelineSection />
      <CertificationsSection />
      <ConnectSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
