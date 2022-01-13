import { Bienvenida, obtenerUsuario } from '../src/app/components/Bienvenida.js';
import { getUserData } from '../src/app/firebase/firebase-data.js';
import { getDoc } from '../src/app/firebase/__mocks__/firebase-initializer.js';

jest.mock('../src/app/firebase/firebase-auth.js');
jest.mock('../src/app/firebase/firebase-initializer.js');

const createUser = jest.fn(() => new Promise((resolve, reject) => {
    resolve({
      userCredential: {
        user: {
          emailVerified: true,
        },
      },
    });
    reject(window.alert = jest.fn());
  }));

describe("Testing AddUser firestore MOCK", () => {
 
    it("olvideContrasena", async () => {
      const testEmail = "test@testing.com";
      await olvideContrasena(testEmail);
      const $errorLoginMessage = document.getElementById("errorLogin");
      expect($errorLoginMessage).not.toBeUndefined();
      expect($errorLoginMessage.textContent).toBe(
        `Se envió un mensaje al correo ${testEmail}`
      );
    });
});
