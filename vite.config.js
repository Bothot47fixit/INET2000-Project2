import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Use '/' for development
  server: {
    port: 5276, // Explicitly set the port
    hmr: {
       
    },
  },
  build: {
    rollupOptions: {
      input: 'index.html', // Ensure Vite knows where to find the entry point
    },
  },
});


