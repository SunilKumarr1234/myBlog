import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Removing the base path for Netlify deployment
  // base: '/myBlog/'
})
