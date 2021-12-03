// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
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
//const analytics = getAnalytics(app);





//Registro

import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';

const auth = getAuth();

export function enviarRegistro(){
  let user=document.getElementById("remail").value
  let password=document.getElementById("rpassword").value

  createUserWithEmailAndPassword(auth, user, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    //const errorMessage = error.message;
    console.log(errorCode)
    switch(errorCode){
      case "auth/invalid-email":
        console.log("Ingresa tus datos");
        break;
      case "auth/internal-error":
        console.log("Ingresa tu contraseña");
        break;
      case "auth/missing-email":
        console.log("Ingresa tu correo electrónico");
        break;
    }
    // ..
  });

}

//Inicio de sesion
//import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';

export function enviarIngreso(){

  let user=document.getElementById("lemail").value
  let password=document.getElementById("lpassword").value

  signInWithEmailAndPassword(auth, user, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log("logueado")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}