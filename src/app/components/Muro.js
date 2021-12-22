import { auth } from "../firebase/firebase-auth.js";
import { HeaderRetroceder } from "../components/Header_retro.js";
import { Post } from "./Post.js";
import { traerMisPost } from "../firebase/firebase-data.js";
import { Menu, MenuList, ProfileList } from "./Menu.js";
import { ModalCerrarSesion } from "./Modal_cerrarSesion.js";
import { ModalCreatePost } from "./ModalCreatePost.js";

export function MiMuro() {
  const user = auth.currentUser;
  const $contenedorMuro = document.createElement("div");

  const $header = HeaderRetroceder();

  //   Contenedor Base de foto del usuario
  const $photoContainer = document.createElement("div");
  $photoContainer.classList.add("photo__container");
  //   Imagen del usuario Contenedor
  const imgAvatarContainer = document.createElement("div");
  imgAvatarContainer.classList.add("photo__avatar-container");
  const photoAvatar = document.createElement("img");
  photoAvatar.classList.add("photo__avatar-img");
  //   photoAvatar.src = "photoURL";
  photoAvatar.src = `${user.photoURL}`;
  //   photoAvatar.src = "../src/app/assets/brooke-cagle-k9XZPpPHDho-unsplash.jpg";
  photoAvatar.alt = "imgAvatar";

  const $nombre = document.createElement("p");
  $nombre.textContent = `${user.displayName}`;

  imgAvatarContainer.append(photoAvatar);
  $photoContainer.append(imgAvatarContainer);
  $photoContainer.append($nombre);

  const $opcionesMuro = document.createElement("div");
  $opcionesMuro.classList.add("opcionesMuro__container");
  const $publicaciones = document.createElement("a");
  $publicaciones.textContent = "Publicaciones";
  $publicaciones.style.fontWeight = "700";
  const $reseñas = document.createElement("a");
  $reseñas.textContent = "Reseñas";
  const $editarPerfil = document.createElement("a");
  $editarPerfil.textContent = "Editar Perfil";
  $editarPerfil.addEventListener("click", () => {
    window.location.hash = "#/profile";
  });

  $opcionesMuro.append($publicaciones);
  //$opcionesMuro.append($reseñas);
  $opcionesMuro.append($editarPerfil);

  const $misPostsContainer = document.createElement("div");
  $misPostsContainer.classList.add("shown");
  //mientras cargan post, al $postsContainer le hago append de un loader
  $misPostsContainer.textContent = "cargando posts...";

  traerMisPost(user.uid)
    .then((postsLista) => {
     
      // una vez que tengo la lista le quito el loader
      $misPostsContainer.textContent = "";
      //lleno el $postContainer con los nodos de post
      if(postsLista.length === 0){
        $misPostsContainer.textContent = "No hay post creados";
      }else{
        postsLista.forEach((post) => {
          const $post = Post(post);
          $misPostsContainer.append($post);
        });
      }
    })
    .catch((error) => {
      console.error(error);
      $misPostsContainer.textContent = "No hay post...";

      // mostrar mensaje de que no se pudo cargar los posts
    });

  //Cerrar Sesion
  const {  $modalCerrarSesion, abrilModalCerrarSesion } = ModalCerrarSesion();
  const {$modalCreatePost,abrirModalCreatePost} = ModalCreatePost();
  // Crea un Post
  const { menuModalPlus, toggleModalPlus } = MenuList(abrirModalCreatePost);
  // Perfil usuario
  const { menuModalProfile, toggleModalProfile } = ProfileList(abrilModalCerrarSesion);
  //Enviamos los eventos a Menu
  const $menu = Menu(toggleModalPlus, toggleModalProfile);

  // -----------------------------------------------------------------------------------
  $contenedorMuro.append($header)
  $contenedorMuro.append($photoContainer)
  $contenedorMuro.append($opcionesMuro)
  $contenedorMuro.append($misPostsContainer)
  $contenedorMuro.append(menuModalPlus)
  $contenedorMuro.append(menuModalProfile)
  $contenedorMuro.append($menu)
  $contenedorMuro.append($modalCreatePost)
  $contenedorMuro.append($modalCerrarSesion)

  return $contenedorMuro;
}
