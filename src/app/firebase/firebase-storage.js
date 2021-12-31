import { db } from "../firebase/firebase-initializer.js";
import { auth } from "../firebase/firebase-auth.js";
import { storage } from "../firebase/firebase-initializer.js";
import { uploadBytes, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-storage.js";

const postPath = 'posts'


export function uploadImage (file, userId) {
    const fileName = file.name
    const imageRef = ref(storage, `${postPath}/${userId}/${fileName}` )
    return uploadBytes(imageRef, file).then(snapshot => {
        return getDownloadURL(snapshot.ref)
    })



}

// export const pictureHandler = async (e)=>{
//     const archivo = e.target.files[0]
//     const storageRef = storage.ref()
//     const archivoPath = storageRef.child(archivo.name)
//     await archivoPath.put(archivo)
//     console.log("archivo cargado",archivo.name)
//   }