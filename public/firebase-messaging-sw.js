/* eslint-disable no-undef */

importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyDCAhx1KAQaQLg-Cj9kPrEO-1qQ9CdcFy8',
  authDomain: 'chat-web-app-b76f0.firebaseapp.com',
  projectId: 'chat-web-app-b76f0',
  storageBucket: 'chat-web-app-b76f0.appspot.com',
  messagingSenderId: '121706901545',
  appId: '1:121706901545:web:2933186348797c7d0c6c38',
});

firebase.messaging();
