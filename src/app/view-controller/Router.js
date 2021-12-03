import { components } from "../view-controller/index.js";

export const Router = (route) => {
  console.log("entró a función router");
  
  const $root = document.getElementById("root");
  $root.textContent = "";

  switch (route) {
    case "#/": {
      return $root.appendChild(components.login());
    }
    case "#/register":{
      return $root.appendChild(components.registro())
    }
    case "#/timeline": {
      return $root.appendChild(components.timeline());
    }
    default:
      return ($root.innerHTML = "Estamos en el timeline");
      break;
  }

  //   console.log(route);
};
