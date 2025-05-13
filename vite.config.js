import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Use '/' for development
  server: {
    port: 5500, // Ensure this matches the port you're using
    hmr: {
      port: 5501, // Explicitly set the WebSocket port
    },
  },
  build: {
    rollupOptions: {
      input: 'index.html', // Ensure Vite knows where to find the entry point
    },
  },
});


