import { appendChildToElement } from "../functions.js"

let container = document.querySelector(".container");

let boissons = ["Eau", "Jus d'oranges", "Limonade", "Café", "Thé"]

let text = "**** DISTRIBUTEUR DE BOISSON ****\n"

boissons.forEach((boisson, index) => {
  text += `          ${index + 1}) ${boisson}\n`
})

text += ` \n          Faites votre choix : `

let choix = prompt(text)

let arrayText = text.split(`\n`)

console.table(arrayText)

for (let i = 0; i < arrayText.length; i++) {
  if (i == arrayText.length - 1) {
    appendChildToElement(container, "div", {text: (arrayText[i] + choix), style:"margin-top: 2vh;"})
  } else {
    appendChildToElement(container, "div", {text:arrayText[i]})
  }
}

appendChildToElement(container, "div", {text:`Votre <b>${boissons[parseInt(choix) - 1]}</b> est servie...`, style:"margin-top: 2vh;"})