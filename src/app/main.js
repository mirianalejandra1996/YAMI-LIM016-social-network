// Este es el punto de entrada de tu aplicacion

import { App } from "./App.js";

document.addEventListener("DOMContentLoaded", () => {
  App();

  window.addEventListener("hashchange", () => {
    console.log(window.location.hash);
    App();
  });
});
