import { updatePost } from "../firebase/firebase-data.js";

export const ModalEditPost = () => {
  // * modalContenedor es el overlay
  const $modalContenedor = document.createElement("div");
  $modalContenedor.classList.add("modal__contenedor");
  $modalContenedor.classList.add("modal-cerrar");

  //  * Contenedor de toda la información
  const $formPost = document.createElement("div");
  $formPost.classList.add("formPost-edit");

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
  //opcion Guardar
  const $guardar = document.createElement("h1");
  $guardar.classList.add("formPost_h1");
  $guardar.textContent = "Guardar";

  $opcionesCabecera.append($cerrarContainer);
  $opcionesCabecera.append($guardar);

  //Titulo del Modal
  const $title = document.createElement("h2");
  $title.classList.add("formPost_h2");
  $title.textContent = `Editar publicación`;

  $header.append($opcionesCabecera);
  $header.append($title);

  const $inputsContainer = document.createElement("div");
  $inputsContainer.classList.add("formPost_inputs");

  const $post = document.createElement("textarea");
  $post.classList.add("formPost_input-long");
  $post.placeholder = `¿Qué estas pensando?`;

 

  const $tags = document.createElement("input");
  $tags.classList.add("formPost_input-short");
  $tags.placeholder = `Añadir etiquetas`;
  //$inputsContainer.append($tags);

  //Input de la Imagen
  const $pictureContainer = document.createElement("div");
  $pictureContainer.classList.add("formPost_input-short", "iconImg_rigth");
  const $picture = document.createElement("input");
  $picture.id = "file";
  $picture.type = "file";

  const $imagenFile = document.createElement("img");
  $imagenFile.classList.add("imagenFile");

  let postImageFile;

  // Escuchar cuando cambie
  $picture.addEventListener("change", () => {
    // Los archivos seleccionados, pueden ser muchos o uno
    const archivos = $picture.files;
    // Si no hay archivos salimos de la función y quitamos la imagen
    if (!archivos || !archivos.length) {
      $imagenFile.src = "";
      return;
    }
    // Ahora tomamos el primer archivo, el cual vamos a previsualizar
    postImageFile = archivos[0];
    // Lo convertimos a un objeto de tipo objectURL
    const objectURL = URL.createObjectURL(postImageFile);
    // Y a la fuente de la imagen le ponemos el objectURL
    $imagenFile.src = objectURL;
  });

  const $pictureLabel = document.createElement("label");
  $pictureLabel.setAttribute("for", "file");
  $pictureLabel.classList.add("modal__fileInput");
  $pictureLabel.textContent = "Añadir imagen";

  const $iconPicture = document.createElement("span");
  $iconPicture.classList.add("icon-addimg");
  $iconPicture.classList.add("card__icon");

  $pictureLabel.append($iconPicture);

  $pictureContainer.append($pictureLabel);
  $pictureContainer.append($picture);

  //////////////////////////
  $inputsContainer.append($post);
  $inputsContainer.append($pictureContainer);
  $inputsContainer.append($imagenFile);
  ////////////////////////////

  const $btnsContainer = document.createElement("div");
  $btnsContainer.classList.add("formPost_btns");

  ///////////////////////////////////////////////

  const $tagBtn = document.createElement("button");
  $tagBtn.classList.add("formPost_button");
  $btnsContainer.append($tagBtn);

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

  $formPost.append($header);
  $formPost.append($inputsContainer);
  //$formPost.append($btnsContainer);

  $modalContenedor.append($formPost);

  //Modal oculto
  $modalContenedor.style.opacity = "0";
  $modalContenedor.style.visibility = "hidden";

  let guardarButtonClickListener;

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

  // Evento para guardar post (update en firebase)
    $guardar.addEventListener("click", () => {
    console.log("entramos para actualizar");
    // const nuevoMensaje = document.getElementById("msgPost").value;
    // console.log(postData)
    const nuevoMensaje = document.getElementById(`msgPost_${postData.post_id}`).value;
    console.log("este es el nuevo mensaje", nuevoMensaje);
    //limpiar modal antes de cerrar
    $post.value = "";
    //eliminar event listeners a cualquier nodo o elemeno
    $guardar.removeEventListener("click", guardarButtonClickListener);

    $modalContenedor.style.opacity = "0";
    $modalContenedor.style.visibility = "hidden";
  })

  const setPost = (postData) => {
    $post.value = `${postData.message}`;
    $imagenFile.src = postData.imageUrl;

    guardarButtonClickListener = () => {
      console.log("entramos a actualizar post");
      // const nuevoMensaje = document.getElementById("msgPost").value;
      const nuevoMensaje = $post.value;
      //Actualiza el Post
      updatePost(postData.post_id, {message: nuevoMensaje}).then(() => {
        window.location.hash = "#/";
      });
    };
    // Evento para guardar post (update en firebase)
    $guardar.addEventListener("click", guardarButtonClickListener);
  };

  return { $modalContenedor, abrirModal, cerrarModal, setPost };
};
