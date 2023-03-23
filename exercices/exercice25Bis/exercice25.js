import { appendChildToElement, removeAllChild } from "../functions.js"

let container = document.querySelector(".container");

let jumbotron = appendChildToElement(container, "div", { className: ["jumbotron", "card"] })
appendChildToElement(jumbotron, "h2", { text: `Les suites d'entier chaînés`, className: ["text-center"] })
let formGroup = appendChildToElement(jumbotron, "div", { className: ["w-100", "p-3", "mb-2"] })
let divInput = appendChildToElement(formGroup, "div", { className: ["row", "align-items-center"] })
let nbrInput = appendChildToElement(divInput, "input", { className: ["col", "p-1"], placeholder: "Veuillez saisir un chiffre entier positif", type: "number", name: "nbr", eventHandler: { event: "keyup", fn: () => { submitData(jumbotron, parseInt(nbrInput.value)) } } })

function submitData(container, nbr) {
  let list = document.querySelector("#list")
  if (list) {
    removeAllChild(list)
  } else {
    appendChildToElement(container, "div", { text: `Vous avez saisi le nombre <b>${nbr}</b>` })
    appendChildToElement(container, "div", { text: `Voici la liste d'entiers chaînés dont la somme est égale à <b>${nbr}</b>:` })
    list = appendChildToElement(container, "ul", { id: "list" })
  }
  getIntegerChain(list, nbr)
}

function getIntegerChain(liste, nbr) {
  // On commence à diviser par 2 (TODO: cas de figure ou nombre < 2)
  let divisible = 2;
  // On initialise middle à divisible + 1 pour rentrer une fois dans la boucle while
  let middle = divisible + 1;
  let affichages = []
  while (middle > (divisible / 2)) {
    // middle est le nombre demandé par l'utilisateur diviser par notre diviseur qu'on incrémente
    middle = nbr / divisible
    // Si notre diviseur est pair
    if (divisible % 2 == 0) {
      // On vérifie si le chiffre après la virgule est égale à .5
      if (middle.toString().split(".")[1] == "5" && middle.toString().split(".")[2] == undefined) {
        let affichage = ""
        // On sait que notre middle est le chiffre au milieu de la chaîne d'entier
        // On sait qu'on a divisible nombre d'entier dans la chaîne
        // On fait en sorte de commencer au 1er chiffre, donc on commence à milieu - la moitié du divisible - 1 (car pair)
        for (let i = 0; i < divisible; i++) {
          affichage += `${Math.floor(middle) - (divisible / 2 - 1) + i}+`
        }
        // On retire le + en trop dans l'affichage
        affichages.push(`<b>${nbr}</b> = ${affichage.slice(0, -1)}`)
      }
    }
    //Si notre diviseur est impair
    else {
      // Si le resultat de notre division est un entier
      if (Number.isInteger(middle)) {
        let affichage = ""
        // On sait que notre middle est le chiffre au milieu de la chaîne d'entier et que notre nombre d'entier dans la chaîne est impair
        // On fait en sorte de commencer au 1er chiffre, donc on commence à milieu - la moitié du divisible
        for (let i = 0; i < divisible; i++) {
          affichage += `${middle - Math.floor(divisible / 2) + i}+`
        }
        // On retire le + en trop dans l'affichage
        affichages.push(`<b>${nbr}</b> = ${affichage.slice(0, -1)}`)
      }
    }
    // On incrémente notre diviseur
    divisible++
  }

  affichages.reverse().forEach(affichage => {
    appendChildToElement(liste, "li", { text: affichage, className: ["text-justify"] })
  })
}