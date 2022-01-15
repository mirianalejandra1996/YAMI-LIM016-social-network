export const enviarIngreso = jest.fn(() => Promise.resolve());
export const loginGoogle = jest.fn(() => Promise.resolve());
export const sendPasswordResetEmail = jest.fn(() => Promise.resolve());

// ! preguntar como hacer los casos de errores en caso que la promesa sea rechazada.
// const here = false;
// const here = true;
// export const enviarIngreso = jest.fn(
//   () =>
//     new Promise((resolve, reject) => {
//       const result = here;
//       if (result) {
//         resolve();
//       } else {
//         // reject({ message: "error!" });
//         reject("error!");
//       }
//     })
// );

// FirebaseError: Firebase: Error (auth/user-not-found).
//     at createErrorInternal (assert.ts:122:55)
//     at _fail (assert.ts:65:9)
//     at _performFetchWithErrorHandling (index.ts:173:9)
//     at async _performSignInRequest (index.ts:191:27)
//     at async _signInWithCredential (credential.ts:37:20)

// error.code

// switch (errorCode) {
//   case "auth/user-not-found":
//     console.log("no se consiguió usuario");
//     document.getElementById("errorLogin").innerHTML =
//       "Usuario no registrado";
//     break;
//   case "auth/wrong-password":
//     document.getElementById("errorLogin").innerHTML =
//       "Contraseña inválida";
//     break;
//   case "auth/invalid-email":
//     document.getElementById("errorLogin").innerHTML = "Ingrese su correo";
//     break;
//   case "auth/internal-error":
//     document.getElementById("errorLogin").innerHTML =
//       "Ingrese su contraseña";
//     break;
//   }
