import { HeaderRetro } from "./Header_retro.js"

export const Form_Post = () => {
    const root= document.getElementById("root")
    root.classList.remove("main-container")

    const formPost = document.createElement("div");
    formPost.classList.add("formPost")

    const header = HeaderRetro()
    formPost.append(header)

    const title = document.createElement("h2")
    title.classList.add("formPost_h2")
    title.textContent = `Crear publicación`
    formPost.append(title)

    const inputsContainer = document.createElement("div")
    inputsContainer.classList.add("formPost_inputs")
    formPost.append(inputsContainer)

    const post = document.createElement("textarea")
    post.classList.add("formPost_input-long")
    post.placeholder = `¿Qué estas pensando?`
    inputsContainer.append(post)

    const tags = document.createElement("input")
    tags.classList.add("formPost_input-short")
    tags.placeholder = `Añadir etiquetas`
    inputsContainer.append(tags)

    const picture = document.createElement("input")
    picture.classList.add("formPost_input-short")
    picture.placeholder = `Añadir imagen`
    inputsContainer.append(picture)

    const btnsContainer = document.createElement("div")
    btnsContainer.classList.add("formPost_btns")
    formPost.append(btnsContainer)

    const tagBtn = document.createElement("button")
    const iconTag = document.createElement("span")
    iconTag.classList.add("icon-plus2")
    iconTag.classList.add("btnIconsTag")

    tagBtn.classList.add("formPost_button")
    tagBtn.textContent=`Etiquetas`
    btnsContainer.append(iconTag)
    btnsContainer.append(tagBtn)

    const postBtn = document.createElement("button")
    const iconSend = document.createElement("span")
    iconSend.classList.add("icon-send")
    iconSend.classList.add("btnIconsPost")

    postBtn.classList.add("formPost_button")
    postBtn.textContent=`Publicar`
    btnsContainer.append(iconSend)
    btnsContainer.append(postBtn)

    return formPost;
};
