import { getUserData } from "../firebase/firebase-data.js";

export function Bienvenida(abrirModalCreatePost, user) {
  const contenedorBienvenida = document.createElement("div");
  contenedorBienvenida.classList.add("perfil-grid");
  //   Contenedor Base de foto del usuario
  const photoContainer = document.createElement("div");
  photoContainer.classList.add("photo__container", "row", "card");
  //   Imagen del usuario Contenedor
  const imgAvatarContainer = document.createElement("div");
  imgAvatarContainer.classList.add("photo__avatar-container");
  const photoAvatar = document.createElement("img");
  photoAvatar.classList.add("photo__avatar-img");
  //   photoAvatar.src = "photoURL";
  //photoAvatar.src = `{user.photoURL}`;
  // photoAvatar.src = "../src/app/assets/brooke-cagle-k9XZPpPHDho-unsplash.jpg";
  photoAvatar.alt = "imgAvatar";

  const nombre = document.createElement("h1");
  nombre.classList.add("userNameTitle");

  imgAvatarContainer.append(photoAvatar);
  photoContainer.append(imgAvatarContainer);
  photoContainer.append(nombre);

  obtenerUsuario(user.uid, photoAvatar, nombre);
  // getUserData(user.uid)
  //   .then((user) => {
  //     photoAvatar.src = user.user_photo;
  //     nombre.textContent = `¿Qué estás pensando, {user.user_name}?`;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // -----------------------------------------------------------------------------------
  const buttonAddPost = document.createElement("button");
  buttonAddPost.classList.add("buttonAddPost_desktop");

  const iconPlus = document.createElement("i");
  iconPlus.classList.add("icon-addPost");

  buttonAddPost.append(iconPlus);

  buttonAddPost.addEventListener("click", () => {
    abrirModalCreatePost();
  });

  contenedorBienvenida.append(photoContainer);
  photoContainer.append(buttonAddPost);

  return contenedorBienvenida;
}

export function obtenerUsuario(user_uid, user_photo, user_nombre) {
  return getUserData(user_uid)
    .then((user) => {
      user_photo.src = user.user_photo;
      user_nombre.textContent = `¿Qué estás pensando, ${user.user_name}?`;
    })
    .catch((err) => {
      console.log(err);
    });
}
