import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative asset paths work seamlessly on GitHub Pages
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    minify: 'esbuild', // Built-in fast minification
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          lucide: ['lucide-react']
        }
      }
    }
  }
});
