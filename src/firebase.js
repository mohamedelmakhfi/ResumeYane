import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "resumeyane.firebaseapp.com",
  projectId: "resumeyane",
  storageBucket: "resumeyane.appspot.com",
  messagingSenderId: "47887264208",
  appId: "1:47887264208:web:d3fcd25adb0dc1955af1d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);