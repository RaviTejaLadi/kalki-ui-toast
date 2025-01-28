import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'kalki-ui-toast': 'kalki-ui-toast',
    },
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    include: ['kalki-ui-toast'],
  },
  build: {
    outDir: path.resolve(__dirname, '../../dist'),
    emptyOutDir: true,
    sourcemap: true,
    commonjsOptions: {
      include: [/kalki-ui-toast/, /node_modules/],
    },
  },
});