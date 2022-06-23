import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0BMtXW5hN8Wq2klN3j4YKDdpTUAClLss",
  authDomain: "itss-firebase-e5753.firebaseapp.com",
  projectId: "itss-firebase-e5753",
  storageBucket: "itss-firebase-e5753.appspot.com",
  messagingSenderId: "214204579687",
  appId: "1:214204579687:web:cd7139ec52a659da22f9c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
