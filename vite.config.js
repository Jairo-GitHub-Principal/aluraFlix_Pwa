// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  /**
   * A propriedade base define o caminho base para servir os arquivos estáticos do seu projeto.
📌 O que faz?
Controla como o Vite gera os caminhos dos arquivos no build final.
Garante que links para scripts, estilos, imagens e outros arquivos sejam gerados corretamente.
Se estiver errado, o site pode quebrar porque os arquivos não serão encontrados.
   */
  //base: '/aluraFlix_Pwa/',
  base:'/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Atualiza automaticamente o Service Worker
      includeAssets: ['favicon.ico', 'aluraIcone192.png', 'aluraIcone512.png', 'apple-touch-icon.png'],

      manifest: {
        name: 'AluraFlix_Pwa', // Nome do PWA, ou seja: é o nome que aparrecer na lista de proggramas instalados no caso do windows, e taambem na barra de navegação na hora de instalar
        short_name: 'PWA',
        description: 'Um Progressive Web App feito com React e Vite',
        theme_color: '#ffffff',
        // essa propriedade state_url:'', também sesrve paar definir o href="" do link rel= "manifest" no arquivo index.html

        /**
         * O que start_url: "/aluraFlix_Pwa" faz exatamente?
            A propriedade start_url dentro do manifest do VitePWA define qual URL será carregada quando o usuário abrir o PWA a partir da tela inicial do dispositivo.

             No seu caso:         
            start_url: '/aluraFlix_Pwa' 
            Isso significa que, quando o PWA for iniciado a partir do ícone da tela inicial, ele abrirá diretamente na URL:
            https://seu-dominio.com/aluraFlix_Pwa

            ou se  esse link fosse para o gitHub
            https://seu-usuario.github.io/aluraFlix_Pwa

           
         */
        //start_url: '/aluraFlix_Pwa/', // Página inicial do PWa para teste na hospedagem do  gitHub
        start_url: '/', // Página inicial do PWA para ambiente de desenvolvimento
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
        //fileName: 'manifest.webmanifest.json',  // Altere para gerar com extensão .json

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