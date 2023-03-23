import { appendChildToElement, removeAllChild } from "../functions.js"

let container = document.querySelector(".container");

let formGroup = appendChildToElement(container, "div", { className: ["w-100", "p-3", "card", "mb-2"] })
let result = appendChildToElement(container, "div", { className: ["w-100", "p-3", "card"] })

appendChildToElement(formGroup, "h2", { text: `Calcul du montant des intérêts` })
let divInput = appendChildToElement(formGroup, "div", { className: ["row", "align-items-center"] })
let amountInput = appendChildToElement(divInput, "input", { className: ["col", "p-1"], placeholder: "Amount Net", type: "number", name: "amount" })
let nbAdultInput = appendChildToElement(divInput, "input", { className: ["col", "p-1"], placeholder: "Nombre d'adultes", type: "number", name: "adultes" })
let nbChildrenInput = appendChildToElement(divInput, "input", { className: ["col", "p-1"], placeholder: "Nombre d'enfants", type: "number", name: "enfants" })
let divButton = appendChildToElement(formGroup, "div", { className: ["row"] })
appendChildToElement(divButton, "button", { text: "Calculer", className: ["btn", "btn-success", "col"], "type": "button", eventHandler: { event: "onclick", fn: () => { submitData(result, parseInt(amountInput.value), parseInt(nbAdultInput.value), parseInt(nbChildrenInput.value)) } } })

function submitData(result, amount, nbAdult, nbChildren) {
  removeAllChild(result)
  appendChildToElement(result, "p",
    {
      text: `Le montant de l'impôt sur le revenu pour un foyer composé de <b>${nbAdult} adulte(s)</b> et de <b>${nbChildren} enfant(s)</b>, avec un revenu fiscal de <b>${amount}€</b> s'élève à ${Math.round(getToPay(amount, getNbPart(nbAdult, nbChildren)))}€`,
      className: ["text-justify"]
    })
}

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

function getToPay(amountNet, part) {
  let toPay = 0;
  let imposable = amountNet / part
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

  for (let i = 1; i < imposition.length; i++) {
    if (imposable > imposition[i].maxAmount) {
      toPay += ((imposition[i].maxAmount) - imposition[i - 1].maxAmount) * (imposition[i].taux / 100)
    } else {
      toPay += (imposable - imposition[i - 1].maxAmount) * (imposition[i].taux / 100)
      return toPay * part
    }
  }
}


