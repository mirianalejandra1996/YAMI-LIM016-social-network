// const jsdom = require('jsdom');
// const { JSDOM } = jsdom;
import { Login } from '../src/app/components/Login.js'
// Cómo probar algo que está en el Dom
// describe('dom tests', () => {
//   // En este test queremos ver algo que saldrá en la consola, JSDOM nos deja acceder a esa consola virtual
//   const virtualConsole = new jsdom.VirtualConsole();

//   // Creamos primero nuestro dom virtual usando nuestro index
//   beforeAll((done) => {
//     JSDOM.fromFile("src/index.html", { 
//       runScripts: "dangerously", //necesitaremmos usar los scripts que importammos en el html
//       resources: "usable", //igualmente los externos
//       virtualConsole // insertamos nuestra consola virtual
//     })
//     .then(dom => { //ya tenemos nuestro dom
//       global.document = dom.window.document // no es recomendado pero creamos nuestro document de forma global para reemplazar el window.document
//       global.virtualConsole = dom.virtualConsole // tambien la consola para poder usarla después
//       done() // listo, pasamos a las pruebas
//     });
//   })

//   it('load dom', () => {
//     // verificammos que tenemos dom
//     expect(document).not.toBe(undefined)
//   })

//   it('find app', () => {
//     // verificamos que tenemos el elemto raíz
//     const root = document.getElementById('app');
//     expect(root).not.toBe(undefined)
//   })

//   it('trigget event listener for button1', (done) => {
//     // fijamos nuestro primer ecuchador de evento de la consola
//     // fijense en el once
//     virtualConsole.once('log', (msg) => {
//       // cuando suceda el evento probaremos que el
//       // console.log se llamo con lo que esperamos para el primer boton
//       expect(msg).toBe('Primera funcion')
//       done()
//     })
//     // esperamos un momento a la carga de los scripts
//     setTimeout(() => {
//       // seleccionamos el elemento raíz con nuestro dom virtual
//       const element = document.getElementById('app');
//       // obtenemos el primer boton usando getElementsByTagName
//       const button = element.getElementsByTagName('button')[0];
//       // forzamos el click con click()
//       button.click();
//     }, 500)
//   })

//   it('trigget event listener for button2', (done) => {
//     // fijamos nuestro segundo ecuchador de evento de la consola
//     // fijense en el once
//     virtualConsole.once('log', (msg) => {
//       // cuando suceda el evento probaremos que el
//       // console.log se llamo con lo que esperamos para el segundo boton
//       expect(msg).toBe('Segunda funcion')
//       done()
//     })
//     // esperamos un momento a la carga de los scripts
//     setTimeout(() => {
//       // seleccionamos el elemento raíz con nuestro dom virtual
//       const element = document.getElementById('app');
//       // obtenemos el segundo boton esta vez usando childNodes
//       const button = element.childNodes[1];
//       // forzamos el click con click()
//       button.click();
//     }, 500)
//   })
// })

describe('Testing DOM manipulation', function(){
  let Dom ;
  beforeEach(function(){
   Login();
 })
// it methods will go here ...
it('should initialise HTML del Login', function(){
  const $login = '<div class="login"><div class="logo-container"><div class="logo"></div><h3 class="logo-name">Yami</h3></div><div class="eslogan-container"><h2 class="eslogan-text">¡Hola de nuevo!</h2></div><div class="inputs-container"><form class="form" id="form-register"><div class="form__input-container"><span class="icon-mail form__icon form__icon--black"></span><input class="form__input" type="email" id="lemail" name="lemail" placeholder="Correo electrónico"></div><div class="form__input-container"><span class="icon-lock form__icon form__icon--black"></span><input class="form__input" type="password" id="lpassword" name="lpassword" placeholder="Contraseña"></div></form><span class="redirect-text__link redirect-text__link-small">Olvidé mi contraseña</span><div class="err-container"><small class="error-msg" id="errorLogin"></small></div><div class="btn" id="submit-register"><span class="btn__text">Iniciar sesión</span></div><div class="btn-g"><span class="icon-google form__icon"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></span><span>Continuar con Google</span></div><div id="linkLogin" class="redirect-text"><span class="redirect-text__left">¿No tienes una cuenta?</span><span class="redirect-text__link" id="register">Regístrate</span></div></div></div>';
  form.appendChild(input);
  expect(Login()).toEqual($login)
})
})
