/**
Demandez à l'utilisateur de saisir 2 nombres entiers.
Affichez le résultat de l'addition de ces 2 nombres.
Affichez le résultat de la soustraction de ces 2 nombres.
Affichez le résultat de la multiplication de ces 2 nombres.
Affichez le résultat de la division de ces 2 nombres.
Uniquement pour ce dernier point (numéro 5), lorsque le dénominateur (deuxième nombre saisi par l'utilisateur) est égal à 0, n'effectuez pas l'opération, affichez le message suivant "Division par 0 impossible".
 */

let nb1 = prompt("Entrez votre premier nombre :")
let nb2 = prompt("Entrez votre deuxième nombre :")
nb1 = parseInt(nb1)
nb2 = parseInt(nb2)
console.log(`Addition (${nb1} + ${nb2}) : ` + (nb1 + nb2))
console.log(`Soustraction (${nb1} - ${nb2}) : ` + (nb1 - nb2))
console.log(`Multiplication (${nb1} * ${nb2}) : ` + (nb1 * nb2))
if (nb2 == 0) {
    console.log("Division par 0 impossible")
} else {
    console.log(`Division (${nb1} / ${nb2}) : ` + (nb1 / nb2))
}
