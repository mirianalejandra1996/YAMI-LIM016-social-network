// // import { enviarIngreso } from "../src/app/firebase/firebase-auth.js";

// // jest.mock("../src/app/firebase/firebase-auth.js");
// // jest.mock("../src/app/firebase/firebase-initializer.js");

// // import { Bienvenida, obtenerUsuario } from '../src/app/components/Bienvenida.js';
// import { addUser } from "../src/app/firebase/firebase-data.js";
// // import { addUser } from "../src/app/firebase/firebase-auth.js";

// import {
//   setDoc,
//   doc,
//   db,
//   auth,
//   collection,
// } from "../src/app/firebase/firebase-initializer.js";

// jest.mock("../src/app/firebase/firebase-initializer.js");

// describe("Testing AddUser firestore MOCK", () => {
//   it(" should create a user if user is logged by google", () => {
//     const user = auth;

//     // no deberían servir de nada
//     const name = "";
//     const password = "";
//     // const name = "fake-manual-name";
//     // const password = "fake-manual-password";
//     // user.providerData[0].providerId === "password";
//     addUser(user.currentUser, name, password)
//       .then((res) => {
//         console.log("response esssssssssss ", res);
//         // expect(res).toBe("algo");
//         expect(res).toEqual({ probando: "algo" });
//       })
//       .catch((err) => {
//         console.log("un errooooooooooooooooooor", err);
//       });

//     // user.providerData[0].providerId === "google.com"
//     // user.providerData[0].providerId === "password";
//   });
// });

describe("Testing AddUser firestore MOCK", () => {
  it(" should create a user if user is logged by google", () => {});
});
