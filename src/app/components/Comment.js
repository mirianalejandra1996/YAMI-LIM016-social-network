import { toggleComLikes, initListenerComLike } from "../firebase/firebase-data.js"
import { auth } from "../firebase/firebase-auth.js";

export const Comment = (postId, com) => {
    // console.log(com)

    const user_id = auth.currentUser.uid;

    // console.log(postId, com, com.com_id, com.id_user)

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
    likesDiv.addEventListener("click", ()=>{
      toggleComLikes(postId, com.com_id)
    })
    const likesSpan = document.createElement("span")
    likesSpan.classList.add("icon-like")
    likesSpan.classList.add("likesIcon")
    const likesCounter = document.createElement("span")
    likesCounter.textContent = `X`;
    likesCounter.classList.add("likesCounter")
    likesCounter.id = `likeComCounter_${com.com_id}`
    // likesCounter.textContent = /*`${com.likes.length}`*/`X`

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
    commentTime.textContent = `${timeSince(com.date)}`
    commentTime.classList.add("commentTime")

    commentBottom.append(commentTime)
    commentBottom.append(likesDiv)
    

    commentInfo.append(commentName)
    commentInfo.append(commentMessage)
    commentInfo.append(commentBottom)
    commentDiv.append(commentInfo)

    // console.log(com)
    // console.log(user_id, com.id_user)

    const optionsDiv = document.createElement("div")
    optionsDiv.classList.add("commentsOptionDiv")
    const optionsSpan = document.createElement("span")
    optionsSpan.classList.add("icon-options")
    optionsSpan.classList.add("commentOptionIcon")

    if (user_id != com.id_user) optionsSpan.classList.add("hiddenIcon");

    /**
     const handleClickEdit = () => {
    setDataModalEdit(com);
    abrirModalEdit();
  };
*/
    const handleClickRemove = () => {
    setDataModalRemove(com);
    abrirModalRemove();
  };
    
    const {menuModalOptionsCom, toggleModalOptionsCom} = OptionListCom(
      handleClickRemove,
      handleClickEdit
    );

    const optionsCom = menuModalOptionsCom
    
    optionsSpan.addEventListener("click", () => {
      toggleModalOptionsCom()
    })

    optionsSpan.append(optionsCom)
    optionsDiv.append(optionsSpan)


    initListenerComLike(postId, com.com_id, (comDoc) => {
      //se podria cambiar cualquier campo de post pero en este caso solo necesitamos los likes
  
      console.log(comDoc.data())
      
      const likes = comDoc.data().likes;
      // console.log("array de likes", likes);
      if (likes.find((like) => like === user_id)) {
        likesDiv.classList.add("selected");
        // console.log("si se encuentra");
      } else {
        likesDiv.classList.remove("selected");
        console.log("no se encuentra");
      }
      
      likesCounter.textContent = `${likes.length}`;
    });

    container.append(avatarDiv)
    container.append(commentDiv)
    // container.append(likesDiv)
    container.append(optionsDiv)

    return container
}

function OptionListCom(){
  const modalOpciones = document.createElement("div")
  modalOpciones.classList.add("comOptions__dropdown", "cerrar")

  const btnEditCom = document.createElement("button")
  btnEditCom.textContent = `✎`
  btnEditCom.classList.add("comOptionsBtn")

  const btnRemoveCom = document.createElement("button")
  btnRemoveCom.textContent = `✘`
  btnRemoveCom.classList.add("comOptionsBtn")

  modalOpciones.append(btnEditCom)
  modalOpciones.append(btnRemoveCom)

  const toggleModalOptionsCom = () => {
    modalOpciones.classList.toggle("cerrar")
  }

  return {
    menuModalOptionsCom: modalOpciones,
    toggleModalOptionsCom: toggleModalOptionsCom,
  }
}

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  // Intervalo de años
  var interval = seconds / 31536000;
  if (interval > 1) {
    let years = Math.floor(interval);
    if (years === 1) return `${years} mes`;
    return `${years} años`;
  }

  // Intervalo de meses
  interval = seconds / 2592000;
  if (interval > 1) {
    let months = Math.floor(interval);
    if (months === 1) return `${months} mes`;
    return `${months} meses`;
  }

  // Intervalo de días
  interval = seconds / 86400;
  if (interval > 1) {
    let days = Math.floor(interval);
    if (days === 1) return `${days} hora`;
    return `${days} días`;
  }

  // Intervalo de horas
  interval = seconds / 3600;
  if (interval > 1) {
    let hours = Math.floor(interval);
    if (hours === 1) return `${hours} hora`;
    return `${hours} horas`;
  }

  // Intervalo de minutos
  interval = seconds / 60;
  if (interval > 1) {
    let minutes = Math.floor(interval);
    if (minutes === 1) return `${minutes} minuto`;
    return `${minutes} minutos`;
  }
  return `Hace segundos`;
}
