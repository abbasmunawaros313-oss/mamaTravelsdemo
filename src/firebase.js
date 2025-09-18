// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8NuKExHOCnJ10MPJezTaeZoQeDGHE930",
  authDomain: "mema-travels.firebaseapp.com",
  projectId: "mema-travels",
  storageBucket: "mema-travels.firebasestorage.app",
  messagingSenderId: "675111988079",
  appId: "1:675111988079:web:3520e02e99b1cc68fd169a",
  measurementId: "G-4G989E0L89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
