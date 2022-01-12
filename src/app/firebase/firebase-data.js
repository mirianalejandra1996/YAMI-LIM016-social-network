// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import {
  db,
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  query,
  where,
  getDocs,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot,
  deleteDoc,
  orderBy,
  auth,
} from "../firebase/firebase-initializer.js";
// import { db } from "../firebase/firebase-initializer.js";

// export const auth =

/******************Funciones de los Usuario*********************/
//Agrega un usuario a FS
export function addUser(user, name, password) {
  let nameN,
    emailN,
    photoUrlN,
    logedByN,
    passwordN,
    birthN = "";

  if (user.providerData[0].providerId === "google.com") {
    // console.log("estás logueado con google!!");
    nameN = user.displayName;
    emailN = user.email;
    photoUrlN = user.photoURL;
    logedByN = "google";
    passwordN = null;
  } else {
    // Si está logueado con password
    nameN = name;
    emailN = user.email;
    photoUrlN =
      "https://firebasestorage.googleapis.com/v0/b/yami-cbaa4.appspot.com/o/user.png?alt=media&token=bfe80508-5817-4d84-83e1-6a074a16f198";
    logedByN = "password";
    passwordN = password;
  }
  //console.log("entramos a AddUsers");
  const userdoc = doc(db, "users", user.uid); //Creamos un documento con el id de nuestro usuario
  // setDoc lo usamos para especificar un id único que nosotros vamos a colocarle,
  // El addDoc autogenera el id
  return setDoc(userdoc, {
    user_id: user.uid,
    user_name: nameN,
    user_photo: photoUrlN,
    user_createdAt: user.metadata.createdAt,
    user_email: emailN,
    user_password: passwordN,
    user_logedBy: logedByN,
    user_birth: birthN,
  })
    .then(() => {
      console.log("usuario subido al firestore!");
    })
    .catch((err) => console.log(err));
}

// Get User Data
export async function getUserData(user_id) {
  const userRef = doc(db, "users", user_id);
  const docSnap = await getDoc(userRef);

  const usuario = docSnap.data()
  console.log ({usuario})
  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
 return  usuario;
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");
  //   return {};
  // }
}
// todo: AVERIGUAR SI EXISTE ALGÚN METODO EXCLUSIVO PARA SABER SI EL USUARIO EXISTE
// todo: EN FIRESTORE O EN AUTH
export async function isExistingUser(email) {
  const q = query(collection(db, "users"), where("user_email", "==", email));

  const docSnap = await getDocs(q);

  const userEmailMatch = [];

  docSnap.forEach((doc) => {
    userEmailMatch.push(doc.data());
  });

  let userExist;
  let emailUserSearched;
  // let pwdUserSearched;

  if (userEmailMatch.length === 0) {
    console.log(userEmailMatch.length);
    userExist = false;
    emailUserSearched = null;
    // pwdUserSearched = null;
  } else {
    userExist = true;
    emailUserSearched = userEmailMatch[0].user_email;
    // pwdUserSearched = userEmailMatch[0].user_password;
  }

  return {
    emailUserSearched,
    // pwdUserSearched,
    userExist,
  };

  // return userExist;
}

// Actualiza el usuario
export async function changePasswordFirestore(user_id, password) {
  console.log("función updateUser va a actualizar los datos");
  const userDocRef = await doc(db, "users", user_id);

  return updateDoc(userDocRef, {
    user_password: password,
  })
    // .then((data) => {
    //   console.log("Si se actualizó el usuario en el firestore , ", data);
    // })
    // .catch((err) => {
    //   console.log("No se puede actualizar el usuario en el firestore ", err);
    // });
}

export function changeBasicDataFirestore(user_id, objNewData) {
  console.log("función updateUser va a actualizar los datos");
  const userDocRef = doc(db, "users", user_id);

  updateDoc(userDocRef, {
    user_photo: objNewData.user_photo,
    user_name: objNewData.user_name,
    user_birth: objNewData.user_birth,
    user_email: objNewData.user_email,
  })
    .then(() => {
      console.log("Si se actualizó el usuario en el firestore ");
    })
    .catch((err) => {
      console.log("No se puede actualizar el usuario en el firestore ", err);
    });
}

/******************Funciones del POST*********************/
//Agrega un post a FS
const colRef = collection(db, "posts");

export function addPost(message) {
  const user = auth.currentUser;
  return addDoc(colRef, {
    id_user: user.uid,
    user_name: user.displayName,
    user_photo: user.photoURL,
    message,
    date: Date.now(),
    likes: [],
  })
    .then((postDocRef) => {
      console.log("post subido al firestore!");
      return postDocRef;
    })
    .catch((err) => console.log(err));
}

