'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface MechanicalScrollAreaProps {
  children: React.ReactNode;
  className?: string;
  showTrack?: boolean;
}

export default function MechanicalScrollArea({
  children,
  className = '',
  showTrack = false,
}: MechanicalScrollAreaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const targetScrollTop = useRef(0);
  const currentScrollTop = useRef(0);
  const maxScrollTop = useRef(0);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [trackHeight, setTrackHeight] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(64);

  // Update scroll metrics
  const updateMetrics = useCallback(() => {
    if (!viewportRef.current) return;
    const viewport = viewportRef.current;

    const contentHeight = viewport.scrollHeight;
    const visibleHeight = viewport.clientHeight;
    const maxScroll = Math.max(0, contentHeight - visibleHeight);
    maxScrollTop.current = maxScroll;

    if (trackRef.current) {
      const tHeight = trackRef.current.clientHeight;
      setTrackHeight(tHeight);

      if (contentHeight > 0) {
        const calculatedThumbH = Math.max(
          56,
          Math.min(100, (visibleHeight / contentHeight) * tHeight)
        );
        setThumbHeight(calculatedThumbH);
      }
    }
  }, []);

  // RAF Smooth Interpolation Loop
  useEffect(() => {
    updateMetrics();

    let rafId: number;
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      // Clamp target
      targetScrollTop.current = Math.max(
        0,
        Math.min(maxScrollTop.current, targetScrollTop.current)
      );

      // Lerp smooth movement
      currentScrollTop.current = lerp(
        currentScrollTop.current,
        targetScrollTop.current,
        0.18
      );

      if (viewportRef.current) {
        viewportRef.current.scrollTop = currentScrollTop.current;
      }

      // Update progress ratio
      const ratio =
        maxScrollTop.current > 0
          ? currentScrollTop.current / maxScrollTop.current
          : 0;
      setScrollProgress(ratio);

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    const handleResize = () => {
      updateMetrics();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
    };
  }, [updateMetrics]);

  // Touchpad & Wheel Event Fix (Non-passive listener with stopPropagation)
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const handleWheel = (e: WheelEvent) => {
      e.stopPropagation();
      e.preventDefault();

      let delta = e.deltaY;
      if (e.deltaMode === 1) delta *= 32; // lines
      else if (e.deltaMode === 2) delta *= window.innerHeight; // pages

      targetScrollTop.current = Math.max(
        0,
        Math.min(maxScrollTop.current, targetScrollTop.current + delta)
      );
    };

    // Native scroll sync
    const handleNativeScroll = () => {
      if (isDragging) return;
      if (
        Math.abs(viewport.scrollTop - currentScrollTop.current) > 20
      ) {
        currentScrollTop.current = viewport.scrollTop;
        targetScrollTop.current = viewport.scrollTop;
      }
    };

    viewport.addEventListener('wheel', handleWheel, { passive: false });
    viewport.addEventListener('scroll', handleNativeScroll, { passive: true });

    return () => {
      viewport.removeEventListener('wheel', handleWheel);
      viewport.removeEventListener('scroll', handleNativeScroll);
    };
  }, [isDragging]);

  // Touch Device Swipe Gestures
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    let startY = 0;
    let startScrollTop = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        startY = e.touches[0].clientY;
        startScrollTop = targetScrollTop.current;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        const deltaY = startY - e.touches[0].clientY;
        targetScrollTop.current = Math.max(
          0,
          Math.min(maxScrollTop.current, startScrollTop + deltaY)
        );
      }
    };

    viewport.addEventListener('touchstart', handleTouchStart, { passive: true });
    viewport.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      viewport.removeEventListener('touchstart', handleTouchStart);
      viewport.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  // Keyboard Navigation Support
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!viewportRef.current) return;
    const pageStep = viewportRef.current.clientHeight * 0.8;

    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        targetScrollTop.current = Math.max(0, targetScrollTop.current - 50);
        break;
      case 'ArrowDown':
        e.preventDefault();
        targetScrollTop.current = Math.min(
          maxScrollTop.current,
          targetScrollTop.current + 50
        );
        break;
      case 'PageUp':
        e.preventDefault();
        targetScrollTop.current = Math.max(0, targetScrollTop.current - pageStep);
        break;
      case 'PageDown':
      case ' ':
        e.preventDefault();
        if (e.shiftKey) {
          targetScrollTop.current = Math.max(0, targetScrollTop.current - pageStep);
        } else {
          targetScrollTop.current = Math.min(
            maxScrollTop.current,
            targetScrollTop.current + pageStep
          );
        }
        break;
      case 'Home':
        e.preventDefault();
        targetScrollTop.current = 0;
        break;
      case 'End':
        e.preventDefault();
        targetScrollTop.current = maxScrollTop.current;
        break;
    }
  };

  // Pointer Handler for Mini Cassette Thumb (when track is visible)
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !trackRef.current) return;
    const trackRect = trackRef.current.getBoundingClientRect();
    const availableTrack = trackRect.height - thumbHeight;
    if (availableTrack <= 0) return;

    const relativeY = e.clientY - trackRect.top - thumbHeight / 2;
    const ratio = Math.max(0, Math.min(1, relativeY / availableTrack));

    const newScroll = ratio * maxScrollTop.current;
    targetScrollTop.current = newScroll;
    currentScrollTop.current = newScroll;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      setIsDragging(false);
    }
  };

  const availableTrackSpace = Math.max(0, trackHeight - thumbHeight);
  const thumbY = scrollProgress * availableTrackSpace;

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={`relative flex items-stretch outline-none ${className}`}
    >
      {/* Scrollable Content Viewport (Default scrollbar hidden via no-scrollbar) */}
      <div
        ref={viewportRef}
        className={`no-scrollbar flex-1 overflow-y-scroll max-h-[75vh] md:max-h-[78vh] ${
          showTrack ? 'pr-4' : 'pr-0'
        }`}
      >
        {children}
      </div>

      {/* Mechanical Slide Bar Track (only rendered if showTrack is true) */}
      {showTrack && (
        <div
          ref={trackRef}
          className="w-10 md:w-12 bg-[#FFFAEF] brutal-border-sm rounded-xl relative shrink-0 select-none overflow-hidden flex flex-col justify-between items-center py-2 shadow-inner"
        >
          {/* Top Screw Head */}
          <div className="w-3 h-3 rounded-full brutal-border-sm bg-neutral-200 flex items-center justify-center font-mono text-[8px] font-bold text-[#141111] z-10">
            +
          </div>

          {/* Engraved Ruler Ticks */}
          <div className="absolute inset-y-6 inset-x-0 flex flex-col justify-between items-center opacity-30 pointer-events-none">
            {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((tick) => (
              <div key={tick} className="w-full flex items-center justify-between px-1">
                <span className="w-2 h-0.5 bg-[#141111]" />
                <span className="font-mono text-[7px] font-bold">{tick}%</span>
                <span className="w-2 h-0.5 bg-[#141111]" />
              </div>
            ))}
          </div>

          {/* Cassette Tape Thumb */}
          <motion.div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            style={{
              transform: `translate3d(0, ${thumbY}px, 0)`,
              height: `${thumbHeight}px`,
            }}
            animate={{
              scale: isDragging ? 1.08 : 1,
              rotate: isDragging ? 1.5 : 0,
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className={`absolute top-2 left-1 right-1 bg-[#FFD000] brutal-border-sm rounded-lg shadow-brutal-sm cursor-grab active:cursor-grabbing z-20 flex flex-col justify-between p-1 select-none ${
              isDragging ? 'shadow-brutal bg-[#A8E66C]' : 'hover:bg-[#27CCF3]'
            }`}
          >
            <div className="font-mono text-[7px] font-extrabold text-[#141111] text-center uppercase tracking-wider truncate border-b border-[#141111]/30 pb-0.5">
              TAPE // REV 1.0
            </div>

            <div className="flex items-center justify-around my-auto">
              <div
                className="w-3.5 h-3.5 rounded-full border border-[#141111] bg-white flex items-center justify-center"
                style={{
                  transform: `rotate(${currentScrollTop.current * 0.6}deg)`,
                }}
              >
                <span className="w-1 h-1 bg-[#FF6B8B] rounded-full" />
              </div>
              <div
                className="w-3.5 h-3.5 rounded-full border border-[#141111] bg-white flex items-center justify-center"
                style={{
                  transform: `rotate(${currentScrollTop.current * 0.6}deg)`,
                }}
              >
                <span className="w-1 h-1 bg-[#27CCF3] rounded-full" />
              </div>
            </div>

            <div className="w-full flex justify-center gap-0.5 pt-0.5 border-t border-[#141111]/30">
              <span className="w-1 h-1 rounded-full bg-[#141111]" />
              <span className="w-1 h-1 rounded-full bg-[#141111]" />
              <span className="w-1 h-1 rounded-full bg-[#141111]" />
            </div>
          </motion.div>

          {/* Bottom Screw Head */}
          <div className="w-3 h-3 rounded-full brutal-border-sm bg-neutral-200 flex items-center justify-center font-mono text-[8px] font-bold text-[#141111] z-10">
            +
          </div>
        </div>
      )}
    </div>
  );
}
