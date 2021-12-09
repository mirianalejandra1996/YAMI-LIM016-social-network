import { HeaderRetro } from "./Header_retro.js"

export const Form_Publicacion = () => {
  const root= document.getElementById("root")
  root.classList.remove("main-container")

  const formPublicacion = document.createElement("div");

  const header = HeaderRetro()
  // const header = HeaderSimple()
  formPublicacion.append(header)

  

  return formPublicacion;
};
