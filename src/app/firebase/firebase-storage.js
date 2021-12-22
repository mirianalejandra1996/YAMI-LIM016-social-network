import { db } from "../firebase/firebase-initializer.js";
import { auth } from "../firebase/firebase-auth.js";
import { storage } from "../firebase/firebase-initializer.js";
import { put } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-storage.js";


// export const pictureHandler = async (e)=>{
//     const archivo = e.target.files[0]
//     const storageRef = storage.ref()
//     const archivoPath = storageRef.child(archivo.name)
//     await archivoPath.put(archivo)
//     console.log("archivo cargado",archivo.name)
//   }