import { toggleLikes, initListenerPost } from "../firebase/firebase-data.js";
import { auth } from "../firebase/firebase-auth.js";
import { NewComments } from "./Post-comments.js";
import { Comment } from "./Comment.js";
import { traerComments } from "../firebase/firebase-data.js";

// import { Menu, OptionListPost } from "./Menu.js";

export const Post = (
  post,
  setDataModalEdit,
  abrirModalEdit,
  setDataModalRemove,
  abrirModalRemove,
  abrirModalRemoveCom,
  setDataModalRemoveCom,
  abrirModalEditCom,
  setDataModalEditCom
) => {
  // console.log(post)

  const user_id = auth.currentUser.uid;
  // console.log("currentuser", user_id);
  const $card = document.createElement("div");
  $card.classList.add("card");

  const $headerContainer = document.createElement("div");
  $headerContainer.classList.add("card__header");

  // Foto del usuario
  const $avatarContainerDiv = document.createElement("div")
  $avatarContainerDiv.classList.add("avatarContainerDiv")

  const $avatarContainer = document.createElement("div");
  $avatarContainer.classList.add("card__avatar-container");

  const $avatarImg = document.createElement("img");
  $avatarImg.classList.add("card__avatar-img");
  $avatarImg.src = post.user_photo;

  const $avatarOverlay = document.createElement("div");
  $avatarOverlay.classList.add("card__avatar-overlay");

  $avatarContainer.append($avatarImg);
  $avatarContainer.append($avatarOverlay);
  $avatarContainerDiv.append($avatarContainer)

  // ! aqui!
  const $textAndIconContainer = document.createElement("div");
  $textAndIconContainer.classList.add("card__textAndIconContainer");
  // Nombre y hora de publicación del usuario

  const $dataContainer = document.createElement("div");
  $dataContainer.classList.add("card__data-container");

  const $userName = document.createElement("h2");
  $userName.classList.add("card__avatar-fullname");
  $userName.textContent = `${post.user_name}`;

  const $hour = document.createElement("h3");
  $hour.classList.add("card__time");

  // todo: HACER FUNCION DE HORA
  // $hour.textContent = 1 hora";
  $hour.textContent = `${timeSince(post.date)}`;

  $dataContainer.append($userName);
  $dataContainer.append($hour);

  //   Icono de opciones

  const $optionsContainer = document.createElement("div");
  $optionsContainer.classList.add("card__options-container");
  // $optionsContainer.id = `optionsPost_${post.post_id}`;

  $textAndIconContainer.append($dataContainer);
  $textAndIconContainer.append($optionsContainer);

  // ! Si el usuario no es dueño del post, no debería salir la lista desplegable
  if (user_id !== post.id_user) $optionsContainer.classList.add("hidden");

  //

  const handleClickEdit = () => {
    setDataModalEdit(post);
    abrirModalEdit();
  };

  const handleClickRemove = () => {
    setDataModalRemove(post);
    abrirModalRemove();
  };

  const { menuModalOptionsPost, toggleModalOptionsPost } = OptionListPost(
    handleClickRemove,
    handleClickEdit
  );
  const $menuModalOptions = menuModalOptionsPost;

  // EVENTO 3 PUNTITOS OPCIONES
  $optionsContainer.addEventListener("click", () => {
    console.log("deberia salir la lista desplegable de opciones de post");
    // console.log("este es el post id", post.post_id);
    toggleModalOptionsPost();
  });

  const $iconOptions = document.createElement("span");
  $iconOptions.classList.add("icon-options");
  $iconOptions.classList.add("card__options-icon");

  $optionsContainer.append($iconOptions);
  $optionsContainer.append($menuModalOptions);
  $headerContainer.append($avatarContainerDiv);

  // ! aqui! va a cambiar todo por un solo div
  $headerContainer.append($textAndIconContainer);

  // $headerContainer.append($dataContainer);
  // $headerContainer.append($optionsContainer);

  //   -----------------------------------------------------------

  //   Contenido EN TEXTO del usuario

  const $msgContainer = document.createElement("div");
  $msgContainer.classList.add("card__msg-container");

  const $textMsg = document.createElement("p");
  $textMsg.classList.add("card__text-msg");
  $textMsg.textContent = `${post.message}`;

  $msgContainer.append($textMsg);

  //   -----------------------------------------------------------
  //   Contenido Imagen del POST del usuario
  

  const $postImageContainer = document.createElement('div')
  $postImageContainer.classList.add("imagenPostDiv")
  const $postImg = document.createElement("img");
  $postImg.classList.add("imagenPost");
  if(post.imageUrl){
    $postImg.src = post.imageUrl;
    $postImageContainer.append($postImg)
  }


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
    $commentsBlock.classList.toggle("close");
  });

  const $iconComent = document.createElement("span");
  $iconComent.classList.add("icon-comment");
  $iconComent.classList.add("card__icon");

  const $comentarioTitle = document.createElement("span");
  $comentarioTitle.classList.add("card__counter");
  $comentarioTitle.id = "comentario";

  /****************************/

  const $commentsBlock = document.createElement("div");
  $commentsBlock.classList.add("close");

  const commentsDiv = document.createElement("div");
  commentsDiv.classList.add("commentsDiv");
  const commentsContainer = document.createElement("div");
  commentsContainer.classList.add("commentsContainer");

  traerComments(post.post_id)
    .then((commentsList) => {
      if (commentsList.length > 1 || commentsList.length === 0) {
        $comentarioTitle.textContent = commentsList.length + " comentarios";
      } else {
        $comentarioTitle.textContent = commentsList.length + " comentario";
      }

      commentsList.forEach((com) => {
        const comment = Comment(
          post.post_id,
          com,
          abrirModalRemoveCom,
          setDataModalRemoveCom,
          abrirModalEditCom,
          setDataModalEditCom
        );
        commentsContainer.append(comment);
        // console.log("entra")
      });
    })
    .catch((err) => console.log(err));

  commentsDiv.append(commentsContainer);

  const $postComments = NewComments(post.post_id);

  $commentsBlock.append(commentsDiv);
  // $commentsBlock.append($postComments)

  /****************************/

  $comentContainer.appendChild($comentarioTitle);
  $comentContainer.appendChild($iconComent);

  $footerContainer.append($likeContainer);
  $footerContainer.append($comentContainer);

  //   todo: HACER EVENTO a icono de like para actualizar datos

  initListenerPost(post.post_id, (postDoc) => {
    //se podria cambiar cualquier campo de post pero en este caso solo necesitamos los likes

    // console.log(postDoc.data())

    const likes = postDoc.data().likes;
    // console.log("array de likes", likes);
    if (likes.find((like) => like === user_id)) {
      $likeContainer.classList.add("selected");
      console.log("si se encuentra");
    } else {
      $likeContainer.classList.remove("selected");
      // console.log("no se encuentra");
    }

    $counterLikes.textContent = `${likes.length}`;
  });
  //   -----------------------------------------------------------

  $card.append($headerContainer);
  $card.append($msgContainer);
  $card.append($postImageContainer);
  $card.append($footerContainer);
  $card.append($commentsBlock);
  // $card.append(commentsDiv)
  $card.append($postComments);

  return $card;
};

