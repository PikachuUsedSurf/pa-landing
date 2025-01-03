import { initializeApp, getApps, getApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBIC3mT2iK3fqEM70rHknMtyZ3YhKpvsXo",
    authDomain: "patz-6d565.firebaseapp.com",
    projectId: "patz-6d565",
    storageBucket: "patz-6d565.firebasestorage.app",
    messagingSenderId: "649733974126",
    appId: "1:649733974126:web:86c40349a7f7b8f36fde7f",
  // Remove any potential path from the databaseURL
  databaseURL: "https://patz-6d565-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };

