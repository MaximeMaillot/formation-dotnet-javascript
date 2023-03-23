import { appendChildToElement, removeAllChild } from "../functions.js";

let container = document.querySelector(".container");
let formGroup = appendChildToElement(container, "div", { className: ["w-100", "p-3", "card", "mb-2"] })
let result = appendChildToElement(container, "div", { className: ["w-100", "p-3", "card"] })

appendChildToElement(formGroup, "h2", { text: `Calcul du montant des intérêts` })
let divInput = appendChildToElement(formGroup, "div", { className: ["row", "align-items-center"] })
let capitalInput = appendChildToElement(divInput, "input", { className: ["col", "p-1"], placeholder: "capital", type: "number", name: "capital" })
let tauxInput = appendChildToElement(divInput, "input", { className: ["col", "p-1"], placeholder: "taux", type: "number", name: "taux" })
let anneeInput = appendChildToElement(divInput, "input", { className: ["col", "p-1"], placeholder: "année", type: "number", name: "annee" })
let divButton = appendChildToElement(formGroup, "div", { className: ["row"] })
appendChildToElement(divButton, "button", { text: "Calculer", className: ["btn", "btn-success", "col"], "type": "button", eventHandler: { event: "onclick", fn: () => { submitData(result, parseInt(capitalInput.value), parseInt(tauxInput.value), parseInt(anneeInput.value)) } } })

/**
 * 
 * @param {Element} result 
 * @param {number} capital 
 * @param {number} taux 
 * @param {number} annee 
 */
function submitData(result, capital, taux, annee) {
  removeAllChild(result)
  appendChildToElement(result, "div", { text: `Avec un capital initial de <b>${capital}€</b>, placé à <b>${taux}%</b> pendant </b>${annee} année(s)</b>` })
  let liste = appendChildToElement(result, "ul")
  let interet = Math.round(calculateInterest(capital, taux, annee))
  appendChildToElement(liste, "li", { text: `Le montant total des intérêts s'élèvera à <b>${interet}€</b>` })
  appendChildToElement(liste, "li", { text: `Le capital final à l'issue sera de <b>${capital + interet}€</b>` })
}

/**
 * 
 * @param {number} capital 
 * @param {number} taux 
 * @param {number} duree 
 * @returns 
 */
function calculateInterest(capital, taux, duree) {
  return (capital * Math.pow(1 + (taux / 100), duree)) - capital
}