import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgj9bAy94ucxEEb-ZixgXrnYtFEkdq4NQ",
  authDomain: "linkedin-clone-us.firebaseapp.com",
  projectId: "linkedin-clone-us",
  storageBucket: "linkedin-clone-us.appspot.com",
  messagingSenderId: "893032092398",
  appId: "1:893032092398:web:7d7f4d0ffe0288a50159ff",
  measurementId: "G-EJEHKBPW97",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth, db };
