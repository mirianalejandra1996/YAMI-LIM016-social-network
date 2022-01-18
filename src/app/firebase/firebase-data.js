// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import {
  db,
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
} from './firebase-initializer.js';
// import { db } from "../firebase/firebase-initializer.js";

// export const auth =

/** ****************Funciones de los Usuario******************** */
// Agrega un usuario a FS
export function addUser(user, name, password) {
  let nameN;
  let emailN;
  let photoUrlN;
  let logedByN;
  let passwordN;
  const birthN = '';

  // console.log("tu eres el user", user);
  // console.log("tu eres el provider", user.providerData);
  // user.currentUser.providerData[0].providerId
  if (user.providerData[0].providerId === 'google.com') {
    // console.log("tu eres el user", user);
    // console.log("estás logueado con google!!");
    nameN = user.displayName;
    emailN = user.email;
    photoUrlN = user.photoURL;
    logedByN = 'google';
    passwordN = null;
  } else {
    // Si está logueado con password
    nameN = name;
    emailN = user.email;
    photoUrlN = 'https://firebasestorage.googleapis.com/v0/b/yami-cbaa4.appspot.com/o/user.png?alt=media&token=bfe80508-5817-4d84-83e1-6a074a16f198';
    logedByN = 'password';
    passwordN = password;
  }
  // console.log("entramos a AddUsers");
  const userdoc = doc(db, 'users', user.uid); // Creamos un documento con el id de nuestro usuario
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
  });
  // .then((userDocRef) => {
  //   console.log('esto es userdocref', userDocRef);
  //   return userDocRef;
  // })
  // .catch((err) => console.log(err));
}

