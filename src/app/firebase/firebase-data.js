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
onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
import { db } from "../firebase/firebase-initializer.js";
import { auth } from "../firebase/firebase-auth.js";

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




export async function toggleLikes(post_id) {
  // console.log(post.post_id);

  console.log(post_id);
  // en la colección posts, nos vamos a la propiedad "like" (campo) del documento
  const postRef = doc(db, "posts", post_id); // documentRef  

  console.log("este es postRef", postRef);
  const userId = auth.currentUser.uid;
  console.log(userId);


  const post = await getDoc(postRef)
  const likes =  post.data().likes
  const userLike = likes.find((like) => { //.find defines true o false hasta q las entencia se cumple
    return like === userId
  })

  if(userLike) {
    await updateDoc(postRef, {
      likes: arrayRemove(userId),
    });
  }  else {
    await updateDoc(postRef, {
      likes: arrayUnion(userId),
    });
  }


  // jalar posts de determinado usuario para armar muro perfil

  // const q1 = query(
  //       collection(db, "posts"),
  //       where("id_user", "==", userId)
  //     );

  // const querySnapshotPosts = await getDocs(q1)


  // const postsFiltradocs = querySnapshotPosts.docs // esto es un array SIEMPRE

  // const likesDelPrimerPostFiltrado = postsFiltradocs[0].data().likes // []
  // const idDelPrimerPostFiltrado = postsFiltradocs[0].id // 

}


export function initListenerPost (postId, actualizarPost) {
 return onSnapshot(doc(db, 'posts', postId), actualizarPost)
}
