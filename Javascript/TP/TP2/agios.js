/*
Mission développeur 3 : agios
Écrivez un algorithme qui calcule les agios avec un taux de 10% pour un découvert utilisé durant X jours.

Par exemple, j'ai utilisé 500 euros de mon découvert autorisé durant 15 jours, j'aurai une pénalité à payer à la banque de 2.05 € qui correspond à l'opération suivante : (500 * 15 *(10/100)) / 365 <=> 500 * 15 * 0.1 / 365.

En entrée, votre algorithme prend :

Le montant du découvert ;
Durée d'utilisation du découvert (en jour).
En sortie, votre algorithme affiche la somme que le client devra payer à la banque arrondie à 2 chiffres après la virgule.

Votre algorithme s'arrête immédiatement lorsque le client n'a pas droit au découvert (montant du découvert égale à zéro), affichez le message "Découvert non autorisé => pas d'agios". Forcez le client à saisir les bonnes valeurs :

Montant du découvert compris entre 100 € et 2000 € ou égale à zéro lorsqu'il n'a pas droit au découvert ;
Le nombre de jours compris entre 1 et 365.
*/

// Agios = (montant utilisé du découvert * nombre de jours d'utilisation * taux de la banque) / 365 Le taux de banque = 10 / 100 = 0.1

import {
  MIN_OVERDRAFT as minOverdraft,
  MAX_OVERDRAFT as maxOverdraft,
  RATE as rate,
} from "./constant.js";

/**
 * Return the agios tax
 * @param {Number} overdraft
 * @param {Number} day
 * @returns {Number}
 */
function calculateAgios(overdraft, day) {
  let agios = Math.round(((overdraft * day * rate) / 365) * 100) / 100;
  return agios;
}

/**
 * ask user via prompt for their overdraft amount
 * the minimum and maximum overdraft is defined in constant.js
 * return 0 if their input is incorrect
 * @returns {Number}
 */
function askOverdraft() {
  let overdraft = prompt("Montant du découvert :");
  overdraft = parseInt(overdraft);

  while (overdraft < minOverdraft || overdraft > maxOverdraft) {
    if (overdraft == 0) {
      console.log("Découvert non autorisé => pas d'agios");
      return 0;
    }
    overdraft = prompt("Montant du découvert :");
    overdraft = parseInt(overdraft);
  }
  if (overdraft == "NaN") {
    return 0;
  }
  return overdraft;
}

/**
 * ask user via prompt for a timelength in days of their overdraft
 * return 0 if their input is incorrect
 * @returns {Number}
 */
function askDay() {
  let day = prompt("Durée du découvert : ");
  day = parseInt(day);
  while (day < 1 || day > 365) {
    day = prompt("Durée du découvert : ");
    day = parseInt(day);
  }
  if (day == "NaN") {
    return 0;
  } else {
    return day;
  }
}

// EXECUTION

function main() {
  let overdraft = askOverdraft();

  if (overdraft != 0) {
    let day = askDay();
    let agios = calculateAgios(overdraft, day);

    console.log("Agios (€) : " + agios);
  }
}

//main();

export { calculateAgios, askOverdraft, askDay, main };
