var staticCacheName = 'restaurant-reviews-v1';

/**
 * Add files to be cached
 */
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/',
        '/data/restaurants.json',
        '/img/1/1_200.jpg',
        '/img/1/1_353.jpg',
        '/img/1/1_467.jpg',
        '/img/1/1_578.jpg',
        '/img/1/1_680.jpg',
        '/img/1/1_788.jpg',
        '/img/1/1.jpg',
        '/img/2/2_200.jpg',
        '/img/2/2_323.jpg',
        '/img/2/2_420.jpg',
        '/img/2/2_501.jpg',
        '/img/2/2_574.jpg',
        '/img/2/2_645.jpg',
        '/img/2/2_708.jpg',
        '/img/2/2_776.jpg',
        '/img/2/2.jpg',
        '/img/3/3_200.jpg',
        '/img/3/3_357.jpg',
        '/img/3/3_480.jpg',
        '/img/3/3_592.jpg',
        '/img/3/3_702.jpg',
        '/img/3/3.jpg',
        '/img/4/4_200.jpg',
        '/img/4/4_354.jpg',
        '/img/4/4_474.jpg',
        '/img/4/4_578.jpg',
        '/img/4/4_667.jpg',
        '/img/4/4_752.jpg',
        '/img/4/4.jpg',
        '/img/5/5_200.jpg',
        '/img/5/5_364.jpg',
        '/img/5/5_492.jpg',
        '/img/5/5_605.jpg',
        '/img/5/5_722.jpg',
        '/img/5/5.jpg',
        '/img/6/6_200.jpg',
        '/img/6/6_322.jpg',
        '/img/6/6_419.jpg',
        '/img/6/6_502.jpg',
        '/img/6/6_577.jpg',
        '/img/6/6_646.jpg',
        '/img/6/6_714.jpg',
        '/img/6/6_781.jpg',
        '/img/6/6.jpg',
        '/img/7/7_200.jpg',
        '/img/7/7_372.jpg',
        '/img/7/7_503.jpg',
        '/img/7/7_615.jpg',
        '/img/7/7_741.jpg',
        '/img/7/7.jpg',
        '/img/8/8_200.jpg',
        '/img/8/8_324.jpg',
        '/img/8/8_413.jpg',
        '/img/8/8_516.jpg',
        '/img/8/8_601.jpg',
        '/img/8/8_692.jpg',
        '/img/8/8.jpg',
        '/img/9/9_200.jpg',
        '/img/9/9_404.jpg',
        '/img/9/9_553.jpg',
        '/img/9/9_713.jpg',
        '/img/9/9.jpg',
        '/img/10/10_200.jpg',
        '/img/10/10_376.jpg',
        '/img/10/10_512.jpg',
        '/img/10/10_625.jpg',
        '/img/10/10_725.jpg',
        '/img/10/10.jpg',
        '/index.html',
        '/restaurant.html'      
      ]);
    })
  );
});

/**
 * Return files from Cache if present, otherwise fetch from network
 */
self.addEventListener('fetch', function(e) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if(response) {
                return response;
            }
            return fetch(event.request);
        })
      );
});

/**
 * Remove unwanted old caches
 */
self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.filter(function(cacheName) {
            return cacheName.startsWith('restaurant-') &&
                   cacheName != staticCacheName;
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      })
    );
});