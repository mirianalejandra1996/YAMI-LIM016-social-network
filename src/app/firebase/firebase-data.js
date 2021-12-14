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
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
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
    likes: [],
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
  const postsData = [];
  const querySnapshotPosts = await getDocs(collection(db, "posts"));

  querySnapshotPosts.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots

    const post = doc.data();
    console.log(post);
    post["post_id"] = doc.id;

    console.log(post);

    postsData.push(post);
    // console.log(postData)
    // console.log(doc.id, " => ", doc.data());
  });

  return postsData;
}

// console.log(traerPost()) // Promise<Pending>

// console.log(await traerPost()) // posts

// console.log(traerPost().then((posts))) //posts

// ------------------

// * Función en prueba de la mañana
// export function contadorLikes(post) {
//   const user = auth.currentUser;
//   const likesRef = collection(db, "likes");

//   return addDoc(likesRef, {
//     user_id: user.uid,
//     postId: post,
//     status: 1
//   })
//     .then(() => {
//       console.log("like creado!!");
//     })
//     .catch((err) => console.log(err));
// }

// -----CONTADOR DE LIKES ----------

// export async function contadorLikes(post_id) {
//   // console.log(post.post_id);

//   console.log(post_id);
//   // en la colección posts, nos vamos a la propiedad "like" (campo) del documento
//   const postRef = doc(db, "posts", post_id);

//   console.log("este es postRef", postRef);
//   const user = auth.currentUser.uid;
//   console.log(user);

//   // Atomically add a new region to the "regions" array field.

//   // await updateDoc(postsRef, {
//   //   likes: arrayUnion(user),
//   // });

//   // if (postsRef.exist) {
//   //   if
//   // }
//   // // Atomically remove a region from the "regions" array field.
//   // await updateDoc(washingtonRef, {
//   //   regions: arrayRemove("east_coast"),
//   // });

//   // const docRef = doc(db, "posts", post_id);
//   // const docSnap = await getDoc(docRef);
//   // const q = query(postsRef, where("likes", "in", user));

//   // console.log(q);

//   const postsRef = collection(db, "post");
//   const q1 = query(
//     postsRef,
//     where("posts", "==", post_id),
//     where("likes", "==", user)
//   );

//   console.log("este es q1", q1);

//   if (q1) {
//     await updateDoc(postRef, {
//       likes: arrayRemove(user),
//     });
//   } else {
//     await updateDoc(postRef, {
//       likes: arrayUnion(user),
//     });
//   }

//   //   if(q) {

//   //   }
//   //   console.log("Document data:", docSnap.data());
//   // } else {
//   //   // doc.data() will be undefined in this case
//   //   console.log("No such document!");
//   // }
// }

export async function contadorLikes(post_id) {
  // console.log(post.post_id);

  console.log(post_id);
  // en la colección posts, nos vamos a la propiedad "like" (campo) del documento
  const postRef = doc(db, "posts", post_id);

  console.log("este es postRef", postRef);
  const user = auth.currentUser.uid;
  console.log(user);

  const querySnapshotPosts = await getDocs(collection(db, "posts"));

  const postsData = [];
  querySnapshotPosts.forEach((doc) => {
    // * HAGO ESTO PARA METER EN UN ARRAY LOS POST, Y LUEGO FILTRAR ESTE POST QUE TIENE EL MISMO ID DEL POST

    // doc.data() is never undefined for query doc snapshots
    const post = doc.data();
    // console.log(post);
    post["post_id"] = doc.id;

    // console.log(post);

    postsData.push(post);
    // console.log(postData)
    console.log("alejandra", doc.id, " => ", doc.data());
  });

  console.log("mirian", postsData);

  let postFiltered = postsData.filter((post) => post.post_id === post_id);

  console.log("quiero chequear igualdad", postFiltered[0].post_id === post_id);

  // todo: AQUI ESTÁ!!

  let postListo = postFiltered[0];
  console.log("post filtrado", postListo.likes);
  console.log(user);

  if (postListo["likes"].includes(user)) {
    // eliminamos like

    console.log("se quitó like!!");
    await updateDoc(postRef, {
      likes: arrayRemove(user),
    });
  } else {
    // añadimos like
    console.log("se añadió like!!");
    await updateDoc(postRef, {
      likes: arrayUnion(user),
    });
  }
}
