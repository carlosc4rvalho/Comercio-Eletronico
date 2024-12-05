const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyA6Wp1kyqE_T8Wnu66hVlrbbf9Op7o9roI",
  authDomain: "ifpr-4c366.firebaseapp.com",
  projectId: "ifpr-4c366",
  storageBucket: "ifpr-4c366.firebasestorage.app",
  messagingSenderId: "866779666253",
  appId: "1:866779666253:web:b36cb9ed499f30910d0904",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

module.exports = db;
