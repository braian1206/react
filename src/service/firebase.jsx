// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0ubl_5yjSI0H866iepOviPbIkMDYJAfA",
  authDomain: "react-6a200.firebaseapp.com",
  projectId: "react-6a200",
  storageBucket: "react-6a200.firebasestorage.app",
  messagingSenderId: "820982735870",
  appId: "1:820982735870:web:a697fb6f7dea7b338696af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)