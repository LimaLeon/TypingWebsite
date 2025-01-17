import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// Export the Vite configuration
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // You can change this to any available port
  },
  publicDir: 'public', // Directory for static assets
  root: path.resolve(__dirname), // Ensure Vite considers the root directory
  build: {
    outDir: path.resolve('./dist'), // Output directory for the build
  },
 
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Allows imports like '@/some/path'
    },
  },
  base: './', // Ensures assets are referenced correctly in production
});
