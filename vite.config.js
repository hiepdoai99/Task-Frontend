import { defineConfig } from "vite";
// import laravel from 'laravel-vite-plugin';
import vue from "@vitejs/plugin-vue";
// vite.config.js / vite.config.ts
import { VitePWA } from "vite-plugin-pwa";
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "pwa-task-app",
        short_name: "PTA",
        theme_color: "#4DBA87",
        icons: [
          {
            src: "./img/icons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./img/icons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "./img/icons/android-chrome-maskable-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "./img/icons/android-chrome-maskable-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        start_url: ".",
        display: "standalone",
        background_color: "#000000",
        gcm_sender_id: "103953800507"
      },
      srcDir: './public',
      filename: 'custom-sw',
    }),
  ],
});
