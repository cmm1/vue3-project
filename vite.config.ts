import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        //设置别名
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
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
                target: 'http://127.0.0.1:8099',
                changeOrigin: true,
                secure: false, // 请求是否为https
                rewrite: (path: string) => path.replace(/^\/api/, '')
            }
            // '/url': {
            //     target: 'your https address',
            //     changeOrigin: true,
            //     rewrite: (path: string) => path.replace(/^\/url/, '')
            // }
        }
    }
});

