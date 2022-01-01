import { HeaderRetroceder } from "../components/Header_retro.js";
import { auth } from "../firebase/firebase-auth.js";
import { getUserData } from "../firebase/firebase-data.js";
// import { ModalEditProfile } from "../components/ModalEditProfile.js";

export const ChangePassword = () => {
  const user = auth.currentUser;
  //    Contenedor principal
  const profileComponent = document.createElement("div");
  profileComponent.classList.add("allView");

  const headerBack = HeaderRetroceder();

  //   Contenedor Base de la vista
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container__profile");

  //  ! En este contenedor estarán dentro la imagen y el formulario (perfecto para el modal)
  const profileContainer = document.createElement("div");
  profileContainer.classList.add("profile-container");

  //   Contenedor Base de foto del usuario
  const photoContainer = document.createElement("div");
  photoContainer.classList.add("photo__container");
  // photoContainer.style.background = "blue";

  //   Imagen del usuario Contenedor
  const imgAvatarContainer = document.createElement("div");
  imgAvatarContainer.classList.add("photo__avatar-container");

  const photoAvatar = document.createElement("img");
  photoAvatar.classList.add("photo__avatar-img");
  photoAvatar.alt = "imgAvatar";

  imgAvatarContainer.append(photoAvatar);

  const userNameContainer = document.createElement("div");
  userNameContainer.classList.add("userNameContainer");

  const userName = document.createElement("h1");
  userName.classList.add("userNameTitle");
  // userName.textContent = "Miriaaan";

  userNameContainer.append(userName);

  // Icono para editar imagen del usuario
  // const iconPhotoContainer = document.createElement("div");
  // iconPhotoContainer.classList.add("photo__edit-img", "hidden");
  // const iconPhoto = document.createElement("span");
  // iconPhoto.classList.add("icon-pencil", "pencil");

  // iconPhotoContainer.append(iconPhoto);
  // imgAvatarContainer.append(iconPhotoContainer);

  photoContainer.append(imgAvatarContainer);
  photoContainer.append(userNameContainer);

  // -------------
  // Datos del usuario Formulario

  // Contenedor Base del formulario
  const formContainer = document.createElement("div");
  formContainer.classList.add("formProfile__container");

  // * Grupo: Nombre del usuario
  const groupName = document.createElement("div");
  groupName.classList.add("formProfile__group");

  //   Input nombre
  const oldPassword = document.createElement("input");
  oldPassword.type = "text";
  oldPassword.id = "oldPassword";
  oldPassword.classList.add("formProfile__input");
  // oldPassword.disabled = true;

  //   Label de nombre
  const labelOldPassword = document.createElement("label");
  labelOldPassword.htmlFor = "oldPassword";
  labelOldPassword.classList.add("formProfile__label");
  labelOldPassword.textContent = "Contraseña antigua";

  //  Nombre Obligatorio
  const requiredOldPassword = document.createElement("span");
  requiredOldPassword.classList.add("formProfile__required", "hidden");
  requiredOldPassword.textContent = "*";

  groupName.append(oldPassword);
  groupName.append(labelOldPassword);
  groupName.append(requiredOldPassword);

  // -----------------------------

  // * Grupo: Nueva Contraseña
  const groupNewPassword = document.createElement("div");
  groupNewPassword.classList.add("formProfile__group");

  //   Input NewPassword
  const inputNewPassword = document.createElement("input");

  inputNewPassword.type = "text";
  inputNewPassword.id = "newPassword";
  inputNewPassword.classList.add("formProfile__input");

  //   Label de NewPassword
  const labelNewPassword = document.createElement("label");
  labelNewPassword.htmlFor = "newPassword";
  labelNewPassword.classList.add("formProfile__label");
  labelNewPassword.textContent = "Contraseña Nueva";

  groupNewPassword.append(inputNewPassword);
  groupNewPassword.append(labelNewPassword);

  // -----------------------------

  // * Grupo: Confirmar la nueva contraseña
  const groupConfirmPassword = document.createElement("div");
  groupConfirmPassword.classList.add("formProfile__group");

  //   Label de ConfirmPassword
  const labelConfirmPassword = document.createElement("label");
  labelConfirmPassword.classList.add("formProfile__label");
  labelConfirmPassword.textContent = "Confirmar nueva contraseña";
  labelConfirmPassword.htmlFor = "confirmPassword";

  //   Input ConfirmPassword
  const inputConfirmPassword = document.createElement("input");
  inputConfirmPassword.type = "text";
  // inputConfirmPassword.name = "confirmPassword";
  inputConfirmPassword.id = "confirmPassword";
  inputConfirmPassword.classList.add("formProfile__input");

  groupConfirmPassword.append(inputConfirmPassword);
  groupConfirmPassword.append(labelConfirmPassword);

  // -----------------------------

  const msgContainer = document.createElement("div");
  msgContainer.classList.add("msgContainer");

  const msgLogedByGoogle = document.createElement("span");
  msgLogedByGoogle.classList.add("google-msg");
  msgLogedByGoogle.textContent = "Usted está logeado con Google";

  const changePwd = document.createElement("span");
  changePwd.classList.add("google-msg");
  changePwd.classList.add("redirect-text__link");
  changePwd.textContent = "Cambiar contraseña";

  // -----------------------------

  const btnSave = document.createElement("input");
  btnSave.id = "submit";
  btnSave.type = "submit";
  btnSave.classList.add("formProfile__submit");
  btnSave.value = "Cambiar contraseña";

  // -----------------------------

  // Aquí apendizamos todos los datos del usuario
  formContainer.append(groupName);
  formContainer.append(groupNewPassword);
  formContainer.append(groupConfirmPassword);
  formContainer.append(btnSave);
  profileComponent.append(headerBack);
  profileComponent.append(mainContainer);
  mainContainer.append(profileContainer);
  profileContainer.append(photoContainer);
  profileContainer.append(formContainer);

  //   --------------

  getUserData(user.uid)
    .then((user) => {
      photoAvatar.src = user.user_photo;
      userName.textContent = user.user_name;
      if (user.user_logedBy === "google") {
      } else {
      }
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

  return profileComponent;
};
