/*
Soient a et b deux nombres entiers strictement positifs.

Ecrivez un algorithme qui détermine la puissance de a par b: ab , à l’aide de multiplications successives.
Vous devez forcer l'utilisateur à saisir des valeurs positives pour a et b
*/

function pow(a, b) {
    let result = 1
    for (let i = 0; i < b; i++) {
        result = result * a
    }
    return result
}

let a = prompt("Rentrez un nombre")
a = parseInt(a)
let b = prompt("Rentrez la puissance")
b = parseInt(b)

console.log(pow(a, b))