// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZnhxHUYXa1881zNXutKea3NEOe-cagU8",
  authDomain: "poke-maker-a0b48.firebaseapp.com",
  projectId: "poke-maker-a0b48",
  storageBucket: "poke-maker-a0b48.appspot.com",
  messagingSenderId: "13241979283",
  appId: "1:13241979283:web:9acf84cfb0df5993159866",
  measurementId: "G-H66X75VPMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
