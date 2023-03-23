import { appendChildToElement } from "../functions.js"

let container = document.querySelector(".container");

const max = 10
appendChildToElement(container, "h2", {text:`Compter jusqu'à ${max}.`})
let liste = appendChildToElement(container, "ul")

for (let i = 0; i < max; i++) {
  appendChildToElement(liste, "li", {text:i + 1})
}

appendChildToElement(container, "div", {text:`Super, je sais compter jusqu'à ${max}!`})