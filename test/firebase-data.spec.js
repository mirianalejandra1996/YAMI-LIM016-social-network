import mockFirebase from "../src/__mocks__/firebase-data.js";
global.firebase = mockFirebase();

import { changePasswordFirestore } from "../src/app/firebase/firebase-data.js";
import { db, doc, updateDoc } from "../src/__mocks__/firebase-data.js";

jest.mock("../src/app/firebase/firebase-data.js");
describe("changePasswordFirestore", async () => {
  it("funciona", () => {
    return changePasswordFirestore("fakeUserId", "newfakePassword").then(
      (data) => {
        console.log("esto es data, ", data);
        expect(data).toStrictEqual({ user_password: "fakePassword" });
      }
    );

    console.log("esto es doc", doc.mock);
    console.log("updateDoc", updateDoc.mock);
  });

  it("falla si no recibe argumentos", () => {});
});

// describe("changePasswordFirestore", async () => {
//   it("funciona", async () => {
//     const result = await changePasswordFirestore(
//       "fakeUserId",
//       "newfakePassword"
//     );

//     console.log("result ", result);
//     console.log("esto es doc", doc.mock);
//     console.log("updateDoc", updateDoc.mock);
//     console.log('')
//     expect(result).toStrictEqual({ user_password: "fakePassword" });
//   });

//   it("falla si no recibe argumentos", () => {});
// });
