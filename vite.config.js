import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config for GitHub Pages deployment
export default defineConfig({
  plugins: [react()],
  base: '/unsolved-mysteries-fanpage/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: true
  },
  server: {
    port: 5173,
    open: true,
    strictPort: true
  }
});
