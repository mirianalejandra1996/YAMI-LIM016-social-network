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
    id: user.uid,
    user_name: user.displayName,
    message,
    date: Date.now(),
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
  // const q = query(
  //   collection(db, "posts"),
  //   where("id", "==", auth.currentUser.uid)
  // );

  // const querySnapshot = await getDocs(collection(db, "cities"));

  // const querySnapshotPosts = await getDocs(collection(db, "posts"));
  const posts = []

  const querySnapshotPosts = await getDocs(collection(db, "posts"));

  querySnapshotPosts.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    posts.push(doc.data())
    // console.log(doc.id, " => ", doc.data());
  });

  console.log(posts)

  return posts
}

// console.log(traerPost()) // Promise<Pending>

// console.log(await traerPost()) // posts

// console.log(traerPost().then((posts))) //posts