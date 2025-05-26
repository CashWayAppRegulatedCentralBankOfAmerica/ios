self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('launcher-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/app.js',
        '/manifest.json',
        '/icons/calculator.png',
        '/icons/notes.png',
        '/icons/launcher-icon-192.png',
        '/icons/launcher-icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
