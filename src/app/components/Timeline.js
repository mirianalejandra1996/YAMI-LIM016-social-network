import { logOutGoogle } from "../firebase/firebase-auth.js";
import { Post } from "./Post.js";
import { Menu, MenuList, ProfileList } from "./Menu.js";
import { traerPost } from "../firebase/firebase-data.js";
import { HeaderSimple } from "./Header_simple.js";
// import { ModalEditPost } from './Edit_post.js'
// import { ModalCerrarSesion } from "./Modal_cerrar.js";

export function Timeline() {
  const $timeline = document.createElement("div");

  // Importamos la cabecera
  const $header = HeaderSimple();

  // Contenedor de las publicaciones
  const $postsContainer = document.createElement("div");
  $postsContainer.classList.add("notification-grid");


  // Crea un post
  const { menuModalPlus, toggleModalPlus } = MenuList();
  // const $menu = Menu(toggleModalPlus);

  // Perfil usuario
  const { menuModalProfile, toggleModalProfile } = ProfileList();

  // const { menuModalOptions, toogleModalOptions } = OptionListPost();

  const $menu = Menu(toggleModalPlus, toggleModalProfile);

  // -----------------------------------------------------------------------------------
  // Lista desplegable de opciones de post

  // -----------------------------------------------------------------------------------
  $timeline.append($header);
  $timeline.append($postsContainer);
  $timeline.append(menuModalPlus);
  $timeline.append(menuModalProfile);
  // $timeline.append(menuModalOptions);
  $timeline.append($menu);
  // $timeline.append(ModalCerrarSesion())

  // cosas que pasan asincronamente

  //mientras cargan post, al $postsContainer le hago append de un loader
  $postsContainer.textContent = "cargando posts...";

  traerPost()
    .then((postsLista) => {
      // una vez que tengo la lista le quito el loader
      $postsContainer.textContent = "";

      // console.log("estos son los posts", postsLista);

      //lleno el $postContainer con los nodos de post
      postsLista.forEach((post) => {
        const $post = Post(post);
        $postsContainer.append($post);
      });
    })
    .catch((error) => {
      // mostrar mensaje de que no se pudo cargar los posts
    });

  return $timeline;
}