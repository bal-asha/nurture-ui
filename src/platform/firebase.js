import firebase from "firebase/compat/app";
import {getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider} from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhB_A3jvg_9-yHKCVpLQAoUxkrAEkNYC8",
    authDomain: "balasha-nurture.firebaseapp.com",
    projectId: "balasha-nurture",
    storageBucket: "balasha-nurture.appspot.com",
    messagingSenderId: "662092165221",
    appId: "1:662092165221:web:9e50650e98d1d1363fd68c",
    measurementId: "G-BXFJ80HEZ7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = getAuth();

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});

const fbProvider  = new FacebookAuthProvider();

const appleProvider = new OAuthProvider('apple.com');

appleProvider.addScope('email');
appleProvider.addScope('name');


export {auth, googleProvider, fbProvider, appleProvider}