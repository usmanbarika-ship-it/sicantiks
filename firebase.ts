
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb9Hae6oC7diGNjZY2wm1RXZe6cPhWdqQ",
  authDomain: "sicantiks.firebaseapp.com",
  projectId: "sicantiks",
  storageBucket: "sicantiks.firebasestorage.app",
  messagingSenderId: "386624118018",
  appId: "1:386624118018:web:b9afa4865a84a19f0bf61b",
  measurementId: "G-G6MNYKNSQP",
  firestoreDatabaseId: "(default)"
};

// Initialize Firebase SDK
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);

export default app;
