// Este es el punto de entrada de tu aplicacion

import { App } from "./App.js";

const d = document;

d.addEventListener("DOMContentLoaded", App);

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
