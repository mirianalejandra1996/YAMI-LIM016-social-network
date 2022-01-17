// /**
//  * @jest-environment jsdom
//  */

// import { Post } from "../src/app/components/Post.js";

// jest.mock("../src/app/firebase/firebase-auth.js");
// jest.mock("../src/app/firebase/firebase-initializer.js");
// jest.mock("../src/app/firebase/firebase-data.js");

// describe("Testing DOM manipulation", () => {
//   beforeAll((done) => {
//     document.body.id = "root";
//     document.body.innerHTML = "";
//     document.body.append(Post());
//     done();
//   }),
//     // it methods will go here ...
//     it("MostrarPost", () => {
//       const dataPost = [
//         {
//           id_user: "user.uid",
//           user_name: "user.displayName",
//           user_photo: "fake-url",
//           message: "este es mi post",
//           date: Date.now(),
//           likes: [],
//         },
//       ];
//       const prueba =
//         Post(dataPost).querySelector(".card__text-msg").textContent;
//       //  const $errorLoginMessage  = document.getElementById('errorLogin')
//       // expect($formPostMsg).not.toBeUndefined()
//       expect(prueba).toBe("este es mi post");
//     });
// });

describe('Testing post DOM component with firestore MOCK', () => {
  it(' should do something', () => {});
});
