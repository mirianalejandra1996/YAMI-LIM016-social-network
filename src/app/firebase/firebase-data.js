import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js"

// const firebaseApp = initializeApp({
//     apiKey: "AIzaSyB1tnQskPHc5NpzhYk6pPtJDjt0z5SbEJM",
//     authDomain: "yami-cbaa4.firebaseapp.com",
//     projectId: "yami-cbaa4"
// })

const db = getFirestore();

const usuario = {
    nombre: 'gaby',
    activo: true,
    fecha: 0
}

db.collection('usuarios')
    .add(usuario)