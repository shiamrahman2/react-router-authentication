// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkLc26rz2evxCMGdXonyJ4pjH3IS6JsxY",
  authDomain: "react-router-authenticat-62de7.firebaseapp.com",
  projectId: "react-router-authenticat-62de7",
  storageBucket: "react-router-authenticat-62de7.firebasestorage.app",
  messagingSenderId: "309936229237",
  appId: "1:309936229237:web:6f2c8a61be104f2568613c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);