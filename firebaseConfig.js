import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCAwxFDBePj34ZmMiKVrTuCWkqgvfXLqME",
    authDomain: "the-heat-26e2b.firebaseapp.com",
    projectId: "the-heat-26e2b",
    storageBucket: "the-heat-26e2b.appspot.com",
    messagingSenderId: "1008174048247",
    appId: "1:1008174048247:web:6a98815da72048a67a44f2",
    measurementId: "G-PC1SN2JZXC"
  };
  

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
// export const auth = firebase.auth();