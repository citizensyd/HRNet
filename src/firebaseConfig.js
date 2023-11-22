// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9F54ekAnf6tXxb33tUMsqgloArbh9rbM",
    authDomain: "hrnet-e81aa.firebaseapp.com",
    databaseURL: "https://hrnet-e81aa-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "hrnet-e81aa",
    storageBucket: "hrnet-e81aa.appspot.com",
    messagingSenderId: "836238970301",
    appId: "1:836238970301:web:7c0fd833a80af2eba516d4"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);