/**
 * @jest-environment jsdom
 */

import {
  olvideContrasena,
  Login,
} from '../src/app/components/Login';

// import { enviarIngreso } from '../src/app/firebase/firebase-auth.js';

jest.mock('../src/app/firebase/firebase-auth.js');
jest.mock('../src/app/firebase/firebase-initializer.js');

describe('Testing DOM manipulation of olvideContrasena', () => {
  beforeAll((done) => {
    document.body.id = 'root';
    document.body.innerHTML = '';
    document.body.append(Login());
    done();
  });

  it('should be empty the message container when page is loading at first time', () => {
    expect(document.getElementById('errorLogin').textContent).toBe('');
  });

  it('should send a successful message when olvideContrasena function was success', async () => {
    const testEmail = 'test@testing.com';
    await olvideContrasena(testEmail);

    const errorLoginMessage = document.getElementById('errorLogin');
    expect(errorLoginMessage).not.toBeUndefined();

    expect(document.getElementById('errorLogin').textContent).toBe(
      `Se envió un mensaje al correo ${testEmail}`,
    );
  });
});
