import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Torvi_Final/', // Add this line for GitHub Pages
  server: {
    port: 3000,
    open: true
  }
})