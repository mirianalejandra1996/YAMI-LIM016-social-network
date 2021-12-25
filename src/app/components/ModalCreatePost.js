import { HeaderRetroceder } from "./Header_retro.js";
import { addPost } from "../firebase/firebase-data.js";

export const ModalCreatePost = () => {
  // * modalContenedor es el overlay
  const $modalContenedor = document.createElement("div");
  $modalContenedor.classList.add("modal__contenedor");
  $modalContenedor.classList.add("modal-cerrar");
  //Contenedor de post
  const $formPost = document.createElement("div");
  $formPost.classList.add("formPost");
  // * Cabecera
  const $header = document.createElement("div");
  $header.classList.add("modal__cabecera");
  //Opciones de Cabecera
  const $opcionesCabecera = document.createElement("div");
  $opcionesCabecera.classList.add("modal__opcionesCabecera");
  //Opcion Cerrar
  const $cerrarContainer = document.createElement("div");
  $cerrarContainer.classList.add("card__icon-container");
  $cerrarContainer.addEventListener("click", () => {
    cerrarModal();
  });
  const $iconClose = document.createElement("span");
  $iconClose.classList.add("card__icon", "close__icon");
  $iconClose.classList.add("icon-icon-close");
  $cerrarContainer.appendChild($iconClose);

  $opcionesCabecera.append($cerrarContainer);

  //Titulo del Modal
  const $title = document.createElement("h2");
  $title.classList.add("formPost_h2");
  $title.textContent = `Crear publicación`;

  $header.append($opcionesCabecera);
  $header.append($title);

  //Input del Post
  const $inputsContainer = document.createElement("div");
  $inputsContainer.classList.add("formPost_inputs");

  const $post = document.createElement("textarea");
  $post.id = "msgPostForm";
  $post.classList.add("formPost_input-long");
  $post.placeholder = `¿Qué estas pensando?`;

  const $tags = document.createElement("input");
  $tags.classList.add("formPost_input-short");
  $tags.placeholder = `Añadir etiquetas`;

  const $picture = document.createElement("input");
  $picture.type = "file";
  $picture.classList.add("formPost_input-short");
  $picture.placeholder = `Añadir imagen`;
  // picture.onchange = {pictureHandler}

  $inputsContainer.append($post);
  // $inputsContainer.append(tags);
  $inputsContainer.append($picture);

  // Contenedor del mensaje de Error
  const $errorContainer = document.createElement("div");
  $errorContainer.classList.add("err-container", "center");

  const $msgError = document.createElement("small");
  $msgError.classList.add("error-msg");
  $msgError.id = "errorCrearPost";
  $msgError.textContent = "";
  $errorContainer.append($msgError);

  //Contenedor de Botones
  const $btnsContainer = document.createElement("div");
  $btnsContainer.classList.add("formPost_btns");

  //////////////////////////////Boton de Tags
  const $tagBtn = document.createElement("button");
  $tagBtn.classList.add("formPost_button");

  const $tagBtnDiv = document.createElement("div");
  $tagBtnDiv.classList.add("btnContent");
  $tagBtn.append($tagBtnDiv);

  const $iconTag = document.createElement("span");
  $iconTag.classList.add("icon-plus2");

  $iconTag.classList.add("btnIconsTag");
  $tagBtnDiv.append($iconTag);

  const $textTag = document.createElement("span");
  $textTag.classList.add("tagTextSpan");
  $textTag.textContent = `Etiquetas`;
  $tagBtnDiv.append($textTag);

  //////////////////////////////////////Boton Publicacion

  const $postBtn = document.createElement("button");
  $postBtn.id = "sendPost";
  $postBtn.classList.add("formPost_button");

  //$btnsContainer.append($tagBtn);
  $btnsContainer.append($postBtn);

  // Anade funcionalidad al boton Publicar y valida campos vacios
  $postBtn.addEventListener("click", () => {
    const $mensajeError = document.getElementById("errorCrearPost");
    const $formPostMsg = document.getElementById("msgPostForm").value;
    if ($formPostMsg == "") {
      $mensajeError.textContent = "completar campos *";
    } else {
      console.log("creamos el nuevo post!!", $formPostMsg);
      addPost($formPostMsg).then(() => {
        console.log("modal cerrado");
        cerrarModal();
      });
    }
  });

  const $postBtnDiv = document.createElement("div");
  $postBtnDiv.classList.add("btnContent");
  $postBtn.append($postBtnDiv);

  const $iconSend = document.createElement("span");
  $iconSend.classList.add("icon-send");
  $iconSend.classList.add("btnIconsPost");
  $postBtnDiv.append($iconSend);

  const $textPost = document.createElement("span");
  $textPost.classList.add("postTextSpan");
  $textPost.textContent = `Publicar`;
  $postBtnDiv.append($textPost);

  $formPost.append($header);
  $formPost.append($inputsContainer);
  $formPost.append($errorContainer);
  $formPost.append($btnsContainer);

  $modalContenedor.append($formPost);
  //Modal oculto
  $modalContenedor.style.opacity = "0";
  $modalContenedor.style.visibility = "hidden";

  const abrirModal = () => {
    $modalContenedor.style.opacity = "1";
    $modalContenedor.style.visibility = "visible";
    $modalContenedor.classList.toggle("modal-cerrar");
  };
  const cerrarModal = () => {
    $modalContenedor.classList.toggle("modal-cerrar");
    $modalContenedor.style.opacity = "0";
    $modalContenedor.style.visibility = "hidden";
  };

  return {
    $modalCreatePost: $modalContenedor,
    abrirModalCreatePost: abrirModal,
  };
};
