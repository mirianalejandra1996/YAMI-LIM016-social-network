import { auth } from "../firebase/firebase-auth.js";
import { components } from "../view-controller/index.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
import { Loader } from "../view-controller/Loader.js"

//se ejecuta una sola vez
export const Router = () => {
  // console.log("entró a función router");

  const $root = document.getElementById("root");
  $root.textContent = "";

  const loader = Loader()
  $root.appendChild(loader);

  function render() {
    const route = window.location.hash;
    $root.textContent = "";

    switch (route) {
      case "#": {
        if (auth.currentUser) {
          return (window.location.hash = "#/timeline");
        }
        return $root.appendChild(components.login());
      }
      case "#/": {
        if (auth.currentUser) {
          return (window.location.hash = "#/timeline");
        }
        return $root.appendChild(components.login());
      }
      case "#/register": {
        if (auth.currentUser) return (window.location.hash = "#/timeline");
        else {
          return $root.appendChild(components.registro());
        }
      }
      case "#/perfil": {
        if (auth.currentUser) {
          $root.classList.remove("main-container");
          return $root.appendChild(components.perfil());
        } else {
          return (window.location.hash = "#/");
        }
      }
      case "#/timeline": {
        if (auth.currentUser) {
          $root.classList.remove("main-container");
          return $root.appendChild(components.timeline());
        } else {
          return (window.location.hash = "#/");
        }
      }
      case "#/editPost": {
        if (auth.currentUser) {
          $root.classList.remove("main-container");
          return $root.appendChild(components.editPost());
        } else {
          return (window.location.hash = "#/");
        }
      }
      case "#/muro": {
        if (auth.currentUser) {
          $root.classList.remove("main-container");
          return $root.appendChild(components.muro());
        } else {
          return (window.location.hash = "#/");
        }
      }
      case "#/profile": {
        if (auth.currentUser) {
          $root.classList.remove("main-container");
          return $root.appendChild(components.profile());
        } else {
          return (window.location.hash = "#/");
        }
      }
      case "#/passwordChange": {
        if (auth.currentUser.providerData[0].providerId === "google.com") {
          console.log(
            "AQUÍ HAREMOS APPEND DE UN COMPONENTE DE 404 NOT FOUND O ALGO"
          );
        }
        if (auth.currentUser) {
          $root.classList.remove("main-container");
          return $root.appendChild(components.changePassword());
        } else {
          return (window.location.hash = "#/");
        }
      }
      default:
        // todo: Deberíamos crear una vista en caso que el usuario coloque una url no existente
        if (auth.currentUser) {
          // return $root.appendChild(components.login());
          return $root.appendChild(components.timeline());
        } else {
          return $root.appendChild(components.login());
          // return (window.location.hash = "#/");
        }
      // break;
    }
  }

  // para asegurar que se ejecute una sola vez
  let hasRouterStarted = false;

  // se ejecuta una sola vez
  function start() {
    render();
    window.addEventListener("hashchange", () => {
      render();
    });
    // ya me ejecute
    hasRouterStarted = true;
  }

  // console.log({ auth });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // window.location.hash = "#/timeline";
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
    if (!hasRouterStarted) start();
  });

  //   console.log(route);
};