// Lista desplegable para editar o eliminar post
function OptionListPost(onClickRemove, onClickEdit) {
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

  $itemEditPublication.addEventListener("click", onClickEdit);
  $itemRemovePublication.addEventListener("click", onClickRemove);

  const toggleModalOptionsPost = () => {
    $modalLista.classList.toggle("cerrar");
  };

  return {
    menuModalOptionsPost: $modalLista,
    toggleModalOptionsPost: toggleModalOptionsPost,
  };
}

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  // Intervalo de años
  var interval = seconds / 31536000;
  if (interval > 1) {
    let years = Math.floor(interval);
    if (years === 1) return `Hace ${years} mes`;
    return `Hace ${years} años`;
  }

  // Intervalo de meses
  interval = seconds / 2592000;
  if (interval > 1) {
    let months = Math.floor(interval);
    if (months === 1) return `Hace ${months} mes`;
    return `Hace ${months} meses`;
  }

  // Intervalo de días
  interval = seconds / 86400;
  if (interval > 1) {
    let days = Math.floor(interval);
    if (days === 1) return `Hace ${days} hora`;
    return `Hace ${days} días`;
  }

  // Intervalo de horas
  interval = seconds / 3600;
  if (interval > 1) {
    let hours = Math.floor(interval);
    if (hours === 1) return `Hace ${hours} hora`;
    return `Hace ${hours} horas`;
  }

  // Intervalo de minutos
  interval = seconds / 60;
  if (interval > 1) {
    let minutes = Math.floor(interval);
    if (minutes === 1) return `Hace ${minutes} minuto`;
    return `Hace ${minutes} minutos`;
  }
  return `Hace segundos`;
}
