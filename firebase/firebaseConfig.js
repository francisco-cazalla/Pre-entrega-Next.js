// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCycMC49FkAjf6EBQ-bMMl2PJqrKLpZaoo",
  authDomain: "products-33c7c.firebaseapp.com",
  projectId: "products-33c7c",
  storageBucket: "products-33c7c.firebasestorage.app",
  messagingSenderId: "482750211241",
  appId: "1:482750211241:web:52c32171aa96ee1ff7f5b8",
  measurementId: "G-V8L52DVY96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Esto es lo que debes exportar

export { db };