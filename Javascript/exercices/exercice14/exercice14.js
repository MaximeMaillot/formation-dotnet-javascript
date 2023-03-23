import { appendChildToElement } from "../functions.js"

let container = document.querySelector(".container");

let letter = ["A", "B", "C"]

let longueur = []
for (let i = 0; i < letter.length; i++) {
  longueur.push(parseInt(prompt(`Entrez la longueur ${letter[i]}${letter[(i + 1) % letter.length]}`)))
}
let text = "Le triangle "
if (longueur[0] == longueur[1] && longueur[0] == longueur[2]) {
  text += "est équilatéral."
} else if (longueur[0] == longueur[1]) {
  text += "est isocèle en B mais n'est pas équilatéral."
} else if (longueur[0] == longueur[2]) {
  text += "est isocèle en A mais n'est pas équilatéral."
} else if (longueur[1] == longueur[2]) {
  text += "est isocèle en C mais n'est pas équilatéral."
} else {
  text += "n'est isocèle ni en A, ni en B, ni en C"
}

appendChildToElement(container, "div", {text: text})