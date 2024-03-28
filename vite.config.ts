import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/discord-card-helper/',
  build: {
    minify: 'esbuild',
    cssMinify: 'esbuild',
    manifest: true,
  },
  plugins: [react()],
})
