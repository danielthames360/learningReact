// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw5NuvHXUxc-_l04-LyqcXk2PEKh2whlc",
  authDomain: "reactcourse-f69f3.firebaseapp.com",
  projectId: "reactcourse-f69f3",
  storageBucket: "reactcourse-f69f3.appspot.com",
  messagingSenderId: "64016751068",
  appId: "1:64016751068:web:f9dbed86457d9736da9719",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
