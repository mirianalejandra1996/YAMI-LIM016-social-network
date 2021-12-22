// import { ModalEditProfile } from "../components/ModalEditProfile.js";

// export const ModalEditProfile = () => {
//   // * modalContenedor es el overlay
//   const $modalContenedor = document.createElement("div");
//   $modalContenedor.classList.add("modal__contenedor");
//   $modalContenedor.classList.add("modal-cerrar");
//   //Contenedor de name
//   const $formPost = document.createElement("div");
//   $formPost.classList.add("formPost");
//   // * Cabecera
//   const $header = document.createElement("div");
//   $header.classList.add("modal__cabecera");
//   //Opciones de Cabecera
//   const $opcionesCabecera = document.createElement("div");
//   $opcionesCabecera.classList.add("modal__opcionesCabecera");
//   //Opcion Cerrar
//   const $cerrarContainer = document.createElement("div");
//   $cerrarContainer.classList.add("card__icon-container");
//   $cerrarContainer.addEventListener("click", () => {
//     cerrarModal();
//   });
//   const $iconClose = document.createElement("span");
//   $iconClose.classList.add("card__icon", "close__icon");
//   $iconClose.classList.add("icon-icon-close");
//   $cerrarContainer.appendChild($iconClose);

//   $opcionesCabecera.append($cerrarContainer);

//   //Titulo del Modal
//   const $title = document.createElement("h2");
//   $title.classList.add("formPost_h2");
//   $title.textContent = `Edita tu perfil`;

//   $header.append($opcionesCabecera);
//   $header.append($title);

//   //Input del Post
//   const $inputsContainer = document.createElement("div");
//   $inputsContainer.classList.add("formPost_inputs");

//   const $name = document.createElement("input");
//   $name.id = "name";
//   $name.classList.add("formPost_input-short");
//   $name.placeholder = "Nombre";

//   //   const $date = document.createElement("input");
//   //   $date.classList.add("formPost_input-short");
//   //   $date.placeholder = "000000";
//   //   $date.type = "password";
//   //   $date.id = "date";

//   const $picture = document.createElement("input");
//   $picture.type = "file";
//   $picture.classList.add("formPost_input-short");
//   $picture.placeholder = `Añadir imagen`;
//   // picture.onchange = {pictureHandler}

//   $inputsContainer.append($name);
//   // $inputsContainer.append(date);
//   $inputsContainer.append($picture);

//   // Contenedor del mensaje de Error
//   const $errorContainer = document.createElement("div");
//   $errorContainer.classList.add("err-container", "center");

//   const $msgError = document.createElement("small");
//   $msgError.classList.add("error-msg");
//   $msgError.id = "errorCrearPost";
//   $msgError.textContent = "";
//   $errorContainer.append($msgError);

//   //Contenedor de Botones
//   const $btnsContainer = document.createElement("div");
//   $btnsContainer.classList.add("formPost_btns");

//   //////////////////////////////Boton de Tags
//   const $tagBtn = document.createElement("button");
//   $tagBtn.classList.add("formPost_button");

//   const $tagBtnDiv = document.createElement("div");
//   $tagBtnDiv.classList.add("btnContent");
//   $tagBtn.append($tagBtnDiv);

//   const $iconTag = document.createElement("span");
//   $iconTag.classList.add("icon-plus2");

//   $iconTag.classList.add("btnIconsTag");
//   $tagBtnDiv.append($iconTag);

//   const $textTag = document.createElement("span");
//   $textTag.classList.add("tagTextSpan");
//   $textTag.textContent = `Etiquetas`;
//   $tagBtnDiv.append($textTag);

//   //////////////////////////////////////Boton Publicacion

//   const $postBtn = document.createElement("button");
//   $postBtn.id = "sendPost";
//   $postBtn.classList.add("formPost_button");

//   //$btnsContainer.append($tagBtn);
//   $btnsContainer.append($postBtn);

//   // Anade funcionalidad al boton Publicar y valida campos vacios
//   $postBtn.addEventListener("click", () => {
//     const $mensajeError = document.getElementById("errorCrearPost");
//     const $formPostMsg = document.getElementById("msgPostForm").value;
//     if ($formPostMsg == "") {
//       $mensajeError.textContent = "completar campos *";
//     } else {
//       console.log("creamos el nuevo name!!", $formPostMsg);
//       //   addPost($formPostMsg).then(() => {
//       //     console.log("modal cerrado");
//       //     cerrarModal();
//       //   });
//     }
//   });

//   const $postBtnDiv = document.createElement("div");
//   $postBtnDiv.classList.add("btnContent");
//   $postBtn.append($postBtnDiv);

