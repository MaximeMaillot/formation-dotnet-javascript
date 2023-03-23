import { appendChildToElement } from "../functions.js"

let container = document.querySelector(".container");

let notes = []

for (let i=0; i < 5; i++) {
  notes.push(parseInt(prompt(`Entrez la note ${i+1}`)))
}

appendChildToElement(container, "h2", {text:`Meilleur note, moins bonne note, moyenne des notes`})
appendChildToElement(container, "hr")
appendChildToElement(container, "div", {text: `La série contient ${notes.length} notes :`})
let liste = appendChildToElement(container, "ul")

let max = 0;
let min = 21;
let sum = 0;
for (let i=0; i < notes.length; i++) {
  if (max < notes[i]) {
    max = notes[i]
  }
  if (min > notes[i]) {
    min = notes[i]
  }
  sum += notes[i]
  appendChildToElement(liste, "li", {text: `En note ${i+1}, vous avez saisi ${notes[i]}/20.`})  
}
sum /= notes.length;

appendChildToElement(container, "hr")
appendChildToElement(container, "div", {text: `Sur l'ensemble des ${notes.length} notes :`})
let liste2 = appendChildToElement(container, "ul")
appendChildToElement(liste2, "li", {text: `La meilleur note est de ${max}/20`, style:`color: green`})
appendChildToElement(liste2, "li", {text: `La moins bonne note est de ${min}/20`, style:`color: red`})
appendChildToElement(liste2, "li", {text: `La moyenne des note est de ${Math.round(sum*10)/10}/20`, style:`color: grey`})