// Get User Data
export async function getUserData(userId) {
  const userRef = doc(db, 'users', userId);
  const docSnap = await getDoc(userRef);

  const usuario = docSnap.data();
  if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    return usuario;
  }
  // doc.data() will be undefined in this case
  return {};
}
// todo: AVERIGUAR SI EXISTE ALGÚN METODO EXCLUSIVO PARA SABER SI EL USUARIO EXISTE
// todo: EN FIRESTORE O EN AUTH
export async function isExistingUser(email) {
  const q = query(collection(db, 'users'), where('user_email', '==', email));

  const docSnap = await getDocs(q);

  const userEmailMatch = [];

  docSnap.forEach((d) => {
    userEmailMatch.push(d.data());
  });

  let userExist;
  let emailUserSearched;
  // let pwdUserSearched;

  if (userEmailMatch.length === 0) {
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
export async function changePasswordFirestore(userId, password) {
  const userDocRef = await doc(db, 'users', userId);

  return updateDoc(userDocRef, {
    user_password: password,
  });
  // .then((data) => {
  //   console.log("Si se actualizó el usuario en el firestore , ", data);
  // })
  // .catch((err) => {
  //   console.log("No se puede actualizar el usuario en el firestore ", err);
  // });
}

export function changeBasicDataFirestore(userId, objNewData) {
  // console.log('función updateUser va a actualizar los datos');
  const userDocRef = doc(db, 'users', userId);

  updateDoc(userDocRef, {
    user_photo: objNewData.user_photo,
    user_name: objNewData.user_name,
    user_birth: objNewData.user_birth,
    user_email: objNewData.user_email,
  });
}

/** ****************Funciones del POST******************** */
// Agrega un post a FS
const colRef = collection(db, 'posts');

export function addPost(message) {
  const user = auth.currentUser;
  return addDoc(colRef, {
    id_user: user.uid,
    user_name: user.displayName,
    user_photo: user.photoURL,
    message,
    date: Date.now(),
    likes: [],
  });
  // .then((postDocRef) => {
  //   console.log('post subido al firestore!', postDocRef);
  //   return postDocRef;
  // })
  // .catch((err) => console.log(err));
}

// Recopila todos los posts
export async function traerPost() {
  const postsData = [];
  const postsRef = collection(db, 'posts');
  const q = query(postsRef, orderBy('date', 'desc'));
  const querySnapshotPosts = await getDocs(q);

  querySnapshotPosts.forEach((d) => {
    const post = d.data();
    post.post_id = d.id;
    postsData.push(post);
  });
  // retorna un array de objetos
  return postsData;
}

// Toggle Likes Post
export async function toggleLikes(postId) {
  // en la colección posts, nos vamos a la propiedad "like" (campo) del documento
  const postRef = doc(db, 'posts', postId); // documentRef

  const userId = auth.currentUser.uid;

  const post = await getDoc(postRef);
  const likes = post.data().likes;
  const userLike = likes.find((like) => like === userId);
  // .find defines true o false hasta q las entencia se cumple

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
export async function updatePost(postId, { message, imageUrl = '' }) {
  const postRef = doc(db, 'posts', postId);

  return updateDoc(postRef, {
    message,
    imageUrl,
  });
}

// Eliminar Post
export async function deletePost(postId) {
  const postRef = doc(db, 'posts', postId);
  return deleteDoc(postRef);
}

// Traer Posts de un Usuario
export async function traerMisPost(userId) {
  const q1 = query(
    collection(db, 'posts'),
    where('id_user', '==', userId),
    orderBy('date', 'desc'),
  );
  const querySnapshotPosts = await getDocs(q1);
  const postsFiltradocs = querySnapshotPosts.docs; // es un Array
  const postsData = [];

  postsFiltradocs.forEach((d) => {
    // doc.data() is never undefined for query doc snapshots
    const post = d.data();
    post.post_id = d.id;
    postsData.push(post);
  });
  // retornamos un array de objetos
  return postsData;
}

// Comentar un Post
export function addComment(currentUser, idPost, comment) {
  const commentsRef = collection(db, 'posts', idPost, 'comments');

  addDoc(commentsRef, {
    id_user: currentUser.uid,
    user_name: currentUser.displayName,
    message: comment,
    date: Date.now(),
    likes: [],
    user_photo: currentUser.photoURL,
  });
  // .then(() => {
  //   console.log('comentario en firestore');
  // })
  // .catch((err) => console.log(err));
}

/** ****************Funciones de los Comentarios******************** */
// Traer los Comentarios
export async function traerComments(idPost) {
  const commentsData = [];
  const commentsRef = collection(db, 'posts', idPost, 'comments');
  const q = query(commentsRef, orderBy('date', 'desc'));
  const querySnapshotComments = await getDocs(q);

  querySnapshotComments.forEach((d) => {
    const comment = d.data();
    comment.com_id = d.id;
    commentsData.push(comment);
    // console.log(postData)
    // console.log(doc.id, " => ", doc.data());
  });
  // console.log(commentsData);
  return commentsData;
}

// Toggle Likes Comments
export async function toggleComLikes(postId, comId) {
  // console.log(post.post_id);
  // console.log(post_id);
  // en la colección posts, nos vamos a la propiedad "like" (campo) del documento
  const comRef = doc(db, 'posts', postId, 'comments', comId); // documentRef
  // console.log("este es comRef", comRef);
  const userId = auth.currentUser.uid;
  // console.log(userId);
  const comment = await getDoc(comRef);
  const likes = comment.data().likes;

  const userLike = likes.find((like) => like === userId);
  // .find defines true o false hasta q las entencia se cumple

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
  const postRef = doc(db, 'posts', postId, 'comments', comId);
  return updateDoc(postRef, {
    message,
  });
}

export async function deleteCom(postId, comId) {
  const comRef = doc(db, 'posts', postId, 'comments', comId);
  return deleteDoc(comRef);
}

/** ****************Funciones del LISTENERS******************** */
// Init Listener Post
export function initListenerPost(postId, actualizarPost) {
  return onSnapshot(doc(db, 'posts', postId), actualizarPost);
}

// Init Listener Profile Component
export function initListenerProfile(userId, actualizarProfile) {
  return onSnapshot(doc(db, 'users', userId), actualizarProfile);
}

// Init listener comment likes
export function initListenerComLike(postId, comId, actualizarComment) {
  return onSnapshot(
    doc(db, 'posts', postId, 'comments', comId),
    actualizarComment,
  );
}
