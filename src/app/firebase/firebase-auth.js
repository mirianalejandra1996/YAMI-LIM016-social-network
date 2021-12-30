import { app } from "../firebase/firebase-initializer.js";
// import { checkRegisteredUser } from "../firebase/firebase-data.js";

import {
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  updateEmail,
  updateProfile,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

import { addUser } from "./firebase-data.js";
export const auth = getAuth(app);

const provider = new GoogleAuthProvider(app);

// ! Qué dará esto?
auth.languageCode = "es";

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
// console.log("este es el user actual", user);
console.log("esto es auth", auth);

export const loginGoogle = () => {
  // ! Deberiamos chequear primero si esta cuenta ya se encuentra registrada en el firebase,
  // ! en caso de estar en el firestore, pedirle que ingrese sus datos
  signInWithPopup(auth, provider)
    .then((response) => {
      const user = response.user;
      console.log("sign in pop exitoso", user);
      addUser(user, "", "");
      window.location.hash = "#/timeline";
    })
    .catch((err) => console.log(err));
};

/***************************Cerrar sesión***************************/

export const logOutGoogle = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("Haz salido de tu cuenta");
      // window.location.hash = "#/";
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

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // const userCurrent = auth.currentUser;

        //Añadimos a este usuario en nuestra base de datos
        console.log("usuario creado");
        return addUser(user, name, password);
      })
      .then(() => {
        console.log(
          "entramos al primer then de CreateUserWithEmailAndPassword"
        );

        return updateProfile(auth.currentUser, {
          displayName: name,
          password: password,
          photoURL:
            "https://firebasestorage.googleapis.com/v0/b/yami-cbaa4.appspot.com/o/user.png?alt=media&token=bfe80508-5817-4d84-83e1-6a074a16f198",
        })
          .then(() => {
            console.log(
              "entramos al primer then anidado interno de updateProfile"
            );
            // Profile updated!
            console.log("Ya se le modificó el nombre al usuario");
            window.location.hash = "#/timeline";
          })
          .catch((error) => {
            console.log(
              "se presentó un problema al cambiar el displayName del usuario",
              error
            );
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        const errorCode = error.code;

        switch (errorCode) {
          case "auth/email-already-in-use":
            document.getElementById("errorLogin").textContent =
              "El correo ingresado ya está en uso";
            break;
          default:
        }
      });
  }
}

// todo: pendiente hacer funcionalidad de validación de nombre
// nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
// Funciones validadoras
export function validate_email(email) {
  const expression = /^([\.\_a-zA-Z0-9]+)@([a-zA-A]+)\.([a-zA-Z]){2,8}/;

  return expression.test(email);
}

export function validate_password(password) {
  // La contraseña debe tener entre 8 a 14 caracteres

  const expression = /^.{6,14}$/;

  // si hace match
  if (!expression.test(password)) {
    console.log("contraseña fallida");
    // console.log("contraseña buena");
  }
  return expression.test(password);
}

export function validate_field(field) {
  // const expression = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

  // if (!expression.test(field) == true){
  //   return false
  // }

  if (field.length <= 0 || field == null) {
    console.log("field", field, "malo");
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

/********************Actualiza datos del usuario autenticado (CORREO)**************************/

// export const updateEmailUserAuth = (objNewData) => {
//   const auth = getAuth();

//   console.log("este es el correo, ", objNewData.user_email);
//   return updateEmail(auth.currentUser, objNewData.user_email)
//     .then(() => {
//       // console.log("Email updated!");
//       console.log("Email updated! de updateEmail", error);

//       // signInWithEmailAndPassword(
//       //   auth,
//       //   objNewData.user_email,
//       //   objNewData.user_password
//       // )
//       //   .then((userCredential) => {
//       //     console.log("volvemos a ingresar!");
//       //     const user = userCredential.user;
//       //     console.log({ user });
//       //   })
//       //   .catch((error) => {
//       //     // Email updated!
//       //     // ...
//       //     // return true;
//       //   });
//     })
//     .catch((error) => {
//       // An error occurred
//       console.log("error catch de updateEmail", error);
//       // ...
//       return false;
//     });
// };

// -------------------------------------------------------------------------------------
export function updateBasicInfoUserAuth(objNewData) {
  const auth = getAuth();

  // console.log("probando ando", auth.currentUser);
  updateProfile(auth.currentUser, {
    displayName: objNewData.user_name,
    email: objNewData.user_email,
    // photoURL: objNewData.user_photo
    // photoURL: "https://example.com/jane-q-user/profile.jpg"
  })
    .then(() => {
      // Profile updated!
      console.log("función updateBasicInfoUserAuth exitosa!");
      // ...
    })
    .catch((error) => {
      // An error occurred
      console.log("función updateBasicInfoUserAuth fracasada!");
      // ...
    });
}

// user_photo: objNewData.user_photo,
//  user_name: objNewData.user_name,
//  user_birth: objNewData.user_birth,
//  user_email: objNewData.user_email,
//  user_password: objNewData.user_password,

export const reauthenticate = (objNewData) => {
  const auth = getAuth();
  const user = auth.currentUser;

  // TODO(you): prompt the user to re-provide their sign-in credentials
  // const credential = createCredential(user);
  // const credential = auth.EmailAuthProvider.credential(
  //   user.email,
  //   userProvidedPassword
  // );
  // const credential = promptForCredentials();

  const password = "labolabo";
  const { currentUser } = auth;
  const { email } = currentUser;
  const credential = EmailAuthProvider.credential(email, password);
  console.log("que es esta credencial? => ", credential);

  reauthenticateWithCredential(user, credential)
    .then(() => {
      updateEmailUserAuth(objNewData);
      console.log("User re-authenticated!");
      // console.log('Email Updated!');
      // User re-authenticated.
    })
    .catch((error) => {
      console.log("catch de la funcion de autenticar");
      // An error ocurred
      // ...
    });
};

export const updateEmailUserAuth = (objNewData) => {
  const auth = getAuth();

  console.log("este es el correo, ", objNewData.user_email);
  return updateEmail(auth.currentUser, objNewData.user_email)
    .then(() => {
      console.log("Email updated! de updateEmailAuth");
    })
    .catch((error) => {
      // An error occurred
      console.log("error catch de updateEmail", error);
      // ...
      return false;
    });
};

// ------------------------------------------------

// export const reauthenticate = (objNewData) => {
//   const auth = getAuth();
//   const user = auth.currentUser;

//   // TODO(you): prompt the user to re-provide their sign-in credentials
//   const credential = promptForCredentials();

//   reauthenticateWithCredential(user, credential)
//     .then(() => {
//       // User re-authenticated.
//     })
//     .catch((error) => {
//       // An error ocurred
//       // ...
//     });
// };
