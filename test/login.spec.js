/**
 * @jest-environment jsdom
 */

import {
  olvideContrasena,
  Login,
  handleSubmit,
} from "../src/app/components/Login";
// import { olvideContrasena, Login } from "../src/app/components/Login";

import { enviarIngreso } from "../src/app/firebase/firebase-auth.js";

jest.mock("../src/app/firebase/firebase-auth.js");
jest.mock("../src/app/firebase/firebase-initializer.js");

describe("Testing DOM manipulation", () => {
  beforeAll((done) => {
    document.body.id = "root";
    document.body.innerHTML = "";
    document.body.append(Login());
    done();
  }),
    // it methods will go here ...
    it("olvideContrasena", async () => {
      const testEmail = "test@testing.com";
      await olvideContrasena(testEmail);
      const $errorLoginMessage = document.getElementById("errorLogin");
      expect($errorLoginMessage).not.toBeUndefined();
      // expect($errorLoginMessage.textContent).toBe(
      //   `Se envió un mensaje al correo ${testEmail}`
      // );
    });
});

//   describe('Testing DOM manipulation of handleSubmit', () => {
//     beforeAll((done) => {
//       document.body.id = 'root'
//       document.body.innerHTML = ""
//       document.body.append(Login())
//         done();
//     }),

//   it('should return an error code when value is XXXX' , async () => {
//     const testEmail = document.getElementById('lemail')
//     const testPassword = document.getElementById('lpassword')
//     testEmail.value = 'laboratoria@gmail.com'
//     testPassword.value = 'labolabo'

//     await handleSubmit(testEmail, testPassword)
//     const $errorLoginMessage  = document.getElementById('errorLogin')
//     expect($errorLoginMessage).not.toBeUndefined()
//     expect($errorLoginMessage.textContent).toBe(`Se envió un mensaje al correo ${testEmail.value}`)
// });
//   })

// it.only = solo va a ejecutar que tenga los "only" , de igual manera hace con "fit"

// describe("HandleSubmit", () => {
//   // beforeAll((done) => {
//   //   document.body.id = "root";
//   //   document.body.innerHTML = "";
//   //   document.body.append(Login());
//   //   done();
//   // }),
//   beforeAll((done) => {
//     document.body.id = "root";
//     document.body.innerHTML = "";
//     done();
//   }),
//     it("should return an error code when value is XXXX", async (done) => {
//       document.body.innerHTML = `
//     <input class="form__input" type="email" id="lemail" name="lemail" placeholder="Correo electrónico value="laboratoria@gmail.com">
//     <input class="form__input" type="password" id="lpassword" name="lpassword" placeholder="Contraseña" value="labolabo">
//     <div class="err-container"><small class="error-msg" id="errorLogin"></small></div>
//     <div class="btn" id="submit-register"><span class="btn__text">Iniciar sesión</span></div>
//     `;

//       const errorLoginMessage = document.getElementById("errorLogin");

//       // testEmail.value = "laboratoria@gmail.com";
//       // testPassword.value = "labolabo";

//       // window.location.hash = "#/timeline";
//       // HandleSubmit no recibe evento porque nuestro botón es un div

//       const user = {
//         id: "fake-id",
//         email: "fake@gmail.com",
//         password: "fake-pwd",
//         birth: "fake-birth",
//         photo: "fake-photo",
//         name: "fake-name",
//       };

//       // await handleSubmit();
//       await handleSubmit()
//         .then(() => {
//           expect(errorLoginMessage).not.toBeUndefined();
//           // expect(errorLoginMessage.textContent).toBe(`Ingresando`);
//           expect(errorLoginMessage.innerHTML).toBe(`Ingresando`);

//           console.log("aaaaaaaaaa", enviarIngreso.mock.calls[0][0]);
//           done();
//         })
//         .catch(done);

//       // expect(window.location.hash).toBe("#/timeline");
//     });
// });

// handleSubmit();

describe("Testing DOM manipulation", () => {
  beforeAll((done) => {
    document.body.id = "root";
    document.body.innerHTML = "";
    // document.body.append(Login());
    document.body.innerHTML = `
    //     <input class="form__input" type="email" id="lemail" name="lemail" placeholder="Correo electrónico value="laboratoria@gmail.com">
    //     <input class="form__input" type="password" id="lpassword" name="lpassword" placeholder="Contraseña" value="labolabo">
    //     <div class="err-container"><small class="error-msg" id="errorLogin"></small></div>
    //     <div class="btn" id="submit-register"><span class="btn__text">Iniciar sesión</span></div>
    //     `;
    done();
  }),
    // it methods will go here ...
    it("would change de hash location when handleSubmit is succesful", async () => {
      const testEmail = document.getElementById("lemail");
      const testPassword = document.getElementById("lpassword");

      testEmail.value = "laboratoria@gmail.com";
      testPassword.value = "labolabo";

      window.location.hash = "#/timeline";
      // HandleSubmit no recibe evento porque nuestro botón es un div
      console.log("aaaaaaaaaa", enviarIngreso.mock.calls[0][0]);

      await handleSubmit();
      const $errorLoginMessage = document.getElementById("errorLogin");
      expect($errorLoginMessage).not.toBeUndefined();
      // expect($errorLoginMessage.innerHTML).toBe(`Ingresando`);
      expect(window.location.hash).toBe("#/timeline");
      // expect(enviarIngreso.mock.calls[0][0]);
    });
});
