import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './dist',  // This should match your Django configuration
    assetsDir: 'assets',  // Assets directory
  },
  plugins: [react()],
})
