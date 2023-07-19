// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCB5n5OSr2tD7MgyVjJSku9aewkazdHhlw",
  authDomain: "clinica-7dda2.firebaseapp.com",
  projectId: "clinica-7dda2",
  storageBucket: "clinica-7dda2.appspot.com",
  messagingSenderId: "637919130946",
  appId: "1:637919130946:web:8e0b27f8705a2317d0c4db",
  measurementId: "G-P210WM3MF7",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };
