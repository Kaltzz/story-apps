import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/story-apps/', // Sesuaikan dengan nama repo Anda

  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'injectManifest', // Menggunakan service worker kustom
      srcDir: 'src',                 // Lokasi sw.js Anda
      filename: 'sw.js',             // Nama file sw.js Anda

      manifest: {
        name: 'Story Explorer',
        short_name: 'StoryApp',
        // ... sisa manifest
      },
    }),
  ],
});