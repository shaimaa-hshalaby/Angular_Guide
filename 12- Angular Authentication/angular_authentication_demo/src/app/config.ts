// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVpu49ptX6sOjW2CxrLECqUOeUTUxbHkU",
  authDomain: "auth-demo-21f85.firebaseapp.com",
  projectId: "auth-demo-21f85",
  storageBucket: "auth-demo-21f85.appspot.com",
  messagingSenderId: "108140886511",
  appId: "1:108140886511:web:d59b0ff9edb64ae5f29e1a",
  measurementId: "G-WVMCYPME7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);