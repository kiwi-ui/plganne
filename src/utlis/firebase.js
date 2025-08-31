// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC6znTTokI-qh4K4Hw0LDHjNjIhCZYk5M",
  authDomain: "wish-wall-9156f.firebaseapp.com",
  projectId: "wish-wall-9156f",
  storageBucket: "wish-wall-9156f.firebasestorage.app",
  messagingSenderId: "637928233282",
  appId: "1:637928233282:web:6599ebd640469bcbb2d0db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

