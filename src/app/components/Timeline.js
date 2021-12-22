import { Post } from "./Post.js";
import { ModalCreatePost } from "./ModalCreatePost.js";
import { ModalEditPost } from "./ModalEditPost.js";
import { ModalEliminarPost } from "./ModalDeletePost.js";
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

  const { $modalCreatePost, abrirModalCreatePost } = ModalCreatePost();
  // Crea un Post
  const { menuModalPlus, toggleModalPlus } = MenuList(abrirModalCreatePost);
  // Perfil usuario
  const { menuModalProfile, toggleModalProfile } = ProfileList();
  //Enviamos los eventos a Menu
  const $menu = Menu(toggleModalPlus, toggleModalProfile);

  // -----------------------------------------------------------------------------------
  // Lista desplegable de opciones de post EDITAR ELIMINAR POST
  // -----------------------------------------------------------------------------------
  const {
    $modalContenedor: $modalEditPost,
    abrirModal: abrirModalEdit,
    setPost: setDataModalEdit,
  } = ModalEditPost();

  const {
    modalEliminarPost: $modalRemovePost,
    abrirModalEliminar: abrirModalRemove,
    setDataModalRemove: setDataModalRemove,
  } = ModalEliminarPost();

  // -----------------------------------------------------------------------------------
  // Construye el TIMELINE
  // -----------------------------------------------------------------------------------
  $timeline.append($header);
  $timeline.append($postsContainer);
  $timeline.append(menuModalPlus);
  $timeline.append(menuModalProfile);
  $timeline.append($menu);
  $timeline.append($modalCreatePost);
  $timeline.append($modalEditPost);
  $timeline.append($modalRemovePost);

  // cosas que pasan asincronamente

  //mientras cargan post, al $postsContainer le hago append de un loader
  $postsContainer.textContent = "Cargando posts...";

  traerPost()
    .then((postsLista) => {
      // una vez que tengo la lista le quito el loader
      $postsContainer.textContent = "";
      //lleno el $postContainer con los nodos de post
      postsLista.forEach((post) => {
        const $post = Post(
          post,
          setDataModalEdit,
          abrirModalEdit,
          setDataModalRemove,
          abrirModalRemove
        );
        $postsContainer.append($post);
      });
    })
    .catch((error) => {
      // mostrar mensaje de que no se pudo cargar los posts
      console.error(error);
      $postsContainer.textContent = "No hay posts";
    });

  return $timeline;
}

//en vez de devolver $timeline, devuelve Promise que en el then devuelve $timeline
// Timeline() // cuando es async retorna es una promesa pendiente
//Timeline().then(($timeline) => {})
