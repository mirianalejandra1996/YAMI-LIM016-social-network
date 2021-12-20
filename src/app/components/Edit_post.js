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
  //Opciones de Cabecera
  const opcionesCabecera = document.createElement("div");
  opcionesCabecera.classList.add("modal__opcionesCabecera");
  //Opcion Cerrar
  const cerrarContainer = document.createElement("div");
  cerrarContainer.classList.add("card__icon-container");
  cerrarContainer.addEventListener("click", () => {
    cerrarModal();
  });
  const iconClose = document.createElement("span");
  iconClose.classList.add("card__icon", "close__icon");
  iconClose.classList.add("icon-icon-close");
  cerrarContainer.appendChild(iconClose);
  //opcion Guardar
  const guardar = document.createElement("h1");
  guardar.classList.add("formPost_h1");
  guardar.textContent = "Guardar";

  opcionesCabecera.append(cerrarContainer);
  opcionesCabecera.append(guardar);

  //Titulo del Modal
  const title = document.createElement("h2");
  title.classList.add("formPost_h2");
  title.textContent = `Editar publicación`;

  header.append(opcionesCabecera);
  header.append(title);

  const inputsContainer = document.createElement("div");
  inputsContainer.classList.add("formPost_inputs");

  const post = document.createElement("textarea");
  post.id = `msgPost_${postData.post_id}`;
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

  formPost.append(header);
  formPost.append(inputsContainer);
  formPost.append(btnsContainer);

  $modalContenedor.append(formPost);

  $modalContenedor.style.opacity = "0";
  $modalContenedor.style.visibility = "hidden";

  //Abri y Cerrar Modal
  const abrirModal = () => {
    $modalContenedor.style.opacity = "1";
    $modalContenedor.style.visibility = "visible";
    $modalContenedor.classList.toggle("modal-cerrar");
  };

  const cerrarModal = () => {
    $modalContenedor.classList.toggle("modal-cerrar");
    setTimeout(function () {
      $modalContenedor.style.opacity = "0";
      $modalContenedor.style.visibility = "hidden";
    }, 900);
  };

  // Evento para guardar post (update en firebase)
  guardar.addEventListener("click", () => {
    console.log("entramos para actualizar");
    // const nuevoMensaje = document.getElementById("msgPost").value;
    const nuevoMensaje = document.getElementById(
      `msgPost_${postData.post_id}`
    ).value;
    console.log("este es el nuevo mensaje", nuevoMensaje);

    // const idPostSelecter = postData.post_id

    updatePost(postData.post_id, nuevoMensaje);
    window.location.hash = "#/";
  });

  return { $modalContenedor, abrirModal, cerrarModal };
};