//   const $iconSend = document.createElement("span");
//   $iconSend.classList.add("icon-send");
//   $iconSend.classList.add("btnIconsPost");
//   $postBtnDiv.append($iconSend);

//   const $textPost = document.createElement("span");
//   $textPost.classList.add("postTextSpan");
//   $textPost.textContent = `Publicar`;
//   $postBtnDiv.append($textPost);

//   $formPost.append($header);
//   $formPost.append($inputsContainer);
//   $formPost.append($errorContainer);
//   $formPost.append($btnsContainer);

//   $modalContenedor.append($formPost);
//   //Modal oculto
//   $modalContenedor.style.opacity = "0";
//   $modalContenedor.style.visibility = "hidden";

//   const abrirModal = () => {
//     $modalContenedor.style.opacity = "1";
//     $modalContenedor.style.visibility = "visible";
//     $modalContenedor.classList.toggle("modal-cerrar");
//   };
//   const cerrarModal = () => {
//     $modalContenedor.classList.toggle("modal-cerrar");
//     $modalContenedor.style.opacity = "0";
//     $modalContenedor.style.visibility = "hidden";
//   };

//   return {
//     $modalEditProfile: $modalContenedor,
//     abrirModalEditProfile: abrirModal,
//     cerrarModalEditProfile: cerrarModal,
//   };
// };

