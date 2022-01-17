// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js';

// Importacion de metodos
import {
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
  onAuthStateChanged,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';

import {
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
  // eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js';

import {
  getStorage,
  uploadBytes,
  ref,
  getDownloadURL,
  // eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-storage.js';

const firebaseConfig = {
  apiKey: 'AIzaSyB1tnQskPHc5NpzhYk6pPtJDjt0z5SbEJM',
  authDomain: 'yami-cbaa4.firebaseapp.com',
  projectId: 'yami-cbaa4',
  storageBucket: 'yami-cbaa4.appspot.com',
  messagingSenderId: '183307954304',
  appId: '1:183307954304:web:e251753afe33cc0cf4de65',
  measurementId: 'G-VY53L4LKKC',
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

const auth = getAuth(app);

export {
  db,
  storage,
  auth,
  getStorage,
  uploadBytes,
  ref,
  getFirestore,
  getDownloadURL,
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
  initializeApp,
  onAuthStateChanged,
};
