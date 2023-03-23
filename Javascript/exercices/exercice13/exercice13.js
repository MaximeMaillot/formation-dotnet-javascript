import { appendChildToElement } from "../functions.js"

let container = document.querySelector(".container");

let age = prompt("Saisissez l'âge de votre enfant")
age = parseInt(age)

let categories = [
  { name: "Baby", min: 3, max: 6, },
  { name: "Poussin", min: 7, max: 8 },
  { name: "Pupille", min: 9, max: 10 },
  { name: "Minime", min: 11, max: 12 },
  { name: "Cadet", min: 13, max: 18 }
]
let isCategorized = false;

categories.forEach(categorie => {
  if (age >= categorie.min && age <= categorie.max) {
    isCategorized = true
    appendChildToElement(container, "div", {text:`Votre enfant est un ${categorie.name}`})
  }
})
if (!isCategorized) {
  if (age >= 0 && age < categories[0].min) {
    appendChildToElement(container, "div", {text:"Votre enfant est trop jeune pour pratiquer"})
  } else if (age > categories[categories.length - 1].max) {
    appendChildToElement(container, "div", {text:"Votre enfant est un adulte"})
  } else {
    appendChildToElement(container, "div", {text:"Votre enfant est un alien"})
  }
}