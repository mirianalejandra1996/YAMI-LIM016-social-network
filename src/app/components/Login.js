export const Login = () => {
  // todas las variables que hacen referencia a elementos del dom le anteponemos el símbolo del dolar
  const $login = document.createElement("div");
  $login.classList.add("login");

  const $logoContainer = document.createElement("div")
  $logoContainer.classList.add("logo-container")
  const $logo = document.createElement("div")
  $logo.classList.add("logo")
  const $logoName = document.createElement("h3")
  $logoName.classList.add("logo-name")
  $logoName.textContent= `Yami`

  $logoContainer.append($logo)
  $logoContainer.append($logoName)

  const $eslogan = document.createElement("div")
  $eslogan.classList.add("eslogan")
  const $esloganText = document.createElement("h2")
  $esloganText.textContent=`¿Listo para una nueva aventura culinaria?`

  $eslogan.append($esloganText)
  
  const $inputsContainer = document.createElement("div")
  $inputsContainer.classList.add("inputs-container")

  const $form = document.createElement("form")
  $form.classList.add("form")
  //$form.action.add("/action_page.php")

  const $formInputContainerFirst = document.createElement("div")
  $formInputContainerFirst.classList.add("form__input-container")
  const $iconMail = document.createElement("span")
  $iconMail.classList.add("icon-mail")
  const $formInputFirst = document.createElement("input")
  $formInputFirst.classList.add("form__input")
  //$formInputFirst.type.add("email")
  //$formInputFirst.id.add("lname")
  //$formInputFirst.name.add("lname")
  //$formInputFirst.placeholder.add("Correo electrónico")

  $formInputContainerFirst.append($iconMail)
  $formInputContainerFirst.append($formInputFirst)

  const $formInputContainerSecond = document.createElement("div")
  $formInputContainerSecond.classList.add("form__input-container")
  const $iconLock = document.createElement("span")
  $iconLock.classList.add("icon-lock")
  const $formInputSecond = document.createElement("input")
  $formInputSecond.classList.add("form__input")
  //$formInputSecond.type.add("password")
  //$formInputSecond.id.add("fname")
  //$formInputSecond.name.add("fname")
  //$formInputSecond.placeholder.add("Contraseña")
  
  $formInputContainerFirst.append($iconLock)
  $formInputContainerFirst.append($formInputSecond)

  $form.append($formInputContainerFirst)
  $form.append($formInputContainerSecond)

  document.createElement("br")

  const $forgotPsw = document.createElement("span")
  $forgotPsw.classList.add("link")
  $forgotPsw.textContent = `Olvidé mi contraseña`

  document.createElement("br")

  const $btn = document.createElement("div")
  $btn.classList.add("btn")
  //$btn.href.add("/#timeline")
  const $ingresar = document.createElement("span")
  $ingresar.textContent=`Iniciar sesión`

  $btn.append($ingresar)

  document.createElement("br")

  const $btnG = document.createElement("div")
  $btnG.classList.add("btn-g")
  //$btn.href.add("/#nada")
  const $googleIcon = document.createElement("span")
  $googleIcon.classList.add("icon-google")

  const $span1 = document.createElement("span")
  $span1.classList.add("path1")
  const $span2 = document.createElement("span")
  $span2.classList.add("path2")
  const $span3 = document.createElement("span")
  $span3.classList.add("path3")
  const $span4 = document.createElement("span")
  $span4.classList.add("path4")
  const $span5 = document.createElement("span")
  $span5.classList.add("path5")
  const $span6 = document.createElement("span")
  $span6.classList.add("path6")

  $googleIcon.append($span1)
  $googleIcon.append($span2)
  $googleIcon.append($span3)
  $googleIcon.append($span4)
  $googleIcon.append($span5)
  $googleIcon.append($span6)

  const $google = document.createElement("span")
  $google.textContent=`Iniciar con Google`

  $btnG.append($googleIcon)
  $btnG.append($google)

  document.createElement("br")

  const $divLink = document.createElement("div")
  const $spanAsk = document.createElement("span")
  $spanAsk.textContent=`¿No tienes una cuenta?`
  const $link = document.createElement("span")
  //$link.id.add("sign-up")
  $link.classList.add("link")
  $link.textContent=`Regístrate`
  $link.addEventListener('click', () =>{
    window.location.hash='#/register'})

  $divLink.append($spanAsk)
  $divLink.append($link)

  $inputsContainer.append($form)
  $inputsContainer.append($forgotPsw)
  $inputsContainer.append($btn)
  $inputsContainer.append($btnG)
  $inputsContainer.append($divLink)

  $login.append($logo)
  $login.append($logoContainer)
  $login.append($inputsContainer)

  return $login




  /*$login.innerHTML = `<div class="welcome">
  <div class="logo-container">
    <div class="logo"></div>
    <h3 class="logo-name">Yami</h3>
  </div>

  <div class="eslogan">
    <h2>¿Listo para una aventura culinaria?</h2>
  </div>

  <div class="inputs-container">
    <form class="form" action="/action_page.php">
      <div class="form__input-container">
        <span class="icon-mail"></span>
        <input
          class="form__input"
          type="email"
          id="lname"
          name="lname"
          placeholder="Correo electrónico"
        />
      </div>

      <div class="form__input-container">
        <span class="icon-lock"></span>
        <input
          class="form__input"
          type="password"
          id="fname"
          name="fname"
          placeholder="Contraseña"
        />
      </div>

      <br />
    </form>

    <span id="forgot-psw" class="link">Olvidé mi contraseña</span><br />

    <div class="btn" href="/#timeline">
      <span>Ingresar</span>
    </div>
    <br />
    <div class="btn-g" href="/#nada">
      <span class="icon-google"
        ><span class="path1"></span><span class="path2"></span
        ><span class="path3"></span><span class="path4"></span
        ><span class="path5"></span><span class="path6"></span
      ></span>
      <span>Ingresar con Google</span>
    </div>
    <br />

    <div>
      <span> ¿No tienes una cuenta? </span>
      <span id="sign-up" class="link">Regístrate</span>
    </div>
  </div>
</div>`;

  return $login;*/
};

