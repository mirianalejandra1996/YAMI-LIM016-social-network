import { enviarRegistro } from "../firebase/firebase-auth.js";
import { ModalTerminos } from "./Modal.js";
import { Logo } from "./Logo.js"
import { Eslogan } from "./Eslogan.js"

export const Registro = () => {
  const $register = document.createElement("div");
  $register.classList.add("register-container");

  const $logoContainer = Logo();
  const $eslogan = Eslogan('¿Listo para una nueva aventura culinaria?')

  const $inputsContainer = document.createElement("div");
  $inputsContainer.classList.add("inputs-container");

  const $form = document.createElement("form");
  $form.classList.add("form");

  const $formInputContainerFirst = document.createElement("div");
  $formInputContainerFirst.classList.add("form__input-container");
  const $iconMail = document.createElement("span");
  $iconMail.classList.add("icon-mail");
  const $formInputFirst = document.createElement("input");
  $formInputFirst.classList.add("form__input");
  $formInputFirst.type = "email";
  $formInputFirst.id = "remail";
  $formInputFirst.name = "remail";
  $formInputFirst.placeholder = "Correo electrónico";

  $formInputContainerFirst.append($iconMail);
  $formInputContainerFirst.append($formInputFirst);

  const $formInputContainerSecond = document.createElement("div");
  $formInputContainerSecond.classList.add("form__input-container");
  const $iconLock = document.createElement("span");
  $iconLock.classList.add("icon-lock");
  const $formInputSecond = document.createElement("input");
  $formInputSecond.classList.add("form__input");
  $formInputSecond.type = "password";
  $formInputSecond.id = "rpassword";
  $formInputSecond.name = "rpassword";
  $formInputSecond.placeholder = "Contraseña";
  
  const $terminos = document.createElement("p")
  $terminos.textContent = "Al continuar acepto los Términos de Servicio y"
  $terminos.classList.add('parrafo-terminos')
  const $política = document.createElement("a");
  $política.textContent = "Política de Privacidad";
  $política.classList.add('parrafo-terminos','parrafo-politica')



  $formInputContainerSecond.append($iconLock);
  $formInputContainerSecond.append($formInputSecond);

  $form.append($formInputContainerFirst);
  $form.append($formInputContainerSecond);
  $form.append($terminos);
  $form.append($política);


  document.createElement("br");

  const $errorContainer = document.createElement("div");
  $errorContainer.classList.add("err-container");

  // aquiiii
  const $msgError = document.createElement("small");
  // const $msgError = document.createElement("span");
  $msgError.classList.add("error-msg");
  $msgError.id = "errorLogin";
  // $msgError.textContent = "Error de prueba";
  $msgError.textContent = "Mensajito de error";

  $errorContainer.append($msgError);

  const $btn = document.createElement("div");
  $btn.classList.add("btn");
  $btn.addEventListener("click", enviarRegistro);
  $btn.href = "/#timeline";
  const $ingresar = document.createElement("span");
  $ingresar.textContent = `Registrarse`;

  $btn.append($ingresar);

  document.createElement("br");

  const $btnG = document.createElement("div");
  $btnG.classList.add("btn-g");
  $btn.href = "/#nada";
  const $googleIcon = document.createElement("span");
  $googleIcon.classList.add("icon-google");

  const $span1 = document.createElement("span");
  $span1.classList.add("path1");
  const $span2 = document.createElement("span");
  $span2.classList.add("path2");
  const $span3 = document.createElement("span");
  $span3.classList.add("path3");
  const $span4 = document.createElement("span");
  $span4.classList.add("path4");
  const $span5 = document.createElement("span");
  $span5.classList.add("path5");
  const $span6 = document.createElement("span");
  $span6.classList.add("path6");

  $googleIcon.append($span1);
  $googleIcon.append($span2);
  $googleIcon.append($span3);
  $googleIcon.append($span4);
  $googleIcon.append($span5);
  $googleIcon.append($span6);

  const $google = document.createElement("span");
  $google.textContent = `Registrarse con Google`;

  $btnG.append($googleIcon);
  $btnG.append($google);

  document.createElement("br");

  const $divLink = document.createElement("div");
  const $spanAsk = document.createElement("span");
  $spanAsk.textContent = `¿Ya tienes una cuenta?`;
  const $link = document.createElement("span");
  $link.id = "sign-up";
  $link.classList.add("link");
  $link.textContent = `Inicia sesión`;
  $link.addEventListener("click", () => {
    window.location.hash = "#/";
  });

  $divLink.append($spanAsk);
  $divLink.append($link);

  $inputsContainer.append($form);
  $inputsContainer.append($errorContainer);
  $inputsContainer.append($btn);
  $inputsContainer.append($btnG);
  $inputsContainer.append($divLink);


  $register.append($logoContainer)
  $register.append($eslogan);
  $register.append($inputsContainer);



  const { $modalContenedor, abrirModal } = ModalTerminos();

  $register.append($modalContenedor);

  $política.addEventListener("click", (e) => {
    e.preventDefault();
    abrirModal();
  });

  return $register;
};
