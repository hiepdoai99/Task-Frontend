// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyD0PBwqZwu-m42JPh3OH0AGl4fdhwYaqL4",
  authDomain: "task-app-notification-test.firebaseapp.com",
  projectId: "task-app-notification-test",
  storageBucket: "task-app-notification-test.appspot.com",
  messagingSenderId: "181579741608",
  appId: "1:181579741608:web:a217a6e6e1ece96644459d",
  measurementId: "G-STDBPYDW72",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/img/notification-256x256.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
