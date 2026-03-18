// EnfermaStudy Service Worker v6
const CACHE = 'enfermastudy-v6';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c =>
      c.addAll([
        './', './index.html', './chat.html',
        './recursos.html', './jelco.html', './procedimentos.html',
        './diluicoes.html', './exames.html', './sistemas.html',
        './fichas.html', './flashcards.html', './cronometro.html',
        './compatibilidade.html', './ecg.html', './legislacao.html',
        './gasometria.html', './resumos.html', './cateteres.html'
      ]).catch(() => {})
    )
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const sempreRede = ['youtube.com','youtu.be','ytimg.com','googleapis.com',
    'gstatic.com','firebaseio.com','firebaseapp.com','firebase.google.com',
    'accounts.google.com','sketchfab.com','zygotebody.com'];
  if (sempreRede.some(d => url.hostname.includes(d))) return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res && res.ok && res.type !== 'opaque')
          caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        return res;
      }).catch(() => cached || new Response('Offline', { status: 503 }));
    })
  );
});
