// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, writeBatch} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyABL6metZIgRgxENg0AJvWBWC0hkET4oHE",
  authDomain: "misc-9de44.firebaseapp.com",
  projectId: "misc-9de44",
  storageBucket: "misc-9de44.appspot.com",
  messagingSenderId: "832583097750",
  appId: "1:832583097750:web:36486c46dc20ed86ba91b7",
  measurementId: "G-K1LPLFNYX6"
};


const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
export const storage = getStorage(app);
export const batch = writeBatch(database)