import { appendChildToElement } from "../functions.js"

let container = document.querySelector(".container");

// Déclaration variables
let tranche1 = 10778,
  tranche2 = 27479,
  tranche3 = 78571,
  tranche4 = 168995,
  revenus = 0,
  nbAdulte = 0,
  nbEnfants = 0,
  nbParts = 0,
  revenuImposable = 0,
  montantImpot = 0;

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('#result');

// Récupération et stockage des saisie utilisateur
revenus = Number(prompt("Veuillez saisir le montant total des revenus du foyer :"));
nbAdulte = Number(prompt("Veuillez saisir le nombre d'alulte(s) :"));
nbEnfants = Number(prompt("Veuillez saisir le nombre d'enfant(s):"));


switch (true) {
  case (nbEnfants <= 2):
    nbParts = nbAdulte + nbEnfants * 0.5;
    break;
  default:
    nbParts = nbAdulte + nbEnfants - 1;
    break;
}

// Sugar Syntaxe (ternaire) pour le Calcul du nombre de parts
//nbParts = nbEnfants <= 2 ? nbAdulte + nbEnfants * 0.5 : nbAdulte + nbEnfants - 1;

// Calcul du revenu imposable
revenuImposable = revenus / nbParts;
//console.log(revenuImposable);

switch (true) {
  case (revenuImposable >= tranche1 && revenuImposable < tranche2):
    montantImpot = (revenuImposable - (tranche1 - 1)) * 0.11;
    break;
  case (revenuImposable >= tranche2 && revenuImposable < tranche3):
    montantImpot = (revenuImposable - (tranche2 - 1)) * 0.3 + ((tranche2 - 1) - tranche1) * 0.11;
    break;
  case (revenuImposable >= tranche3 && revenuImposable < tranche4):
    montantImpot = (revenuImposable - (tranche3 - 1)) * 0.41 + ((tranche3 - 1) - tranche2) * 0.3 + ((tranche2 - 1) - tranche1) * 0.11;
    break;
  default:
    montantImpot = (revenuImposable - (tranche4 - 1)) * 0.45 + ((tranche4 - 1) - tranche3) * 0.41 + ((tranche3 - 1) - tranche2) * 0.3 + ((tranche2 - 1) - tranche1) * 0.11;
    break;
}
// Calcul du montant réel de l'impôt
montantImpot *= nbParts;


appendChildToElement(container, "div", {text:`Le montant de l'impôt sur le revenu pour un foyer composé de <b>${nbAdulte} adulte(s)</b> et
de <b>${nbEnfants} enfant(s)</b>, avec un revenu fiscal de <b>${revenus}€</b> 
s'élève à <b>${Math.round(montantImpot)}€</b>`})