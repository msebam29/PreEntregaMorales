// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbB1L_Gw9xBiGifo9sMyDRdghCPlK0ncY",
  authDomain: "proyectofinalrjsmorales.firebaseapp.com",
  projectId: "proyectofinalrjsmorales",
  storageBucket: "proyectofinalrjsmorales.appspot.com",
  messagingSenderId: "336895673485",
  appId: "1:336895673485:web:0106f6224325c1cb8bcec4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()