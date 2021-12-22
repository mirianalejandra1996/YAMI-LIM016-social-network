export const Comment = (com) => {
    const container = document.createElement("div")
    container.classList.add("commentContainer")

    const avatarDiv = document.createElement("div")
    avatarDiv.classList.add("avatarDiv")
    const avatarCircle = document.createElement("div")
    avatarCircle.classList.add("commentAvatarCircle")
    const avatarImg = document.createElement("img")
    avatarImg.src= "./app/assets/user-img.jpg"
    avatarImg.classList.add("commentAvatar")

    avatarCircle.append(avatarImg)
    avatarDiv.append(avatarCircle)

    const likesDiv = document.createElement("div")
    likesDiv.classList.add("likesDiv")
    const likesSpan = document.createElement("span")
    likesSpan.classList.add("icon-like")
    likesSpan.classList.add("likesIcon")
    const likesCounter = document.createElement("span")
    likesCounter.textContent = `X`
    likesCounter.classList.add("likesCounter")

    likesDiv.append(likesCounter)
    likesDiv.append(likesSpan)

    const commentDiv = document.createElement("div")
    commentDiv.classList.add("commentDiv")
    const commentInfo = document.createElement("div")
    commentInfo.classList.add("commentInfo")
    const commentName = document.createElement("h4")
    commentName.classList.add("commentName")
    commentName.textContent = `${com.user_name}`
    const commentMessage = document.createElement("p")
    commentMessage.classList.add("commentMessage")
    commentMessage.textContent = `${com.message}`
    const commentBottom = document.createElement("div")
    commentBottom.classList.add("commentBottom")
    const commentTime = document.createElement("span")
    commentTime.textContent = `X h`
    commentTime.classList.add("commentTime")

    commentBottom.append(commentTime)
    commentBottom.append(likesDiv)
    

    commentInfo.append(commentName)
    commentInfo.append(commentMessage)
    commentInfo.append(commentBottom)
    commentDiv.append(commentInfo)

    // const likesDiv = document.createElement("div")
    // likesDiv.classList.add("likesDiv")
    // const likesSpan = document.createElement("span")
    // likesSpan.classList.add("icon-like")
    // likesSpan.classList.add("likesIcon")
    // const likesCounter = document.createElement("span")
    // likesCounter.textContent = `X`
    // likesCounter.classList.add("likesCounter")

    // likesDiv.append(likesCounter)
    // likesDiv.append(likesSpan)

    const optionsDiv = document.createElement("div")
    optionsDiv.classList.add("commentsOptionDiv")
    const optionsSpan = document.createElement("span")
    optionsSpan.classList.add("icon-options")
    optionsSpan.classList.add("commentOptionIcon")
    
    optionsDiv.append(optionsSpan)

    container.append(avatarDiv)
    container.append(commentDiv)
    // container.append(likesDiv)
    container.append(optionsDiv)

    return container
}