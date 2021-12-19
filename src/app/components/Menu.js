import { ModalCerrarSesion } from "./Modal_cerrarSesion.js";

export function Menu(toggleModalPlus, toggleModalProfile) {
  const d = document;
  //Menu
  const $menu = d.createElement("nav");
  $menu.classList.add("menu");
  $menu.id = "menu";

  //iconos del menu
  //icono 1
  const itemHome = d.createElement("a");
  itemHome.classList.add("menu__link");
  const $iconHome = document.createElement("i");
  $iconHome.classList.add("icon-home");

  itemHome.append($iconHome);

  //evento del ancla
  // itemHome.addEventListener('click', window.location.hash = "#/home")

  //icono 2
  const itemLupa = d.createElement("a");
  itemLupa.classList.add("menu__link");
  const $iconLupa = document.createElement("i");
  $iconLupa.classList.add("icon-lupa");

  itemLupa.append($iconLupa);
  //icono 3
  const itemPlus = d.createElement("a");
  itemPlus.classList.add("menu__link");
  const $iconPlus = document.createElement("i");
  $iconPlus.classList.add("icon-addPost");

  itemPlus.append($iconPlus);
  itemPlus.addEventListener("click", () => toggleModalPlus());
  //icono 4
  const itemReseña = d.createElement("a");
  itemReseña.classList.add("menu__link");
  const $iconReseña = document.createElement("i");
  $iconReseña.classList.add("icon-comment");

  itemReseña.append($iconReseña);
  //icono 5
  const itemPerfil = d.createElement("a");
  itemPerfil.classList.add("menu__link");
  const $iconPerfil = document.createElement("i");
  $iconPerfil.classList.add("icon-user");

  itemPerfil.append($iconPerfil);
  itemPerfil.addEventListener("click", () => toggleModalProfile());

  $menu.append(itemHome);
  $menu.append(itemLupa);
  $menu.append(itemPlus);
  $menu.append(itemReseña);
  $menu.append(itemPerfil);

  return $menu;
}

// LISTAS DESPLEGABLES

export function MenuList() {
  const $modalContenedor = document.createElement("div");
  $modalContenedor.classList.add("modal__contenedor", "align-end", "cerrar");

  const $modalLista = document.createElement("div");
  $modalLista.classList.add("modal__lista");

  const $itemsPublicacion = document.createElement("button");
  $itemsPublicacion.classList.add("modal__button");
  $itemsPublicacion.textContent = "Publicación";

  $itemsPublicacion.addEventListener("click", () => {
    window.location.hash = "#/formPost";
  });

  const $itemsReseña = document.createElement("button");
  $itemsReseña.classList.add("modal__button");
  $itemsReseña.textContent = "Reseña";

  const $itemsHistoria = document.createElement("button");
  $itemsHistoria.classList.add("modal__button");
  $itemsHistoria.textContent = "Historia";

  $modalLista.append($itemsPublicacion);
  // $modalLista.append($itemsReseña)
  // $modalLista.append($itemsHistoria)

  $modalContenedor.append($modalLista);

  const toggleModalPlus = () => {
    $modalContenedor.classList.toggle("cerrar");
  };

  return {
    menuModalPlus: $modalContenedor,
    toggleModalPlus: toggleModalPlus,
  };
}

// // Lista desplegable para editar o eliminar post
// export function OptionListPost() {
//   const $modalContenedor = document.createElement("div");
//   $modalContenedor.classList.add("modal__contenedor", "align-end", "cerrar");

//   const $modalLista = document.createElement("div");
//   $modalLista.classList.add("modal__lista");

//   const $itemEditPublication = document.createElement("button");
//   $itemEditPublication.classList.add("modal__button");
//   $itemEditPublication.textContent = "Editar";

//   const $itemRemovePublication = document.createElement("button");
//   $itemRemovePublication.classList.add("modal__button");
//   $itemRemovePublication.textContent = "Remover";

//   $itemEditPublication.addEventListener("click", (e) => {
//     // console.log(e.target);
//     // window.location.hash = "#/formPost";
//     console.log("debería cambiar de vista para editar post");
//   });

//   $itemRemovePublication.addEventListener("click", (e) => {
//     // console.log(e.target);
//     // window.location.hash = "#/formPost";
//     console.log(
//       'debería cambiar de vista mostrando un modal "estás seguro de elimianr?"'
//     );
//   });

//   $modalLista.append($itemEditPublication);
//   $modalLista.append($itemRemovePublication);

//   // !Este se puede arreglar Quizá llamando al id del menu y apendizarle la lista de Opciones de post
//   $modalContenedor.append($modalLista);

//   const toggleModalOptionsPost = () => {
//     $modalContenedor.classList.toggle("cerrar");
//   };

//   return {
//     menuModalOptionsPost: $modalContenedor,
//     toggleModalOptionsPost: toggleModalOptionsPost,
//   };
// }

export function ProfileList() {
  const $modalContenedorPerfil = document.createElement("div");
  $modalContenedorPerfil.classList.add(
    "modal__contenedor",
    "align-end",
    "cerrar"
  );

  const $modalLista = document.createElement("div");
  $modalLista.classList.add("modal__lista");

  const $itemsPerfil = document.createElement("button");
  $itemsPerfil.classList.add("modal__button");
  $itemsPerfil.textContent = "Ver perfil";

  const $itemsCerrarSesion = document.createElement("button");
  $itemsCerrarSesion.classList.add("modal__button");
  $itemsCerrarSesion.textContent = "Cerrar sesión";

  /********************************************/
  const { $modalContenedor, abrirModal } = ModalCerrarSesion();
  $modalContenedorPerfil.append($modalContenedor);

  $itemsPerfil.addEventListener("click", () => {
    console.log("cambiando de vista a profile!");
    window.location.hash = "#/muro"
  });

  $itemsCerrarSesion.addEventListener("click", (e) => {
    e.preventDefault();
    abrirModal();
  });
  /****************************************/
  $modalLista.append($itemsPerfil);
  $modalLista.append($itemsCerrarSesion);

  $modalContenedorPerfil.append($modalLista);

  const toggleModalProfile = () => {
    $modalContenedorPerfil.classList.toggle("cerrar");
  };

  return {
    menuModalProfile: $modalContenedorPerfil,
    toggleModalProfile: toggleModalProfile,
  };
}
