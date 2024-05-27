// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://alwin-sajan.github.io/Spotify-clone',
  css: {
    postcss: './postcss.config.js', // Ensure this points to your PostCSS config
  },
});
