export const Welcome = () => {
  // todas las variables que hacen referencia a elementos del dom le anteponemos el símbolo del dolar
  const $welcome = document.createElement("div");
  $welcome.classList.add("welcome");
  
 const $button = document.createElement("button")
 $button.textContent = 'Registro'
 $button.addEventListener('click', () => {
 window.location.hash = 'register'
 })

 $welcome.append($button)

  // $welcome.innerHTML = `<div class="logo-container">
  //   <div class="logo"></div>
  //   <h3 class="logo-name">Yami</h3>
  // </div>

  // <div class="eslogan">
  //   <h2>¿Listo para una aventura culinaria?</h2>
  // </div>

  // <div class="inputs-container">
  //   <form class="form">
  //     <div class="form__input-container">
  //       <input
  //         class="form__input"
  //         type="text"
  //         id="lname"
  //         name="lname"
  //         placeholder="Correo electrónico"
  //       />
  //     </div>

  //     <input
  //       class="form__input"
  //       type="text"
  //       id="fname"
  //       name="fname"
  //       placeholder="Contraseña"
  //     />
  //     <br />
  //   </form>

  //   <a class="link" href="/#">Olvidé mi contraseña</a><br />
  //   <div class="btn" href="/#timeline">
  //   <span>Ingresar</span>
  //   </div>
  //   <br />
  //   <button class="btn-g">
  //   <span>Ingresar con Google</span>
  //   </button>
  //   <a href="#register" onclick="onNavigate('/register'); return false;">registro </a>
  //   <button onclick="onNavigate('/register')">con boton</button>
  //   <br />
  // </div>
  // `;

  return $welcome;
};
