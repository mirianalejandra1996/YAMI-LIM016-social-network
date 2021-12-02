// aqui exportaras las funciones que necesites
import { Welcome } from "./components/Welcome.js";
import { Registro } from "./components/Register.js";
import { Router } from "./components/Router.js";

export const App = () => {
  const d = document,
    $root = d.getElementById("root");
  console.log("yes");
  $root.appendChild(Welcome());
  Router();
};
