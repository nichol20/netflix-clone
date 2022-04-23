// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0M3yXqw2WDd7qHgFcHHT9XeuaseCslTY",
  authDomain: "netflix-clone-c5e0a.firebaseapp.com",
  projectId: "netflix-clone-c5e0a",
  storageBucket: "netflix-clone-c5e0a.appspot.com",
  messagingSenderId: "14240936026",
  appId: "1:14240936026:web:a547f84e479135d712e863",
  measurementId: "G-HEEJ12GFFC"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }