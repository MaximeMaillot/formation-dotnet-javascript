import { appendChildToElement } from "../functions.js"

let container = document.querySelector(".container");

let nbChapter = 3;
let nbPart = 3;

appendChildToElement(container, "h2", { text: `Menu et sous menu` })

for (let i = 0; i < nbChapter; i++) {
  appendChildToElement(container, "div", { text: `Chapitre ${i + 1}` })
  for (let j = 0; j < nbPart; j++) {
    appendChildToElement(container, "div", { text: `-Partie ${i + 1} . ${j + 1}`, style: "margin-left: 2vw" })
  }
  appendChildToElement(container, "br")
}