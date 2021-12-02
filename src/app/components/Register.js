export const Registro = () => {
    const d = document;
    const $register = d.createElement("div");
    $register.classList.add("register-container");

    const $logoContainer = d.createElement("div");
    $logoContainer.classList.add("logo-container");
    const $logo = d.createElement("div");
    $logo.classList.add("logo");
    const $logoName = d.createElement("h3");
    $logoName.classList.add("logo-name");
    $logoName.textContent = `Yami`;

    $logoContainer.append($logo);
    $logoContainer.append($logoName);

    const $eslogan = d.createElement("div");
    $eslogan.classList.add("eslogan");
    const $esloganText = d.createElement("h2");
    $esloganText.textContent = `¿Listo para una nueva aventura culinaria?`;
    
    $eslogan.append($esloganText);

    $register.append($logoContainer);
    $register.append($eslogan);

    
    return $register;
};