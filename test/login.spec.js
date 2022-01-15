/**
 * @jest-environment jsdom
 */

import {
  olvideContrasena,
  Login,
  handleSubmit,
} from "../src/app/components/Login";

import {
  enviarIngreso,
  signInWithPopup,
} from "../src/app/firebase/firebase-auth.js";

jest.mock("../src/app/firebase/firebase-auth.js");
jest.mock("../src/app/firebase/firebase-initializer.js");

describe("Testing DOM manipulation of olvideContrasena", () => {
  beforeAll((done) => {
    document.body.id = "root";
    document.body.innerHTML = "";
    document.body.append(Login());
    done();
  }),
    it("should be empty the message container when page is loading at first time", () => {
      expect(document.getElementById("errorLogin").textContent).toBe("");
    });

  it("should send a successful message when olvideContrasena function was success", async () => {
    const testEmail = "test@testing.com";
    await olvideContrasena(testEmail);

    const $errorLoginMessage = document.getElementById("errorLogin");
    expect($errorLoginMessage).not.toBeUndefined();

    expect(document.getElementById("errorLogin").textContent).toBe(
      `Se envió un mensaje al correo ${testEmail}`
    );
  });
});

// -----------------------------------------------------------------------------------
// ! El bueno!

describe("Testing DOM manipulation of olvideContrasena", () => {
  beforeAll((done) => {
    document.body.id = "root";
    document.body.innerHTML = "";
    document.body.append(Login());
    // document.body.innerHTML = `
    // <input class="form__input" type="email" id="lemail" name="lemail" placeholder="Correo electrónico" value="laboratoria@gmail.com">
    // <input class="form__input" type="password" id="lpassword" name="lpassword" placeholder="Contraseña" value="labolabo">
    // <div class="err-container"><small class="error-msg" id="errorLogin"></small></div>
    // <div class="btn" id="submit-register"><span class="btn__text">Iniciar sesión</span></div>
    // `;
    done();
  });

  it("should be empty the message container when page is loading at first time", () => {
    expect(document.getElementById("errorLogin").textContent).toBe("");
  });

  it("should send a successful message when handleSubmit function was success", (done) => {
    const email = document.getElementById("lemail");
    email.value = "laboratoria@gmail.com";

    const password = document.getElementById("lpassword");
    password.value = "labolabo";

    handleSubmit()
      .then(() => {
        console.log(
          "email como primer parametro del metodo de firebase Auth",
          enviarIngreso.mock.calls[0][0]
        );
        console.log(
          "pwd como segundo parametro del metodo de firebase Auth",
          enviarIngreso.mock.calls[0][1]
        );
        console.log(
          "mensaje que lanza (efectivo) cuando handleSubmit fue exitoso",
          document.getElementById("errorLogin").textContent
        );

        // Verificamos si nuestro componente a probar tiene en sus inputs los valores asignados
        expect(email.value).toBe("laboratoria@gmail.com");
        expect(password.value).toBe("labolabo");

        expect(document.getElementById("lemail").value).toBe(
          "laboratoria@gmail.com"
        );
        expect(document.getElementById("lpassword").value).toBe("labolabo");

        expect(document.getElementById("errorLogin").textContent).toBe(
          `Ingresando`
        );

        // Verificamos si después de que handleSubmit fue exitoso, chequear si entraron los argumentos del
        // correo y contraseña al metodo de firebase de auth.
        expect(enviarIngreso.mock.calls[0][0]).toBe("laboratoria@gmail.com");
        expect(enviarIngreso.mock.calls[0][1]).toBe("labolabo");

        done();
      })
      .catch(done);
  });
});

// -------------------------------------------------------------------------------------

describe("Testing function signInWithPopup of Firebase Auth", () => {
  beforeAll((done) => {
    document.body.id = "root";
    document.body.innerHTML = "";
    document.body.append(Login());
    done();
  });

  it("should return an user id when button 'SignIn with Google' is clicked", (done) => {
    // const signInElem = SignIn();
    const btn = document.getElementById("btn-g");
    const eventClick = new Event("click");
    btn.dispatchEvent(eventClick);
    const id = "fake-id-user";
    const id2 = "fake-id-user-2";

    signInWithPopup()
      .then((data) => {
        expect(data).toBe(id);
        expect(data).not.toBe(id2);
        done();
      })
      .catch(done);
  });

  // it("should return an user id when button 'SignIn with Google' is clicked USING MOCK.RESULTS", () => {
  //   // const signInElem = SignIn();
  //   const btn = document.getElementById("btn-g");
  //   const eventClick = new Event("click");
  //   btn.dispatchEvent(eventClick);
  //   const id = "fake-id-user";

  //   signInWithPopup.mock.results[0].value
  //     .then((data) => {
  //       expect(data).toBe(id);
  //       // done();
  //     })
  //     .catch(done);
  // });

  // it("should return an user id when button 'SignIn with Google' is clicked USING MOCK.RESULTS", () => {
  //   const signInElem = Login();
  //   const btn = signInElem.querySelector("#btn-g");
  //   const evt = new Event("click");
  //   btn.dispatchEvent(evt);
  //   const id = "fake-id-user";
  //   signInWithPopup.mock.results[0].value.then((data) => {
  //     expect(data).toBe(id);
  //   });
  // });
});
