// Import the functions you need from the SDKs you need
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCaRsXThI96iy-B-r8fDzksarii4ZoEb8c',
  authDomain: 'expense-tracker-25746.firebaseapp.com',
  projectId: 'expense-tracker-25746',
  storageBucket: 'expense-tracker-25746.firebasestorage.app',
  messagingSenderId: '354633440335',
  appId: '1:354633440335:web:e6c39be84e3addacda1e3a',
  measurementId: 'G-N921FTX9RZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// auth
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

//db
export const firestore = getFirestore(app);
