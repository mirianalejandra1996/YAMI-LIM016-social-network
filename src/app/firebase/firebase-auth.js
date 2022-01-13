import {
  auth,
  app,
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
} from "../firebase/firebase-initializer.js";
export {
  sendPasswordResetEmail,
  auth,
}
import {
  validate_field,
  validate_password,
  validate_email,
} from "../helpers/forms-validation.js";

import { addUser } from "./firebase-data.js";


const provider = new GoogleAuthProvider(app);

// ! Qué dará esto?
auth.languageCode = "es";

/*******************Inicio de sesion con correo***************************/
export const enviarIngreso = (email,password) => signInWithEmailAndPassword(auth, email, password)

// export function enviarIngreso() {
//   const email = document.getElementById("lemail").value;
//   const password = document.getElementById("lpassword").value;

//   let $email = document.getElementById("lemail");
//   let $password = document.getElementById("lpassword");

//   // console.log(email);
//   // console.log(password);

//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       console.log("entramos al then de fn Enviar Ingreso");
//       const user = userCredential.user;
//       console.log({ user });
//       window.location.hash = "#/timeline";
//     })
//     .catch((error) => {
//       const errorCode = error.code;

//       $email.classList.add("error");
//       $password.classList.add("error");

//       switch (errorCode) {
//         case "auth/user-not-found":
//           document.getElementById("errorLogin").innerHTML =
//             "Usuario no registrado";
//           break;
//         case "auth/wrong-password":
//           document.getElementById("errorLogin").innerHTML =
//             "Contraseña inválida";
//           break;
//         case "auth/invalid-email":
//           document.getElementById("errorLogin").innerHTML = "Ingrese su correo";
//           break;
//         case "auth/internal-error":
//           document.getElementById("errorLogin").innerHTML =
//             "Ingrese su contraseña";
//           break;
//       }
//     });
// }

/************************Continuar con Google**********************************/

const user = auth.currentUser;
// console.log("este es el user actual", user);
//console.log("esto es auth", auth);

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
          // password: password,
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
// export function validate_email(email) {
//   const expression = /^([\.\_a-zA-Z0-9]+)@([a-zA-A]+)\.([a-zA-Z]){2,8}/;

//   return expression.test(email);
// }

// export function validate_password(password) {
//   // La contraseña debe tener entre 8 a 14 caracteres

//   const expression = /^.{6,14}$/;

//   // si hace match
//   if (!expression.test(password)) {
//     console.log("contraseña fallida");
//     // console.log("contraseña buena");
//   }
//   return expression.test(password);
// }

// export function validate_field(field) {
//   // const expression = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

//   // if (!expression.test(field) == true){
//   //   return false
//   // }

//   if (field.length <= 0 || field == null) {
//     console.log("field", field, "malo");
//     return false;
//   } else {
//     return true;
//   }
// }

/********************Olvide mi contraseña**************************/

// export function olvideContrasena() {
//   //const auth = getAuth();
//   const email = document.getElementById("lemail").value;
//   return sendPasswordResetEmail(auth, email)
//     .then(() => {
//       document.getElementById(
//         "errorLogin"
//       ).innerHTML = ` Se envió un mensaje al correo ${email}`;
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       console.log(errorCode);
//       switch (errorCode) {
//         case "auth/user-not-found":
//           document.getElementById("errorLogin").innerHTML =
//             "Usuario no registrado";
//           break;
//         case "auth/missing-email":
//           document.getElementById("errorLogin").innerHTML = "Ingrese su correo";
//           break;
//         case "auth/invalid-email":
//           document.getElementById("errorLogin").innerHTML = "Correo inválido";
//           break;
//       }
//       // ..
//     });
// }

export function changeNameAndPhotoAuth(objNewData) {
  const auth = getAuth();

  // console.log("probando ando", auth.currentUser);
  updateProfile(auth.currentUser, {
    displayName: objNewData.user_name,
    photoURL: objNewData.user_photo,
  })
    .then(() => {
      // Profile updated!
      // console.log("función updateBasicInfoUserAuth exitosa!");
      // ...
    })
    .catch((error) => {
      // An error occurred
      // console.log("función updateBasicInfoUserAuth fracasada!");
      // ...
    });
}

// Siempre me pedirán credencial para eliminar cuenta, cambiar contraseña o correo
export const createCredential = (user, password) => {
  const email = user.email;
  // const password = prompt("Please enter your current password:");
  const credential = EmailAuthProvider.credential(email, password);
  return credential;
};

// El método indicará la funcion (si es para actualizar el correo o la contraseña)

export const reautentificacion = async (user, credential) => {
  return await reauthenticateWithCredential(user, credential);
};

export const changePasswordAuth = (user, newPassword) => {
  return updatePassword(user, newPassword)
    .then(() => {
      console.log("si cambió la contraseña");
      // Update successful.
    })
    .catch((error) => {
      // An error ocurred
      console.log(
        "problemas para cambiar la contraseña en updatePassword",
        error
      );
      // ...
    });
};

export const changeEmailAuth = (user, newEmail) => {
  return updateEmail(user, newEmail);
  // .then(() => {
  //   console.log("Email updated! del metodo firebase");
  // })
  // .catch((error) => {
  //   console.log("catch para updateEmail de firebase method", error);
  // });
};
