import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './frontend', // Ensure the root is the frontend directory
  build: {
    rollupOptions: {
      input: './frontend/index.html' // Ensure the input is the index.html file in the frontend directory
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': './frontend', // This assumes you want to use the frontend directory directly in imports
    },
  },
});
