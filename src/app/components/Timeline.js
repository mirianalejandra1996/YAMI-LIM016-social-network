import { logOutGoogle } from "../firebase/firebase-auth.js";
import { Menu } from "./Menu.js"
export const Timeline = () => {
  const $timelinePrueba = document.createElement("div");

  const $logoContainer = document.createElement("div");
  $logoContainer.classList.add("logo-container");
  $timelinePrueba.append($logoContainer);

  const $iconLogo = document.createElement("div");
  $iconLogo.classList.add("logo");

  const $logoName = document.createElement("h3");
  $logoName.textContent = "Yami";

  $logoContainer.append($iconLogo);
  $logoContainer.append($logoName);

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
