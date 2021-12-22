export const Comment = (com) => {
  const container = document.createElement("div");
  container.classList.add("commentContainer");

  const avatarDiv = document.createElement("div");
  avatarDiv.classList.add("avatarDiv");
  const avatarCircle = document.createElement("div");
  avatarCircle.classList.add("commentAvatarCircle");
  const avatarImg = document.createElement("img");
  // avatarImg.src= "./app/assets/user-img.jpg"
  avatarImg.src =
    "https://firebasestorage.googleapis.com/v0/b/yami-cbaa4.appspot.com/o/default-profile.jpeg?alt=media&token=772a7498-d018-4994-9805-041ae047bdc6";
  avatarImg.classList.add("commentAvatar");

  avatarCircle.append(avatarImg);
  avatarDiv.append(avatarCircle);

  const commentDiv = document.createElement("div");
  commentDiv.classList.add("commentDiv");
  const commentInfo = document.createElement("div");
  commentInfo.classList.add("commentInfo");
  const commentName = document.createElement("h4");
  commentName.classList.add("commentName");
  commentName.textContent = `${com.user_name}`;
  const commentMessage = document.createElement("p");
  commentMessage.classList.add("commentMessage");
  commentMessage.textContent = `${com.message}`;

  commentInfo.append(commentName);
  commentInfo.append(commentMessage);
  commentDiv.append(commentInfo);

  const optionsDiv = document.createElement("div");
  optionsDiv.classList.add("commentsOptionDiv");
  const optionsSpan = document.createElement("span");
  optionsSpan.classList.add("icon-options");
  optionsSpan.classList.add("commentOptionIcon");

  optionsDiv.append(optionsSpan);

  container.append(avatarDiv);
  container.append(commentDiv);
  container.append(optionsDiv);

  return container;
};
