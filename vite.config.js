import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  server: {
    host: 'localhost', //自定义监听的ip地址
    port: '5173', //指定端口
    open: true, //启动服务时自动打开浏览器
    https: false //不使用https
  }
})
