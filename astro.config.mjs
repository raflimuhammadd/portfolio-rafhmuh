import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'server',
  adapter: netlify({
    edgeFunctions: false,
  }), 
  site: 'https://portfolio-raffmuhh.netlify.app/',
});