// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi9oaQ6-arRv9k_FK2tmLltLXPNvaGkL0",
  authDomain: "kurban-2024-2.firebaseapp.com",
  projectId: "kurban-2024-2",
  storageBucket: "kurban-2024-2.appspot.com",
  messagingSenderId: "235702326192",
  appId: "1:235702326192:web:f8ecff4a640c516cf93c75",
  measurementId: "G-B890GTGWQ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
