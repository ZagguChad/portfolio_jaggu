'use client';

import { useState } from 'react';

interface MarqueeBannerProps {
  text: string;
  colorClass?: string;
  speedSec?: number;
}

export default function MarqueeBanner({
  text,
  colorClass = 'bg-[#27CCF3]',
  speedSec = 88,
}: MarqueeBannerProps) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className={`w-full overflow-hidden brutal-border border-x-0 py-3 ${colorClass} text-[#141111] font-mono text-sm md:text-base font-extrabold uppercase tracking-widest select-none`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex w-max whitespace-nowrap"
        style={{
          animation: `marquee ${speedSec}s linear infinite`,
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      >
        <div className="flex gap-8 px-4">
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </div>
        <div className="flex gap-8 px-4" aria-hidden="true">
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
}
