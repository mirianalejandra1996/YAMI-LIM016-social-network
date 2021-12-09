import { auth } from "../firebase/firebase-auth.js";
import { components } from "../view-controller/index.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";


//se ejecuta una sola vez
export const Router = () => {
  console.log("entró a función router");

  const $root = document.getElementById("root");
  $root.textContent = "";

  const loader = document.createElement('div')
  loader.classList.add('spinnerContainer')
  const loaderSpinner = document.createElement('img')
  loaderSpinner.classList.add('spinner')
  loaderSpinner.src = '../src/app/assets/Spinner.svg'
  loader.append(loaderSpinner)
  $root.appendChild(loader)


  function render() {
    const route = window.location.hash;
    $root.textContent = "";
    
    switch (route) {
      case "#/": {
          return $root.appendChild(components.login());
      }
      case "#/register":{
          return $root.appendChild(components.registro());
      }
      case "#/perfil":{
        if(auth.currentUser) {
          return $root.appendChild(components.perfil());
        } else {
          return window.location.hash = "#/"
        }
      }
      case "#/timeline": {
        if(auth.currentUser) {
          return $root.appendChild(components.timeline());
        } else {
          return window.location.hash = "#/"
        }
      }
      case "#/formPost": {
        if(auth.currentUser) {
          return $root.appendChild(components.formPost());
        } else{
          return window.location.hash = "#/"
        }
      }
      default:
        return $root.appendChild(components.login());
        break;
    }
  }

  // para asegurar que se ejecute una sola vez
  let hasRouterStarted = false

  // se ejecuta una sola vez
  function start() {
    render()
    window.addEventListener("hashchange", () => {
  
    render()
  });
  // ya me ejecute
  hasRouterStarted = true
  }


  console.log({auth})

  onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.hash = "#/timeline";
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
  
      console.log("el usuario ya está logueado!");
      // ...
    } else {
      // User is signed out
      // ...
      window.location.hash = "#/";
      console.log("el usuario ya está sign out!");
    }

    //ya se ejecuto el router?
    if(!hasRouterStarted) start()
  });
  

  //   console.log(route);
};
