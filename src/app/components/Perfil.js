import { Logo } from "./Logo.js"
import { Eslogan } from "./Eslogan.js"

export const Perfil = () => {
  const d = document
  const $perfil = d.createElement("div");
  $perfil.classList.add("register-container");

  const $logoContainer = Logo();
  const $eslogan = Eslogan('Ya casi Terminamos...')

  const $inputsContainer = d.createElement("div")
  $inputsContainer.classList.add("inputs-container")

  const $form = d.createElement("form")
  $form.classList.add("form")


  const $formInputContainerNombre = d.createElement("div")
  $formInputContainerNombre.classList.add("form__input-container")
  const $iconName = d.createElement("span")
  $iconName.classList.add("icon-usuario")
  const $formInputName = d.createElement("input")
  $formInputName.classList.add("form__input")
  $formInputName.type="nombre"
  $formInputName.id="nombre"
  $formInputName.name="nombre"
  $formInputName.placeholder="Nombre"

  $formInputContainerNombre.append($iconName)
  $formInputContainerNombre.append($formInputName)

  const $formInputContainerLugar = d.createElement("div")
  $formInputContainerLugar.classList.add("form__input-container")
  const $iconLugar = d.createElement("span")
  $iconLugar.classList.add("icon-lugar")
  const $formInputLugar = d.createElement("input")
  $formInputLugar.classList.add("form__input")
  $formInputLugar.type="lugar"
  $formInputLugar.id="lugar"
  $formInputLugar.name="lugar"
  $formInputLugar.placeholder="Lugar"
  
  $formInputContainerLugar.append($iconLugar)
  $formInputContainerLugar.append($formInputLugar)


  const $formInputContainerFecha = d.createElement("div")
  $formInputContainerFecha.classList.add("form__input-container")
  const $iconFecha = d.createElement("span")
  $iconFecha.classList.add("icon-fecha")
  const $formInputFecha = d.createElement("input")
  $formInputFecha.classList.add("form__input")
  $formInputFecha.type="fecha"
  $formInputFecha.id="fecha"
  $formInputFecha.name="fecha"
  $formInputFecha.placeholder="Fecha"
  
  $formInputContainerFecha.append($iconLugar)
  $formInputContainerFecha.append($formInputFecha)

  const $errorContainer = d.createElement("div");
  $errorContainer.classList.add("err-container");
  const $msgvalidar = d.createElement("div");
  $msgvalidar.classList.add("error");
  $msgvalidar.id = "errorPerfil";
  $msgvalidar.textContent = "Mensajito de error";
  $errorContainer.append($msgvalidar);

  const $btnComenzar = d.createElement("div");
  $btnComenzar.classList.add("btn");
  // $btn.addEventListener("click", comencemos);
  const $txtComencemos = d.createElement("span");
  $txtComencemos.textContent = `¡Comencemos!`;

  $btnComenzar.append($txtComencemos);


  $form.append($formInputContainerNombre)
  $form.append($formInputContainerLugar)
  $form.append($formInputContainerFecha)
  $form.append($errorContainer)
  $form.append($btnComenzar)

  $perfil.append($logoContainer)
  $perfil.append($eslogan);
  $perfil.append($form)

  return $perfil
}

