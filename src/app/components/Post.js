import { toggleLikes, initListenerPost } from "../firebase/firebase-data.js";
import { auth } from "../firebase/firebase-auth.js";
import { ModalEditPost } from "./Edit_post.js";
import { ModalEliminarPost } from "./Modal_eliminarPost.js";
// import { Menu, OptionListPost } from "./Menu.js";

export const Post = (post) => {
  const user_id = auth.currentUser.uid;
  console.log("currentuser", user_id);
  const $card = document.createElement("div");
  $card.classList.add("card");

  const $headerContainer = document.createElement("div");
  $headerContainer.classList.add("card__header");

  // Foto del usuario
  const $avatarContainer = document.createElement("div");
  $avatarContainer.classList.add("card__avatar-container");

  const $avatarImg = document.createElement("img");
  $avatarImg.classList.add("card__avatar-img");
  $avatarImg.src = "./app/assets/user-img.jpg";

  const $avatarOverlay = document.createElement("div");
  $avatarOverlay.classList.add("card__avatar-overlay");

  $avatarContainer.append($avatarImg);
  $avatarContainer.append($avatarOverlay);

  // Nombre y hora de publicación del usuario

  const $dataContainer = document.createElement("div");
  $dataContainer.classList.add("card__data-container");

  const $userName = document.createElement("h2");
  $userName.classList.add("card__avatar-fullname");
  $userName.textContent = `${post.user_name}`;

  const $hour = document.createElement("h3");
  $hour.classList.add("card__time");

  // todo: HACER FUNCION DE HORA
  // $hour.textContent = "hace 1 hora";
  $hour.textContent = `${timeSince(post.date)}`;

  $dataContainer.append($userName);
  $dataContainer.append($hour);

  //   Icono de opciones

  const $optionsContainer = document.createElement("div");
  $optionsContainer.classList.add("card__options-container");
  // $optionsContainer.id = `optionsPost_${post.post_id}`;

  const {
    menuModalOptionsPost,
    toggleModalOptionsPost,
    menuModalEdit,
    menuModalDelete,
  } = OptionListPost(post);
  const $menuModalOptions = menuModalOptionsPost;

  // EVENTO 3 PUNTITOS OPCIONES
  $optionsContainer.addEventListener("click", () => {
    console.log("deberia salir la lista desplegable de opciones de post");
    // debugger;
    toggleModalOptionsPost();
  });

  const $iconOptions = document.createElement("span");
  $iconOptions.classList.add("icon-options");
  $iconOptions.classList.add("card__options-icon");

  $optionsContainer.append($iconOptions);
  $optionsContainer.append($menuModalOptions);
  $headerContainer.append($avatarContainer);
  $headerContainer.append($dataContainer);
  $headerContainer.append($optionsContainer);

  //   -----------------------------------------------------------

  //   Contenido EN TEXTO del usuario

  const $msgContainer = document.createElement("div");
  $msgContainer.classList.add("card__msg-container");

  const $textMsg = document.createElement("p");
  $textMsg.classList.add("card__text-msg");
  $textMsg.textContent = `${post.message}`;

  $msgContainer.append($textMsg);

  //   -----------------------------------------------------------

  //   Pie de post (para dar likes y comentar)

  const $footerContainer = document.createElement("div");
  $footerContainer.classList.add("card__footer-container");

  /////CARD likes container
  const $likeContainer = document.createElement("div");
  $likeContainer.classList.add("card__icon-container");
  $likeContainer.addEventListener("click", () => {
    toggleLikes(post.post_id);
  });

  const $iconLike = document.createElement("span");
  $iconLike.classList.add("icon-like");
  $iconLike.classList.add("card__icon");

  const $counterLikes = document.createElement("span");
  $counterLikes.classList.add("card__counter");
  // $counterLikes.id = "counterLikes";
  $counterLikes.id = `counterLikes_${post.post_id}`;
  $counterLikes.textContent = `${post.likes.length}`;

  $likeContainer.appendChild($iconLike);
  $likeContainer.appendChild($counterLikes);

  /////CARD comentarios container
  const $comentContainer = document.createElement("div");
  $comentContainer.classList.add("card__icon-container");
  $comentContainer.addEventListener("click", () => {
    // Abrir coments(post.post_id);
  });

  const $iconComent = document.createElement("span");
  $iconComent.classList.add("icon-comment");
  $iconComent.classList.add("card__icon");

  const $comentarioTitle = document.createElement("span");
  $comentarioTitle.classList.add("card__counter");
  $comentarioTitle.id = "comentario";
  $comentarioTitle.textContent = "comentar";

  $comentContainer.appendChild($iconComent);
  $comentContainer.appendChild($comentarioTitle);

  $footerContainer.append($likeContainer);
  $footerContainer.append($comentContainer);
  //   -----------------------------------------------------------

  $card.append($headerContainer);
  $card.append($msgContainer);
  $card.append($footerContainer);
  $card.append(menuModalEdit);
  $card.append(menuModalDelete);
  // ! Esto es nuevo
  // $card.append($menuModalOptions);

  //   todo: HACER EVENTO a icono de like para actualizar datos

  initListenerPost(post.post_id, (postDoc) => {
    //se podria cambiar cualquier campo de post pero en este caso solo necesitamos los likes

    const likes = postDoc.data().likes;
    console.log("array de likes", likes);
    if (likes.find((like) => like === user_id)) {
      $likeContainer.classList.add("selected");
      console.log("si se encuentra");
    } else {
      $likeContainer.classList.remove("selected");
      console.log("no se encuentra");
    }

    $counterLikes.textContent = `${likes.length}`;
  });

  return $card;
};

