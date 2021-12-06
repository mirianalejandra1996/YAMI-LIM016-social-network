// Este es el punto de entrada de tu aplicacion

import { Router } from "./view-controller/Router.js";

document.addEventListener("DOMContentLoaded", () => {
  Router(window.location.hash);
  window.addEventListener("hashchange", () => {
    Router(window.location.hash);
  });
});


