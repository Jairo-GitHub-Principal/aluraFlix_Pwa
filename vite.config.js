// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Atualiza automaticamente o Service Worker
      includeAssets: ['favicon.ico', 'aluraIcone192.png', 'aluraIcone512.png', 'apple-touch-icon.png'],

      manifest: {
        name: 'Meu PWA Incrível',
        short_name: 'PWA',
        description: 'Um Progressive Web App feito com React e Vite',
        theme_color: '#ffffff',
        start_url: '/', // Página inicial do PWA
        display: 'standalone', // Modo de exibição (pode ser 'fullscreen', 'standalone', etc.)
        icons: [
          {
            src: '/aluraIcone192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/aluraIcone512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        // Especifica o nome do arquivo do manifesto
        // fileName: 'manifest.webmanifest',
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB

        globPatterns: ['**/*.{js,css,html,ico,png,svg}'], // Cache de arquivos estáticos

        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 7, // 1 semana
              },
            },
          },
        ],

      },
    }),
  ],
});