'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { soundFx } from '@/utils/soundEffects';

interface NightShiftContextType {
  isNightMode: boolean;
  soundEnabled: boolean;
  isBooting: boolean;
  toggleNightMode: () => void;
  toggleSound: () => void;
  playFx: (type: 'click' | 'toggle' | 'beep' | 'radio' | 'boot') => void;
}

const NightShiftContext = createContext<NightShiftContextType | undefined>(undefined);

export function NightShiftProvider({ children }: { children: React.ReactNode }) {
  const [isNightMode, setIsNightMode] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isBooting, setIsBooting] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    // Load saved preferences
    const savedNight = localStorage.getItem('night-workshop-active');
    const savedSound = localStorage.getItem('night-workshop-sound');

    if (savedNight === 'true') {
      setIsNightMode(true);
      document.documentElement.classList.add('night-workshop');
    }

    if (savedSound === 'false') {
      setSoundEnabled(false);
      soundFx.enabled = false;
    }
  }, []);

  const toggleNightMode = () => {
    const nextState = !isNightMode;
    setIsNightMode(nextState);
    localStorage.setItem('night-workshop-active', String(nextState));

    if (nextState) {
      document.documentElement.classList.add('night-workshop');
      setIsBooting(true);
      if (soundEnabled) {
        soundFx.playBootSound();
      }
      setTimeout(() => {
        setIsBooting(false);
      }, 1600);
    } else {
      document.documentElement.classList.remove('night-workshop');
      if (soundEnabled) {
        soundFx.playToggle(false);
      }
    }
  };

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    soundFx.enabled = nextState;
    localStorage.setItem('night-workshop-sound', String(nextState));
    if (nextState) {
      soundFx.playClick();
    }
  };

  const playFx = (type: 'click' | 'toggle' | 'beep' | 'radio' | 'boot') => {
    if (!soundEnabled) return;
    switch (type) {
      case 'click':
        soundFx.playClick();
        break;
      case 'toggle':
        soundFx.playToggle(true);
        break;
      case 'beep':
        soundFx.playBeep();
        break;
      case 'radio':
        soundFx.playRadioStatic();
        break;
      case 'boot':
        soundFx.playBootSound();
        break;
    }
  };

  return (
    <NightShiftContext.Provider
      value={{
        isNightMode: mounted ? isNightMode : false,
        soundEnabled,
        isBooting,
        toggleNightMode,
        toggleSound,
        playFx,
      }}
    >
      {children}
    </NightShiftContext.Provider>
  );
}

export function useNightShift() {
  const context = useContext(NightShiftContext);
  if (!context) {
    throw new Error('useNightShift must be used within a NightShiftProvider');
  }
  return context;
}
