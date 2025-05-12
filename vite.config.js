import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  base: '/' ,     // process.env.NODE_ENV === 'production' ? '/INET2000-Project2/' : '/', // Use '/' for development and '/INET2000-Project2/' for production
  server: {
    port: 5500,
    },
  build: {
    rollupOptions: {
      input: 'index.html', 

    },
  },


});

