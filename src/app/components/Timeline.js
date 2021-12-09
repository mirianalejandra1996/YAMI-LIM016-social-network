import { logOutGoogle } from "../firebase/firebase-auth.js";
import { HeaderRetro } from "./Header_retro.js"
import { HeaderSimple } from "./Header_simple.js"

import { Menu } from "./Menu.js"
export const Timeline = () => {
  const root= document.getElementById("root")
  root.classList.remove("main-container")

  const $timelinePrueba = document.createElement("div");

  const header = HeaderRetro()
  // const header = HeaderSimple()
  $timelinePrueba.append(header)

  const btn = document.createElement("button")
  btn.textContent=`Postear`
  btn.addEventListener("click", () => {
    window.location.hash = "#/formPost";
  })
  $timelinePrueba.append(btn)

  const $linkContainer = document.createElement("div");
  $timelinePrueba.append($linkContainer);

  const $botonPrueba = document.createElement("span");
  $botonPrueba.classList.add("link");
  $botonPrueba.textContent = "Sign Out";

  $botonPrueba.addEventListener("click", logOutGoogle);

  $linkContainer.append($botonPrueba);

  const menu = Menu();

  $timelinePrueba.append(menu)

  return $timelinePrueba;
};
