import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/bmi/',
  plugins: [vue()],
  server: {
    port: 3000
  }
})