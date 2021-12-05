import { app } from "./firebase-initializer.js";

import {
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

const auth = getAuth(app);



/*******************Inicio de sesion con correo***************************/
export function enviarIngreso() {
  const email = document.getElementById("lemail").value;
  const password = document.getElementById("lpassword").value;
  console.log(email);
  console.log(password);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      //console.log({ user });
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

/************************Continuar con Google**********************************/
const provider = new GoogleAuthProvider(app);

export const loginGoogle = () => {
  signInWithRedirect(auth, provider);
  console.log("entrando a función google");

  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(token);
      const user = result.user;
    })
    .then(window.location.hash = "#/timeline")
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

/***************************Cerrar sesión***************************/

export const logOutGoogle = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("Haz salido de tu cuenta");
      window.location.hash = "#/";
    })
    .catch((error) => {
      // An error happened.
      console.log("Problemas al salir");
    });
};

/******************Registro con correo**************************/

export function enviarRegistro() {
  let user = document.getElementById("remail").value;
  let password = document.getElementById("rpassword").value;

  createUserWithEmailAndPassword(auth, user, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.location.hash = "#/timeline"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      //const errorMessage = error.message;
      console.log(errorCode);
    });
}

/********************Olvide mi contraseña**************************/

export function olvideContrasena() {
  //const auth = getAuth();
  const email = document.getElementById("lemail").value;
sendPasswordResetEmail(auth, email)
  .then(() => {
    alert("Se envió un email para reestablecer su contraseña")
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode)
    switch (errorCode) {
      case "auth/user-not-found":
        document.getElementById("errorLogin").innerHTML =
          "Usuario no registrado";
        break;
      case "auth/missing-email":
        document.getElementById("errorLogin").innerHTML =
          "Ingrese su correo";
        break;
      case "auth/invalid-email":
        document.getElementById("errorLogin").innerHTML = 
          "Correo inválido";
        break;
    }
    // ..
  });

}
