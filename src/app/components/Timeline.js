export const Timeline = () => {
  const $timelinePrueba = document.createElement("div");

  const $logoContainer = document.createElement("div");
  $logoContainer.classList.add("logo-container");
  $timelinePrueba.append($logoContainer);

  const $iconLogo = document.createElement("div");
  $iconLogo.classList.add("logo");

  const $logoName = document.createElement("h3");
  $logoName.textContent = "Yami";

  $logoContainer.append($iconLogo);
  $logoContainer.append($logoName);

  const $linkContainer = document.createElement("div");
  $timelinePrueba.append($linkContainer);

  const $botonPrueba = document.createElement("span");
  $botonPrueba.classList.add("link");
  $botonPrueba.textContent = "Llegaste al timeline!!! Yay!!!";

  /*$botonPrueba.addEventListener("click", () => {
    window.location.hash = "#/";
  });*/

  $linkContainer.append($botonPrueba);

  return $timelinePrueba;
};
