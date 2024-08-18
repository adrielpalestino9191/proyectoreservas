// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBj_yVdAzYGwRgmoHzVwpwUVqltQfv8JDQ",
  authDomain: "appreservas-b4382.firebaseapp.com",
  projectId: "appreservas-b4382",
  storageBucket: "appreservas-b4382.appspot.com",
  messagingSenderId: "99576766147",
  appId: "1:99576766147:web:5e4eab5c32e44df1740c76",
  measurementId: "G-ZW9WPKFP3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
