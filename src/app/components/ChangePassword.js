import { HeaderRetroceder } from "../components/Header_retro.js";
import { getUserData } from "../firebase/firebase-data.js";

import {
  auth,
  validate_password,
  // validate_field,
  // changePassword,
  // createCredential,
} from "../firebase/firebase-auth.js";

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

  photoContainer.append(imgAvatarContainer);
  photoContainer.append(userNameContainer);

  // -------------
  // Datos del usuario Formulario

  // Contenedor Base del formulario
  const formContainer = document.createElement("div");
  formContainer.classList.add("formProfile__container");

  // * Grupo: Contraseña antigua
  const groupOldPassword = document.createElement("div");
  groupOldPassword.classList.add("formProfile__group");

  //   Input Contraseña antigua
  const inputOldPassword = document.createElement("input");
  inputOldPassword.type = "text";
  inputOldPassword.id = "oldPassword";
  inputOldPassword.classList.add("formProfile__input");

  //   Label de Contraseña antigua
  const labelOldPassword = document.createElement("label");
  labelOldPassword.htmlFor = "oldPassword";
  labelOldPassword.classList.add("formProfile__label");
  labelOldPassword.textContent = "Contraseña antigua";

  //  Contraseña antigua Obligatorio
  const requiredOldPassword = document.createElement("span");
  requiredOldPassword.classList.add("formProfile__required", "hidden");
  requiredOldPassword.textContent = "*";

  groupOldPassword.append(inputOldPassword);
  groupOldPassword.append(labelOldPassword);
  groupOldPassword.append(requiredOldPassword);

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
  inputConfirmPassword.id = "confirmPassword";
  inputConfirmPassword.classList.add("formProfile__input");

  groupConfirmPassword.append(inputConfirmPassword);
  groupConfirmPassword.append(labelConfirmPassword);

  // -----------------------------

  const msgContainer = document.createElement("div");
  msgContainer.classList.add("msgContainer");

  const msgError = document.createElement("span");
  msgError.classList.add("error-msg");

  msgContainer.append(msgError);

  // -----------------------------

  const btnSaveChanges = document.createElement("input");
  btnSaveChanges.id = "submit";
  btnSaveChanges.type = "submit";
  btnSaveChanges.classList.add("formProfile__submit");
  btnSaveChanges.value = "Cambiar contraseña";

  // -----------------------------

  // Aquí apendizamos todos los datos del usuario
  formContainer.append(groupOldPassword);
  formContainer.append(groupNewPassword);
  formContainer.append(groupConfirmPassword);
  formContainer.append(msgContainer);
  formContainer.append(btnSaveChanges);
  profileComponent.append(headerBack);
  profileComponent.append(mainContainer);
  mainContainer.append(profileContainer);
  profileContainer.append(photoContainer);
  profileContainer.append(formContainer);

  //   --------------

  btnSaveChanges.addEventListener("click", async () => {
    const newData = {
      inputOldPassword: inputOldPassword.value,
      newPassword: inputNewPassword.value,
      confirmPassword: inputConfirmPassword.value,
    };

    // let userExist = await isExistingUser(newData.user_email);

    // console.log("El usuario existe? => ", userExist);

    // Limpiamos el modal
    document.getElementById("error-msg").textContent = "";
    // const requiredFields = document.getElementsByClassName(
    //   "modal-profile__required"
    // );
    // for (let element of requiredFields) {
    //   element.classList.remove("modal-profile__required--active");
    //   console.log("tenemos", requiredFields.length, "inputs obligatorios");
    // }

    document.getElementById("error-msg").textContent = "";

    // Validamos la contraseña
    if (!validate_password(newData.newPassword)) {
      document.getElementById("error-msg").textContent =
        "La contraseña debe tener entre 8 a 14 carácteres";
      // requiredPwd.classList.add("modal-profile__required--active");
      return;
    } else {
      // for (let element of requiredFields) {
      //   // element.classList.remove("modal-profile__required--active");
      // }
      // const credential = await createCredential(user);
      // console.log("prueba cred.", credential, " y el user: ", user.email);
      // updateUserFirestore(user.uid, newData).then(() => {
      //   // updateEmailUserAuth(newData);
      //   updateBasicInfoUserAuth(newData);
      //   // changeEmail(user, credential, newData.user_email);
      //   changePassword(user, credential, newData.user_password);
      //   // console.log("si se pudo!");
      //   // document.location.reload();
      // });
      // updateEmailUserAuth(newData.user_email);
      // updateEmailUserAuth(newData);
    }
  });

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
