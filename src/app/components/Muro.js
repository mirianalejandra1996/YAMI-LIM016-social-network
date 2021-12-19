import { auth } from "../firebase/firebase-auth.js";
import { HeaderRetroceder } from "../components/Header_retro.js";
import { Post } from "./Post.js";
import { traerMisPost } from "../firebase/firebase-data.js";

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

  imgAvatarContainer.append(photoAvatar);

  $photoContainer.append(imgAvatarContainer);

  const $opcionesMuro = document.createElement("div");
  const $publicaciones = document.createElement("a");
  $publicaciones.textContent = "Puclicaciones";
  const $reseñas = document.createElement("a");
  $reseñas.textContent = "Reseñas";
  const $editarPerfil = document.createElement("a");
  $editarPerfil.textContent = "Editar Perfil";
  $editarPerfil.addEventListener("click", () => {
    window.location.hash = "#/profile";
  });
  $opcionesMuro.append($publicaciones);
  $opcionesMuro.append($reseñas);
  $opcionesMuro.append($editarPerfil);

  const $misPostsContainer = document.createElement("div");
  //mientras cargan post, al $postsContainer le hago append de un loader
  $misPostsContainer.textContent = "cargando posts...";

  traerMisPost(user.uid)
    .then((postsLista) => {

      // una vez que tengo la lista le quito el loader
      $misPostsContainer.textContent = "";
      //lleno el $postContainer con los nodos de post
      postsLista.forEach((post) => {
        const $post = Post(post);
        $misPostsContainer.append($post);
      });
    })
    .catch((error) => {
      console.error(error)
      // mostrar mensaje de que no se pudo cargar los posts
    });

  $contenedorMuro.append($header);
  $contenedorMuro.append($photoContainer);
  $contenedorMuro.append($opcionesMuro);
  $contenedorMuro.append($misPostsContainer);

  return $contenedorMuro;
}
