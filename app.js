// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyA9QU5qfzI8ZEiwEd2rJpBYnq2jkoV-Zg0",

  authDomain: "anna-firebase-dev.firebaseapp.com",

  projectId: "anna-firebase-dev",

  storageBucket: "anna-firebase-dev.firebasestorage.app",

  messagingSenderId: "422269512796",

  appId: "1:422269512796:web:b2b34ccfa463b92871ca99",

  measurementId: "G-B2B0FVF9R1"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);