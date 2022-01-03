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
import { Profile } from "../components/Profile.js";

export const ModalEditProfile = () => {
  const user = auth.currentUser;
  let userNameFirestore;
  let userBirthFirestore;
  let userEmailFirestore;
  let userPasswordFirestore;

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
  // photoAvatar.src = "../src/app/assets/brooke-cagle-k9XZPpPHDho-unsplash.jpg";

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
      // user_photo :
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
    else if (!validate_email(newData.user_email)) {
      document.getElementById("error-msg").textContent =
        "Ingrese un correo válido";
      // Activa campo como obligatorio
      requiredEmail.classList.add("modal-profile__required--active");
      return;
    }
    // Si la cuenta no está disponible para usar
    else if (userExist && newData.user_email !== user.email) {
      document.getElementById("error-msg").textContent =
        "Esta cuenta ya está siendo utilizada";
      return;
    }
    // Si los datos nunca fueron modificados
    else if (
      newData.user_name === userNameFirestore &&
      newData.user_birth === userBirthFirestore &&
      newData.user_email === userEmailFirestore
    ) {
      document.getElementById("error-msg").textContent = "Actualice los datos";
      return;
    } else {
      for (let element of requiredFields) {
        element.classList.remove("modal-profile__required--active");
      }

      console.log("esta es mi contraseña ", newData.user_password);

      const credential = await createCredential(user, newData.user_password);

      reautentificacion(user, credential)
        .then(() => {
          console.log("si se logró la reautentificación");

          let promises = [
            changeEmailAuth(user, newData.user_email),
            changeNameAndPhotoAuth(newData),
            changeBasicDataFirestore(user.uid, newData),
          ];

          Promise.all(promises)
            .then(() => {
              console.log("todos los procesos se realizaron!");
              msgErr.classList.remove("error-msg");
              msgErr.classList.add("success-msg");
              document.getElementById("error-msg").textContent =
                "Cambios realizados!";
              // document.location.reload();

              // todo: ACOMODAR ESTO!!!
              getUserData(user.uid)
                .then((user) => {
                  userPasswordFirestore = user.user_password;
                  userNameFirestore = user.user_name;
                  userBirthFirestore = user.user_birth;
                  userEmailFirestore = user.user_email;
                  // console.log("este es mi user id", user.user_id);
                  // Profile(user.user_id);
                  Profile(user);
                })
                .catch((err) => {
                  console.log(err);
                });

              // ------------------------------
              // getUserData(user.uid)
              //   .then((user) => {
              //     photoAvatar.src = user.user_photo;
              //     // inputDate.type = "date";
              //     inputName.value = user.user_name;
              //     inputDate.value = user.user_birth;
              //     userPasswordFirestore = user.user_password;
              //     userNameFirestore = user.user_name;
              //     userBirthFirestore = user.user_birth;
              //     userEmailFirestore = user.user_email;
              //     inputEmail.value = user.user_email;
              //   })
              //   .catch((err) => {
              //     console.log(err);
              //   });
            })
            .catch((err) => {
              console.log("problemas con el promise all", err);
            });

          // todo: actualizar la página cuando todos los procesos finalicen
          // todo: mostrar en pantalla un spiner y que fue realizado!
          // document.location.reload();
        })
        .catch((err) => {
          console.log("no se logró la reautentificación", err);
          document.getElementById("error-msg").textContent =
            "Error de autentificación ";
        });
    }
  });

  getUserData(user.uid)
    .then((user) => {
      photoAvatar.src = user.user_photo;
      // inputDate.type = "date";
      inputName.value = user.user_name;
      inputDate.value = user.user_birth;
      userPasswordFirestore = user.user_password;
      userNameFirestore = user.user_name;
      userBirthFirestore = user.user_birth;
      userEmailFirestore = user.user_email;
      inputEmail.value = user.user_email;
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

//   --------------

// user_id: user.uid,
// user_name: nameN,
// user_photo: photoUrlN,
// user_createdAt: user.metadata.createdAt,
// user_email: emailN,
// user_password: passwordN,
// user_logedBy: logedByN,

//   --------------