// Lista desplegable para editar o eliminar post
export function OptionListPost(post) {
  const $modalLista = document.createElement("div");
  $modalLista.classList.add("card__dropdown", "cerrar");

  const $itemEditPublication = document.createElement("button");
  $itemEditPublication.classList.add("modal__button");
  $itemEditPublication.textContent = "Editar";
  // $itemEditPublication.id=`edit_${post_id}`

  const $itemRemovePublication = document.createElement("button");
  $itemRemovePublication.classList.add("modal__button");
  $itemRemovePublication.textContent = "Remover";

  // $modalLista.append($modalEditPost)
  $modalLista.append($itemEditPublication);
  $modalLista.append($itemRemovePublication);

  // $modalLista.append($modalContenedor)
  const { $modalContenedor, abrirModal } = ModalEditPost(post);

  $itemEditPublication.addEventListener("click", () => {
    console.log("SADADADS");
    // e.preventDefault();
    abrirModal();
  });

  const { modalEliminarPost, abrirModalEliminar } = ModalEliminarPost(post);

  $itemRemovePublication.addEventListener("click", () => {
    console.log(
      'debería cambiar de vista mostrando un modal "estás seguro de elimianr?"'
    );
    abrirModalEliminar();
  });

  // $modalLista.append($modalEditPost)
  // !Este se puede arreglar Quizá llamando al id del menu y apendizarle la lista de Opciones de post

  const toggleModalOptionsPost = () => {
    $modalLista.classList.toggle("cerrar");
  };

  return {
    menuModalOptionsPost: $modalLista,
    toggleModalOptionsPost: toggleModalOptionsPost,
    menuModalEdit: $modalContenedor,
    menuModalDelete: modalEliminarPost,
  };
}

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " años";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " meses";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " días";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " horas";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

// var aDay = 24*60*60*1000;
// console.log(timeSince(new Date(Date.now()-aDay)));
// console.log(timeSince(new Date(Date.now()-aDay*2)));

// -----------------------------
// const DATE_UNITS = {
//   day: 86400,
//   hour: 3600,
//   minute: 60,
//   second: 1,
// };

// const getSecondDiff = (timestamp) => (Date.now() - timestamp) / 1000;

// const getUnitAndValueDate = (secondsElapsed) => {
//   for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
//     if (secondsElapsed >= secondsInUnit || unit === "seconds") {
//       const value = Math.floor(secondsElapsed / secondsInUnit) * -1;
//       return { value, unit };
//     }
//   }
// };

// const rtf = new Intl.RelativeTimeFormat(locale);

// const timestamp = +new Date() - 3600000;

// const secondsElapsed = getSecondDiff(timestamp);
// const { value, unit } = getUnitAndValueDate(secondsElapsed);
// rtf.format(value, unit);

// ------------------------------------------------------------
// const DATE_UNITS = {
//   day: 86400,
//   hour: 3600,
//   minute: 60,
//   second: 1,
// };

// const getSecondDiff = (timestamp) => (Date.now() - timestamp) / 1000;

// const getUnitAndValueDate = (secondsElapsed) => {
//   for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
//     if (secondsElapsed >= secondsInUnit || unit === "seconds") {
//       const value = Math.floor(secondsElapsed / secondsInUnit) * -1;
//       return { value, unit };
//     }
//   }
// };

// const getTimeAgo = (timestamp, locale) => {
//   const rtf = new Intl.RelativeTimeFormat(locale);

//   const secondsElapsed = getSecondDiff(timestamp);
//   const { value, unit } = getUnitAndValueDate(secondsElapsed);
//   return rtf.format(value, unit);
// };

// export default function useTimeAgo({ timestamp }) {
//   const locale = "es";
//   const timeago = getTimeAgo(timestamp, locale);

//   const date = new Date(timestamp);
//   const formattedDate = new Intl.DateTimeFormat(locale, {
//     month: "long",
//     day: "numeric",
//   }).format(date);

//   return {
//     dateTime: formattedDate,
//     timeago,
//   };
// }
