import { HeaderRetroceder } from "./Header_retro.js";
import { addPost } from "../firebase/firebase-data.js";

export const Edit_Post = (post_data) => {
  const root = document.getElementById("root");
  root.classList.remove("main-container");

  // ------NUEVO
  const createPostContainer = document.createElement("div");
  const algo = post_data
  console.log(algo.message)


  const formPost = document.createElement("div");
  formPost.classList.add("formPost");

  const header = HeaderRetroceder();
  formPost.append(header);

  const title = document.createElement("h2");
  title.classList.add("formPost_h2");
  title.textContent = `Editar publicación`;
  formPost.append(title);

  const inputsContainer = document.createElement("div");
  inputsContainer.classList.add("formPost_inputs");
  formPost.append(inputsContainer);

  const post = document.createElement("textarea");
  post.id = "msgPostForm";
  post.classList.add("formPost_input-long");
  post.placeholder = `¿Qué estas pensando?`;
  // post.value = `${post_data.message}`
  inputsContainer.append(post);

  const tags = document.createElement("input");
  tags.classList.add("formPost_input-short");
  tags.placeholder = `Añadir etiquetas`;
  inputsContainer.append(tags);

  const picture = document.createElement("input");
  picture.classList.add("formPost_input-short");
  picture.placeholder = `Añadir imagen`;
  inputsContainer.append(picture);

  const btnsContainer = document.createElement("div");
  btnsContainer.classList.add("formPost_btns");
  formPost.append(btnsContainer);
  ///////////////////////////////////////////////

  const tagBtn = document.createElement("button");
  tagBtn.classList.add("formPost_button");
  btnsContainer.append(tagBtn);

  const tagBtnDiv = document.createElement("div");
  tagBtnDiv.classList.add("btnContent");
  tagBtn.append(tagBtnDiv);

  const iconTag = document.createElement("span");
  iconTag.classList.add("icon-plus2");
  // iconTag.classList.add("icon-acept-icon");
  // iconTag.classList.add("path1");
  // iconTag.classList.add("path2");
  // iconTag.classList.add("path3");

  iconTag.classList.add("btnIconsTag");
  tagBtnDiv.append(iconTag);

  const textTag = document.createElement("span");
  textTag.classList.add("tagTextSpan");
  textTag.textContent = `Etiquetas`;
  tagBtnDiv.append(textTag);

  ///////////////////////////////////////////

  const postBtn = document.createElement("button");
  postBtn.id = "sendPost";
  postBtn.classList.add("formPost_button");
  btnsContainer.append(postBtn);

  // todo: debería lanzar un error si el input está vacio
  postBtn.addEventListener("click", () => {
    const formPostMsg = document.getElementById("msgPostForm").value;
    console.log("enviando post!!", formPostMsg);

    addPost(formPostMsg);
  });

  const postBtnDiv = document.createElement("div");
  postBtnDiv.classList.add("btnContent");
  postBtn.append(postBtnDiv);

  const iconSend = document.createElement("span");
  iconSend.classList.add("icon-send");
  iconSend.classList.add("btnIconsPost");
  postBtnDiv.append(iconSend);

  const textPost = document.createElement("span");
  textPost.classList.add("postTextSpan");
  textPost.textContent = `Publicar`;
  postBtnDiv.append(textPost);

  createPostContainer.append(formPost);

  return formPost;
};
