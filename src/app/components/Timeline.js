import { logOutGoogle } from "../firebase/firebase-auth.js";
import { HeaderSimple } from "./Header_simple.js"

export const Timeline = () => {
  const root= document.getElementById("root")
  root.classList.remove("main-container")
  
  const $timelinePrueba = document.createElement("div");

  const header = HeaderSimple()
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
