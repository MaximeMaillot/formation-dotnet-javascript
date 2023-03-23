import { appendChildToElement } from "../functions.js"

function calculateInterest(capital, taux, duree) {
  return (capital * Math.pow(1 + (taux / 100), duree)) - capital
}

let capital = prompt("Donnez votre capital")
capital = parseFloat(capital)
let taux = prompt("Donnez le taux d'intérêt")
taux = parseFloat(taux)
let duree = prompt("Donnez la durée")
duree = parseInt(duree)

let interest = Math.round(calculateInterest(capital, taux, duree))

let container = document.querySelector(".container");

appendChildToElement(container, "div", {text:`Avec un capital initial de <b>${capital}€</b>, placé à <b>${taux}%</b> pendant </b>${duree} année(s)</b>`})
let list = appendChildToElement(container, "ul")
appendChildToElement(list, "li", {text:`Le montant total des intérêts s'élèvera à <b>${interest}€</b>`})
appendChildToElement(list, "li", {text:`Le capital final à l'issue sera de <b>${capital + interest}€</b>`})
