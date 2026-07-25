import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/ui/SmoothScroll';
import Providers from '@/components/layout/Providers';

export const metadata: Metadata = {
  title: 'Zaggu — AI Engineer & Creative Technologist',
  description:
    'Building intelligent products that solve real-world problems through AI, automation, and thoughtful engineering.',
  openGraph: {
    title: 'Zaggu — AI Engineer & Creative Technologist',
    description:
      'Building intelligent products that solve real-world problems through AI, automation, and thoughtful engineering.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#FFFAEF] text-[#141111] selection:bg-[#FFD000] selection:text-[#141111]">
        <Providers>
          <SmoothScroll>{children}</SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}

