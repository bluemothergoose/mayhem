/* The build process involves Workbox grabbing this file, and then injecting the precacheManifest
attribute, which generates a modified service-worker.js in the dist directory. 
This item was configured in vue.config.js. */

// Add a suffix so that the cache of a new worker doesn't overwrite an old one's.
// This matters because the new worker won't immediately become active.
workbox.core.setCacheNameDetails({ prefix: "mayhem", suffix: '0.23.1' });

self.__precacheManifest = [].concat(self.__precacheManifest || []);

workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// Make all navigation requests be directed to index.html, since it's a SPA
workbox.routing.registerNavigationRoute('/index.html');

// An immediate update of the app can be triggered by sending this message to the new worker waiting
addEventListener('message', messageEvent => {
  if (messageEvent.data === 'skipWaiting') {
    return skipWaiting();
  }
}); 