//Recopila todos los posts
export async function traerPost() {
  const postsData = [];
  const postsRef = collection(db, "posts");
  const q = query(postsRef, orderBy("date", "desc"));
  const querySnapshotPosts = await getDocs(q);

  querySnapshotPosts.forEach((doc) => {
    const post = doc.data();
    post["post_id"] = doc.id;
    postsData.push(post);
  });
  // retorna un array de objetos
  return postsData;
}

//Toggle Likes Post
export async function toggleLikes(post_id) {
  // console.log(post.post_id);

  console.log(post_id);
  // en la colección posts, nos vamos a la propiedad "like" (campo) del documento
  const postRef = doc(db, "posts", post_id); // documentRef

  console.log("este es postRef", postRef);
  const userId = auth.currentUser.uid;
  console.log(userId);

  const post = await getDoc(postRef);
  const likes = post.data().likes;
  const userLike = likes.find((like) => {
    //.find defines true o false hasta q las entencia se cumple
    return like === userId;
  });

  if (userLike) {
    await updateDoc(postRef, {
      likes: arrayRemove(userId),
    });
  } else {
    await updateDoc(postRef, {
      likes: arrayUnion(userId),
    });
  }
}

// Actualizar Post
export async function updatePost(post_id, { message, imageUrl = "" }) {
  const postRef = doc(db, "posts", post_id);

  return await updateDoc(postRef, {
    message,
    imageUrl,
  });
}

// Eliminar Post
export async function deletePost(post_id) {
  const postRef = doc(db, "posts", post_id);
  return await deleteDoc(postRef);
}

// Traer Posts de un Usuario
export async function traerMisPost(userId) {
  const q1 = query(
    collection(db, "posts"),
    where("id_user", "==", userId),
    orderBy("date", "desc")
  );
  const querySnapshotPosts = await getDocs(q1);
  const postsFiltradocs = querySnapshotPosts.docs; //es un Array
  const postsData = [];

  postsFiltradocs.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const post = doc.data();
    post["post_id"] = doc.id;
    postsData.push(post);
  });
  //retornamos un array de objetos
  return postsData;
}

// Comentar un Post
export function addComment(current_user, idPost, comment) {
  const commentsRef = collection(db, "posts", idPost, "comments");

  console.log(current_user);

  addDoc(commentsRef, {
    id_user: current_user.uid,
    user_name: current_user.displayName,
    message: comment,
    date: Date.now(),
    likes: [],
    user_photo: current_user.photoURL,
  })
    .then(() => {
      console.log("comentario en firestore");
    })
    .catch((err) => console.log(err));
}

/******************Funciones de los Comentarios*********************/
// Traer los Comentarios
export async function traerComments(id_post) {
  const commentsData = [];
  const commentsRef = collection(db, "posts", id_post, "comments");
  const q = query(commentsRef, orderBy("date", "desc"));
  const querySnapshotComments = await getDocs(q);

  querySnapshotComments.forEach((doc) => {
    const comment = doc.data();
    comment["com_id"] = doc.id;
    commentsData.push(comment);
    // console.log(postData)
    // console.log(doc.id, " => ", doc.data());
  });
  // console.log(commentsData);
  return commentsData;
}

//Toggle Likes Comments
export async function toggleComLikes(post_id, com_id) {
  // console.log(post.post_id);
  //console.log(post_id);
  // en la colección posts, nos vamos a la propiedad "like" (campo) del documento
  const comRef = doc(db, "posts", post_id, "comments", com_id); // documentRef
  //console.log("este es comRef", comRef);
  const userId = auth.currentUser.uid;
  //console.log(userId);
  const comment = await getDoc(comRef);
  const likes = comment.data().likes;

  const userLike = likes.find((like) => {
    //.find defines true o false hasta q las entencia se cumple
    return like === userId;
  });

  if (userLike) {
    await updateDoc(comRef, {
      likes: arrayRemove(userId),
    });
  } else {
    await updateDoc(comRef, {
      likes: arrayUnion(userId),
    });
  }
}

// Actualizar comentario
export async function updateCom(postId, comId, message) {
  const postRef = doc(db, "posts", postId, "comments", comId);
  return await updateDoc(postRef, {
    message,
  });
}

export async function deleteCom(postId, comId) {
  const comRef = doc(db, "posts", postId, "comments", comId);
  return await deleteDoc(comRef);
}

/******************Funciones del LISTENERS*********************/
//Init Listener Post
export function initListenerPost(postId, actualizarPost) {
  return onSnapshot(doc(db, "posts", postId), actualizarPost);
}

//Init Listener Profile Component
export function initListenerProfile(userId, actualizarProfile) {
  return onSnapshot(doc(db, "users", userId), actualizarProfile);
}

//Init listener comment likes
export function initListenerComLike(postId, comId, actualizarComment) {
  return onSnapshot(
    doc(db, "posts", postId, "comments", comId),
    actualizarComment
  );
}
