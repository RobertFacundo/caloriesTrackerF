import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  test: {
    include:['tests/**/*.test.{js,jsx,ts,tsx}'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTest.js'
  }
})
