import { app } from "./firebase-initializer.js";

import {
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

/*******************Inicio de sesion con correo***************************/
export function enviarIngreso() {
  const email = document.getElementById("lemail").value;
  const password = document.getElementById("lpassword").value;

  let $email = document.getElementById("lemail");
  let $password = document.getElementById("lpassword");

  // console.log(email);
  // console.log(password);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("entramos al then de fn Enviar Ingreso");
      const user = userCredential.user;
      console.log({ user });
      window.location.hash = "#/timeline";
    })

    .catch((error) => {
      const errorCode = error.code;

      $email.classList.add("error");
      $password.classList.add("error");

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

const user = auth.currentUser;
console.log("este es el user actual", user);
console.log("esto es auth", auth);

getRedirectResult(auth)
  .then((result) => {
    console.log("check result getRedirectresult", result);
    // window.location.hash = "#/timeline";
    result ? (window.location.hash = "#/timeline") : false;
  })
  .catch((error) => {
    console.log("error en getredirectresult", error);
  });

// ! Consultar como se usa, cuando se usa??
onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.hash = "#/timeline";
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;

    console.log("el usuario ya está logueado!");
    // ...
  } else {
    // User is signed out
    // ...

    // window.location.hash = "#/";

    console.log("el usuario ya está sign out!");
  }
});

export const loginGoogle = () => {
  signInWithRedirect(auth, provider);
};

/***************************Cerrar sesión***************************/

export const logOutGoogle = () => {
  const auth = getAuth();
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
  document.getElementById("errorLogin").textContent = "";
  // Primera vista de registro

  let $name = document.getElementById("rname");
  let $email = document.getElementById("remail");
  let $password = document.getElementById("rpassword");

  $name.classList.remove("error");
  $email.classList.remove("error");
  $password.classList.remove("error");

  let name = $name.value.trim();
  let email = $email.value.trim();
  let password = $password.value.trim();

  // Validando los campos

  // ------------------------------------

  if (!validate_email(email) || !validate_password(password)) {
    document.getElementById("errorLogin").textContent = "Datos inválidos";
  }

  if (
    !validate_field(name) ||
    !validate_field(email) ||
    !validate_field(password)
  ) {
  }
  if (
    validate_email(email) == false ||
    validate_password(password) == false ||
    validate_field(field) == false
  ) {
    // ------------------------------------

    document.getElementById("errorLogin").textContent = "Datos inválidos";
    // document.getElementById("errorLogin").textContent =
    //   "Datos inválidos, ingrese un correo y una clave entre 8-14 dìgitos";

    // Pinta el input

    $name.classList.remove("success");
    $email.classList.remove("success");
    $password.classList.remove("success");

    $name.classList.add("error");
    $email.classList.add("error");
    $password.classList.add("error");
  } else {
    $name.classList.remove("error");
    $email.classList.remove("error");
    $password.classList.remove("error");

    $name.classList.add("success");
    $email.classList.add("success");
    $password.classList.add("success");

    // Validando los campos de la siguiente vista, si están vacios
    // if ()
    // console.log('Alguno de los campos es inválido')

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const userCurrent = auth.currentUser;

        //Añadimos a este usuario en nuestra base de datos

        const database_ref = database.ref();

        // Creamos la data del usuario

        // const user_data = {
        //   email: email,
        //   full_name: full_name,
        //   // date
        //   //
        // };

        // Lo añadimos a nuestra base de datos de firebase
        database_ref.child("user/" + user.uid).set(user_data);

        console.log("usuario creado");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
}

// nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.

// El correo debe ser válido, con formato de correo electrónico

// ("Rellene todos los campos");
// ("El correo no es válido");
// ("");
// ("La contraseña debe tener entre 8 y 16 carácteres, al menos una letra mayúscula, una letra minúscula y un número");

// Funciones validadoras
function validate_email(email) {
  const expression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  if (expression.test(email) == true) {
    // El email está bueno
    return true;
  } else {
    return false;
  }
}

function validate_password(password) {
  // La contraseña debe tener :
  // Minimo 8 caracteres
  // Maximo 15
  // Al menos una letra mayúscula
  // Al menos una letra minucula
  // Al menos un dígito
  // No espacios en blanco
  // Al menos 1 caracter especial

  const expression =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,16}$/;

  if (expression.test(password) == true) {
    return true;
  } else {
    return false;
  }
}

function validate_field(field) {
  // const expression = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

  // if (!expression.test(field) == true){
  //   return false
  // }

  if (field == null) {
    return false;
  }

  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
}

/********************Olvide mi contraseña**************************/

export function olvideContrasena() {
  //const auth = getAuth();
  const email = document.getElementById("lemail").value;
  sendPasswordResetEmail(auth, email)
    .then(() => {
      document.getElementById("errorLogin").innerHTML =
        "Se envió un mensaje a su correo";
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      switch (errorCode) {
        case "auth/user-not-found":
          document.getElementById("errorLogin").innerHTML =
            "Usuario no registrado";
          break;
        case "auth/missing-email":
          document.getElementById("errorLogin").innerHTML = "Ingrese su correo";
          break;
        case "auth/invalid-email":
          document.getElementById("errorLogin").innerHTML = "Correo inválido";
          break;
      }
      // ..
    });
}
