/**
Demandez à l'utilisateur de saisir un nombre compris entre 0 et 10.
Affichez le message "Saisissez un nombre compris en 0 et 10" tant que le nombre n'est pas compris entre 0 et 10.
Affichez à l'utilisateur le " Votre nombre est [nombre saisi]" uniquement lorsque le nombre est compris en 0 et 10
 */

let number = 11
do {
    number = prompt("Saisissez un nombre entre 0 et 10 :")
    number = parseInt(number)
} while (number < 0 || number > 10)

console.log(number)