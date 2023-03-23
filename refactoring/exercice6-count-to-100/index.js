/**
Demandez à l'utilisateur de saisir un nombre inférieur à 100.
Forcez l'utilisateur à saisir un nombre inférieur à 100.
Affichez tous les nombres à partir du nombre saisi jusqu'à 100.
Exemple du résultat attendu
L'utilisateur saisit 95, e programme doit afficher "95 96 97 98 99 100".
 */

let max = 100
let number = max + 1
do {
    number = prompt("Entrez un nombre inférieur à 100 :")
    number = parseInt(number)
}
while (number > max)

let result = ""
for (let i = number; i < max; i++) {
    result += i + " "
}
result += max

console.log(result)