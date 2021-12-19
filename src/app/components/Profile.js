export const Profile = () => {
  const profileContainer = document.createElement("div");
  profileContainer.innerHTML = ` <!-- Cabecera -->
  <div class="header-timeline"><div class="logo-timeline"></div></div>

  <div class="main-container__profile">
    <div class="profile-container">
      <!-- Imagen del usuario -->
      <div class="photo__container">
        <div class="photo__avatar-container">
          <img
            class="photo__avatar-img"
            src="../src/app/assets/brooke-cagle-k9XZPpPHDho-unsplash.jpg"
            alt=""
          />
        </div>
        <!-- <div class="photo__edit-img">°</div> -->
      </div>

      <!-- Datos del usuario -->
      <form class="formProfile__container">
        <!-- input -->
        <div class="formProfile__group">
          <input
            type="text"
            id="name"
            class="formProfile__input"
            placeholder=" "
          />
          <label for="name" class="formProfile__label">Nombre</label>
          <span class="formProfile__required">*</span>
        </div>
        <!-- input -->
        <div class="formProfile__group">
          <input
            type="date"
            id="date"
            class="formProfile__input"
            placeholder=" "
          />
          <label for="date" class="formProfile__label">Fecha de Nacimiento</label>
          <!-- <span class="formProfile__required">*</span> -->
        </div>
        <!-- input -->
        <div class="formProfile__group">
          <input
            type="email"
            id="email"
            class="formProfile__input"
            placeholder=" "
          />
          <label for="email" class="formProfile__label">Correo</label>
          <span class="formProfile__required">*</span>
        </div>
        <!-- input -->
        <div class="formProfile__group">
          <input
            type="password"
            id="password"
            class="formProfile__input"
            placeholder=" "
          />
          <label for="password" class="formProfile__label">Contraseña</label>
          <span class="formProfile__required">*</span>
          <!-- ! Importante, no logro juntar el icono del ojo -->
          <span class="formProfile__icon icon-open-eye"></span>
        </div>

        <div class="errContainer">
          <!-- <span class="error-msg">Campos obligatorios *</span> -->
        </div>
        <!-- Input submit -->
        <input type="submit" class="formProfile__submit" value="Editar">
      </form>
        
      </div>
    </div>
  </div>`;

  return profileContainer;
};

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
