/**
Demandez à l'utilisateur de saisir 2 nombres entiers.
Affichez le résultat de l'addition de ces 2 nombres.
Affichez le résultat de la soustraction de ces 2 nombres.
Affichez le résultat de la multiplication de ces 2 nombres.
Affichez le résultat de la division de ces 2 nombres.
Uniquement pour ce dernier point (numéro 5), lorsque le dénominateur (deuxième nombre saisi par l'utilisateur) est égal à 0, n'effectuez pas l'opération, affichez le message suivant "Division par 0 impossible".
 */

function add(nb1, nb2) {
    return nb1 + nb2
}

function substract(nb1, nb2) {
    return nb1 - nb2
}

function multiply(nb1, nb2) {
    return nb1 * nb2
}

function divide(nb1, nb2) {
    if (nb2 == 0) {
        throw new Error
    } else {
        return nb1 / nb2
    }
}

let nb1 = prompt("Entrez votre premier nombre :")
let nb2 = prompt("Entrez votre deuxième nombre :")
nb1 = parseInt(nb1)
nb2 = parseInt(nb2)
console.log(`Addition (${nb1} + ${nb2}) : ` + add(nb1, nb2))
console.log(`Soustraction (${nb1} - ${nb2}) : ` + substract(nb1, nb2))
console.log(`Multiplication (${nb1} * ${nb2}) : ` + multiply(nb1, nb2))
try {
    console.log(`Division (${nb1} / ${nb2}) : ` + divide(nb1, nb2))
} catch {
    console.log("Division par 0 impossible")
}
