export const Comment = () => {
    const container = document.createElement("div")
    container.classList.add("commentContainer")

    const avatarDiv = document.createElement("div")
    const avatarCircle = document.createElement("div")
    avatarCircle.classList.add("commentAvatarCircle")
    const avatarImg = document.createElement("img")
    avatarImg.src= "./app/assets/user-img.jpg"
    avatarImg.classList.add("commentAvatar")

    avatarCircle.append(avatarImg)
    avatarDiv.append(avatarCircle)

    const commentDiv = document.createElement("div")
    const commentInfo = document.createElement("div")
    const commentName = document.createElement("h4")
    const commentMessage = document.createElement("p")

    commentInfo.append(commentName)
    commentInfo.append(commentMessage)
    commentDiv.append(commentInfo)

    const optionsDiv = document.createElement("div")
    optionsDiv.classList.add("commentsOptionDiv")
    const optionsSpan = document.createElement("span")
    optionsSpan.classList.add("icon-options")
    optionsSpan.classList.add("commentOptionIcon")
    
    optionsDiv.append(optionsSpan)

    container.append(avatarDiv)
    container.append(commentDiv)
    container.append(optionsDiv)

    return container
}