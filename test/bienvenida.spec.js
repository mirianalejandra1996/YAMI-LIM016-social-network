/**
 * @jest-environment jsdom
 */

import { Bienvenida, obtenerUsuario } from '../src/app/components/Bienvenida.js';
import { getUserData } from '../src/app/firebase/firebase-data.js';
import { getDoc } from '../src/app/firebase/__mocks__/firebase-initializer.js';

jest.mock('../src/app/firebase/firebase-auth.js');
jest.mock('../src/app/firebase/firebase-initializer.js');


describe('Testing DOM manipulation', function(){
  beforeAll((done) => {
    document.body.id = 'root'
    document.body.innerHTML = ""
    document.body.append(Bienvenida())
      done(); 
  })
// it methods will go here ...
  it('obtenerUsuario', async () =>{
    const user_uid = "fake-uid"
    const user_nombre = document.querySelector('.userNameTitle')
    const user_photo = document.querySelector('.photo__avatar-img')
    await obtenerUsuario(user_uid, user_photo, user_nombre)
    await getUserData(user_uid)
    .then(()=>{
      // expect(user_nombre.textContent).toBe(`¿Qué estas pensando, ${user.user_name}?`)
      console.log(getDoc.mock.calls[0])
      expect(getDoc.mock.calls[0]).toBe("fake-name")
    })

})})