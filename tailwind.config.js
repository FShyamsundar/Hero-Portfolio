/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        comic: {
          yellow: '#FFD93D',
          'yellow-light': '#FFE15A',
          red: '#FF2E63',
          'red-dark': '#D81E4A',
          cyan: '#00F0FF',
          'cyan-dark': '#08C8D6',
          navy: '#0A0E27',
          'navy-light': '#1A1F3A',
          ink: '#0B0B0B',
          paper: '#FFF8E7',
        },
      },
      fontFamily: {
        hero: ['"Bowlby One"', 'cursive'],
        bang: ['"Bangers"', 'cursive'],
        mark: ['"Permanent Marker"', 'cursive'],
        comic: ['"Comic Neue"', 'cursive'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'comic': '6px 6px 0 0 #000',
        'comic-sm': '4px 4px 0 0 #000',
        'comic-lg': '10px 10px 0 0 #000',
        'comic-cyan': '6px 6px 0 0 #00F0FF',
        'comic-red': '6px 6px 0 0 #FF2E63',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shake': 'shake 0.6s ease-in-out infinite',
        'pop': 'pop 0.4s ease-out',
        'spin-slow': 'spin 18s linear infinite',
        'pulse-fast': 'pulse 1.4s ease-in-out infinite',
        'marquee': 'marquee 24s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px) rotate(-2deg)' },
          '50%': { transform: 'translateY(-14px) rotate(2deg)' },
        },
        shake: {
          '0%,100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pop: {
          '0%': { transform: 'scale(0.6)', opacity: 0 },
          '70%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'halftone': 'radial-gradient(#000 1.2px, transparent 1.4px)',
        'halftone-light': 'radial-gradient(rgba(0,0,0,0.25) 1px, transparent 1.2px)',
        'halftone-white': 'radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1.2px)',
      },
      backgroundSize: {
        'dots': '14px 14px',
        'dots-lg': '22px 22px',
      },
    },
  },
  plugins: [],
}
