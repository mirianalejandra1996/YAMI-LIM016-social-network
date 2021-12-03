// aqui exportaras las funciones que necesites
import { Welcome } from "./components/Welcome.js";
import {Router} from "./components/Router.js";

export const App = () => {
   const d = document,
   $root = d.getElementById("root");
   $root.innerHTML=null;
  // console.log("yes");
  // $root.appendChild(Welcome());
  // $root.appendChild(Registro());const
  $root.appendChild(Welcome());
  //Router();

};

// export const onNavigate = (pathname) => {
//   const d = document,
//   $root = d.getElementById("root");
//   window.history.pushState(
//     {},
//     pathname,
//     window.location.origin + pathname
//   )
//   $root.innerHtml= routes[window.location.pathname]
// }


