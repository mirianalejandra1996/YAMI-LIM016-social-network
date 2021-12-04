// Este es el punto de entrada de tu aplicacion

import { Router } from "./view-controller/Router.js";

document.addEventListener("DOMContentLoaded", () => {
  Router(window.location.hash);
  window.addEventListener("hashchange", () => {
    Router(window.location.hash);
  });
});

const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{8,14}$/, // 8 a 14 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};


// form__input
