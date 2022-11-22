'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "93dbd258c687c4e2717da0490c74df89",
".git/config": "94f3631898ae28c622fb58c68ed27875",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ec125872c2193c67d31d2d308187a42b",
".git/HEAD": "5482a8fc18c5e03b61bb01babdb83c44",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "885430dc512d6700a0a71c4042877834",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0b780b7e3662ab8f6d2048a7dc9c3841",
".git/logs/refs/heads/gccp": "0b780b7e3662ab8f6d2048a7dc9c3841",
".git/logs/refs/remotes/origin/gccp": "cd9f965018b68b2860527fc5e0722dca",
".git/logs/refs/remotes/origin/HEAD": "141dee40dc387d6175f4e7f686e1525e",
".git/objects/0e/2c21ffb627a0988bba648a8652f7440396e184": "2877dafec4f3ab5da34d47c445884dc3",
".git/objects/0e/5fb307fe04c7b66454df183224b25b02872d4e": "3018bfc0b224f743c3d196e3f31af43d",
".git/objects/26/5cfb4cb4a93ed3351df3f13f232860f809d913": "3a3c1b6e5d1b11ec213718b8dda59b56",
".git/objects/28/3b3e778803e6e17f4248bc93fee6e3c7568a95": "440b9589230f838ea305d76778f12f7f",
".git/objects/31/8783f55ca00ede03c8bb583c2afdfdd0beeeba": "9946b19e9a7cce77c926f1867e7d78a3",
".git/objects/35/6e85e778afd14e8dee5f418cfdf74e74901810": "c8ec55742f20f05618f316cd254e62db",
".git/objects/3d/3660bc472b637a808e6caab4da78467b2647fb": "a62be798dde4046b3dbab9eceb926a7f",
".git/objects/44/6077fc5fe15dc3cc3d2445aa70379cd628bc05": "f7d96fde409c8f4b9b351d860b9245b7",
".git/objects/66/2fd9c8fd7bd55b026e67fd0acc4f34b2342000": "ee8ce134d41fc0718104426fe394cbd3",
".git/objects/6f/7cd6d10a9cd28a09e7e016e6c7692a36f7e469": "0bd9f1ad9b3e8fa0499405bde42ac64c",
".git/objects/70/0320db3847b5941e3526d72ed63328c6f7261e": "19ddaad082e042f16435bb90b4f7a8a9",
".git/objects/77/552d691c40534c7cb84ab9394ecb280a708582": "fa9803e39c745f5975507fbf1ad48b05",
".git/objects/84/fcbd9e32e5be31f18e27b197d50d28ec1af0cf": "1982504a566b78217f84fa43da341e80",
".git/objects/8f/5c048841994d9f95f25c84151e2393e721c82e": "9db2f74cf6b2aeaa6833486713806b5c",
".git/objects/9e/f6ecd4e9f3de90ad5a71ca96f2d42a0212d984": "1b352e6f210c277ff808f5e2ceed2178",
".git/objects/a5/3715d6aa302a5256e3ede35b4feb72ce1c0d77": "8a7e3a58892e759b1d0dccbc6e233098",
".git/objects/a5/ba522f130975bb4eb3ded31cd1ab89a0e05495": "542965a93bc66f64a647c6b259ce90f7",
".git/objects/ad/0264f352c9ec9a1b1ab7955a9c7ed586d15bd5": "5b5346d0fb7dea129b7d086165b6a7cb",
".git/objects/b5/3e82a5aac8ef343414aa4fa8b996b31b88ce99": "5144e7e642870c7fb702227e86bf3db7",
".git/objects/ba/8ee1719148efe026d5138b5fb67ada686b8c85": "45a7f347f3979186dc532dbd3f7e06fa",
".git/objects/pack/pack-7394189c1d5f746803bdf0a29c71504e1dbfd4fa.idx": "9ef184160500a09c67db5088d1d3a2ac",
".git/objects/pack/pack-7394189c1d5f746803bdf0a29c71504e1dbfd4fa.pack": "8bce8079b52205d6554ffda26402d4f2",
".git/packed-refs": "dcb5c868377429884ea8fa9e8376f23f",
".git/refs/heads/gccp": "1f3477d57feafb617357c128b078c97a",
".git/refs/remotes/origin/gccp": "1f3477d57feafb617357c128b078c97a",
".git/refs/remotes/origin/HEAD": "53bd54be0c3028029b77d7ef48b8a1cf",
"assets/AssetManifest.json": "8765d871e1936f9fe9b6f05ca7aac0ed",
"assets/assets/gdscmitadt.csv": "347a5f376d6bbd855136ddd111aa4024",
"assets/assets/logo.png": "ec234e2e3ed454969a838ad1d4402d51",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "362bf584f352b279bce0443ad0f4f036",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "72ff934c826a9fe970268e2c157b3e59",
"canvaskit/canvaskit.js": "cf51f0145ed508c7203981a6297dfb6c",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "e069e181424052299c5bffb1b300bb13",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "db931120412af26cc1511fa058afaf0a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "458805a37951a2cddc54f067f6172921",
"/": "458805a37951a2cddc54f067f6172921",
"main.dart.js": "17eede496999b795ad560fecc4281a73",
"manifest.json": "1c3e753e73ad41733d5db8662bbdd791",
"version.json": "a5c439a613dc85ba7a88f84a2410f1d7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
