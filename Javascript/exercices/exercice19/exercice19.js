import { appendChildToElement } from "../functions.js"

let container = document.querySelector(".container");

// Récupération et stockage des saisie utilisateur
var taille = Number(prompt("Veuillez saisir votre taille (en cm) :"));
var poids = Number(prompt("Veuillez saisir votre poids (en kg) :"));

let resultat = "";

let key = ""
switch (true) {
  case (taille >= 145 && taille < 172 && poids >= 43 && poids <= 47 ||
    taille >= 145 && taille < 169 && poids >= 48 && poids <= 53 ||
    taille >= 145 && taille < 166 && poids >= 54 && poids <= 59 ||
    taille >= 145 && taille < 163 && poids >= 60 && poids <= 65):
    resultat = "Prennez la taille 1.";
    break;
  case (taille >= 169 && taille < 183 && poids >= 48 && poids <= 53 ||
    taille >= 166 && taille < 178 && poids >= 54 && poids <= 59 ||
    taille >= 163 && taille < 175 && poids >= 60 && poids <= 65 ||
    taille >= 160 && taille < 172 && poids >= 66 && poids <= 71):
    resultat = "Prennez la taille 2.";
    break;
  case (taille >= 178 && taille <= 183 && poids >= 54 && poids <= 59 ||
    taille >= 175 && taille <= 183 && poids >= 60 && poids <= 65 ||
    taille >= 172 && taille <= 183 && poids >= 66 && poids <= 71 ||
    taille >= 163 && taille <= 183 && poids >= 72 && poids <= 77):
    resultat = "Prenez la taille3."
    break;
  default:
    resultat = "Aucune taille ne vous correspond."
    break;
}

appendChildToElement(container, "div", {text:resultat})