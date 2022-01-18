const auth = {
  currentUser: {
    uid: 'fake-uid',
    displayName: 'fake-name',
    providerData: [{ providerId: 'google.com' }],
    email: 'fake-email',
    photoURL: 'fake-photo',
    metadata: {
      createdAt: 'fake-time',
    },
  },
};

// const setDoc = jest.fn((document, values) => Promise.resolve({values}));

const db = {};
const setDoc = jest.fn((document, values) => Promise.resolve({ values }));
const doc = jest.fn(() => Promise.resolve({}));
const collection = jest.fn(() => Promise.resolve({}));

export {
  auth,
  setDoc,
  doc,
  db,
  collection,
};

// ! no sirvió con getUserData -----------------------------------------------------------
// const getUserData = jest.fn((newLocal) =>
//   Promise.resolve({
//     values: {
//       name: "fake-name",
//       src: "fake-src",
//     },
//   })
// );

// const signInWithEmailAndPassword = jest.fn(() =>
//   Promise.resolve({
//     user: {},
//   })
// );

// const storage = {};

// const getFirestore = jest.fn();
// const getStorage = jest.fn();

// const loginGoogle = jest.fn((auth, email) =>
//   Promise.resolve({
//     values,
//   })
// );
// const sendPasswordResetEmail = jest.fn(() => Promise.resolve());
// const GoogleAuthProvider = jest.fn(() => Promise.resolve({}));

// const signInWithPopup = jest.fn((auth, provider) => Promise.resolve({}));
