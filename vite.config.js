import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'
// vite.config.js / vite.config.ts
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [
        vue(),
        VitePWA()
    ],
});
