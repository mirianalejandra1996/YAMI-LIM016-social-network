import { logOutGoogle } from "../firebase/firebase-auth.js";
import { Post } from "./Post.js";
import { HeaderRetro } from "./Header_retro.js";
import { Menu, MenuList } from "./Menu.js";

export const Timeline = () => {
  const $timeline = document.createElement("div");

  // Importamos la cabecera
  const $header = HeaderRetro();

  // Contenedor de las publicaciones
  const $postsContainer = document.createElement("div");
  $postsContainer.classList.add("notification-grid");

  const $post = Post();

  $postsContainer.append($post);

  // const $timelinePrueba = document.createElement("div");

  // const header = HeaderSimple()
  // $timelinePrueba.append(header)

  const btn = document.createElement("button");
  btn.textContent = `Postear`;
  btn.addEventListener("click", () => {
    window.location.hash = "#/formPost";
  });

  // --------------------------------------------------

  const $botonPrueba = document.createElement("span");
  $botonPrueba.classList.add("link");
  $botonPrueba.textContent = "Sign Out";

  $botonPrueba.addEventListener("click", logOutGoogle);
  const {menuModalPlus, toggleModalPlus} = MenuList()
  const $menu = Menu(toggleModalPlus);

  $timeline.append($header);
  $timeline.append($postsContainer);
  $timeline.append($botonPrueba);
  $timeline.append(btn);
  $timeline.append(menuModalPlus);
  $timeline.append($menu);

  return $timeline;
};
