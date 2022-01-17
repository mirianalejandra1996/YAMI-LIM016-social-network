import { addUser } from "../src/app/firebase/firebase-data.js";

import {
  setDoc,
  doc,
  db,
  auth,
  collection,
} from "../src/app/firebase/firebase-initializer.js";

jest.mock("../src/app/firebase/firebase-initializer.js");

describe("Testing AddUser firestore MOCK", () => {
  it(" should create a user if user is logged by google", () => {
    const user = auth;

    // no deberían servir de nada
    const name = "";
    const password = "";
    
    addUser(user.currentUser, name, password)
      .then((res) => {
        console.log("response esssssssssss ", res);
        
        expect(res).toEqual({ probando: "algo" });
      })
      .catch((err) => {
        console.log("un errooooooooooooooooooor", err);
      });
  });
});
