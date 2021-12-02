// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1tnQskPHc5NpzhYk6pPtJDjt0z5SbEJM",
  authDomain: "yami-cbaa4.firebaseapp.com",
  projectId: "yami-cbaa4",
  storageBucket: "yami-cbaa4.appspot.com",
  messagingSenderId: "183307954304",
  appId: "1:183307954304:web:e251753afe33cc0cf4de65",
  measurementId: "G-VY53L4LKKC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



