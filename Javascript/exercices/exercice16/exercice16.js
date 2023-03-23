import { appendChildToElement } from "../functions.js"

let container = document.querySelector(".container");

let age = parseInt(prompt("Entrez votre age"))
let anciennete = parseInt(prompt("Entrez votre ancienneté"))
let dernierSalaire = parseInt(prompt("Entrez votre dernier salaire"))

let indemnite = 0

if (age >= 46 && age <= 49) {
  indemnite += dernierSalaire * 2
} else if (age > 50) {
  indemnite += dernierSalaire * 5
}


if (anciennete >= 1 && anciennete <= 10) {
  indemnite += 0.5 * anciennete * dernierSalaire
} else if (anciennete > 10) {
  indemnite += anciennete * dernierSalaire
} else {
  indemnite = 0
}

appendChildToElement(container, "div", {text:`Le montant de l'indemnité pour un salarié de ${age}ans et avec ${anciennete} années d'ancienneté s'élève à ${indemnite}€`})