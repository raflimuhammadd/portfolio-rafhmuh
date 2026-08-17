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
        'neo-muted': '#C4B5FD',
        'neo-white': '#FFFFFF',
      },
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],
      },
      borderWidth: {
        '4': '4px',
        '8': '8px',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
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
