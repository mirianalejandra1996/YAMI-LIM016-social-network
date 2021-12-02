// Este es el punto de entrada de tu aplicacion

import { App, ChangeWindow } from "./App.js";

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", App);
