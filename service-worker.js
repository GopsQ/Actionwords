self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('ananya-app').then(function(cache) {
      return cache.addAll([
        'index.html'
      ]);
    })
  );
});