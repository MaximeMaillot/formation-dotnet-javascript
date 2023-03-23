import { appendChildToElement } from "../functions.js"

const email = "contact@teamjs.fr"
const mdp = "leLundiAuSoleil"

let container = document.querySelector(".container");

let userInputEmail = prompt("Donnez votre email")
let userInputMdp = prompt("Donnez votre mot de passe")

appendChildToElement(container, "h2", {text:"Test de connection"})

if (userInputEmail == email && userInputMdp == mdp) {
  appendChildToElement(container, "div", {text:"Bienvenue sur votre espace sécurisé"})
} else {
  appendChildToElement(container, "div", {text: "Erreur au niveau de l'email ou du mdp", alert:"danger"})
}

