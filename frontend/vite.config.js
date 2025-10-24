import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5001', // Your local backend server
        changeOrigin: true,
        secure: false,
        // No rewrite needed if backend expects /api prefix
      },
    },
  },
  // Add build configuration to target modern browsers
  build: {
    target: 'esnext' // Target modern JavaScript environments
  }
});

