import { logOutGoogle } from "../firebase/firebase-auth.js";
import { Header } from "./Header.js"

export const Timeline = () => {
  const $timelinePrueba = document.createElement("div");

  const header = Header()
  $timelinePrueba.append(header)

  const $linkContainer = document.createElement("div");
  $timelinePrueba.append($linkContainer);

  const $botonPrueba = document.createElement("span");
  $botonPrueba.classList.add("link");
  $botonPrueba.textContent = "Sign Out";

  $botonPrueba.addEventListener("click", logOutGoogle);

  $linkContainer.append($botonPrueba);

  return $timelinePrueba;
};
