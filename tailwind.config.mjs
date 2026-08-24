/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'neo-bg': '#FFFDF5',
        'neo-black': '#000000',
        'neo-accent': '#FF6B6B',
        'neo-secondary': '#FFD93D',
        'neo-tertiary': '#5FD3BC',
        'neo-quaternary': '#A78BFA',
        'neo-quinary': '#F87171',
        'neo-senary': '#60A5FA',
        'neo-muted': '#C4B5FD',
        'neo-septenary': '#6BCB77',
        'neo-octonary': '#FF9F45',
        'neo-white': '#FFFFFF',
        'mac-red': '#FF5F57',
        'mac-yellow': '#FEBC2E',
        'mac-green': '#28C840',
      },
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],
      },
      fontWeight: {
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      },
      borderWidth: {
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      spacing: {
        '10': '2.5rem',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'earthquake': 'earthquake 3s ease-in-out infinite',
      },
      keyframes: {
        earthquake: {
          '0%, 100%': { transform: 'rotate(1deg) translate(0, 0)' },
          '10%': { transform: 'rotate(0.8deg) translate(-1px, -2px)' },
          '20%': { transform: 'rotate(1.2deg) translate(-3px, 0px)' },
          '30%': { transform: 'rotate(0.9deg) translate(3px, 2px)' },
          '40%': { transform: 'rotate(1.1deg) translate(1px, -1px)' },
          '50%': { transform: 'rotate(1deg) translate(-1px, 2px)' },
          '60%': { transform: 'rotate(1.1deg) translate(-3px, 1px)' },
          '70%': { transform: 'rotate(0.9deg) translate(2px, 1px)' },
          '80%': { transform: 'rotate(1.2deg) translate(-1px, -1px)' },
          '90%': { transform: 'rotate(0.8deg) translate(2px, 2px)' },
        },
      },
      boxShadow: {
        'neo-sm': '4px 4px 0px 0px #000',
        'neo-md': '8px 8px 0px 0px #000',
        'neo-lg': '12px 12px 0px 0px #000',
        'neo-xl': '16px 16px 0px 0px #000',
      },
    },
  },
  plugins: [],
};
