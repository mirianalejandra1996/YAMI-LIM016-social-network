import {
  auth,
  app,
  signInWithEmailAndPassword,
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
} from './firebase-initializer.js';

import {
  validateField,
  validatePassword,
  validateEmail,
} from '../helpers/forms-validation.js';

import { addUser } from './firebase-data.js';

export { sendPasswordResetEmail, auth };

const provider = new GoogleAuthProvider(app);

// ! Qué dará esto?
auth.languageCode = 'es';

/** *****************Inicio de sesion con correo************************** */
export const enviarIngreso = (email, password) => signInWithEmailAndPassword(auth, email, password);

// export function enviarIngreso() {
//   const email = document.getElementById("lemail").value;
//   const password = document.getElementById("lpassword").value;

//   let email = document.getElementById("lemail");
//   let password = document.getElementById("lpassword");

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

//       email.classList.add("error");
//       password.classList.add("error");

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

/** **********************Continuar con Google********************************* */

// const user = auth.currentUser;
// console.log("este es el user actual", user);
// console.log("esto es auth", auth);

export const loginGoogle = () => signInWithPopup(auth, provider)
// ! Deberiamos chequear primero si esta cuenta ya se encuentra registrada en el firebase,
  // ! en caso de estar en el firestore, pedirle que ingrese sus datos
  .then((response) => {
    const user = response.user;
    addUser(user, '', '');
    window.location.hash = '#/timeline';
  });

/** *************************Cerrar sesión************************** */

export const logOutGoogle = () => {
  // const auth = getAuth();
  signOut(auth);
  // .then(() => {
  //   // Sign-out successful.
  //   console.log('Haz salido de tu cuenta');
  //   // window.location.hash = "#/";
  // })
  // .catch((error) => {
  //   // An error happened.
  //   console.log('Problemas al salir');
  // });
};

/** ****************Registro con correo************************* */

export function enviarRegistro() {
  document.getElementById('errorLogin').textContent = '';
  // Primera vista de registro

  const name = document.getElementById('rname');
  const email = document.getElementById('remail');
  const password = document.getElementById('rpassword');

  name.classList.remove('error');
  email.classList.remove('error');
  password.classList.remove('error');

  const nameV = name.value.trim();
  const emailV = email.value.trim();
  const passwordV = password.value.trim();
  // Validando los campos

  // ------------------------------------

  if (!validateEmail(emailV) || !validatePassword(passwordV)) {
    document.getElementById('errorLogin').textContent = 'Datos inválidos';
  }

  if (
    !validateField(nameV)
    || !validateField(emailV)
    || !validateField(passwordV)
  ) {
    // ------------------------------------

    document.getElementById('errorLogin').textContent = 'Datos inválidos';
    // document.getElementById("errorLogin").textContent =
    //   "Datos inválidos, ingrese un correo y una clave entre 8-14 dìgitos";

    // Pinta el input

    name.classList.remove('success');
    email.classList.remove('success');
    password.classList.remove('success');

    name.classList.add('error');
    email.classList.add('error');
    password.classList.add('error');
  } else {
    name.classList.remove('error');
    email.classList.remove('error');
    password.classList.remove('error');

    name.classList.add('success');
    email.classList.add('success');
    password.classList.add('success');

    // Validando los campos de la siguiente vista, si están vacios

    createUserWithEmailAndPassword(auth, emailV, passwordV)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // Añadimos a este usuario en nuestra base de datos
        return addUser(user, nameV, passwordV);
      })
      .then(() => updateProfile(auth.currentUser, {
        displayName: nameV,
        photoURL:
            'https://firebasestorage.googleapis.com/v0/b/yami-cbaa4.appspot.com/o/user.png?alt=media&token=bfe80508-5817-4d84-83e1-6a074a16f198',
      })
        .then(() => {
          // Profile updated!
          window.location.hash = '#/timeline';
        }))
      .catch((error) => {
        const errorCode = error.code;

        switch (errorCode) {
          case 'auth/email-already-in-use':
            document.getElementById('errorLogin').textContent = 'El correo ingresado ya está en uso';
            break;
          default:
        }
      });
  }
}

// todo: pendiente hacer funcionalidad de validación de nombre
// nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}/, // Letras y espacios, pueden llevar acentos.
// Funciones validadoras
// export function validateEmail(email) {
//   const expression = /^([\.\_a-zA-Z0-9]+)@([a-zA-A]+)\.([a-zA-Z]){2,8}/;

//   return expression.test(email);
// }

// export function validatePassword(password) {
//   // La contraseña debe tener entre 8 a 14 caracteres

//   const expression = /^.{6,14}/;

//   // si hace match
//   if (!expression.test(password)) {
//     console.log("contraseña fallida");
//     // console.log("contraseña buena");
//   }
//   return expression.test(password);
// }

// export function validateField(field) {
//   // const expression = /^[a-zA-ZÀ-ÿ\s]{1,40}/;

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

/** ******************Olvide mi contraseña************************* */

// export function olvideContrasena() {
//   //const auth = getAuth();
//   const email = document.getElementById("lemail").value;
//   return sendPasswordResetEmail(auth, email)
//     .then(() => {
//       document.getElementById(
//         "errorLogin"
//       ).innerHTML = ` Se envió un mensaje al correo {email}`;
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
  // const auth = getAuth();

  // console.log("probando ando", auth.currentUser);
  updateProfile(auth.currentUser, {
    displayName: objNewData.user_name,
    photoURL: objNewData.user_photo,
  });
  // .then(() => {
  //   // Profile updated!
  //   // console.log("función updateBasicInfoUserAuth exitosa!");
  //   // ...
  // })
  // .catch((error) => {
  //   // An error occurred
  //   // console.log("función updateBasicInfoUserAuth fracasada!");
  //   // ...
  // });
}

// Siempre me pedirán credencial para eliminar cuenta, cambiar contraseña o correo
export const createCredential = (user, password) => {
  const email = user.email;
  // const password = prompt("Please enter your current password:");
  const credential = EmailAuthProvider.credential(email, password);
  return credential;
};

// El método indicará la funcion (si es para actualizar el correo o la contraseña)

export const reauth = async (user, credential) => reauthenticateWithCredential(user, credential);

export const changePasswordAuth = (user, newPassword) => updatePassword(user, newPassword);
// .then(() => {
//   console.log('si cambió la contraseña');
//   // Update successful.
// })
// .catch((error) => {
//   // An error ocurred
//   console.log(
//     'problemas para cambiar la contraseña en updatePassword',
//     error,
//   );
//   // ...
// });

export const changeEmailAuth = (user, newEmail) => updateEmail(user, newEmail);
