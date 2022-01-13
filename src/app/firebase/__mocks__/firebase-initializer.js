
   const getFirestore = jest.fn();
   const getStorage = jest.fn();
 
 const newLocal = "fake-uid";
 
 const auth = {
   currentUser: {
     uid: newLocal,
     displayName: "fake-name"
    },
  };

  const userRef = {
    user: newLocal,
  }

  // const enviarIngreso = jest.fn(() => Promise.resolve({
  //   user: {
  //     emailVerified: true,
  //   },
  // }
  // ));

  const enviarIngreso = jest.fn(() => { 
    new Promise ((resolve,reject) => {

    resolve({
      user : {
          emailVerified: true,
        }}); 

        reject({
      user : {
          errorMsg: true,
        }}); 
  })

  // const enviarIngreso  = jest.fn((auth,email)=>Promise.resolve({values}))
  const loginGoogle  = jest.fn((auth,email)=>Promise.resolve({values}))
  const sendPasswordResetEmail = jest.fn(() => Promise.resolve());
  const GoogleAuthProvider = jest.fn(() => Promise.resolve({}));
  const collection = jest.fn((db, values) => Promise.resolve(values));
  const getDoc = jest.fn((userRef) => Promise.resolve(
    {values:
      {name: "fake-name",
      src: "fake-src"}}))
  const setDoc = jest.fn((document, values) => Promise.resolve({values}));
  const doc = jest.fn(() => Promise.resolve({}));
  const db = {};
  const app = {};
  const storage = {};

const getUserData = jest.fn((newLocal) => Promise.resolve(
  {values:
    {name: "fake-name",
    src: "fake-src"}}))

export {
  getFirestore,
  getUserData,
  getStorage,
  auth,
  enviarIngreso,
  loginGoogle,
  sendPasswordResetEmail,
  getDoc,
  setDoc,
  doc,
  db,
  app,
  storage,
  collection,
  GoogleAuthProvider,
  
}})