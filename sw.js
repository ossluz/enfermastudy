// EnfermaStudy Service Worker v3
// Coloque este arquivo na mesma pasta que index.html e chat.html
const CACHE = 'enfermastudy-v3';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c =>
      c.addAll([
        './',
        './index.html',
        './chat.html'
      ]).catch(() => {}) // ignora erros de arquivos inexistentes
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

  // ── Sempre da REDE (nunca cachear) ──────────────────────────────
  const sempreRede = [
    'youtube.com',
    'youtu.be',
    'ytimg.com',            // thumbnails YouTube
    'googleapis.com',       // Google APIs
    'gstatic.com',          // Firebase SDK CDN
    'firebaseio.com',       // Realtime Database
    'firebaseapp.com',      // Firebase Auth
    'firebase.google.com',  // Firebase console
    'accounts.google.com',  // Login Google
    'sketchfab.com',        // Modelos 3D
    'zygotebody.com',       // Atlas 3D
  ];
  if (sempreRede.some(d => url.hostname.includes(d))) return;

  // ── Cache-first para tudo mais ───────────────────────────────────
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res && res.ok && res.type !== 'opaque') {
          caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        }
        return res;
      }).catch(() => cached || new Response('Offline', { status: 503 }));
    })
  );
});
