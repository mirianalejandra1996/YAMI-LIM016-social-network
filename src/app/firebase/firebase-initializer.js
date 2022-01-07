import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import {
  getFirestore,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-storage.js"

// Importacion de metodos

export {
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
  updateProfile,
  reauthenticateWithCredential,
  EmailAuthProvider,
  // updatePassword,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

export {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  query,
  where,
  getDocs,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot,
  deleteDoc,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";

export {
  uploadBytes,
  ref,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-storage.js";


const firebaseConfig = {
  apiKey: "AIzaSyB1tnQskPHc5NpzhYk6pPtJDjt0z5SbEJM",
  authDomain: "yami-cbaa4.firebaseapp.com",
  projectId: "yami-cbaa4",
  storageBucket: "yami-cbaa4.appspot.com",
  messagingSenderId: "183307954304",
  appId: "1:183307954304:web:e251753afe33cc0cf4de65",
  measurementId: "G-VY53L4LKKC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const storage = getStorage();
