import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import {
  getFirestore,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-storage.js"

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
