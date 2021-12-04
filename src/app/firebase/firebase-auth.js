import { app } from "./firebase-initializer.js";
import {
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";


/*******************Inicio de sesion***************************/
export function enviarIngreso() {
  const email = document.getElementById("lemail").value;
  const password = document.getElementById("lpassword").value;
  console.log(email);
  console.log(password);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log({ user });
      window.location.hash = "#/timeline";
    })

    .catch((error) => {
      const errorCode = error.code;
      switch (errorCode) {
        case "auth/user-not-found":
          document.getElementById("errorLogin").innerHTML =
            "Usuario no registrado";
          break;
        case "auth/wrong-password":
          document.getElementById("errorLogin").innerHTML =
            "Contraseña inválida";
          break;
        case "auth/invalid-email":
          document.getElementById("errorLogin").innerHTML = "Ingrese su correo";
          break;
        case "auth/internal-error":
          document.getElementById("errorLogin").innerHTML =
            "Ingrese su contraseña";
          break;
      }
    });
}

/******************Registro**************************/

const auth = getAuth();

export function enviarRegistro() {
  let user = document.getElementById("remail").value;
  let password = document.getElementById("rpassword").value;

  createUserWithEmailAndPassword(auth, user, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      //const errorMessage = error.message;
      console.log(errorCode);
      /*switch(errorCode){
        case "auth/invalid-email":
          console.log("Ingresa tus datos");
          break;
        case "auth/internal-error":
          console.log("Ingresa tu contraseña");
          break;
        case "auth/missing-email":
          console.log("Ingresa tu correo electrónico");
          break;
      }*/
      // ..
    });
}
