import {
  storage,
  uploadBytes,
  ref,
  getDownloadURL,
} from './firebase-initializer.js';

const postPath = 'posts';

export function uploadImage(file, userId) {
  const fileName = file.name;
  const imageRef = ref(storage, `${postPath}/${userId}/${fileName}`);
  return uploadBytes(imageRef, file).then((snapshot) => getDownloadURL(snapshot.ref));
}

// export const pictureHandler = async (e)=>{
//     const archivo = e.target.files[0]
//     const storageRef = storage.ref()
//     const archivoPath = storageRef.child(archivo.name)
//     await archivoPath.put(archivo)
//     console.log("archivo cargado",archivo.name)
//   }

// ------------Subir imagen de perfil del usuario -------------

const userPath = 'users';

export function uploadUserProfileImg(file, userId) {
  const fileName = file.name;
  const imageRef = ref(storage, `${userPath}/${userId}/${fileName}`);

  return uploadBytes(imageRef, file).then((snapshot) => getDownloadURL(snapshot.ref));
}
