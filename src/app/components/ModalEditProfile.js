// import { ModalEditProfile } from "../components/ModalEditProfile.js";
import { getUserData } from "../firebase/firebase-data.js";
import { auth } from "../firebase/firebase-auth.js";
import { updateUser } from "../firebase/firebase-data.js";
import {
  validate_email,
  validate_password,
  validate_field,
} from "../firebase/firebase-auth.js";

export const ModalEditProfile = () => {
  const user = auth.currentUser;

  const $modalContenedor = document.createElement("div");
  $modalContenedor.classList.add("modal__contenedor");
  $modalContenedor.classList.add("modal-cerrar");

  const profileContainer = document.createElement("div");
  profileContainer.classList.add("modal-profile");
  $modalContenedor.append(profileContainer);

  // Cabecera del modal

  const headerModal = document.createElement("div");
  headerModal.classList.add("modal-profile__header");

  const titulo = document.createElement("h2");
  titulo.classList.add("modal-profile__title");
  titulo.textContent = "Edita tu perfil";

  const closeIcon = document.createElement("span");
  closeIcon.classList.add("icon-icon-close", "modal-profile__closeIcon");
  // profileContainer.append(headerModal)

  headerModal.append(titulo);
  headerModal.append(closeIcon);

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
  // todo: cambiar clase de modal

  formContainer.classList.add("modal-profile__container");
  // formContainer.classList.add("formProfile__container");

  // * Grupo: Nombre del usuario
  const groupName = document.createElement("div");
  groupName.classList.add("formProfile__group");

  //   Input nombre
  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.id = "name";
  inputName.classList.add("modal-profile__input");
  inputName.placeholder = "Nombre";

  //  Nombre Obligatorio
  const requiredName = document.createElement("span");
  requiredName.classList.add("modal-profile__required");
  requiredName.textContent = "*";

  groupName.append(inputName);
  groupName.append(requiredName);

  // -----------------------------

  // * Grupo: Fecha de Nacimiento del usuario
  const groupDate = document.createElement("div");
  groupDate.classList.add("formProfile__group");

  //   Input Fecha

  const inputDate = document.createElement("input");

  inputDate.type = "date";
  inputDate.id = "date";
  inputDate.classList.add("modal-profile__input");

  groupDate.append(inputDate);

  // -----------------------------

  // * Grupo: Correo del usuario
  const groupEmail = document.createElement("div");
  groupEmail.classList.add("formProfile__group");

  //   Input email
  const inputEmail = document.createElement("input");
  inputEmail.type = "email";
  inputEmail.id = "email";
  inputEmail.placeholder = "Correo electrónico";
  inputEmail.classList.add("modal-profile__input");

  //  Email Obligatorio
  const requiredEmail = document.createElement("span");
  requiredEmail.classList.add("modal-profile__required");
  requiredEmail.textContent = "*";

  groupEmail.append(inputEmail);
  groupEmail.append(requiredEmail);

  // -----------------------------

  // * Grupo: Correo del usuario
  const groupPwd = document.createElement("div");
  groupPwd.classList.add("formProfile__group");

  //   Input email
  const inputPwd = document.createElement("input");
  inputPwd.type = "text";
  inputPwd.id = "password";
  inputPwd.placeholder = "Contraseña";
  inputPwd.classList.add("modal-profile__input");

  //   --------

  //  Email Obligatorio
  const requiredPwd = document.createElement("span");
  requiredPwd.classList.add("modal-profile__required");
  requiredPwd.textContent = "*";

  groupPwd.append(inputPwd);
  groupPwd.append(requiredPwd);
  // -----------------------------

  //   Contenedor de campos obligatorios
  const errContainer = document.createElement("div");
  errContainer.classList.add("errContainer--modal");

  const msgErr = document.createElement("span");
  msgErr.classList.add("error-msg");
  msgErr.id = "error-msg";
  // errorLogin
  //   msgErr.textContent = "Campos obligatorios *";

  errContainer.append(msgErr);
  // -----------------------------

  const btnsContainer = document.createElement("div");
  btnsContainer.classList.add("modal-profile__btns-container");

  const btnCancel = document.createElement("input");
  btnCancel.id = "cancelChanges";
  btnCancel.type = "submit";
  btnCancel.classList.add("modal-profile__btn");
  btnCancel.value = "Cancelar";

  const btnSaveChanges = document.createElement("input");
  btnSaveChanges.id = "saveChanges";
  btnSaveChanges.type = "submit";
  btnSaveChanges.classList.add("modal-profile__btn");
  btnSaveChanges.value = "Guardar";

  btnsContainer.append(btnCancel);
  btnsContainer.append(btnSaveChanges);

  // -----------------------------

  // Aquí apendizamos todos los datos del usuario
  formContainer.append(groupName);
  formContainer.append(groupDate);
  formContainer.append(groupEmail);
  formContainer.append(groupPwd);
  //   Apendizamos el mensaje de error
  formContainer.append(errContainer);
  // todo: en realidad hay que apendizar el div que tiene a editar o cancelar
  formContainer.append(btnsContainer);

  // -----------------------------

  // const { $modalEditProfile, abrirModalEditProfile, cerrarModalEditProfile } =
  //   ModalEditProfile();

  btnSaveChanges.addEventListener("click", () => {
    // abrirModalEditProfile();
    console.log("editemos el perfil ");
  });

  // $modalEditProfile: $modalContenedor,
  // abrirModalEditProfile: abrirModal,
  // cerrarModalEditProfile: cerrarModal,

  // profileComponent.append(headerBack);
  // profileComponent.append(mainContainer);
  // mainContainer.append(profileContainer);
  profileContainer.append(headerModal);
  profileContainer.append(photoContainer);
  profileContainer.append(formContainer);
  // profileComponent.append($modalEditProfile);

  //   --------------

  getUserData(user.uid)
    .then((user) => {
      photoAvatar.src = user.user_photo;
      // inputDate.type = "date";
      inputName.value = user.user_name;
      inputDate.value = user.user_birth;
      inputPwd.value = user.user_password;
      inputEmail.value = user.user_email;
    })
    .catch((err) => {
      console.log(err);
    });

  // user_id: user.uid,
  // user_name: nameN,
  // user_photo: photoUrlN,
  // user_createdAt: user.metadata.createdAt,
  // user_email: emailN,
  // user_password: passwordN,
  // user_logedBy: logedByN,

  //   --------------

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

  closeIcon.addEventListener("click", () => {
    cerrarModal();
  });

  btnCancel.addEventListener("click", () => {
    cerrarModal();
  });

  btnSaveChanges.addEventListener("click", () => {
    const newData = {
      user_name: inputName.value,
      user_birth: inputDate.value,
      user_email: inputEmail.value,
      user_password: inputPwd.value,
      // todo: hay que modificar la foto del usuario
      // user_photo :
    };

    const requiredFields = document.getElementsByClassName(
      "modal-profile__required"
    );
    for (let element of requiredFields) {
      element.classList.remove("modal-profile__required--active");
    }

    document.getElementById("error-msg").textContent = "";
    // Validamos el nombre
    if (!validate_field(newData.user_name)) {
      document.getElementById("error-msg").textContent =
        "Ingrese un nombre válido";
    }
    // Validamos el correo
    else if (!validate_email(newData.user_email)) {
      document.getElementById("error-msg").textContent =
        "Ingrese un correo válido";
    }
    // Validamos la contraseña
    else if (!validate_password(newData.user_password)) {
      document.getElementById("error-msg").textContent =
        "La contraseña debe tener entre 8 a 14 carácteres";
    } else if (
      !validate_field(nanewData.user_name) ||
      !validate_field(newData.user_email) ||
      !validate_field(newData.user_password)
    ) {
      document.getElementById("error-msg").textContent = "";

      for (let element of requiredFields) {
        element.classList.remove("modal-profile__required--active");
      }
    } else {
      // *Falta otro escenario importante
      // todo: AÑADIR FUNCION PARA VERIFICAR SI ESTA CUENTA ESTÁ SIENDO UTILIZADA
      // IF checkUserRegistered === true
      // document.getElementById("error-msg").textContent = "Esta cuenta ya está siendo utilizada";

      updateUser(user.uid, newData).then(() => {
        console.log("si se pudo!");
        document.location.reload();
      });
    }
  });

  return {
    $modalEditProfile: $modalContenedor,
    abrirModalEditProfile: abrirModal,
    cerrarModalEditProfile: cerrarModal,
  };
};

