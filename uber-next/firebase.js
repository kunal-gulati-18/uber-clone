// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLipXOrrCF750n_u6-rYwTpCKM2v-BTNc",
  authDomain: "uber-clone-1ea60.firebaseapp.com",
  projectId: "uber-clone-1ea60",
  storageBucket: "uber-clone-1ea60.appspot.com",
  messagingSenderId: "1018406415515",
  appId: "1:1018406415515:web:62cd4e4e7357778cc2aa3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth();

export { app, provider, auth };