import { MOCK_DATA } from "./data.js";

import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore"

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
const app = initializeApp(firebaseConfig);
const db = getFirestore( app )

const productosRef = collection(db, 'productos')

MOCK_DATA.forEach(item => {
    delete item.id

    addDoc(productosRef, item)
})
