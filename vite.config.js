import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/story-apps/', // HARUS sesuai nama repo GitHub kamu

  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },

  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'generateSW', // gunakan generateSW kecuali kamu butuh injectManifest
      manifest: {
        name: 'Story Explorer',
        short_name: 'StoryApp',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icons/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