export const ModalEditProfile = () => {
  const $modalContenedor = document.createElement("div");
  $modalContenedor.classList.add("modal__contenedor");
  $modalContenedor.classList.add("modal-cerrar");

  const profileContainer = document.createElement("div");
  // profileContainer.classList.add("profile-container");
  profileContainer.classList.add("modal-profile");
  // profileContainer.classList.add("formPost");
  $modalContenedor.append(profileContainer);
  //   Contenedor Base de foto del usuario
  const photoContainer = document.createElement("div");
  photoContainer.classList.add("photo__container");

  //   Imagen del usuario Contenedor
  const imgAvatarContainer = document.createElement("div");
  imgAvatarContainer.classList.add("photo__avatar-container");

  const photoAvatar = document.createElement("img");
  photoAvatar.classList.add("photo__avatar-img");
  photoAvatar.alt = "imgAvatar";
  photoAvatar.src = "../src/app/assets/brooke-cagle-k9XZPpPHDho-unsplash.jpg";

  imgAvatarContainer.append(photoAvatar);

  // Icono para editar imagen del usuario
  const iconPhotoContainer = document.createElement("div");
  iconPhotoContainer.classList.add("photo__edit-img", "hidden");
  const iconPhoto = document.createElement("span");
  iconPhoto.classList.add("icon-pencil", "pencil");

  iconPhotoContainer.append(iconPhoto);
  imgAvatarContainer.append(iconPhotoContainer);

  photoContainer.append(imgAvatarContainer);

  // -------------
  // Datos del usuario Formulario

  // Contenedor Base del formulario
  const formContainer = document.createElement("div");
  formContainer.classList.add("formProfile__container");

  // * Grupo: Nombre del usuario
  const groupName = document.createElement("div");
  groupName.classList.add("formProfile__group");

  //   Input nombre
  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.id = "name";
  inputName.classList.add("formProfile__input");
  inputName.disabled = true;

  //   Label de nombre
  const labelName = document.createElement("label");
  labelName.for = "name";
  labelName.classList.add("formProfile__label");
  labelName.textContent = "Nombre";

  //  Nombre Obligatorio
  const requiredName = document.createElement("span");
  requiredName.classList.add("formProfile__required", "hidden");
  requiredName.textContent = "*";

  groupName.append(inputName);
  groupName.append(labelName);
  groupName.append(requiredName);

  // -----------------------------

  // * Grupo: Fecha de Nacimiento del usuario
  const groupDate = document.createElement("div");
  groupDate.classList.add("formProfile__group");

  //   Input Fecha

  const inputDate = document.createElement("input");

  //   inputDate.type = "text";
  inputDate.id = "date";
  inputDate.classList.add("formProfile__input");
  inputDate.disabled = true;

  //   Label de nombre
  const labelDate = document.createElement("label");
  labelDate.for = "date";
  labelDate.classList.add("formProfile__label");
  labelDate.textContent = "Fecha de Nacimiento";

  groupDate.append(inputDate);
  groupDate.append(labelDate);

  // -----------------------------

  // * Grupo: Correo del usuario
  const groupEmail = document.createElement("div");
  groupEmail.classList.add("formProfile__group");

  //   Input email
  const inputEmail = document.createElement("input");
  inputEmail.type = "email";
  inputEmail.id = "email";
  inputEmail.classList.add("formProfile__input");
  inputEmail.disabled = true;

  //   Label de email
  const labelEmail = document.createElement("label");
  labelEmail.for = "email";
  labelEmail.classList.add("formProfile__label");
  labelEmail.textContent = "Correo";

  //  Email Obligatorio
  const requiredEmail = document.createElement("span");
  requiredEmail.classList.add("formProfile__required", "hidden");
  requiredEmail.textContent = "*";

  groupEmail.append(inputEmail);
  groupEmail.append(labelEmail);
  groupEmail.append(requiredEmail);

  // -----------------------------

  // * Grupo: Correo del usuario
  const groupPwd = document.createElement("div");
  groupPwd.classList.add("formProfile__group");

  //   Input email
  const inputPwd = document.createElement("input");
  //   inputPwd.type = "password";
  inputPwd.type = "password";
  inputPwd.id = "password";
  inputPwd.classList.add("formProfile__input");
  inputPwd.disabled = true;

  //   --------

  //   Label de email
  const labelPwd = document.createElement("label");
  labelPwd.for = "password";
  labelPwd.classList.add("formProfile__label");
  labelPwd.textContent = "Contraseña";

  //  Email Obligatorio
  const requiredPwd = document.createElement("span");
  requiredPwd.classList.add("formProfile__required", "hidden");
  requiredPwd.textContent = "*";

  const iconPwd = document.createElement("span");
  iconPwd.classList.add("formProfile__icon", "icon-eye-hidden");
  iconPwd.id = "eye";

  // let passwordMsg;

  groupPwd.append(inputPwd);
  groupPwd.append(labelPwd);
  groupPwd.append(requiredPwd);
  groupPwd.append(iconPwd);
  // -----------------------------

  //   Contenedor de campos obligatorios
  const errContainer = document.createElement("div");
  errContainer.classList.add("errContainer");

  const msgErr = document.createElement("span");
  msgErr.classList.add("error-msg");
  //   msgErr.textContent = "Campos obligatorios *";

  errContainer.append(msgErr);
  // -----------------------------

  const btnEdit = document.createElement("input");
  btnEdit.id = "submit";
  btnEdit.type = "submit";
  btnEdit.classList.add("formProfile__submit");
  btnEdit.value = "Editar";

  // -----------------------------

  // Aquí apendizamos todos los datos del usuario
  formContainer.append(groupName);
  formContainer.append(groupDate);
  formContainer.append(groupEmail);
  formContainer.append(groupPwd);
  //   Apendizamos el mensaje de error
  formContainer.append(errContainer);
  //  El botón de Editar
  formContainer.append(btnEdit);

  // -----------------------------

  // const { $modalEditProfile, abrirModalEditProfile, cerrarModalEditProfile } =
  //   ModalEditProfile();

  btnEdit.addEventListener("click", () => {
    // abrirModalEditProfile();
    console.log("editemos el perfil ");
  });

  // $modalEditProfile: $modalContenedor,
  // abrirModalEditProfile: abrirModal,
  // cerrarModalEditProfile: cerrarModal,

  // profileComponent.append(headerBack);
  // profileComponent.append(mainContainer);
  // mainContainer.append(profileContainer);
  profileContainer.append(photoContainer);
  profileContainer.append(formContainer);
  // profileComponent.append($modalEditProfile);

  //   --------------

  // getUserData(user.uid)
  //   .then((user) => {
  //     photoAvatar.src = user.user_photo;
  //     inputDate.type = "date";
  //     inputName.value = user.user_name;
  //     inputDate.value = user.user_birth;
  //     inputPwd.value = user.user_password;
  //     inputEmail.value = user.user_email;

  //     if (user.user_logedBy === "google") {
  //       msgErr.textContent = "Usted está logeado con Google";
  //       msgErr.style.color = "#0f0f0f";
  //       groupDate.classList.add("hidden");
  //       groupPwd.classList.add("hidden");
  //       iconPwd.classList.add("hidden");
  //       btnEdit.classList.add("hidden");
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // user_id: user.uid,
  // user_name: nameN,
  // user_photo: photoUrlN,
  // user_createdAt: user.metadata.createdAt,
  // user_email: emailN,
  // user_password: passwordN,
  // user_logedBy: logedByN,

  //   --------------
  iconPwd.addEventListener("click", () => {
    iconPwd.classList.toggle("icon-open-eye");
    iconPwd.classList.toggle("icon-eye-hidden");

    iconPwd.classList.contains("icon-open-eye")
      ? (inputPwd.type = "text")
      : (inputPwd.type = "password");
  });

  // $modalContenedor.append($formPost);
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
    $modalEditProfile: $modalContenedor,
    abrirModalEditProfile: abrirModal,
    cerrarModalEditProfile: cerrarModal,
  };
  // return profileComponent;
  // return profileContainer;
};
