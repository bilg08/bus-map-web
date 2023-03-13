// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqkLkIgMtV107WPldlarPV2ntBMtClqwI",
  authDomain: "reactnativefirebase-5ad77.firebaseapp.com",
  projectId: "reactnativefirebase-5ad77",
  storageBucket: "reactnativefirebase-5ad77.appspot.com",
  messagingSenderId: "162165823997",
  appId: "1:162165823997:web:6245065a1bf05316982194",
  measurementId: "G-TDNMCQWPB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const rtDb = getDatabase(app);

export {db, auth, rtDb};