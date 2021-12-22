import { HeaderRetroceder } from "./Header_retro.js";
import { addPost } from "../firebase/firebase-data.js";

export const Form_Post = () => {
  //Contenedor de post
  const $formPost = document.createElement("div");
  $formPost.classList.add("formPost");
  //Header
  const header = HeaderRetroceder();
  //Titulo
  const title = document.createElement("h2");
  title.classList.add("formPost_title");
  title.textContent = `Crear publicación`;

  //Input del Post
  const inputsContainer = document.createElement("div");
  inputsContainer.classList.add("formPost_inputs");

  const post = document.createElement("textarea");
  post.id = "msgPostForm";
  post.classList.add("formPost_input-long");
  post.placeholder = `¿Qué estas pensando?`;

  const tags = document.createElement("input");
  tags.classList.add("formPost_input-short");
  tags.placeholder = `Añadir etiquetas`;

  

  const picture = document.createElement("input");
  picture.type = 'file'
  picture.classList.add("formPost_input-short");
  picture.placeholder = `Añadir imagen`;
  // picture.onchange = {pictureHandler}


  inputsContainer.append(post);
 // inputsContainer.append(tags);
  inputsContainer.append(picture);

  // Contenedor del mensaje de Error
  const $errorContainer = document.createElement("div");
  $errorContainer.classList.add("err-container", "center");

  const $msgError = document.createElement("small");
  $msgError.classList.add("error-msg");
  $msgError.id = "errorCrearPost";
  $msgError.textContent = "";
  $errorContainer.append($msgError);

  //Contenedor de Botones
  const btnsContainer = document.createElement("div");
  btnsContainer.classList.add("formPost_btns");

  //////////////////////////////Boton de Tags
  const tagBtn = document.createElement("button");
  tagBtn.classList.add("formPost_button");
  btnsContainer.append(tagBtn);

  const tagBtnDiv = document.createElement("div");
  tagBtnDiv.classList.add("btnContent");
  tagBtn.append(tagBtnDiv);

  const iconTag = document.createElement("span");
  iconTag.classList.add("icon-plus2");

  iconTag.classList.add("btnIconsTag");
  tagBtnDiv.append(iconTag);

  const textTag = document.createElement("span");
  textTag.classList.add("tagTextSpan");
  textTag.textContent = `Etiquetas`;
  tagBtnDiv.append(textTag);

  //////////////////////////////////////Boton Publicacion

  const $postBtn = document.createElement("button");
  $postBtn.id = "sendPost";
  $postBtn.classList.add("formPost_button");
  btnsContainer.append($postBtn);

  // Anade funcionalidad al boton Publicar y valida campos vacios
  $postBtn.addEventListener("click", () => {
    const mensajeError = document.getElementById("errorCrearPost");
    const formPostMsg = document.getElementById("msgPostForm").value;
    if (formPostMsg == "") {
      mensajeError.textContent = "completar campos *";
    } else {
      console.log("creamos el nuevo post!!", formPostMsg);
      addPost(formPostMsg);
      window.location.hash = "#/timeline";
    }
  });

  const postBtnDiv = document.createElement("div");
  postBtnDiv.classList.add("btnContent");
  $postBtn.append(postBtnDiv);

  const iconSend = document.createElement("span");
  iconSend.classList.add("icon-send");
  iconSend.classList.add("btnIconsPost");
  postBtnDiv.append(iconSend);

  const textPost = document.createElement("span");
  textPost.classList.add("postTextSpan");
  textPost.textContent = `Publicar`;
  postBtnDiv.append(textPost);

  $formPost.append(header);
  $formPost.append(title);
  $formPost.append(inputsContainer);
  $formPost.append($errorContainer);
  $formPost.append(btnsContainer);

  return $formPost;
};
