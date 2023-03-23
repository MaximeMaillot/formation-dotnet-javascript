/**
Mission développeur 1 : ouverture du compte
Écrivez un algorithme qui demande au client lors de la création d'un nouveau compte bancaire chez GTM Bank :

La possibilité d'avoir recours au découvert (oui ou non) ;
Si oui, le montant du découvert autorisé entre 100 et 2000 €, le client détermine ce montant en fonction de ses besoins
Le montant à transférer pour l'ouverture du compte, la somme initiale doit être au minimum de 500 € ;
Forcez le client à respecter les conditions (montant du départ et la fourchette du découvert).
Pour résumé :

Demandez au client s'il souhaite avoir droit au découvert ;
Si oui, demandez au client le montant du découvert (valeur comprise entre 100 et 2000 €).
Demandez au client le montant à transférer sur le compte (>= 500€) pour l'ouverture du compte ;
En sortie, votre algorithme affiche la somme initiale et le montant du découvert (zéro s'il n'a pas opté pour le découvert).
 */

/**
 * return the maximum withdrawable amount
 * @param {Number} sold
 * @param {Number} overdraft
 * @returns {Number}
 */
function getWithdrawLimit(sold, overdraft) {
  return sold + overdraft;
}

/**
 * return the sold left and if the withdraw was accepted
 * @param {Number} sold
 * @param {Number} overdraft
 * @param {Number} amount
 * @returns {Object}
 */
function getWithdrawableAmount(sold, overdraft, amount) {
  let authorizedWithdraw = getWithdrawLimit(sold, overdraft);
  if (authorizedWithdraw >= amount) {
    sold -= amount;
    return { sold: sold, accepted: true };
  } else {
    return { sold: sold, accepted: false };
  }
}

/**
 * Ask the user for their overdraft
 * @returns {Number}
 */
function askOverdraft() {
  let overdraft = prompt("Saisissez le montant de votre découvert :");
  overdraft = parseInt(overdraft);
  return overdraft;
}

/**
 * Ask the user for their sold
 * @returns Number
 */
function askSold() {
  let sold = prompt("Saisissez le montant de votre solde : ");
  sold = parseInt(sold);
  return sold;
}

/**
 * Ask the user how much they want to withdraw
 * @param {Number} sold
 * @param {Number} overdraft
 * @returns
 */
function askWithdraw() {
  let withdraw = prompt("Saisissez le montant de votre retrait :");
  withdraw = parseInt(withdraw);
  return withdraw;
}

// EXECUTION

function main() {
  console.log("Bienvenue chez GMT Bank");
  let overdraft = askOverdraft();
  let sold = askSold();
  let newSold = { sold: sold, accepted: true };
  let withdraw = -1;
  while (sold > -overdraft && newSold.accepted && withdraw != 0) {
    withdraw = askWithdraw();
    if (withdraw > 0) {
      newSold = getWithdrawableAmount(sold, overdraft, withdraw);
      if (newSold.accepted) {
        sold = newSold.sold;
        if (sold == 0) {
          console.log("solde " + sold);
          console.log("découvert : " + overdraft);
        } else {
          console.log("solde " + sold);
          console.log("découvert : " + overdraft);
        }
      } else {
        console.log("solde insuffisant");
      }
    }
  }
}

//main();

export {
  askOverdraft,
  askSold,
  askWithdraw,
  getWithdrawableAmount,
  getWithdrawLimit,
  main,
};
