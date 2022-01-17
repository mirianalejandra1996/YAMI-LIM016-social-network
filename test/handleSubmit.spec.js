/**
 * @jest-environment jsdom
 */

import {
  Login,
  handleSubmit,
} from '../src/app/components/Login';

import {
  enviarIngreso,
} from '../src/app/firebase/firebase-auth.js';

jest.mock('../src/app/firebase/firebase-auth.js');
jest.mock('../src/app/firebase/firebase-initializer.js');

describe('Testing DOM manipulation of olvideContrasena', () => {
  beforeAll((done) => {
    document.body.id = 'root';
    document.body.innerHTML = '';
    document.body.append(Login());
    // document.body.innerHTML = `
    // <input class="form__input" type="email" id="lemail" name="lemail"
    // placeholder="Correo electrónico" value="laboratoria@gmail.com">
    // <input class="form__input" type="password" id="lpassword" name="lpassword"
    // placeholder="Contraseña" value="labolabo">
    // <div class="err-container"><small class="error-msg" id="errorLogin"></small></div>
    // <div class="btn" id="submit-register"><span class="btn__text">Iniciar sesión</span></div>
    // `;
    done();
  });

  it('should be empty the message container when page is loading at first time', () => {
    expect(document.getElementById('errorLogin').textContent).toBe('');
  });

  it('should send a successful message when handleSubmit function was success', (done) => {
    const email = document.getElementById('lemail');
    email.value = 'laboratoria@gmail.com';

    const password = document.getElementById('lpassword');
    password.value = 'labolabo';

    handleSubmit()
      .then(() => {
        // Verificamos si nuestro componente a probar tiene en sus inputs los valores asignados
        expect(email.value).toBe('laboratoria@gmail.com');
        expect(password.value).toBe('labolabo');

        expect(document.getElementById('lemail').value).toBe(
          'laboratoria@gmail.com',
        );
        expect(document.getElementById('lpassword').value).toBe('labolabo');

        expect(document.getElementById('errorLogin').textContent).toBe(
          'Ingresando',
        );

        // Verificamos si después de que handleSubmit fue exitoso, chequear
        // si entraron los argumentos del correo y contraseña al metodo de firebase de auth.
        expect(enviarIngreso.mock.calls[0][0]).toBe('laboratoria@gmail.com');
        expect(enviarIngreso.mock.calls[0][1]).toBe('labolabo');

        done();
      })
      .catch(done);
  });
});
