import { appendChildToElement } from "../functions.js"

let container = document.querySelector(".container");

let amountNet = parseInt(prompt("Montant net imposable"))
let nbAdult = parseInt(prompt("Nombre d'adultes"))
let nbChildren = parseInt(prompt("Nombre d'enfants"))

function getNbPart(nbAdult, nbChildren) {
  let part = 0;
  part += nbAdult;
  if (nbChildren <= 2) {
    part += nbChildren * 0.5
  } else {
    part += 2 * 0.5
    part += (nbChildren - 2)
  }
  return part
}

let part = getNbPart(nbAdult, nbChildren)
let imposable = amountNet / part
console.log(amountNet, part, imposable)

let imposition = [
  {
    maxAmount: 10777,
    taux: 0
  },
  {
    maxAmount: 27478,
    taux: 11
  },
  {
    maxAmount: 78570,
    taux: 30
  },
  {
    maxAmount: 168994,
    taux: 41
  },
  {
    maxAmount: Number.MAX_VALUE,
    taux: 45
  },
]

let toPay = 0;

function getToPay() {
  for (let i = 1; i < imposition.length; i++) {
    if (imposable > imposition[i].maxAmount) {
      toPay += ((imposition[i].maxAmount) - imposition[i - 1].maxAmount) * (imposition[i].taux / 100)
    } else {
      toPay += (imposable - imposition[i - 1].maxAmount) * (imposition[i].taux / 100)
      return toPay * part
    }
  }
}

appendChildToElement(container, "div", {text:`Le montant de l'impôt sur le revenu pour un foyer composé de <b>${nbAdult} adulte(s)</b> et de <b>${nbChildren} enfant(s)</b>, avec un revenu fiscal de <b>${amountNet}</b> s'élève à ${Math.round(getToPay())}€`})



