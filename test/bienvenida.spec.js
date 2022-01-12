/**
 * @jest-environment jsdom
 */

import { Bienvenida, obtenerUsuario } from '../src/app/components/Bienvenida.js';
import { getUserData } from '../src/app/firebase/firebase-data.js';
//import { getDoc } from '../src/app/firebase/__mocks__/firebase-initializer.js';

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
    const user_uid = "fake-uid2"
    const user_nombre = document.querySelector('.userNameTitle')
    const user_photo = document.querySelector('.photo__avatar-img')
    await obtenerUsuario(user_uid, user_photo, user_nombre)
    .then(
      () => {
         getUserData.mock(user_uid)
         .then((user)=>
         expect(user.name).toBe("fake-name") ,
       //  expect(user_nombre).tobe(`¿Qué estás pensando, ${user.name}?`)
         )
      }
    )
})})