import { HeaderRetroceder } from "../components/Header_retro.js";
import { auth } from "../firebase/firebase-auth.js";
import { getUserData, initListenerProfile } from "../firebase/firebase-data.js";
import { ModalEditProfile } from "../components/ModalEditProfile.js";

export const Profile = () => {
  let user = auth.currentUser;
  // console.log(" este es el id del usuario ", user.uid);

  // let propertyId = "uid";

  // let prueba = user[propertyId]; //ytgbrhrthrthrrhrht
  // console.log(" este es el id del usuario ", prueba);
  // console.log(" este es el id del usuario ", user.propertyId);
  // console.log("TENGO FE ", userUpdated);

  // if (userUpdated) {
  //   user = userUpdated;
  //   propertyId = "user_id";
  //   console.log("POR FIN SOY ALGUIEN! ", userUpdated);
  //   console.log("ESTE ES EL NUEVO USER ", user);
  //   console.log("SOY ALGUIEN CON ID", userUpdated[propertyId]);
  // }

  console.log(user);
  // const user = auth.currentUser;
  // console.log("nuevo parametro ", userUpdated);
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

  groupEmail.append(inputEmail);
  groupEmail.append(labelEmail);

  // -----------------------------

  //   Contenedor de campos obligatorios
  const msgContainer = document.createElement("div");
  msgContainer.classList.add("msgContainer");

  const msgLogedByGoogle = document.createElement("span");
  msgLogedByGoogle.classList.add("google-msg");

  msgLogedByGoogle.textContent = "Usted está logeado con Google";

  const changePwd = document.createElement("span");
  changePwd.classList.add("google-msg");
  changePwd.classList.add("redirect-text__link");
  // changePwd.id = "changePwd";
  changePwd.textContent = "Cambiar contraseña";

  changePwd.addEventListener("click", () => {
    window.location.hash = "#/passwordChange";
  });

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

  // -----------------------------

  const { $modalEditProfile, abrirModalEditProfile, cerrarModalEditProfile } =
    ModalEditProfile();

  btnEdit.addEventListener("click", () => {
    abrirModalEditProfile();
    console.log("editemos el perfil ");
  });

  profileComponent.append(headerBack);
  profileComponent.append(mainContainer);
  mainContainer.append(profileContainer);
  profileContainer.append(photoContainer);
  profileContainer.append(formContainer);
  profileComponent.append($modalEditProfile);

  //   --------------
  initListenerProfile(user.uid, () => {
    getUserData(user.uid)
      .then((user) => {
        console.log("si se imprimio al usuario en pantalla!", user);
        photoAvatar.src = user.user_photo;
        inputDate.type = "date";
        inputName.value = user.user_name;
        inputDate.value = user.user_birth;
        inputEmail.value = user.user_email;

        if (user.user_logedBy === "google") {
          groupDate.classList.add("hidden");
          formContainer.append(msgContainer);
          msgContainer.append(msgLogedByGoogle);
        } else {
          formContainer.append(btnEdit);
          formContainer.append(msgContainer);
          msgContainer.append(changePwd);
        }
      })
      .catch((err) => {
        console.log("no se imprimio al usuario en pantalla... ", err);
        // console.log(err);
      });
  });

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

//       <div class="msgContainer">
//         <!-- <span class="error-msg">Campos obligatorios *</span> -->
//       </div>
//       <!-- Input submit -->
//       <input type="submit" class="formProfile__submit" value="Editar">
//     </form>

//     </div>
//   </div>
// </div>
