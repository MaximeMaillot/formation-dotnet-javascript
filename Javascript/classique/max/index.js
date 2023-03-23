/*
Ecrivez un programme qui retourne le nombre le plus élevé dans un tableau contenant N nombres entiers.
Exemple

En entrée : [10, 25, 6, 8, 9, 101 ,4] En sortie : 101
*/

function findMaxInArray(array) {
  if (array.length == 0) {
    throw new Error();
  }
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

console.log(findMaxInArray([10, 25, 6, 8, 9, 101, 4]));

export { findMaxInArray };
