import { appendChildToElement } from "../functions.js"

let container = document.querySelector(".container");

let nbr = parseInt(prompt("Entrez un nombre entier"))

appendChildToElement(container, "h2", { text: `Liste d'entiers chaînés` })
appendChildToElement(container, "hr")
appendChildToElement(container, "div", { text: `Vous avez saisi le nombre ${nbr}` })
appendChildToElement(container, "div", { text: `Voici la liste d'entiers chaînés dont la somme est égale à ${nbr}` })


function findIntegerChain() {
  let liste = appendChildToElement(container, "ul")
  let i = 1
  let middle = Math.round(nbr / 2)
  while (i < middle) {
    let sum = 0;
    let affichage = ""
    let j = i
    while (j < middle + 1) {
      affichage += `${j}+`
      sum += j
      if (sum == nbr) {
        appendChildToElement(liste, "li", { text: `${nbr} = ${affichage.slice(0, -1)}` })
      } else if (sum > nbr) {
        break;
      }
      j++
    }
    i++
  }
  appendChildToElement(container, "hr")
}

let startTime = performance.now()
findIntegerChain()
let endTime = performance.now()
console.log(`Call to findIntegerChain took ${endTime - startTime} milliseconds`)

/**
 * 
 */
function findIntegerChainHomeMade() {
  appendChildToElement(container, "div", { text: `Voici la liste d'entiers chaînés dont la somme est égale à ${nbr} avec la méthode fait maison` })
  let liste2 = appendChildToElement(container, "ul")
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
        console.log(middle, divisible)
        for (let i = 0; i < divisible; i++) {
          affichage += `${Math.floor(middle) - (divisible / 2 - 1) + i}+`
        }
        // On retire le + en trop dans l'affichage
        affichages.push(`${nbr} = ${affichage.slice(0, -1)}`)
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
        affichages.push(`${nbr} = ${affichage.slice(0, -1)}`)
      }
    }
    // On incrémente notre diviseur
    divisible++
  }

  affichages.reverse().forEach(affichage => {
    appendChildToElement(liste2, "li", { text: affichage })
  })
}


let startTime2 = performance.now()
findIntegerChainHomeMade()   // <---- measured code goes between startTime and endTime
let endTime2 = performance.now()
console.log(`Call to findIntegerChainHomeMade took ${endTime2 - startTime2} milliseconds`)

