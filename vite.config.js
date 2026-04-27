import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'http://127.0.0.1:8788',
        changeOrigin: true,
        rewrite: (path) => path,
      },
      '/uploads': process.env.VITE_API_URL || 'http://127.0.0.1:8788',
    },
  },
})
