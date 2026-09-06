// Service Worker for Rothe Erde HRMS Background Push Notifications & 3x Daily Shift Toasts
self.addEventListener('push', function(event) {
  let data = {
    title: 'Rothe Erde HRMS — 3x Daily Shift Action Required',
    body: 'You have 4 pending leave approvals and attendance clearances waiting for sign-off.',
    icon: '/thyssenkrupp_logo.png'
  };

  try {
    if (event.data) {
      data = event.data.json();
    }
  } catch (e) {
    // Fallback default
  }

  const options = {
    body: data.body,
    icon: '/thyssenkrupp_logo.png',
    badge: '/thyssenkrupp_logo.png',
    vibrate: [100, 50, 100],
    data: {
      url: self.location.origin
    },
    actions: [
      { action: 'approve', title: '✅ 1-Click Approve' },
      { action: 'open', title: '🔍 Open Portal' }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const targetUrl = event.notification.data ? event.notification.data.url : '/';
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
      for (let i = 0; i < clientList.length; i++) {
        let client = clientList[i];
        if (client.url === targetUrl && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
