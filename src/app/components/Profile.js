import { HeaderRetroceder } from "../components/Header_retro.js";
import { auth } from "../firebase/firebase-auth.js";
import { getUserData } from "../firebase/firebase-data.js";

export const Profile = () => {
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

  //   Imagen del usuario Contenedor
  const imgAvatarContainer = document.createElement("div");
  imgAvatarContainer.classList.add("photo__avatar-container");

  const photoAvatar = document.createElement("img");
  photoAvatar.classList.add("photo__avatar-img");
  photoAvatar.alt = "imgAvatar";

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
  // inputName.placeholder = "Ingresa un nombre"
  //   inputName.value = `${user.displayName}`;
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
  // inputName.placeholder = "Ingresa un nombre"
  //   inputEmail.value = `${user.email}`;
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
  inputPwd.type = "text";
  inputPwd.id = "password";
  inputPwd.classList.add("formProfile__input");
  // inputPwd.placeholder = "Ingresa un nombre"
  //   inputPwd.value = `${user.user_password}`;
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
  iconPwd.classList.add("formProfile__icon", "icon-open-eye");
  // iconPwd.classList.add("eye-hidden");
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

  profileComponent.append(headerBack);
  profileComponent.append(mainContainer);

  mainContainer.append(profileContainer);

  profileContainer.append(photoContainer);
  profileContainer.append(formContainer);

  // if (user.providerData[0].providerId === "google.com") {
  //   msgErr.textContent = "Usted está logeado con Google";
  //   msgErr.style.color = "#0f0f0f";
  //   // inputPwd.value = passwordMsg;
  //   groupDate.classList.add("hidden");
  //   groupPwd.classList.add("hidden");
  //   iconPwd.classList.add("hidden");
  //   // btnEdit.classList.add("hidden");
  // }

  //   --------------

  getUserData(user.uid)
    .then((user) => {
      photoAvatar.src = user.user_photo;
      inputDate.type = "date";
      inputName.value = user.user_name;
      inputDate.value = user.user_birth;
      inputPwd.value = user.user_password;
      inputEmail.value = user.user_email;

      if (user.user_logedBy === "google") {
        msgErr.textContent = "Usted está logeado con Google";
        msgErr.style.color = "#0f0f0f";
        groupDate.classList.add("hidden");
        groupPwd.classList.add("hidden");
        iconPwd.classList.add("hidden");
        btnEdit.classList.add("hidden");
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

  //   --------------
  iconPwd.addEventListener("click", () => {
    console.log("cambia de ojito");
    iconPwd.classList.toggle("icon-open-eye");
    iconPwd.classList.toggle("icon-eye-hidden");

    iconPwd.classList.contains("icon-open-eye")
      ? (inputPwd.type = "text")
      : (inputPwd.type = "password");
  });
  //   --------------

  return profileComponent;
};

// !todo: HACER MODAL CON ESTE CODIGO PARA EDITAR PERFIL
// <!-- Cabecera -->
// <div class="header-timeline"><div class="logo-timeline"></div></div>

// <div class="main-container__profile">
//   <div class="profile-container">
//     <!-- Imagen del usuario -->
//     <div class="photo__container">
//       <div class="photo__avatar-container">
//         <img
//           class="photo__avatar-img"
//           src="../src/app/assets/brooke-cagle-k9XZPpPHDho-unsplash.jpg"
//           alt=""
//         />
//       </div>
//       <!-- <div class="photo__edit-img">°</div> -->
//     </div>

//     <!-- Datos del usuario -->
//     <form class="formProfile__container">
//       <!-- input -->
//       <div class="formProfile__group">
//         <input
//           type="text"
//           id="name"
//           class="formProfile__input"
//           placeholder=" "
//         />
//         <label for="name" class="formProfile__label">Nombre</label>
//         <span class="formProfile__required">*</span>
//       </div>
//       <!-- input -->
//       <div class="formProfile__group">
//         <input
//           type="date"
//           id="date"
//           class="formProfile__input"
//           placeholder=" "
//         />
//         <label for="date" class="formProfile__label">Fecha de Nacimiento</label>
//         <!-- <span class="formProfile__required">*</span> -->
//       </div>
//       <!-- input -->
//       <div class="formProfile__group">
//         <input
//           type="email"
//           id="email"
//           class="formProfile__input"
//           placeholder=" "
//         />
//         <label for="email" class="formProfile__label">Correo</label>
//         <span class="formProfile__required">*</span>
//       </div>
//       <!-- input -->
//       <div class="formProfile__group">
//         <input
//           type="password"
//           id="password"
//           class="formProfile__input"
//           placeholder=" "
//         />
//         <label for="password" class="formProfile__label">Contraseña</label>
//         <span class="formProfile__required">*</span>
//         <!-- ! Importante, no logro juntar el icono del ojo -->
//         <span class="formProfile__icon icon-open-eye"></span>
//       </div>

//       <div class="errContainer">
//         <!-- <span class="error-msg">Campos obligatorios *</span> -->
//       </div>
//       <!-- Input submit -->
//       <input type="submit" class="formProfile__submit" value="Editar">
//     </form>

//     </div>
//   </div>
// </div>
