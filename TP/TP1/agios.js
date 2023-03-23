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

let rate = 0.1;
let minOverdraft = 100;
let maxOverdraft = 2000;
let isOverdraft = true;

let overdraft = prompt("Montant du découvert :");
overdraft = parseInt(overdraft);
while ((overdraft < minOverdraft || overdraft > maxOverdraft) && isOverdraft) {
  if (overdraft == 0) {
    console.log("Découvert non autorisé => pas d'agios");
    isOverdraft = false;
  } else {
    overdraft = prompt("Montant du découvert :");
    overdraft = parseInt(overdraft);
  }
}

if (isOverdraft) {
  let day = prompt("Durée du découvert : ");
  day = parseInt(day);
  while (day < 1 || day > 365) {
    day = prompt("Durée du découvert : ");
    day = parseInt(day);
  }

  let agios = (overdraft * day * rate) / 365;

  agios = Math.round(agios * 100) / 100;

  console.log("Agios (€) : " + agios);
}
