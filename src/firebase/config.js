import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Pega aquí TU configuración de Firebase (esto es un ejemplo)
const firebaseConfig = {
  apiKey: "AIzaSyDXcp5y3tUWY9shDW7uMxJawMWEjS4kx4w",
  authDomain: "sobrio-web.firebaseapp.com",
  projectId: "sobrio-web",
  storageBucket: "sobrio-web.firebasestorage.app",
  messagingSenderId: "122345280696",
  appId: "1:122345280696:web:fc1ea89a28dc51aae5d04d",
  measurementId: "G-5D3S4EEP57"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };