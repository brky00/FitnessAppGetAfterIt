// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqUkQtqJWiQFNzqVdDsILdAiX2_4TIKlU",
    authDomain: "getafterit-firebase.firebaseapp.com",
    projectId: "getafterit-firebase",
    storageBucket: "getafterit-firebase.appspot.com",
    messagingSenderId: "56612858968",
    appId: "1:56612858968:web:b0340b23aa0a742633ee2d",
    measurementId: "G-LFXVMW0LKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);