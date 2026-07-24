'use client';

import React, { useEffect, useRef } from 'react';
import {
  BatmanLogo,
  Star,
  Sparkle,
  Arrow,
  CurvedArrow,
  PaperPlane,
  Bracket,
  AngleBracket,
  Hashtag,
  SpeechBubble,
  CodeIcon,
  Lightning,
  CursorIcon,
  Cloud,
  WavyLine,
  CircleShape,
  DashedRing,
  LocationPin,
  Gear,
  PlantOutline,
  SunflowerIcon,
  SmileIcon,
  DotPattern,
} from './index';

export default function ParallaxDecorLayer() {
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);

  const targetPos = useRef({ x: 0, y: 0, scrollY: 0 });
  const currentPos = useRef({ x: 0, y: 0, scrollY: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      targetPos.current.x = (e.clientX - centerX) / centerX;
      targetPos.current.y = (e.clientY - centerY) / centerY;
    };

    const handleScroll = () => {
      targetPos.current.scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    targetPos.current.scrollY = window.scrollY;

    let rafId: number;

    const animate = () => {
      // Lerp for butter-smooth movement
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.05;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.05;
      currentPos.current.scrollY += (targetPos.current.scrollY - currentPos.current.scrollY) * 0.08;

      const { x, y, scrollY } = currentPos.current;

      // Layer 1: Foreground - Highest movement factor
      if (layer1Ref.current) {
        const l1X = x * 35;
        const l1Y = y * 35 - scrollY * 0.08;
        layer1Ref.current.style.transform = `translate3d(${l1X.toFixed(2)}px, ${l1Y.toFixed(2)}px, 0)`;
      }

      // Layer 2: Middle - Moderate movement factor
      if (layer2Ref.current) {
        const l2X = x * 18;
        const l2Y = y * 18 - scrollY * 0.04;
        layer2Ref.current.style.transform = `translate3d(${l2X.toFixed(2)}px, ${l2Y.toFixed(2)}px, 0)`;
      }

      // Layer 3: Background - Lowest movement factor
      if (layer3Ref.current) {
        const l3X = x * 8;
        const l3Y = y * 8 - scrollY * 0.015;
        layer3Ref.current.style.transform = `translate3d(${l3X.toFixed(2)}px, ${l3Y.toFixed(2)}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* LAYER 3: Background (Circles, rings, dots, wavy lines, Batman, plant outline) */}
      <div ref={layer3Ref} className="absolute inset-0 opacity-40">
        {/* Top / Hero area background decor */}
        <div className="absolute top-[8%] left-[5%] animate-pulse-gentle">
          <CircleShape size={44} color="#FFD000" strokeWidth={2} />
        </div>
        <div className="absolute top-[14%] right-[6%] animate-drift">
          <DashedRing size={52} color="#27CCF3" strokeWidth={2} />
        </div>
        <div className="absolute top-[22%] left-[10%] opacity-30">
          <DotPattern size={48} color="#141111" />
        </div>

        {/* Roles section background decor */}
        <div className="absolute top-[38%] right-[8%] animate-spin-slow">
          <BatmanLogo size={48} color="#141111" strokeWidth={2} />
        </div>
        <div className="absolute top-[44%] left-[4%] animate-float-slow">
          <PlantOutline size={38} color="#A8E66C" strokeWidth={2} />
        </div>
        <div className="absolute top-[52%] right-[12%] animate-drift">
          <WavyLine size={90} color="#FF6B8B" strokeWidth={2} />
        </div>

        {/* Work section background decor */}
        <div className="absolute top-[68%] left-[6%] animate-pulse-gentle">
          <LocationPin size={34} color="#FFD000" strokeWidth={2} />
        </div>
        <div className="absolute top-[76%] right-[5%] opacity-30">
          <DotPattern size={56} color="#141111" />
        </div>

        {/* Connect section background decor */}
        <div className="absolute top-[88%] left-[8%] animate-float-slow">
          <DashedRing size={40} color="#C0A0FF" strokeWidth={2} />
        </div>
      </div>

      {/* LAYER 2: Middle (Brackets, hashtags, clouds, code symbols, lightning, speech bubble, gear, sunflower) */}
      <div ref={layer2Ref} className="absolute inset-0 opacity-70">
        {/* Hero Area */}
        <div className="absolute top-[6%] right-[16%] animate-float-slow">
          <Cloud size={44} color="#27CCF3" strokeWidth={2} />
        </div>
        <div className="absolute top-[18%] left-[18%] animate-wiggle">
          <Bracket size={36} color="#FF6B8B" strokeWidth={2.5} />
        </div>
        <div className="absolute top-[28%] right-[22%] animate-pulse-gentle">
          <Lightning size={32} color="#FFD000" fill="#FFD000" strokeWidth={1.5} />
        </div>

        {/* Roles Section */}
        <div className="absolute top-[36%] left-[12%] animate-drift">
          <SpeechBubble size={36} color="#C0A0FF" strokeWidth={2} />
        </div>
        <div className="absolute top-[48%] right-[16%] animate-spin-slow">
          <Gear size={38} color="#141111" strokeWidth={2} />
        </div>
        <div className="absolute top-[56%] left-[18%] animate-float-slow">
          <SunflowerIcon size={40} color="#FFD000" strokeWidth={2} />
        </div>

        {/* Work Section */}
        <div className="absolute top-[64%] right-[20%] animate-wiggle">
          <Hashtag size={34} color="#A8E66C" strokeWidth={2.5} />
        </div>
        <div className="absolute top-[74%] left-[14%] animate-pulse-gentle">
          <AngleBracket size={36} color="#27CCF3" strokeWidth={2.5} />
        </div>

        {/* Connect Section */}
        <div className="absolute top-[86%] right-[14%] animate-float-slow">
          <CodeIcon size={36} color="#FF6B8B" strokeWidth={2} />
        </div>
      </div>

      {/* LAYER 1: Foreground (Paper plane, stars, sparkles, cursor, small arrows) */}
      <div ref={layer1Ref} className="absolute inset-0 opacity-90">
        {/* Hero Area */}
        <div className="absolute top-[10%] left-[24%] animate-float-slow">
          <PaperPlane size={36} color="#141111" fill="#FFD000" strokeWidth={2} />
        </div>
        <div className="absolute top-[16%] right-[28%] animate-spin-slow">
          <Sparkle size={26} color="#FF6B8B" fill="#FF6B8B" strokeWidth={1.5} />
        </div>
        <div className="absolute top-[24%] left-[30%] animate-wiggle">
          <CursorIcon size={28} color="#141111" fill="#27CCF3" strokeWidth={2} />
        </div>

        {/* Roles Section */}
        <div className="absolute top-[40%] right-[26%] animate-pulse-gentle">
          <Star size={26} color="#FFD000" fill="#FFD000" strokeWidth={1.5} />
        </div>
        <div className="absolute top-[50%] left-[28%] animate-float-slow">
          <CurvedArrow size={42} color="#141111" strokeWidth={2.5} />
        </div>

        {/* Work Section */}
        <div className="absolute top-[66%] left-[25%] animate-spin-slow">
          <Sparkle size={28} color="#A8E66C" fill="#A8E66C" strokeWidth={1.5} />
        </div>
        <div className="absolute top-[78%] right-[24%] animate-wiggle">
          <SmileIcon size={30} color="#141111" fill="#FFD000" strokeWidth={2} />
        </div>

        {/* Connect Section */}
        <div className="absolute top-[90%] left-[22%] animate-float-slow">
          <Arrow size={32} color="#27CCF3" strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
}
