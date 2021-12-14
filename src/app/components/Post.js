import { contadorLikes } from "../firebase/firebase-data.js";

export const Post = (post) => {
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

  //   Pie de post (para dar likes)

  const $footerContainer = document.createElement("div");
  $footerContainer.classList.add("card__footer-container");

  const $likeContainer = document.createElement("div");
  $likeContainer.classList.add("card__like-container");
  $likeContainer.addEventListener("click", () => {
    contadorLikes(post.post_id);
  });
  console.log(post);
  console.log(post.post_id, "id post");

  const $iconLike = document.createElement("span");
  $iconLike.classList.add("icon-like");
  $iconLike.classList.add("card__like");

  const $counterLikes = document.createElement("span");
  $counterLikes.classList.add("card__counter");
  $counterLikes.id = "counterLikes";
  $counterLikes.textContent = `${post.likes.length}`;

  $likeContainer.appendChild($iconLike);
  $likeContainer.appendChild($counterLikes);

  $footerContainer.append($likeContainer);

  //   -----------------------------------------------------------

  $card.append($headerContainer);
  $card.append($msgContainer);
  $card.append($footerContainer);

  //   todo: HACER EVENTO a icono de like para actualizar datos

  return $card;
};
