import { logOutGoogle } from "../firebase/firebase-auth.js";
import { Post } from "./Post.js";
import { HeaderRetro } from "./Header_retro.js";
import { Menu, MenuList, ProfileList } from "./Menu.js";
import { traerPost } from "../firebase/firebase-data.js";

export function Timeline() {
  const $timeline = document.createElement("div");

  // Importamos la cabecera
  const $header = HeaderRetro();

  // Contenedor de las publicaciones
  const $postsContainer = document.createElement("div");
  $postsContainer.classList.add("notification-grid");

  // const $post = Post();

  // $postsContainer.append($post);

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


  const { menuModalPlus, toggleModalPlus } = MenuList();
  const { menuModalProfile, toggleModalProfile } = ProfileList();
  const $menu = Menu(toggleModalPlus, toggleModalProfile);

  $timeline.append($header);
  $timeline.append($postsContainer);
  $timeline.append($botonPrueba);
  $timeline.append(btn);
  $timeline.append(menuModalPlus);
  $timeline.append(menuModalProfile);
  $timeline.append($menu);

  // cosas que pasan asincronamente

  //mientras cargan post, al $postsContainer le hago append de un loader
  $postsContainer.textContent = "cargando posts...";

  traerPost()
    .then((postsLista) => {
      // una vez que tengo la lista le quito el loader
      $postsContainer.textContent = "";

      console.log("estos son los posts", postsLista);

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

//en vez de devolver $timeline, devuelve Promise que en el then devuelve $timeline

// Timeline() // cuando es async retorna es una promesa pendiente
//Timeline().then(($timeline) => {})
