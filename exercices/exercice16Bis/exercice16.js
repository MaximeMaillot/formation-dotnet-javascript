import { appendChildToElement, removeAllChild } from "../functions.js"

let container = document.querySelector(".container");

let formGroup = appendChildToElement(container, "div", { className: ["w-100", "p-3", "card", "mb-2"] })
let result = appendChildToElement(container, "div", { className: ["w-100", "p-3", "card"] })

appendChildToElement(formGroup, "h2", { text: `Calcul du montant des intérêts` })
let divInput = appendChildToElement(formGroup, "div", { className: ["row", "align-items-center"] })
let salaireInput = appendChildToElement(divInput, "input", { className: ["col", "p-1"], placeholder: "Salaire", type: "number", name: "salaire" })
let ageInput = appendChildToElement(divInput, "input", { className: ["col", "p-1"], placeholder: "Age", type: "number", name: "age" })
let ancienneteInput = appendChildToElement(divInput, "input", { className: ["col", "p-1"], placeholder: "Ancienneté", type: "number", name: "anciennete" })
let divButton = appendChildToElement(formGroup, "div", { className: ["row"] })
appendChildToElement(divButton, "button", { text: "Calculer", className: ["btn", "btn-success", "col"], "type": "button", eventHandler: { event: "onclick", fn: () => { submitData(result, parseInt(salaireInput.value), parseInt(ageInput.value), parseInt(ancienneteInput.value)) } } })

function submitData(result, salaire, age, anciennete) {
  removeAllChild(result)
  appendChildToElement(result, "p",
    {
      text: `Le montant de l'indemnité pour un salaire de<br> <b>${salaire}€</b><br>pour un salarié de <br><b>${age}ans</b><br> avec une ancienneté de<br><b>${anciennete} années</b><br> s'élève à <br><b>${calculIndemnite(salaire, age, anciennete)}€</b>`,
      className: ["text-center"]
    })
}

function calculIndemnite(salaire, age, anciennete) {
  let indemnite = 0

  if (age >= 46 && age <= 49) {
    indemnite += salaire * 2
  } else if (age > 50) {
    indemnite += salaire * 5
  }


  if (anciennete >= 1 && anciennete <= 10) {
    indemnite += 0.5 * anciennete * salaire
  } else if (anciennete > 10) {
    indemnite += anciennete * salaire
  } else {
    indemnite = 0
  }
  return indemnite
}