// $welcome.innerHTML = `<div class="logo-container">
// <div class="logo"></div>
// <h3 class="logo-name">Yami</h3>
// </div>

// <div class="eslogan">
// <h2>¿Listo para una aventura culinaria?</h2>
// </div>

// <div class="inputs-container">
// <form class="form" action="/action_page.php">
//   <div class="form__input-container">
//     <input
//       class="form__input"
//       type="text"
//       id="lname"
//       name="lname"
//       placeholder="Correo electrónico"
//     />
//   </div>

//   <input
//     class="form__input"
//     type="text"
//     id="fname"
//     name="fname"
//     placeholder="Contraseña"
//   />
//   <br />
// </form>

// <span id="forgot-psw" class="link">Olvidé mi contraseña</span><br />

// <div class="btn" href="/#timeline">
//   <span>Ingresar</span>
// </div>
// <br />
// <div class="btn-g" href="/#nada">
//   <span>Ingresar con Google</span>
// </div>
// <br />

// <div>
//   <span> ¿No tienes una cuenta? </span> <span id="sign-up" class="link">Regístrate</span>
// </div>
// </div>
// `;

// --
// // Creación del logo
// const $logoContainer = document.createElement("div");
// $logoContainer.classList.add("logo-container");
// $welcome.append($logoContainer);

// const $iconLogo = document.createElement("div");
// $iconLogo.classList.add("logo");

// const $logoName = document.createElement("h3");
// $logoName.textContent = "Yami";

// $logoContainer.append($iconLogo);
// $logoContainer.append($logoName);

// // Creación del slogan
// const $sloganContainer = document.createElement('div')
// const $sloganText = document.createElement('h2')
// $sloganText.textContent = '¿Listo para una aventura culinaria?'
// $sloganContainer.append($sloganText)

// $welcome.append($sloganContainer)

// // Creación de inputs del formulario
// const $inputsContainer = document.createElement('div');

// const $form = document.createElement('form');
// $form.action = '/action_page.php'
