import { Welcome } from "./Welcome.js";
import { Registro } from "./Register.js";

export function Router (){
    
    const d = document,
   
  $root = d.getElementById("root");
//   w = window;
    let {hash} = location;
    if(!hash || hash === "#/" ){
        console.log("hola")
        $root.appendChild(Welcome());
    }else if (hash.icludes("#/register")){
        console.log("registro")
        $root.innerHTML='<h2>holaa</h2>';
    }
}

// const PATHS ={
// login:{
//     path:'/',
//     template:Welcome
// },
// register:{
//     path:'/register',
//     template:Registro
// },
// dashboard :{
//     path:'/dashboard',
//     template:Dashboard
// }
// }