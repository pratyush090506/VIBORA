import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Add this proxy configuration
    proxy: {
      // String shorthand: '/api' -> 'http://localhost:5001/api'
      '/api': {
        target: 'http://localhost:5001', // YOUR BACKEND SERVER
        changeOrigin: true,
        // The "rewrite" line has been removed.
      },
    }
  }
})

