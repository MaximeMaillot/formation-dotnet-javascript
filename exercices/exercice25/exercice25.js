import { appendChildToElement } from "../functions.js"

let container = document.querySelector(".container");

let nbr = parseInt(prompt("Entrez un nombre entier"))

appendChildToElement(container, "h2", { text: `Liste d'entiers chaînés` })
appendChildToElement(container, "hr")
appendChildToElement(container, "div", { text: `Vous avez saisi le nombre ${nbr}` })
appendChildToElement(container, "div", { text: `Voici la liste d'entiers chaînés dont la seomme est égale à ${nbr}` })
let liste = appendChildToElement(container, "ul")
for (let i = 1; i < Math.round(nbr / 2); i++) {
  let sum = 0;
  let affichage = ""
  for (let j = i; j < Math.round(nbr / 2) + 1; j++) {
    affichage += `${j}+`
    sum += j
    if (sum == nbr) {
      appendChildToElement(liste, "li", { text: `${nbr} = ${affichage.slice(0, -1)}` })
    } else if (sum > nbr) {
      break;
    }
  }
}