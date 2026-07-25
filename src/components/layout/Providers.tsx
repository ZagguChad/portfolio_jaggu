'use client';

import { NightShiftProvider } from '@/context/NightShiftContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <NightShiftProvider>{children}</NightShiftProvider>;
}
