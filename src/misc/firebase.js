import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';

const config = {
  apiKey: 'AIzaSyDCAhx1KAQaQLg-Cj9kPrEO-1qQ9CdcFy8',
  authDomain: 'chat-web-app-b76f0.firebaseapp.com',
  projectId: 'chat-web-app-b76f0',
  storageBucket: 'chat-web-app-b76f0.appspot.com',
  messagingSenderId: '121706901545',
  appId: '1:121706901545:web:2933186348797c7d0c6c38',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.usePublicVapidKey(
    'BNMZaKfB2DSUUPnsmrrotsXtm9ysFDSQZaUeKEBoyNSSQK3HKQT2eIdxpnDc46vuRVkWBcPmF9pWcHWraQxhodI'
  );

  messaging.onMessage(data => {
    console.log(data);
  });
}
