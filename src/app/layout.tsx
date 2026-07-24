import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/layout/SmoothScroll';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Zaggu — AI Engineer & Creative Technologist',
  description:
    'Portfolio of Jagadish Sai Ram Kancharla Palli (Zaggu) — AI/ML, Computer Vision, Systems Engineering, and Cinematography.',
  openGraph: {
    title: 'Zaggu — AI Engineer & Creative Technologist',
    description:
      'Building intelligent products through AI, automation, and thoughtful engineering.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#0a0a0c] text-white`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
