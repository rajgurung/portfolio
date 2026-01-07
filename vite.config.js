import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  preview: {
    port: 8080,
    host: true,
    allowedHosts: [
      'rajgurung.me',
      'www.rajgurung.me',
      '.ondigitalocean.app'
    ]
  },
  build: {
    outDir: 'build'
  }
})
