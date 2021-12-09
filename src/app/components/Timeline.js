import { logOutGoogle } from "../firebase/firebase-auth.js";
import { Header } from "./Cabecera.js";
import { Post } from "./Post.js";

export const Timeline = () => {
  const $timeline = document.createElement("div");

  // Importamos la cabecera
  const $header = Header();

  // Contenedor de las publicaciones
  const $postsContainer = document.createElement("div");
  $postsContainer.classList.add("notification-grid");

  const $post = Post();

  $postsContainer.append($post);

  // --------------------------------------------------
  $timeline.append($header);
  $timeline.append($postsContainer);

  return $timeline;
};
