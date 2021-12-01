// aqui exportaras las funciones que necesites
import { Welcome } from "./components/Welcome.js";

export const App = () => {
  const d = document,
    $root = d.getElementById("root");

  $root.appendChild(Welcome());
};
