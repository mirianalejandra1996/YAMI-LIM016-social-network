// Este es el punto de entrada de tu aplicacion

import { App, onNavigate } from "./App.js";

 const d = document;


//  export const onNavigate = (pathname) => {
//   window.history.pushState(
//     {},
//     pathname,
//     window.location.origin + pathname
//   )
//   $root.innerHtml= routes[window.location.pathname]
// }

 d.addEventListener("DOMContentLoaded", App);
 //window.addEventListener("hashchange",App);
 window.addEventListener("hashchange", () => {
   console.log("estamos???");
  
   console.log(window.location.hash);
 });

// const init = () => {
//     window.addEventListener("hashchange", () =>
//       console.log(window.location.hash)
//     );
//   };

//   window.addEventListener("load", init);
// document.addEventListener("DOMContentLoaded", App);
// window.addEventListener("hashchange", App);

