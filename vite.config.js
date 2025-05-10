import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/INET2000-Project2/' : '/', // Use base path only in production
  server: {
    port: 5500, // Local development server port
  },
});

