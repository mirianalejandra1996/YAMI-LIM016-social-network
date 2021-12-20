export function PostComments() {
    //Comments del post

    //Input para ingresar un comentario
    const newComment = document.createElement("div")
    newComment.classList.add("newComment")

    const avatarContainer = document.createElement("div")
    avatarContainer.classList.add("avatarContainer")
    const avatarImage = document.createElement("img")
    avatarImage.classList.add("avatarImage")
    avatarImage.src = "./app/assets/user-img.jpg"
    avatarContainer.append(avatarImage)

    const inputComment = document.createElement("textarea")
    inputComment.placeholder = `Escribe un comentario...`
    inputComment.classList.add("postComment_input")

    const commentBtn = document.createElement("div")
    commentBtn.classList.add("commentBtnDiv")
    const commentIcon = document.createElement("span")
    commentIcon.classList.add("icon-send");
    commentIcon.classList.add("iconComment")

    commentBtn.append(commentIcon)

    // inputComment.addEventListener("keyup", () => {
    //     let key = window.event.keycode
    //     if (key === 13/* && inputComment.value.length>0*/){
    //         alert ("yay")
    //         // funciondecomentar()
    //     }
    // })

    newComment.append(avatarContainer)
    newComment.append(inputComment)
    newComment.append(commentBtn)

    return newComment
}