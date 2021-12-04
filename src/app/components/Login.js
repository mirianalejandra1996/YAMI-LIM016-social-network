import { enviarIngreso } from "../view-controller/firebase.js";

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

  const $formInputContainerFirst = document.createElement("div")
  $formInputContainerFirst.classList.add("form__input-container")
  const $iconMail = document.createElement("span")
  $iconMail.classList.add("icon-mail")
  const $formInputFirst = document.createElement("input")
  $formInputFirst.classList.add("form__input")
  $formInputFirst.type="email"
  $formInputFirst.id="lemail"
  $formInputFirst.name="lemail"
  $formInputFirst.placeholder="Correo electrónico"

  $formInputContainerFirst.append($iconMail)
  $formInputContainerFirst.append($formInputFirst)

  const $formInputContainerSecond = document.createElement("div")
  $formInputContainerSecond.classList.add("form__input-container")
  const $iconLock = document.createElement("span")
  $iconLock.classList.add("icon-lock")
  const $formInputSecond = document.createElement("input")
  $formInputSecond.classList.add("form__input")
  $formInputSecond.type="password"
  $formInputSecond.id="lpassword"
  $formInputSecond.name="lpassword"
  $formInputSecond.placeholder="Contraseña"
  
  $formInputContainerSecond.append($iconLock)
  $formInputContainerSecond.append($formInputSecond)

  $form.append($formInputContainerFirst)
  $form.append($formInputContainerSecond)

  document.createElement("br")

  const $forgotPsw = document.createElement("span")
  $forgotPsw.classList.add("link")
  $forgotPsw.textContent = `Olvidé mi contraseña`

  document.createElement("br")

  const $msgError = document.createElement("div")
  $msgError.classList.add("error")
  $msgError.id="errorLogin"

  const $btn = document.createElement("div")
  $btn.classList.add("btn")
  $btn.addEventListener('click', enviarIngreso)
  $btn.href="/#timeline"
  const $ingresar = document.createElement("span")
  $ingresar.textContent=`Iniciar sesión`

  $btn.append($ingresar)

  document.createElement("br")

  const $btnG = document.createElement("div")
  $btnG.classList.add("btn-g")
  $btn.href="/#nada"
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
  $link.id="sign-up"
  $link.classList.add("link")
  $link.textContent=`Regístrate`
  $link.addEventListener('click', () =>{
    window.location.hash='#/register'})

  $divLink.append($spanAsk)
  $divLink.append($link)

  $inputsContainer.append($form)
  $inputsContainer.append($forgotPsw)
  $inputsContainer.append($msgError)
  $inputsContainer.append($btn)
  $inputsContainer.append($btnG)
  $inputsContainer.append($divLink)

  $login.append($logoContainer)
  $login.append($eslogan)
  $login.append($inputsContainer)

  return $login
}
