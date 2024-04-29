// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzGiCSSZVASxYONiQc6alIM1pJJDWOTeo",
  authDomain: "eventee-4f066.firebaseapp.com",
  projectId: "eventee-4f066",
  storageBucket: "eventee-4f066.appspot.com",
  messagingSenderId: "592194879053",
  appId: "1:592194879053:web:51ceeb01cd030e3d37a604",
  measurementId: "G-8MY5DQFVCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;