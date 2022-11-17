import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173, //启动端口
    hmr: {
        host: '127.0.0.1',
        port: 5173
    },
    // 设置 https 代理
    proxy: {
        '/api': {
            target: 'http://localhost:8080',
            changeOrigin: true,
            rewrite: (path: string) => path.replace(/^\/api/, '')
        }
    }
}
})

// export default defineConfig(({ command, mode, ssrBuild }) => {
  
//   if (command === 'serve') {
//     return {
//       // dev 独有配置
//     }
//   } else {
//     // command === 'build'
//     return {
//       // build 独有配置
//     }
//   }
// })
