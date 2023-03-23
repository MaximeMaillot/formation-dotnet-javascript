import { appendChildToElement } from "../functions.js"

let container = document.querySelector(".container");

let maxTable = 10;
let maxMultiply = 10;


appendChildToElement(container, "h2", { text: "<b>Les tables de multiplication de 1 à 10</b>" })
let divRow;

for (let i = 0; i < maxTable; i++) {
  if (i % 5 == 0) {
    divRow = appendChildToElement(container, "div", { className: ["row"] })
  }
  let divCol = appendChildToElement(divRow, "div", { className: ["col", "card"], text: `<b>Table de ${i + 1}:</b>` })
  let liste = appendChildToElement(divCol, "ul")
  for (let j = 0; j < maxMultiply; j++) {
    appendChildToElement(liste, "li", { text: `${i + 1} x ${j + 1} = <b>${(i + 1) * (j + 1)}</b>` })
  }
}