import { Welcome } from "./Welcome.js";
import { Registro } from "./Register.js";


function checkRoutes($root) {
    let w = window;
    let {hash} = w.location;
 
    if (!hash || hash === "#/" ){
      $root.innerHTML="";
      $root.append(Welcome())
    } else if (hash.includes("#register")){
        $root.innerHTML="";
        $root.append(Registro())
    }
}

export function Router (){ 

    const d = document
    const $root = d.getElementById("root");
  
   checkRoutes($root)
   window.addEventListener("hashchange", () => checkRoutes($root));
     
}



/* export const routes = {
    '/' : Welcome,
    '/register' : Registro
  } */

const PATHS ={
login: Welcome,
register: Registro
}
// dashboard :{
//     path:'#/dashboard',
//     template:Dashboard
// }
