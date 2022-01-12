/**
 * @jest-environment jsdom
 */

import { olvideContrasena, Login } from '../src/app/components/Login';

jest.mock('../src/app/firebase/firebase-auth.js');
jest.mock('../src/app/firebase/firebase-initializer.js');


describe('Testing DOM manipulation', () => {
    beforeAll((done) => {
      document.body.id = 'root'
      document.body.innerHTML = ""
      document.body.append(Login())
        done(); 
    }),
  // it methods will go here ...
  it('olvideContrasena' , async () => {
    const testEmail = 'test@testing.com'
    await olvideContrasena(testEmail)
    const $errorLoginMessage  = document.getElementById('errorLogin')
    expect($errorLoginMessage).not.toBeUndefined()
    expect($errorLoginMessage.textContent).toBe(`Se envió un mensaje al correo ${testEmail}`)
});
  })g