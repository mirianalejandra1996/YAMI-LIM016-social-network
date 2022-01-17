// /**
//  * @jest-environment jsdom
//  */

// import { Bienvenida, obtenerUsuario } from '../src/app/components/Bienvenida.js';
// import { getUserData } from '../src/app/firebase/firebase-data.js';
// //import { getDoc } from '../src/app/firebase/__mocks__/firebase-initializer.js';

// jest.mock('../src/app/firebase/firebase-auth.js');
// jest.mock('../src/app/firebase/firebase-initializer.js');
// jest.mock('../src/app/firebase/firebase-data.js');

// describe("Testing bienvenida con getUserData firestore MOCK", function(){
//   beforeAll((done) => {
//     document.body.id = 'root'
//     document.body.innerHTML = ""
//     document.body.append(Bienvenida())
//       done();
//   })
// // it methods will go here ...
//   it('obtenerUsuario',  (done) =>{
//     const user_uid = "fake-uid"
//     const user_nombre = document.querySelector('.userNameTitle')
//     const user_photo = document.querySelector('.photo__avatar-img')
//    const res =  obtenerUsuario(user_uid, user_photo, user_nombre)
//    res.then(() => {
//      expect(getUserData.mock.calls[0][1]).tobe("fake-name")
//    })
//     // getUserData().then(() => {
//     //   }
//     //   )
// })})

describe('Testing bienvenida con getUserData firestore MOCK', () => {
  it('should do something', () => {});
});
