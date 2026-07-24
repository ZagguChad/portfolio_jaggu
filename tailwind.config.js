/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '2xs': '360px',
        'xs': '480px',
      },
      colors: {
        cream: '#FFFAEF',
        dark: '#141111',
        'brand-cyan': '#27CCF3',
        'brand-lime': '#A8E66C',
        'brand-yellow': '#FFD000',
        'brand-pink': '#FF6B8B',
        'brand-lavender': '#C0A0FF',
      },
      fontFamily: {
        grotesk: ['Space Grotesk', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        brutal: '4px 4px 0px #141111',
        'brutal-lg': '6px 6px 0px #141111',
        'brutal-xl': '8px 8px 0px #141111',
        'brutal-sm': '2px 2px 0px #141111',
      },
      animation: {
        'marquee-slow': 'marquee 88s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
