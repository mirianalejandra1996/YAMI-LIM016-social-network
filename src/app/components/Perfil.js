export function Perfil(){
    const $perfil = document.createElement("div");
    $perfil.classList.add("register-container");
  
    const $logoContainer = document.createElement("div");
    $logoContainer.classList.add("logo-container");
    const $logo = document.createElement("div");
    $logo.classList.add("logo");
    const $logoName = document.createElement("h3");
    $logoName.classList.add("logo-name");
    $logoName.textContent = `Yami`;
  
    $logoContainer.append($logo);
    $logoContainer.append($logoName);
  
    const $eslogan = document.createElement("div");
    $eslogan.classList.add("eslogan");
    const $esloganText = document.createElement("h2");
    $esloganText.textContent = `Ya casi terminamos...`;
    
    $eslogan.append($esloganText);

    const $inputsContainer = document.createElement("div")
  $inputsContainer.classList.add("inputs-container")

  const $form = document.createElement("form")
  $form.classList.add("form")


  const $formInputContainerNombre = document.createElement("div")
  $formInputContainerNombre.classList.add("form__input-container")
  const $iconName = document.createElement("span")
  $iconName.classList.add("icon-usuario")
  const $formInputFirst = document.createElement("input")
  $formInputName.classList.add("form__input")
  $formInputName.type="nombre"
  $formInputName.id="nombre"
  $formInputName.name="nombre"
  $formInputName.placeholder="Nombre"

  $formInputContainerNombre.append($iconName)
  $formInputContainerNombre.append($formInputName)

  const $formInputContainerLugar = document.createElement("div")
  $formInputContainerLugar.classList.add("form__input-container")
  const $iconLugar = document.createElement("span")
  $iconLugar.classList.add("icon-lugar")
  const $formInputLugar = document.createElement("input")
  $formInputLugar.classList.add("form__input")
  $formInputLugar.type="lugar"
  $formInputLugar.id="lugar"
  $formInputLugar.name="lugar"
  $formInputLugar.placeholder="Lugar"
  
  $formInputContainerLugar.append($iconLugar)
  $formInputContainerLugar.append($formInputLugar)


  const $formInputContainerFecha = document.createElement("div")
  $formInputContainerFecha.classList.add("form__input-container")
  const $iconFecha = document.createElement("span")
  $iconFecha.classList.add("icon-fecha")
  const $formInputFecha = document.createElement("input")
  $formInputFecha.classList.add("form__input")
  $formInputFecha.type="fecha"
  $formInputFecha.id="fecha"
  $formInputFecha.name="fecha"
  $formInputFecha.placeholder="Fecha"
  
  $formInputContainerFecha.append($iconLugar)
  $formInputContainerFecha.append($formInputFecha)


  $form.append($formInputContainerNombre)
  $form.append($formInputContainerLugar)
  $form.append($formInputContainerFecha)
}