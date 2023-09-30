// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB379Mtst0KUBuQvdugZEMFjukVkYxOpsY",
  authDomain: "mfoh-website.firebaseapp.com",
  projectId: "mfoh-website",
  storageBucket: "mfoh-website.appspot.com",
  messagingSenderId: "6640430238",
  appId: "1:6640430238:web:59dd5dd9d60cae90e35f8f",
  measurementId: "G-17G9TQXBEQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, db };
