export const Timeline = () => {
  // todas las variables que hacen referencia a elementos del dom le anteponemos el símbolo del dolar
  const $timeline = document.createElement("div");
  $timeline.id = "timeline";
  $timeline.classList.add("timeline");

  $timeline.textContent = "timeline view";

  return $timeline;
};
