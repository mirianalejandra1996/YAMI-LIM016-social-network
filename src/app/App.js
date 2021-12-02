// aqui exportaras las funciones que necesites
import { Welcome } from "./components/Welcome.js";
import { Registro } from "./components/Register.js";
import { Router } from "./components/Router.js";
import { Timeline } from "./components/Timeline.js";

export const App = () => {
  const d = document,
    $root = d.getElementById("root");
  $root.appendChild(Welcome());
  Router();
};
