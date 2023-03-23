import { appendChildToElement } from "../functions.js"

let container = document.querySelector(".container");

let lettre = prompt("Entrez votre lettre")

let voyelles = ["a", "e", "i", "o", "u", "y"];

let isVoyelle = false;

for (let i = 0; i < voyelles.length && !isVoyelle; i++) {
  if (voyelles[i] == lettre.toLowerCase()) {
    isVoyelle = true
    appendChildToElement(container, "div", {text: `La lettre ${lettre} est une voyelle`})
  }
}

if (!isVoyelle) {
  appendChildToElement(container, "div", {text:`La lettre ${lettre} est une consonne`})
}
