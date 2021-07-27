import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/functions';
import { Notification as Toast } from 'rsuite';
import { isLocalhost } from './helpers';

const config = {
  apiKey: 'AIzaSyDCAhx1KAQaQLg-Cj9kPrEO-1qQ9CdcFy8',
  authDomain: 'chat-web-app-b76f0.firebaseapp.com',
  projectId: 'chat-web-app-b76f0',
  storageBucket: 'chat-web-app-b76f0.appspot.com',
  messagingSenderId: '121706901545',
  appId: '1:121706901545:web:2933186348797c7d0c6c38',
};

export const fcmVapidKey =
  'BNMZaKfB2DSUUPnsmrrotsXtm9ysFDSQZaUeKEBoyNSSQK3HKQT2eIdxpnDc46vuRVkWBcPmF9pWcHWraQxhodI';

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
export const functions = app.functions('us-central1');

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.onMessage(({ notification }) => {
    const { title, body } = notification;
    Toast.info({ title, description: body, duration: 0 });
  });
}

if (isLocalhost) {
  functions.useEmulator('localhost', 5001);
}
