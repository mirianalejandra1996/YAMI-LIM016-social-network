import { addComment } from "../firebase/firebase-data.js";
import { auth } from "../firebase/firebase-auth.js";
import { traerComments } from "../firebase/firebase-data.js";
import { Comment } from "./Comment.js";

export function NewComments(idPost) {
  const commentsDiv = document.createElement("div");

  const current_user = auth.currentUser;

  const newComment = document.createElement("div");
  newComment.classList.add("newComment");

  const avatarDiv = document.createElement("div");
  avatarDiv.classList.add("avatarDiv");

  const avatarContainer = document.createElement("div");
  avatarContainer.classList.add("avatarContainer");
  const avatarImage = document.createElement("img");
  avatarImage.classList.add("avatarImage");
  // avatarImage.src = "./app/assets/user-img.jpg"
  avatarImage.src =
    "https://firebasestorage.googleapis.com/v0/b/yami-cbaa4.appspot.com/o/default-profile.jpeg?alt=media&token=772a7498-d018-4994-9805-041ae047bdc6";
  avatarContainer.append(avatarImage);
  avatarDiv.append(avatarContainer);

  const inputComment = document.createElement("textarea");
  inputComment.id = `comment_${idPost}`;
  inputComment.placeholder = `Escribe un comentario...`;
  inputComment.classList.add("postComment_input");

  const commentBtn = document.createElement("div");
  commentBtn.classList.add("commentBtnDiv");
  const commentIcon = document.createElement("span");
  commentIcon.classList.add("icon-send");
  commentIcon.classList.add("iconComment");

  commentBtn.append(commentIcon);

  commentBtn.addEventListener("click", () => {
    const comment = document.getElementById(`comment_${idPost}`).value;
    if (comment !== "") {
      addComment(current_user, idPost, comment);
    }
  });

  newComment.append(avatarDiv);
  newComment.append(inputComment);
  newComment.append(commentBtn);

  commentsDiv.append(newComment);

  return commentsDiv;
}
