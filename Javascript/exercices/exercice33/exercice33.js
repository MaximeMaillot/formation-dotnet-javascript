import { appendChildToElement } from "../functions.js"

/**
 * ask the user to enter the notes
 * @param {Array} notes 
 * @param {Element} result 
 * @param {Element} liste 
 */
function saisirNote(notes, result, liste) {
  let note = 0;
  let cpt = notes.length + 1;
  let errorMsg = ""
  do {
    note = parseInt(prompt(`${errorMsg ? errorMsg + "\n" : ""}Rentrez une note (777 pour s'arrêter))`))
    errorMsg = ""
    if (isNaN(note)) {
      errorMsg = "Vous n'avez pas rentré un nombre"
    } else if (note < 0 || note > 20) {
      errorMsg = "Le nombre doit être compris entre 0 et 20"
    } else if (note != 777) {
      notes.push(note)
      appendChildToElement(liste, "li", { text: `En Note ${cpt++}, vous avez saisi ${note}/20` })
    } else {
      errorMsg = "Saisie non supporté"
    }
  } while (note != 777)
  result.innerHTML = ""
}

/**
 * get the best note in notes
 * @param {Array} notes 
 * @param {Element} result 
 */
function getBestNote(notes, result) {
  let max = notes[0]
  for (let i = 1; i < notes.length; i++) {
    if (notes[i] > max) {
      max = notes[i]
    }
  }
  result.innerHTML = `La meilleur note est de ${max}/20`
  result.style.color = "green"
}

/**
 * get the worst note in notes
 * @param {Array} notes 
 * @param {Element} result 
 */
function getWorstNote(notes, result) {

  let min = notes[0]
  for (let i = 1; i < notes.length; i++) {
    if (notes[i] < min) {
      min = notes[i]
    }
  }
  result.innerHTML = `La moins bonne note est ${min}/20`
  result.style.color = "red"
}

/**
 * get the moyenne of the notes
 * @param {Array} notes 
 * @param {Element} result 
 */
function getMoy(notes, result) {
  let sum = 0;
  for (let i = 0; i < notes.length; i++) {
    sum += notes[i]
  }
  result.innerHTML = `La moyenne est de ${Math.round((sum / notes.length) * 10) / 10}/20`
  result.style.color = "grey"
}

/**
 * Remove all child of the list
 * @param {Array} notes 
 * @param {Element} result 
 * @param {Element} liste 
 */
function removeAllListChild(notes, result, liste) {
  while (liste.lastElementChild) {
    liste.removeChild(liste.lastElementChild);
  }
  result.innerHTML = ""
  notes.length = 0
}

/**
 * Handle the action of every button in the divButton
 * @param {string} action 
 */
const handleButtonClick = function (action) {
  if (action == "saisie") {
    saisirNote(notes, result, liste)
  } else if (notes.length > 0) {
    switch (action) {
      case "max":
        getBestNote(notes, result)
        break;
      case "min":
        getWorstNote(notes, result)
        break;
      case "moy":
        getMoy(notes, result)
        break;
      case "clear":
        removeAllListChild(notes, result, liste)
        break;
      default:
        break;
    }
  } else {
    result.color = "black"
    result.innerHTML = "Pas de notes entrés par l'utilisateur"
  }
}

let notes = []
let container = document.querySelector(".container");

appendChildToElement(container, "h2", { text: `Gestion des notes avec menu` })
let divButton = appendChildToElement(container, "div")
appendChildToElement(container, "h2", { text: `Notes déjà saisies` })
let liste = appendChildToElement(container, "ul")
let result = appendChildToElement(container, "div")

appendChildToElement(divButton, "button", {
  className: ["btn", "btn-primary"],
  text: `Saisir les notes`,
  eventHandler: { fn: () => { handleButtonClick("saisie") }, event: "onclick" }
})
appendChildToElement(divButton, "button", {
  className: ["btn", "btn-success"],
  text: `Voir la meilleur note`,
  eventHandler: { fn: () => { handleButtonClick("max") }, event: "onclick" }
})
appendChildToElement(divButton, "button", {
  className: ["btn", "btn-danger"],
  text: `Voir la moins bonne notes`,
  eventHandler: { fn: () => { handleButtonClick("min") }, event: "onclick" }
})
appendChildToElement(divButton, "button", {
  className: ["btn", "btn-secondary"],
  text: `Voir la moyenne des notes`,
  eventHandler: { fn: () => { handleButtonClick("moy") }, event: "onclick" }
})
appendChildToElement(divButton, "button", {
  className: ["btn", "btn-info"],
  text: `Clear`,
  eventHandler: { fn: () => { handleButtonClick("clear") }, event: "onclick" }
})