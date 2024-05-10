// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import { getStorage } from 'firebase/storage';

import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// web app's Firebase configuration
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

// Initializing Firebase here.
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const db = getFirestore(app)
const storage = getStorage(app);
const auth = getAuth(app);
const analytics = getAnalytics(app)


// Export the Firebase services that you want to use
export { auth,storage, db, analytics };



  
 
  
