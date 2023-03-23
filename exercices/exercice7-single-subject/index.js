/**
Saisissez les notes une par une, lorsque l'utilisateur saisit la note -1, 
la saisie des notes prend fin et votre programme affiche le nombre total de notes (ie nombre d'étudiant) et la moyenne de la classe.
 */

let arrayNotes = []

let userInput = prompt("Entrez la note : ")
userInput = parseInt(userInput)
while (userInput != -1) {
    arrayNotes.push(userInput)
    userInput = prompt("Entrez la note : ")
    userInput = parseInt(userInput)
}
let sumNotes = arrayNotes.reduce((sum, currentValue) => sum + currentValue, 0)

console.log(`Nombre de notes : ${arrayNotes.length}, Moyenne de la classe : ${sumNotes / arrayNotes.length}`)