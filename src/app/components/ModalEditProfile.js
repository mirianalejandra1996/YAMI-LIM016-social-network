import {
  getUserData,
  changeBasicDataFirestore,
  isExistingUser,
} from "../firebase/firebase-data.js";
import {
  auth,
  validate_email,
  validate_field,
  changeNameAndPhotoAuth,
  changeEmailAuth,
  createCredential,
  reautentificacion,
} from "../firebase/firebase-auth.js";
import { uploadUserProfileImg } from "../firebase/firebase-storage.js";

export const ModalEditProfile = () => {
  const user = auth.currentUser;
  let userNameFirestore;
  let userBirthFirestore;
  let userEmailFirestore;
  let userPasswordFirestore;
  let userPhoto;

  console.log("userName del firestore ", userNameFirestore);
  console.log("birth del firestore ", userBirthFirestore);
  console.log("email del firestore ", userEmailFirestore);
  console.log("pwd del firestore ", userPasswordFirestore);
  console.log("foto del firestore ", userPhoto);

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
  photoAvatar.src =
    "https://firebasestorage.googleapis.com/v0/b/yami-cbaa4.appspot.com/o/user.png?alt=media&token=bfe80508-5817-4d84-83e1-6a074a16f198";

  imgAvatarContainer.append(photoAvatar);

  const inputFileNone = document.createElement("input");
  inputFileNone.type = "file";
  inputFileNone.accept = "image/*";
  inputFileNone.id = "file";
  inputFileNone.style.display = "none";
  console.log("probando solo el input", inputFileNone);
  console.log("probando propiedad file del input", inputFileNone.files[0]);

  // * Este es el label
  // Icono para editar imagen del usuario
  const iconPhotoContainer = document.createElement("label");
  iconPhotoContainer.id = "";
  iconPhotoContainer.htmlFor = "file";

  inputFileNone.addEventListener("change", (e) => {
    const file = e.target.files[0];
    // const file = inputFileNone.files[0];
    // console.log('este es el inpu')
    console.log("este es el file, ", file);

    if (file) {
      console.log("file es truly");

      const objectURL = URL.createObjectURL(file);
      photoAvatar.src = objectURL;
    }
  });

  iconPhotoContainer.classList.add("photo__edit-img");
  const iconPhoto = document.createElement("span");
  iconPhoto.classList.add("icon-pencil", "pencil");

  iconPhotoContainer.append(iconPhoto);
  imgAvatarContainer.append(iconPhotoContainer);
  imgAvatarContainer.append(inputFileNone);

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

  //   Contenedor de campos obligatorios
  const errContainer = document.createElement("div");
  errContainer.classList.add("errContainer--modal");

  const msgErr = document.createElement("span");
  msgErr.classList.add("error-msg");
  msgErr.id = "error-msg";

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
  //   Apendizamos el mensaje de error
  formContainer.append(errContainer);
  // todo: en realidad hay que apendizar el div que tiene a editar o cancelar
  formContainer.append(btnsContainer);

  // -----------------------------

  btnSaveChanges.addEventListener("click", () => {
    console.log("editemos el perfil ");
  });

  profileContainer.append(headerModal);
  profileContainer.append(photoContainer);
  profileContainer.append(formContainer);

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

  btnSaveChanges.addEventListener("click", async () => {
    const newData = {
      user_name: inputName.value,
      user_birth: inputDate.value,
      user_email: inputEmail.value,
      user_exist: false,
      user_password: userPasswordFirestore,
      // todo: hay que modificar la foto del usuario
      user_photo: photoAvatar.src,
      // user_photo: null,
      // user_photo: null,
    };

    msgErr.textContent = "";
    msgErr.classList.add("error-msg");
    msgErr.classList.remove("success-msg");

    const { emailUserSearched, pwdUserSearched, userExist } =
      await isExistingUser(newData.user_email);

    // let userExist = await isExistingUser(newData.user_email);

    console.log("El usuario existe? => ", userExist);

    // Limpiamos el modal
    document.getElementById("error-msg").textContent = "";
    const requiredFields = document.getElementsByClassName(
      "modal-profile__required"
    );
    for (let element of requiredFields) {
      element.classList.remove("modal-profile__required--active");
      console.log("tenemos", requiredFields.length, "inputs obligatorios");
    }

    document.getElementById("error-msg").textContent = "";
    // Validamos el nombre
    if (!validate_field(newData.user_name)) {
      document.getElementById("error-msg").textContent =
        "Ingrese un nombre válido";

      // Activa campo como obligatorio
      requiredName.classList.add("modal-profile__required--active");
      return;
    }
    // Validamos el correo
    if (!validate_email(newData.user_email)) {
      document.getElementById("error-msg").textContent =
        "Ingrese un correo válido";
      // Activa campo como obligatorio
      requiredEmail.classList.add("modal-profile__required--active");
      return;
    }
    // Si la cuenta no está disponible para usar
    if (userExist && newData.user_email !== user.email) {
      document.getElementById("error-msg").textContent =
        "Esta cuenta ya está siendo utilizada";
      return;
    }
    // Si los datos nunca fueron modificados
    if (
      newData.user_name === userNameFirestore &&
      newData.user_birth === userBirthFirestore &&
      // newData.user_email === userEmailFirestore
      newData.user_email === userEmailFirestore &&
      newData.user_photo === userPhoto
    ) {
      document.getElementById("error-msg").textContent = "Actualice los datos";
      return;
    }

    for (let element of requiredFields) {
      element.classList.remove("modal-profile__required--active");
    }

    console.log("esta es mi contraseña ", newData.user_password);

    const credential = await createCredential(user, newData.user_password);

    reautentificacion(user, credential)
      .then(() => {
        console.log("si se logró la reautentificación");

        // Verifica si el usuario adjuntó alguna imagen para su perfil
        if (inputFileNone.files[0]) {
          console.log("si adjuntó imagen");
          return uploadUserProfileImg(inputFileNone.files[0], user.uid);
        } else {
          console.log("no adjuntó imagen");
          return Promise.resolve("");
        }
      })
      .then((urlImg) => {
        if (urlImg !== "") {
          newData.user_photo = urlImg;
        }

        return changeEmailAuth(user, newData.user_email);
      })
      .then(() => {
        console.log("2 ok");
        return changeNameAndPhotoAuth(newData);
      })
      .then(() => {
        console.log("3 ok");
        return changeBasicDataFirestore(user.uid, newData);
      })
      .then(() => {
        console.log("4 ok");
        return getUserData(user.uid);
      })
      .then((user) => {
        console.log("5 ok");
        userPasswordFirestore = user.user_password;
        userNameFirestore = user.user_name;
        userBirthFirestore = user.user_birth;
        userEmailFirestore = user.user_email;
        userPhoto = user.user_photo;
      })
      .then(() => {
        console.log("todo ok!");
        msgErr.classList.remove("error-msg");
        msgErr.classList.add("success-msg");
        msgErr.textContent = "Cambios realizados!";
        // ! Aqui debería ocultar el spinner
      })
      .catch((err) => {
        console.log("no se logró la reautentificación", err);
        msgErr.textContent = "Error de autentificación ";
      });
  });

  getUserData(user.uid)
    .then((user) => {
      photoAvatar.src = user.user_photo;
      inputName.value = user.user_name;
      inputDate.value = user.user_birth;
      userPasswordFirestore = user.user_password;
      userNameFirestore = user.user_name;
      userBirthFirestore = user.user_birth;
      userEmailFirestore = user.user_email;
      userPhoto = user.user_photo;
      inputEmail.value = user.user_email;

      console.log("userName del firestore ", userNameFirestore);
      console.log("birth del firestore ", userBirthFirestore);
      console.log("email del firestore ", userEmailFirestore);
      console.log("pwd del firestore ", userPasswordFirestore);
      console.log("foto del firestore ", userPhoto);

      console.log(
        "esta mi foto recien cargando el componente MODAL, ",
        userPhoto
      );
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    $modalEditProfile: $modalContenedor,
    abrirModalEditProfile: abrirModal,
    cerrarModalEditProfile: cerrarModal,
  };
};
