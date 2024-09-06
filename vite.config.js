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
    host: true,
    //自定义监听的ip地址,比如'localhost'或者'127.0.0.1'
    // host: '127.0.0.1',
    // host: 'localhost',
    //设置为true会监听监听 localhost 和本机的局域网 IP，和 Vue CLI 的默认行为一致。
    //这样可以通过 localhost 或者局域网 IP 来访问开发服务器。
    port: '5173', //指定端口
    open: true, //启动服务时自动打开浏览器
    https: false, //不使用https
    cors: true //允许跨域
  }
})
