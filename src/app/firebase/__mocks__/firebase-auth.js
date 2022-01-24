// const dataBase = [usuario]

const enviarIngreso = jest.fn((email, password) => {
  const error = new Error();
  if (email === 'laboratoria@gmail.com' && password === 'labolabo') {
    return Promise.resolve({});
  }
  if (email === 'laboratoria@gmail.com' && password === 'incorrectpwd') {
    error.code = 'auth/wrong-password';
    return Promise.reject(error);
  }
  if (email === 'usernotregistered@gmail.com') {
    error.code = 'auth/user-not-found';
    // return Promise.reject(error.code);
    return Promise.reject(error);
  }
  if (email === '') {
    error.code = 'auth/invalid-email';
    return Promise.reject(error);
  }
  // if (email === 'emailwithoutformatting') {
  //   error.code = 'auth/user-not-found';
  //   return Promise.reject(error);
  //   // return Promise.reject(error.code);
  // }
  if (password === '') {
    error.code = 'auth/internal-error';
    return Promise.reject(error);
  }
  // if (password === 'wrongpassword') {
  //   error.code = 'auth/wrong-password';
  //   return Promise.reject(error);
  // }
  // if (password === 'wrongpassword') {
  //   error.code = 'auth/wrong-password';
  //   return Promise.reject(error);
  // }
  return 'ok';
});

// const signInWithEmailAndPassword = jest.fn((auth, email, password) => {});

const loginGoogle = jest.fn(() => Promise.resolve());
const sendPasswordResetEmail = jest.fn(() => Promise.resolve());
const signInWithPopup = jest.fn(() => Promise.resolve('fake-id-user'));

export {
  enviarIngreso, loginGoogle, sendPasswordResetEmail, signInWithPopup,
};

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
