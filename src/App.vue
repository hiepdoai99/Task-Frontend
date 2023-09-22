<script setup>
import AppNav from "./components/NavigateBar.vue";
import AppFooter from './components/footer.vue'
// start of fire base set up
import { initializeApp } from "firebase/app";
import { getMessaging, getToken,onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyD0PBwqZwu-m42JPh3OH0AGl4fdhwYaqL4",
  authDomain: "task-app-notification-test.firebaseapp.com",
  projectId: "task-app-notification-test",
  storageBucket: "task-app-notification-test.appspot.com",
  messagingSenderId: "181579741608",
  appId: "1:181579741608:web:a217a6e6e1ece96644459d",
  measurementId: "G-STDBPYDW72"
};
// Initialize Firebase
initializeApp(firebaseConfig);

const messaging = getMessaging();
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});

getToken(messaging, { vapidKey: 'BAEH5ipVQJBFUHrqW_0Yv-OjR1_K8cmRcWuu3IdT17Hxz4n5KtgOEVZJF0TLNEA82mUMwM6nkT7HTGowfGaykik' }).then((currentToken) => {
  if (currentToken) {
    console.log('Token is:',currentToken)
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err)
});
// end of firebase set up

</script>
<template>
  <div class="page-container">
    <AppNav/>
    <div class="content-wrap">
      <router-view></router-view>
    </div>
    <AppFooter/>
  </div>

</template>

<style>
.page-container {
  position: relative;
  min-height: 100vh;
}

.content-wrap {
  padding-bottom: 5rem; 
}
</style>

