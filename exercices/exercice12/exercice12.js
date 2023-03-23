import { appendChildToElement } from "../functions.js"

let container = document.querySelector(".container");

let nb1 = prompt("Saisissez un premier chiffre")
nb1 = parseInt(nb1)
let nb2 = prompt("Saisissez un second chiffre")
nb2 = parseInt(nb2)

if ((nb1 % nb2) == 0) {
  appendChildToElement(container, "div", {text:`Le nombre ${nb1} est divisible par ${nb2}`})
} else {
  appendChildToElement(container, "div", {text:`Le nombre ${nb1} n'est pas divisible par ${nb2}`})
}