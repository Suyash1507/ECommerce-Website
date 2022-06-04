// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMnks0s9TyWJ9RIHQseYfyMD_5cDyBiHE",
  authDomain: "eshop-94060.firebaseapp.com",
  projectId: "eshop-94060",
  storageBucket: "eshop-94060.appspot.com",
  messagingSenderId: "246000566143",
  appId: "1:246000566143:web:1470a113566ac81da9644a",
  measurementId: "G-DVFY8B9EBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };