// import { collection } from "../app/firebase/firebase-initializer";
// export const updateDoc = jest.fn((doc, values) => Promise.resolve({values}))
// export const doc = jest.fn((db, collection, docId) => Promise.resolve({}));
// export const db = {};

const firestore = () => {
  return {
    collection: (nameCollection) => {
      return {
        updateDoc: (doc, values) => {
          return Promise.resolve({ values });
        },
        add: (objData) => {
          return Promise.resolve("El usuario fue agregado");
        },
      };
    },
  };
};

const firebase = {
  firestore: firestore,
};

export default jest.fn(() => {
  return firebase;
});

export const auth = {
  currentUser: {
    uid: "fake-user-id",
  },
};

// export const collection = jest.fn((nameCollection) => Promise.resolve({nameCollection}));

export const doc = jest.fn((db, collection, docId) => Promise.resolve({}));
export const updateDoc = jest.fn((doc, values) => Promise.resolve({values}))
export const db = {};
