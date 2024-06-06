// src/firebase.js
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBfGTsL2lMmLPV9VpTjMy64sl2EU1Qenn4",
    authDomain: "auth-613f8.firebaseapp.com",
    projectId: "auth-613f8",
    storageBucket: "auth-613f8.appspot.com",
    messagingSenderId: "844642679586",
    appId: "1:844642679586:web:6919cf144f237a5b9b837b"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export default auth;


