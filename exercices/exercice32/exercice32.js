import { appendChildToElement } from "../functions.js"

let container = document.querySelector(".container");

function calculPerimetre(longueur, largeur) {
  return longueur * 2 + largeur * 2
}

let longueur = parseInt(prompt("Donnez la longueur du rectangle"))
let largeur = parseInt(prompt("Donnez la largeur du rectangle"))

appendChildToElement(container, "div", { text: `Le périmètre de votre quadrilatère est : ${calculPerimetre(longueur, largeur)}cm` })