/**
Ecrivez un programme qui permute 2 nombres
L'utilisateur saisit un nombre a et un nombre b
Le programme affiche la valeur de a qui est b et la valeur de b qui est a
Exemple

En entrée : a = 15, b = 10 En sortie : a = 10 et b = 15
 */

function askUserInput(msg) {
  let userInput = "";
  userInput = prompt("Saisit un nombre a :");
  return userInput;
}

function permutation(a, b) {
  let tmp = a;
  a = b;
  b = tmp;

  console.log(`a = ${a} et b = ${b}`);
}

let a = askUserInput("Saisit une valeur a:");
let b = askUserInput("Saisit une valeur b :");

permutation(a, b);

//export { askUserNumber, permutation }