// if (!validate_email(inputEmail.value) || !validate_password(inputPwd.value)) {
//   document.getElementById("errorLogin").textContent = "Datos inválidos";
// }

// if (
//   !validate_field(name) ||
//   !validate_field(email) ||
//   !validate_field(password)
// ) {
//   document.getElementById("errorLogin").textContent = "Datos obligatorios";
// }

// if (!validate_email(email) || !validate_password(password)) {
//   document.getElementById("errorLogin").textContent = "Datos inválidos";
// }

// if (
//   !validate_field(name) ||
//   !validate_field(email) ||
//   !validate_field(password)
// ){

// }

// ------------------ RESPALDO ---------------

// if (
//   !validate_email(newData.user_name) ||
//   !validate_password(newData.user_password)
// ) {
//   for (let element of requiredFields) {
//     element.classList.add("modal-profile__required--active");
//   }
//   document.getElementById("error-msg").textContent = "Datos inválidos";

//   console.log("todos estos son", requiredFields);
// } else if (
//   !validate_field(newData.user_name) ||
//   !validate_field(newData.user_email) ||
//   !validate_field(newData.user_password)
// ) {
//   const requiredFields = document.getElementsByClassName(
//     "modal-profile__required"
//   );
//   console.log("todos estos son", requiredFields);
//   document.getElementById("error-msg").textContent = "Datos obligatorios *";
// } else {
//   for (let element of requiredFields) {
//     element.classList.remove("modal-profile__required--active");
//   }
//   updateUser(user.uid, newData).then(() => {
//     console.log("si se pudo!");
//     document.location.reload();
//   });
