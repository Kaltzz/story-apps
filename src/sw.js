import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';
import { clientsClaim } from 'workbox-core';

// Perintah ini penting untuk PWA agar update berjalan lancar
self.skipWaiting();
clientsClaim();

// INI ADALAH PLACEHOLDER YANG DICARI VITE.
// Vite akan menggantinya dengan daftar file (HTML, CSS, JS) yang perlu di-cache.
precacheAndRoute(self.__WB_MANIFEST);

// Aturan untuk caching permintaan ke API
registerRoute(
  ({ url }) => url.href.startsWith('https://story-api.dicoding.dev/'),
  new NetworkFirst({
    cacheName: 'api-cache',
  })
);

// Event listener untuk menangani push notification
self.addEventListener('push', (event) => {
  const notificationData = {
    title: 'Story Explorer',
    options: {
      body: event.data ? event.data.text() : 'Anda memiliki pesan baru!',
      icon: '/icons/icon-192x192.png',
    },
  };
  event.waitUntil(
    self.registration.showNotification(notificationData.title, notificationData.options)
  );
});