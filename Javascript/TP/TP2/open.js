/**
Mission développeur 2 : retraits
Écrivez un algorithme qui prend en entrée :

Le montant de son découvert autorisé (si le client n'a pas choisi d'avoir droit au découvert, il doit saisir zéro) ;
Le solde du compte en cours ;
Le montant du retrait souhaité par le client.
Attention le montant du solde s'il est négatif ne doit pas être supérieur en valeur absolue au montant du découvert.

Exemple :

Non autorisé, découvert de 500 € et solde de -700 € ;
Autorisées, découvert de 500 € et solde de -500 € ou découvert de 900 € et solde de -300 €.
Tant que le solde est suffisant, votre programme doit redemander au client s'il souhaite refaire un nouveau retrait.

Le client peut arrêter les opérations en saisissant la valeur 0 (ou un autre caractère alphanumérique).

En sortie, votre algorithme affiche :

Le nouveau solde ou un message "solde insuffisant" ;
Le montant du découvert.
Pour résumé :

Demandez le montant du découvert (0 s'il n'y a pas découvert autorisé) ;
Demandez le solde en cours ;
Tant que le solde le permet, demandez au client s'il souhaite effectuer un autre retrait. Il saisira la valeur du retrait ou 0 pour quitter ;
Affichez le nouveau solde et le montant du découvert ou "solde insuffisant".
 */

import { MIN_SOLD, MIN_OVERDRAFT, MAX_OVERDRAFT } from "./constant.js";

/**
 * Ask the user for their overdraft
 * the minimum and maximum is defined in constant.js
 * return 0 if they don't have an overdraft
 * @returns {Number}
 */
function askOverdraft() {
  let overdraft = -1;
  let isOverdraft = prompt(
    "Voulez-vous avoir un découvert (y ou Y pour oui, n'importe quel caractère pour non)"
  );
  if (isOverdraft == "y" || isOverdraft == "Y") {
    do {
      overdraft = prompt(
        "Saisissez le montant du découvert entre 100 et 2000€"
      );
      overdraft = parseInt(overdraft);
    } while (overdraft < MIN_OVERDRAFT || overdraft > MAX_OVERDRAFT);
    return overdraft;
  } else {
    return 0;
  }
}

/**
 * ask the user for their sold
 * the minimum is defined in constant.js
 * @returns {Number}
 */
function askSold() {
  let sold = -1;
  do {
    sold = prompt("Saisissez le montant du solde (minimum 500€)");
    sold = parseInt(sold);
  } while (sold < MIN_SOLD);
  return sold;
}

// EXECUTION

function main() {
  console.log("Bienvenue chez GMT Bank");
  let overdraft = askOverdraft();
  let sold = askSold();

  console.log("Découvert : " + overdraft);
  console.log("Solde : " + sold);
}

//main()

export { askOverdraft, askSold, main };
