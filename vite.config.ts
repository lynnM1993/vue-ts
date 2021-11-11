import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  envDir: resolve(__dirname, 'env'),
  server:{
    proxy:{
      '/api': {
        target: 'http://localhost:7001',
        changeOrigin: true,
        rewrite: (path) => path
      }
    }
  },
})
