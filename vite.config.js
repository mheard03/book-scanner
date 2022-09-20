import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: "./",
  server: {
    watch: {},
    port: 4005,
    host: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, "./src/")
    },
  },
  rollupOptions: {
    input: {
      'index.html': resolve(__dirname, 'index.html')
    }
  }
})