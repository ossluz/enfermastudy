// EnfermaStudy Service Worker v2
// Coloque este arquivo na mesma pasta que o EnfermaStudy_PWA.html
const CACHE = 'enfermastudy-v2';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c =>
      c.addAll(['./', './EnfermaStudy_PWA.html', './index.html'])
       .catch(() => {}) // ignora erros de arquivos inexistentes
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // YouTube e Google APIs: sempre da rede
  if (url.hostname.includes('youtube') || url.hostname.includes('googleapis')) return;
  // Tudo mais: cache-first
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res && res.ok && res.type !== 'opaque') {
          caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        }
        return res;
      }).catch(() => cached || new Response('Offline', {status: 503}));
    })
  );
});
