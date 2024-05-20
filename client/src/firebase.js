// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-af03d.firebaseapp.com",
    projectId: "mern-blog-af03d",
    storageBucket: "mern-blog-af03d.appspot.com",
    messagingSenderId: "64965955251",
    appId: "1:64965955251:web:d955aad776baa02f2aeac6"
};


export const app = initializeApp(firebaseConfig);