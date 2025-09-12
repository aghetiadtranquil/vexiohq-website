// DataTranquil Service Worker - Progressive Enhancement for Technical SEO
// Version: 3.1.1 - Response-Awareness Framework Phase 3

const CACHE_NAME = 'datatranquil-v1.0.0';
const RUNTIME_CACHE = 'datatranquil-runtime';
const STATIC_CACHE = 'datatranquil-static';

// #COMPLETION_DRIVE_IMPL: Categorizing assets based on typical Next.js patterns
const PRECACHE_URLS = [
  '/',
  '/offline.html',
  '/about',
  '/services',
  '/blog',
  '/contact',
  '/ai-consulting-services',
  '/enterprise-ai-transformation',
  '/favicon.svg',
  '/site.webmanifest'
];

// Critical resources for Core Web Vitals optimization
const CRITICAL_RESOURCES = [
  '/favicon.svg',
  '/site.webmanifest'
];

// Cache strategies for different resource types
const CACHE_STRATEGIES = {
  // Network First - for API calls and dynamic content
  networkFirst: [
    /\/api\//,
    /\/contact$/,
    /\/portal\//
  ],
  
  // Cache First - for static assets
  cacheFirst: [
    /\/_next\/static\//,
    /\.(?:js|css|woff2|woff|ttf|eot)$/,
    /\/images\//,
    /\/icons\//
  ],
  
  // Stale While Revalidate - for pages and content
  staleWhileRevalidate: [
    /\/$/,
    /\/blog\//,
    /\/services/,
    /\/about/,
    /\/case-studies/,
    /\/resources\//
  ]
};

// Install event - precache critical resources
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    Promise.all([
      // Precache critical static resources
      caches.open(STATIC_CACHE).then((cache) => {
        return cache.addAll(PRECACHE_URLS.concat(CRITICAL_RESOURCES));
      }),
      
      // Skip waiting to activate immediately
      self.skipWaiting()
    ])
  );
});

// Activate event - cleanup old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => 
              cacheName !== CACHE_NAME && 
              cacheName !== RUNTIME_CACHE && 
              cacheName !== STATIC_CACHE
            )
            .map((cacheName) => caches.delete(cacheName))
        );
      }),
      
      // Claim all clients immediately
      self.clients.claim()
    ])
  );
});

// Fetch event - implement intelligent caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const { url, method } = request;
  
  // Only handle GET requests
  if (method !== 'GET') return;
  
  // Skip non-same-origin requests
  if (!url.startsWith(self.location.origin)) return;
  
  event.respondWith(handleFetch(request));
});

// #COMPLETION_DRIVE_IMPL: Implementing sophisticated fetch handling for SEO performance
async function handleFetch(request) {
  const url = new URL(request.url);
  
  try {
    // Apply appropriate caching strategy based on URL pattern
    if (matchesPattern(url.pathname, CACHE_STRATEGIES.networkFirst)) {
      return await networkFirstStrategy(request);
    }
    
    if (matchesPattern(url.pathname, CACHE_STRATEGIES.cacheFirst)) {
      return await cacheFirstStrategy(request);
    }
    
    if (matchesPattern(url.pathname, CACHE_STRATEGIES.staleWhileRevalidate)) {
      return await staleWhileRevalidateStrategy(request);
    }
    
    // Default to network first for unmatched patterns
    return await networkFirstStrategy(request);
    
  } catch (error) {
    console.error('Fetch handler error:', error);
    return await handleFallback(request);
  }
}

// Network First Strategy - for dynamic content and APIs
async function networkFirstStrategy(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Cache successful responses
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Network failed, try cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    throw error;
  }
}

// Cache First Strategy - for static assets
async function cacheFirstStrategy(request) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    throw error;
  }
}

// Stale While Revalidate Strategy - for pages and content
async function staleWhileRevalidateStrategy(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cachedResponse = await cache.match(request);
  
  // Always try to update cache in background
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => {
    // Ignore network errors in background update
    return null;
  });
  
  // Return cached version immediately if available
  if (cachedResponse) {
    // Don't await the fetch promise - let it run in background
    fetchPromise;
    return cachedResponse;
  }
  
  // If no cached version, wait for network
  try {
    return await fetchPromise;
  } catch (error) {
    throw error;
  }
}

// Fallback handler for failed requests
async function handleFallback(request) {
  const url = new URL(request.url);
  
  // For navigation requests, return offline page
  if (request.mode === 'navigate') {
    const offlineResponse = await caches.match('/offline.html');
    if (offlineResponse) {
      return offlineResponse;
    }
  }
  
  // For other requests, return a generic error response
  return new Response('Network error occurred', {
    status: 408,
    statusText: 'Network timeout'
  });
}

// Utility function to match URL patterns
function matchesPattern(pathname, patterns) {
  return patterns.some(pattern => {
    if (pattern instanceof RegExp) {
      return pattern.test(pathname);
    }
    return pathname === pattern;
  });
}

// Background sync for form submissions (Progressive Enhancement)
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
  }
});

// #COMPLETION_DRIVE_INTEGRATION: Background form sync for offline capability
async function syncContactForm() {
  try {
    const db = await openIndexedDB();
    const pendingForms = await getPendingForms(db);
    
    for (const form of pendingForms) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form.data)
        });
        
        if (response.ok) {
          await removePendingForm(db, form.id);
        }
      } catch (error) {
        console.log('Failed to sync form:', form.id);
      }
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// #SUGGEST_ERROR_HANDLING: IndexedDB operations should have comprehensive error handling
async function openIndexedDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('datatranquil-forms', 1);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('pending-forms')) {
        db.createObjectStore('pending-forms', { keyPath: 'id' });
      }
    };
  });
}

async function getPendingForms(db) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['pending-forms'], 'readonly');
    const store = transaction.objectStore('pending-forms');
    const request = store.getAll();
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
}

async function removePendingForm(db, id) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['pending-forms'], 'readwrite');
    const store = transaction.objectStore('pending-forms');
    const request = store.delete(id);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve();
  });
}

// Push notification handler (for future enhancement)
self.addEventListener('push', (event) => {
  if (event.data) {
    const options = {
      body: event.data.text(),
      icon: '/favicon-192x192.png',
      badge: '/favicon-192x192.png',
      vibrate: [200, 100, 200],
      data: {
        url: '/'
      }
    };
    
    event.waitUntil(
      self.registration.showNotification('DataTranquil', options)
    );
  }
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow(event.notification.data.url || '/')
  );
});

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log('DataTranquil Service Worker loaded - Technical SEO Enhanced');