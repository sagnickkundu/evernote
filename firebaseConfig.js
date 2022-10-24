import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEpWtv6bHniwXcwlWw46XGchRcwIbC9QQ",
  authDomain: "evernote-clone-aa8ee.firebaseapp.com",
  projectId: "evernote-clone-aa8ee",
  storageBucket: "evernote-clone-aa8ee.appspot.com",
  messagingSenderId: "472211303688",
  appId: "1:472211303688:web:138e1d3818a3f2b589d0bd",
  measurementId: "G-XY6MDL4YRS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
