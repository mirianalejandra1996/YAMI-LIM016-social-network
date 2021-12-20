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
    inputComment.classList.add("postComment_input")

    newComment.append(avatarContainer)
    newComment.append(inputComment)

    return newComment
}