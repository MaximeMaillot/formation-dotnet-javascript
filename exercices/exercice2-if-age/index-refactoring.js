/**
En fonction de l'âge saisit par l'utilisateur, affichez l'un des 3 messages suivants :
"Vous êtes majeur" ;
"Vous êtes majeur et vous avez exactement 18 ans" ;
"Vous êtes mineur".
 */

import { askUserInput } from "../../refactoring/functions"



let age = askUserInput("Quelle est votre âge", age)
age = parseInt(age)

if (age > 18) {
    console.log("Vous êtes majeur")
} else if (age == 18) {
    console.log("Vous êtes majeur et vous avez exactement 18 ans")
} else {
    console.log("Vous êtes mineur")
}