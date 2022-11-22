'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "94f3631898ae28c622fb58c68ed27875",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "90853a1bf0e85674f6f1da52b1724a91",
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
".git/index": "9f18a2245a9bd4ec5d4f9c68367e1338",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "13fd69b9ba3c7e8c6697d21ea89c04b5",
".git/logs/refs/heads/gccp": "13fd69b9ba3c7e8c6697d21ea89c04b5",
".git/logs/refs/remotes/origin/gccp": "46d34d03d57a705118152179dfc2f9b0",
".git/logs/refs/remotes/origin/HEAD": "2786d3dbad21940754ebd88f2506d581",
".git/objects/01/ede294cfd53048b2def2d65df57cc533b90d76": "e415ed438bca6f79c3fd7df9f0d310e6",
".git/objects/0b/c1399c1b305875bd9e8bff2a3bb0d16bf7dcff": "8625b3989c214a3bff2e1bb649015a58",
".git/objects/0d/ba2e40032b41d5b42269f5f77f5afd1ba19103": "18efbebb4a6d70697ca9c31b44331c02",
".git/objects/0e/2c21ffb627a0988bba648a8652f7440396e184": "2877dafec4f3ab5da34d47c445884dc3",
".git/objects/0e/5fb307fe04c7b66454df183224b25b02872d4e": "3018bfc0b224f743c3d196e3f31af43d",
".git/objects/11/acb6911f56f23235964f2b0e7219f1c819be35": "5dd30dbf14538327353cb33acdecb5ee",
".git/objects/1f/56d7f3d908708d129c9871dedf1a1f4ff34141": "64095d0692aa610b8a28e12b1001dae3",
".git/objects/22/5ee0ae952ed56b32d8504ed134cb5c2cdd1a8e": "5459040d448d71ce1d3d0947b44a4b2d",
".git/objects/26/5cfb4cb4a93ed3351df3f13f232860f809d913": "3a3c1b6e5d1b11ec213718b8dda59b56",
".git/objects/28/3b3e778803e6e17f4248bc93fee6e3c7568a95": "440b9589230f838ea305d76778f12f7f",
".git/objects/31/8783f55ca00ede03c8bb583c2afdfdd0beeeba": "9946b19e9a7cce77c926f1867e7d78a3",
".git/objects/35/6e85e778afd14e8dee5f418cfdf74e74901810": "c8ec55742f20f05618f316cd254e62db",
".git/objects/37/4a9b9be57b944864bf461320e220d6e53a5ec7": "e109780af6b3488f733f5a6911d4548a",
".git/objects/3c/ee206bc5f7944ac39d92046f231b3baa16bada": "23927dec9a945a2bddecfb4383629b2a",
".git/objects/3d/3660bc472b637a808e6caab4da78467b2647fb": "a62be798dde4046b3dbab9eceb926a7f",
".git/objects/42/bf796314ef84ac2889aae1fac0fd8a59b8133f": "aa8bc4e9dc4c1028d5719b5e1fffb0a2",
".git/objects/44/6077fc5fe15dc3cc3d2445aa70379cd628bc05": "f7d96fde409c8f4b9b351d860b9245b7",
".git/objects/44/60812dcbcc7c9843666d3ea91cb74e0ca427ad": "a7fd83e0d4b4582a7e1c561e4dc06962",
".git/objects/45/052d764fc76087ec0917009583fa6f18a36c06": "af0d5939a035c43bfa84d1b5686cc96d",
".git/objects/46/24d673dd1c8c34b3e997cce62d0afca98d2442": "faeac362e14d50605e8b25d9f00592d0",
".git/objects/48/1452dedb060383bef8dd4617c19592792a746f": "8d88ed748482c56523ad4ccc9be2ac0a",
".git/objects/4a/b20a541ba47a6e37308e32cfad01423fda448e": "43ae9bd2beacbb70a2afd022ed26cabe",
".git/objects/50/7394b58f32a1d83f005f0ec183d18c3193866b": "1054cc9ee06f94b698b23d456260105d",
".git/objects/52/9a5b73d131cf94233fa5335c20e88cf51f60bc": "1e2bafbb5ef863615e55d7e9981b021f",
".git/objects/54/7ca47d24e59e1c96edc7fa03f7941d7b14545d": "047f982f0252241c7854209de4a7774d",
".git/objects/63/6d5c1cdd1dc41bbf6b2339a9cb1a4392096846": "caac7c9f9a27ad670e6e4b27d6d24c94",
".git/objects/65/d522a8996c9336ad5c2414a258fcadd2e24bdc": "3129e94c65adade10759b5ee9c2976c2",
".git/objects/66/2fd9c8fd7bd55b026e67fd0acc4f34b2342000": "ee8ce134d41fc0718104426fe394cbd3",
".git/objects/6f/7cd6d10a9cd28a09e7e016e6c7692a36f7e469": "0bd9f1ad9b3e8fa0499405bde42ac64c",
".git/objects/70/0320db3847b5941e3526d72ed63328c6f7261e": "19ddaad082e042f16435bb90b4f7a8a9",
".git/objects/77/2d6355575f7357059f141f49ac5492d5b7a8de": "1fbad602a2a2c866e48e2b2e13b7e50b",
".git/objects/77/552d691c40534c7cb84ab9394ecb280a708582": "fa9803e39c745f5975507fbf1ad48b05",
".git/objects/84/fcbd9e32e5be31f18e27b197d50d28ec1af0cf": "1982504a566b78217f84fa43da341e80",
".git/objects/86/b4c83c6e7c9731c5053736171aa4692cff4aa0": "2269d3a18086d257bf6798cf7351c2a5",
".git/objects/8f/5c048841994d9f95f25c84151e2393e721c82e": "9db2f74cf6b2aeaa6833486713806b5c",
".git/objects/92/985e300a5f8803aba51524f8e8959bc58aa1d9": "f0ef083b4095b8868f1502b13a24df2c",
".git/objects/9e/f6ecd4e9f3de90ad5a71ca96f2d42a0212d984": "1b352e6f210c277ff808f5e2ceed2178",
".git/objects/a5/3715d6aa302a5256e3ede35b4feb72ce1c0d77": "8a7e3a58892e759b1d0dccbc6e233098",
".git/objects/a5/ba522f130975bb4eb3ded31cd1ab89a0e05495": "542965a93bc66f64a647c6b259ce90f7",
".git/objects/ad/0264f352c9ec9a1b1ab7955a9c7ed586d15bd5": "5b5346d0fb7dea129b7d086165b6a7cb",
".git/objects/af/60035c772c472888416cd1d5de5d7f0cd33fda": "28bb06651d139ceb2090986e50310c89",
".git/objects/b0/3312df5c12e066bba17be4fdb07dc6b2080dfe": "6053ce1f3ba0fb06a9f48d7d6bdddbab",
".git/objects/b5/3e82a5aac8ef343414aa4fa8b996b31b88ce99": "5144e7e642870c7fb702227e86bf3db7",
".git/objects/b5/bc5b59309a312387e7d296183fdd3139066bac": "4cfcb0d531f81311ecac1f86dbba763c",
".git/objects/ba/27aeea73d123258d926fd61203ffa0c2b401e5": "6552aa2a0232edb895ddf85d2c256a3a",
".git/objects/ba/8ee1719148efe026d5138b5fb67ada686b8c85": "45a7f347f3979186dc532dbd3f7e06fa",
".git/objects/bf/feac0b1d1183080168b48d101cb273cf635e83": "2e89e6a546c88380a013a5ffb1d3ff7e",
".git/objects/c1/afe77c2e11ec1760078f49f7211e45cfcc8840": "1c055e7a06608e40be9843f9018dc8dd",
".git/objects/c4/b5688b9d6061665b91dcac4c4912a0d10f67a1": "4bcf955f71ff974fccf1c9fa2e1d5ea2",
".git/objects/c8/0699b93d857f3de355ca0287732b113a5910c9": "a82800de2d2330ca999ca1eed0e17164",
".git/objects/d2/5f79c56cadb5fec3e00945d21705a7c20aa233": "da1760a260808ba996ddda5d4d76857b",
".git/objects/d6/8e1008822208b2ea3b2cda22f1dd338be1dc93": "47c14441b775439a6d40ce87ec815f21",
".git/objects/d8/1d3fce91990651d83d4d228c3c6e47f3756767": "1d2d0e757414b260aebebe3fb2d16460",
".git/objects/dc/bbb387a64abca3cb1c5d408a634ca166a1ba01": "da6fa25b842a7af4220c7484303e28f7",
".git/objects/f4/f53d4027fc8c923dbc11c1b5d0ee1f3e3eff38": "662f935ba16ce95383af0228d3c31076",
".git/objects/pack/pack-7394189c1d5f746803bdf0a29c71504e1dbfd4fa.idx": "9ef184160500a09c67db5088d1d3a2ac",
".git/objects/pack/pack-7394189c1d5f746803bdf0a29c71504e1dbfd4fa.pack": "8bce8079b52205d6554ffda26402d4f2",
".git/packed-refs": "dcb5c868377429884ea8fa9e8376f23f",
".git/refs/heads/gccp": "40848b9e74a54c5da32658f3e0421613",
".git/refs/remotes/origin/gccp": "40848b9e74a54c5da32658f3e0421613",
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
"index.html": "10d97a4337ded6e4e8f1a29286d08bce",
"/": "10d97a4337ded6e4e8f1a29286d08bce",
"main.dart.js": "14481602745966cd6be6e62b3279183c",
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
