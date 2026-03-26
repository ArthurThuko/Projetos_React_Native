// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8kTFptlYNJCO3wsw1DVX_qwQ-txr94Qc",
  authDomain: "projeto-2026-1-2d96b.firebaseapp.com",
  projectId: "projeto-2026-1-2d96b",
  storageBucket: "projeto-2026-1-2d96b.firebasestorage.app",
  messagingSenderId: "61306130235",
  appId: "1:61306130235:web:d78654973918d8180a311e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };