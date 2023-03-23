/**
Écrivez un programme qui prend en entrée des entiers puis en sortie les tris par ordre croissant.
Offrir à l'utilisateur la possibilité de rentrer plusieurs nombres les uns après les autres puis lui permettre d'arrêter la saisie après avoir entré la lettre q pour quitter.
Affichez le nombre de tour effectué par votre algorithme pour effectuer le tri.
Affichez les nombres triés dans l'ordre croissant.
Par déduction, sans refaire le tri, affichez les nombres triés par ordre décroissant.
 */

function tri(numbers) {
    let cpt = 0
    let index = 0
    while (index < numbers.length) {
        let nb1 = numbers[index]
        let nb2 = numbers[index + 1]
        if (nb1 > nb2) {
            numbers[index] = nb2
            numbers[index + 1] = nb1
            index = 0
        } else {
            index++
        }
        cpt++
    }
    return [numbers, cpt]
}

function arrayToString(array) {
    let str = ""
    for (let i = 0; i < array.length - 1; i++) {
        str += array[i] + ","
    }
    str += array[array.length - 1]
    return str
}

function reverseArrayToString(array) {
    let str = ""
    for (let i = array.length - 1; i > 0; i--) {
        str += array[i] + ","
    }
    str += array[0]
    return str
}

function main() {
    let numbers = []
    let input = ""
    do {
        input = prompt("Entrer un nombre :")
        if (input != "q") {
            input = parseInt(input)
            numbers.push(input)
        }
    } while (input != "q")

    let results = tri(numbers)
    let numbersTri = results[0]
    let cpt = results[1]

    console.log("results", arrayToString(numbersTri))
    console.log("nombre d'itération", cpt)
    console.log("inverse", reverseArrayToString(numbersTri))
}

main()