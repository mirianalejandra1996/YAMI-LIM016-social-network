import { toggleLikes, initListenerPost } from "../firebase/firebase-data.js";
import { auth } from "../firebase/firebase-auth.js";
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
  $hour.textContent = "hace 1 hora";

  $dataContainer.append($userName);
  $dataContainer.append($hour);

  //   Icono de opciones

  const $optionsContainer = document.createElement("div");
  $optionsContainer.classList.add("card__options-container");
  $optionsContainer.id = `optionsPost_${post.post_id}`;

  // ! COMPONENTE DE LISTA DESPLEGABLE

  // probando este id
  // const $menu = document.getElementById("menu");

  const { menuModalOptionsPost, toggleModalOptionsPost } = OptionListPost();
  const $menuModalOptions = menuModalOptionsPost;

  // probando
  // $menu.append($menuModalOptions);

  // const $menu = Menu(menuModalOptions, toogleModalOptions);

  $optionsContainer.addEventListener("click", () => {
    // * CREO QUE AQUÍ DEBERÍA ENTRAR COMO PARÁMETRO EL ID DEL POST PARA DESPUÉS JALARLO DEL FIREBASE
    // console.log("deberia salir la lista desplegable de opciones de post");

    console.log("este es toogleModalOptions", toggleModalOptionsPost);
    // toggleModalOptionsPost();
    toggleModalOptionsPost();
    // toggleModalOptionsPost;
  });

  const $iconOptions = document.createElement("span");
  $iconOptions.classList.add("icon-options");
  $iconOptions.classList.add("card__options-icon");

  $optionsContainer.append($iconOptions);

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
  // ! Esto es nuevo
  $card.append($menuModalOptions);

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
export function OptionListPost() {
  const $modalContenedor = document.createElement("div");
  $modalContenedor.classList.add("modal__contenedor", "align-end", "cerrar");

  const $modalLista = document.createElement("div");
  $modalLista.classList.add("modal__lista");

  const $itemEditPublication = document.createElement("button");
  $itemEditPublication.classList.add("modal__button");
  $itemEditPublication.textContent = "Editar";

  const $itemRemovePublication = document.createElement("button");
  $itemRemovePublication.classList.add("modal__button");
  $itemRemovePublication.textContent = "Remover";

  $itemEditPublication.addEventListener("click", (e) => {
    // console.log(e.target);
    // window.location.hash = "#/formPost";
    console.log("debería cambiar de vista para editar post");
  });

  $itemRemovePublication.addEventListener("click", (e) => {
    // console.log(e.target);
    // window.location.hash = "#/formPost";
    console.log(
      'debería cambiar de vista mostrando un modal "estás seguro de elimianr?"'
    );
  });

  $modalLista.append($itemEditPublication);
  $modalLista.append($itemRemovePublication);

  // !Este se puede arreglar Quizá llamando al id del menu y apendizarle la lista de Opciones de post
  $modalContenedor.append($modalLista);

  const toggleModalOptionsPost = () => {
    $modalContenedor.classList.toggle("cerrar");
  };

  return {
    menuModalOptionsPost: $modalContenedor,
    toggleModalOptionsPost: toggleModalOptionsPost,
  };
}
