const cacheName = 'Contact';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './user.html',
        './manifest.json',
        './phoneInput.js',
        './user.js',
        './index.js',
        './style.css',
        './index.css',
        './components/emptyState/index.js',
        './components/emptyState/styles.css',
        './components/user/index.js',
        './components/user/styles.css',
        './components/userCard/index.js',
        './components/userCard/styles.css',
        './icons/close.svg',
        './icons/date.svg',
        './icons/filter.svg',
        './icons/phone.svg',
        './icons/text.svg',
        './icons/trash.svg',
        './icons/user-icon.svg',
        './icons/empty.png',
        './icons/images.png',
        './icons/manifestIcons/contact.ico',
        './icons/manifestIcons/contact.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, { ignoreSearch: true }))
      .then(response => {
        return response || fetch(event.request);
      })
  );
});