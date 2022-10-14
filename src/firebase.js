import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCzwN-0JZqNGZwaDJxnCeFMOX0m1GTJErs",
  authDomain: "line-clone-facae.firebaseapp.com",
  projectId: "line-clone-facae",
  storageBucket: "line-clone-facae.appspot.com",
  messagingSenderId: "134957965472",
  appId: "1:134957965472:web:0384c33e73067db6b429c5",
  measurementId: "G-CTCWMF3MTN"
})

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth }