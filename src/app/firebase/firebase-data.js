import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  query,
  where,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
import { db } from "./firebase-initializer.js";
import { auth } from "./firebase-auth.js";

// get collection ref
const colRef = collection(db, "posts");

export function addPost(message) {
  const user = auth.currentUser;

  console.log(user);
  console.log("entramos a AddPost");
  addDoc(colRef, {
    id_user: user.uid,
    user_name: user.displayName,
    message,
    date: Date.now(),
    likes: 0,
  })
    .then(() => {
      console.log("post subido al firestore!");
    })
    .catch((err) => console.log(err));
}

const userRef = collection(db, "users");

export function addUser(user, name) {
  let nuevoName;
  if (!user.displayName) {
    nuevoName = name;
  } else {
    nuevoName = user.displayName;
  }

  console.log("entramos a AddUsers");

  const userdoc = doc(db, "users", user.uid); //Creamos un documento con el id de nuestro usuario

  // setDoc lo usamos para especificar un id único que nosotros vamos a colocarle,
  // El addDoc autogenera el id
  return setDoc(userdoc, {
    user_id: user.uid,
    user_name: nuevoName,
    date_creation: Date.now(),
    user_email: user.email,
  })
    .then(() => {
      console.log("usuario subido al firestore!");
    })
    .catch((err) => console.log(err));
}

// El addDoc no me importa el id que se genere,
// en el usuario el id deberia ser igual que el del servicio de autentificación, por eso usamos doc (para que sea único)

// ------------------------------
// * OBTENEMOS LA COLECCIÓN

export async function traerPost() {
  
  const postsData = []
  const querySnapshotPosts = await getDocs(collection(db, "posts"));

  querySnapshotPosts.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    
    
    const post = doc.data()
    console.log(post)
    post["post_id"]=doc.id

    console.log(post)

    postsData.push(post)
    // console.log(postData)
    // console.log(doc.id, " => ", doc.data());

  });

  return postsData
}

// console.log(traerPost()) // Promise<Pending>

// console.log(await traerPost()) // posts

// console.log(traerPost().then((posts))) //posts

export function contadorLikes(user, post) {
  
  const likesRef = collection(db, "likes");

  return addDoc(likesRef, {
    user_id: user,
    postId: post,
    status: 1
  })
    .then(() => {
      console.log("like creado!!");
    })
    .catch((err) => console.log(err));
}
