import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()], //配置vue插件
  resolve: {
    alias: {
      //配置别名，这里的配置别名是为了vite打包时用的
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
