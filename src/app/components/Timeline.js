import { logOutGoogle } from "../firebase/firebase-auth.js";
import { Post } from "./Post.js";
import { Menu, MenuList, ProfileList } from "./Menu.js";
import { traerPost } from "../firebase/firebase-data.js";
import { HeaderSimple } from "./Header_simple.js";
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

// export function ModalCerrarSesion () {

//   const $modalContenedor = document.createElement('div')
//   $modalContenedor.classList.add('modal__contenedor')

//   const $modalCerrar = document.createElement('div')
//   $modalCerrar.classList.add('modal', 'modal-cerrar')

//   const $modaltexto = document.createElement('div')
//   $modaltexto.classList.add('modal-textos')

//   const $Titulo = document.createElement('h2')
//   $Titulo.classList.add('modal-titulo')
//   $Titulo.textContent='¿Salir de Yami?'

//   const $contenedorMensaje = document.createElement('div')
//   $contenedorMensaje.classList.add('modal__p-cerrarS')
//   const $mensaje = document.createElement('p')
//   $mensaje.textContent = 'Salir'

//   const $cerrar = document.createElement('p')
//   $cerrar.classList.add('modal__p-cancelar')
//   $cerrar.textContent = 'Cancelar'
 
//   $modalContenedor.append($modalCerrar)
//   $modalCerrar.append($modaltexto)
//   $modaltexto.append($Titulo)
//   $contenedorMensaje.append($mensaje)
//   $modaltexto.append($contenedorMensaje)
//   $modaltexto.append($cerrar)

//   $modalContenedor.style.opacity = "0"
//   $modalContenedor.style.visibility = "hidden"

//   const abrirModal  = ()  => {
//       $modalContenedor.style.opacity = "1"
//       $modalContenedor.style.visibility = "visible"
//       $modalCerrar.classList.toggle('modal-cerrar')
//   }

//   const cerrarModal = ()  => {
//        $modalCerrar.classList.toggle('modal-cerrar')
//        setTimeout(function () {
//           $modalContenedor.style.opacity = "0"
//           $modalContenedor.style.visibility = "hidden"
//       }, 900)
//   }

//   $cerrar.addEventListener('click', cerrarModal)
//   $contenedorMensaje.addEventListener('click', logOutGoogle)

//  return {
//      $modalContenedor,
//      abrirModal,
//      cerrarModal
//  }
// }

//en vez de devolver $timeline, devuelve Promise que en el then devuelve $timeline

// Timeline() // cuando es async retorna es una promesa pendiente
//Timeline().then(($timeline) => {})
