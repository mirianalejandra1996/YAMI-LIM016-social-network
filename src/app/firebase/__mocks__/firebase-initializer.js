
   const getFirestore = jest.fn();
   const getStorage = jest.fn();
 
 const newLocal = "fake-uid";
 
 const auth = {
   currentUser: {
     uid: newLocal,
    },
  };

  const enviarIngreso  = jest.fn((auth,email)=>Promise.resolve({values}))
  const loginGoogle  = jest.fn((auth,email)=>Promise.resolve({values}))
  const sendPasswordResetEmail = jest.fn(() => Promise.resolve());
  const GoogleAuthProvider = jest.fn(() => Promise.resolve({}));
const collection = jest.fn((db, values) => Promise.resolve(values));
 const setDoc = jest.fn((document, values) => Promise.resolve({values}));
 const doc = jest.fn(() => Promise.resolve({}));
 const db = {};
 const app = {};
 const storage = {};



export {
  getFirestore,
  getStorage,
  auth,
  enviarIngreso,
  loginGoogle,
  sendPasswordResetEmail,
  setDoc,
  doc,
  db,
  app,
  storage,
  collection,
  GoogleAuthProvider
  
};