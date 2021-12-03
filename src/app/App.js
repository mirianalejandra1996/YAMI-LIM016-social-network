// aqui exportaras las funciones que necesites
import { Welcome } from "./components/Welcome.js";
import { Router } from "./components/Router.js";

export const App = () => {
  const $root = document.getElementById("root");
  $root.appendChild(Welcome());

  const $signUp = document.getElementById("sign-up");
  $signUp.addEventListener("click", () => {
    window.location.hash = "#/timeline";
  });

  const $forgotPsw = document.getElementById("forgot-psw");
  $forgotPsw.addEventListener("click", () => {
    window.location.hash = "#/prueba";
  });

  Router(window.location.hash);
};

