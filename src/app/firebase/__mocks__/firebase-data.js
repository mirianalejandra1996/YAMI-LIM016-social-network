// const getFirestore = jest.fn(() => Promise.resolve({}));
// // const setDoc = jest.fn(() => Promise.resolve());
// const setDoc = jest.fn((document, values) => Promise.resolve({ values }));
// const doc = jest.fn(() => Promise.resolve({}));
// // const db = jest.fn(() => Promise.resolve({}));
// const db = {};

// addUser
const addUser = jest.fn((user, name, password) => Promise.resolve({}));

// ! ---------------------
// const enviarIngreso = jest.fn((auth, email) => Promise.resolve({ values }));
// const loginGoogle = jest.fn((auth, email) => Promise.resolve({ values }));
// const sendPasswordResetEmail = jest.fn(() => Promise.resolve());
// const GoogleAuthProvider = jest.fn(() => Promise.resolve({}));
// const collection = jest.fn((db, values) => Promise.resolve(values));
// const getDoc = jest.fn((userRef) =>
//   Promise.resolve({ values: { name: "fake-name", src: "fake-src" } })
// );
// const db = {};
// const app = {};
// const storage = {};

// export {
//   getFirestore,
//   getStorage,
//   auth,
//   enviarIngreso,
//   loginGoogle,
//   sendPasswordResetEmail,
//   getDoc,
//   setDoc,
//   doc,
//   db,
//   app,
//   storage,
//   collection,
//   GoogleAuthProvider,
// };

// const createUser = jest.fn(
//   () =>
//     new Promise((resolve, reject) => {
//       resolve({
//         userCredential: {
//           user: {
//             emailVerified: true,
//           },
//         },
//       });
//       reject((window.alert = jest.fn()));
//     })
// );
