import { updatePost } from "../firebase/firebase-data.js";

export const ModalEditPost = (postData) => {
  // * modalContenedor es el overlay
  const $modalContenedor = document.createElement("div");
  $modalContenedor.classList.add("modal__contenedor");
  $modalContenedor.classList.add("modal-cerrar");

  //  * Contenedor de toda la información
  const formPost = document.createElement("div");
  formPost.classList.add("formPost-edit");

  // * Cabecera
  const header = document.createElement("div");
  header.classList.add("modal__cabecera");

  const title = document.createElement("h2");
  title.classList.add("formPost_h2");
  title.textContent = `Editar publicación`;

  const guardar = document.createElement("h1");
  guardar.classList.add("formPost_h1");
  guardar.textContent = "Guardar";

  header.append(title);
  header.append(guardar);

  formPost.append(header);

  const inputsContainer = document.createElement("div");
  inputsContainer.classList.add("formPost_inputs");
  formPost.append(inputsContainer);

  const post = document.createElement("textarea");
  post.id = "msgPostForm";
  post.classList.add("formPost_input-long");
  post.placeholder = `¿Qué estas pensando?`;
  post.value = `${postData.message}`;
  inputsContainer.append(post);

  const tags = document.createElement("input");
  tags.classList.add("formPost_input-short");
  tags.placeholder = `Añadir etiquetas`;
  inputsContainer.append(tags);

  const picture = document.createElement("input");
  picture.classList.add("formPost_input-short");
  picture.placeholder = `Añadir imagen`;
  inputsContainer.append(picture);

  const btnsContainer = document.createElement("div");
  btnsContainer.classList.add("formPost_btns");
  formPost.append(btnsContainer);
  ///////////////////////////////////////////////

  const tagBtn = document.createElement("button");
  tagBtn.classList.add("formPost_button");
  btnsContainer.append(tagBtn);

  const tagBtnDiv = document.createElement("div");
  tagBtnDiv.classList.add("btnContent");
  tagBtn.append(tagBtnDiv);

  const iconTag = document.createElement("span");
  iconTag.classList.add("icon-plus2");

  iconTag.classList.add("btnIconsTag");
  tagBtnDiv.append(iconTag);

  const textTag = document.createElement("span");
  textTag.classList.add("tagTextSpan");
  textTag.textContent = `Etiquetas`;
  tagBtnDiv.append(textTag);

  $modalContenedor.append(formPost);

  $modalContenedor.style.opacity = "0";
  $modalContenedor.style.visibility = "hidden";

  const abrirModal = () => {
    $modalContenedor.style.opacity = "1";
    $modalContenedor.style.visibility = "visible";
    $modalContenedor.classList.toggle("modal-cerrar");
  };

  const cerrarModal = () => {
    createPostContainer.classList.toggle("modal-cerrar");
    setTimeout(function () {
      $modalContenedor.style.opacity = "0";
      $modalContenedor.style.visibility = "hidden";
    }, 900);
  };

  // Evento para guardar post (update en firebase)
  guardar.addEventListener("click", () => {
    console.log("entramos para actualizar");
    const nuevoMensaje = document.getElementById("msgPostForm").value;
    updatePost(postData.post_id, nuevoMensaje);
    window.location.hash = "#/";
  });

  return { $modalContenedor, abrirModal, cerrarModal };
};
