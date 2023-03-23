/*
Ecrivez un programme qui retourne le nombre le moins élevé dans un tableau contenant N nombre entiers.
Exemple

En entrée : [10, 25, 6, 8, 9, 101 ,4] En sortie : 4
*/

function findMinInArray(array) {
  if (array.length == 0) {
    throw new Error();
  }
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

console.log(findMinInArray([10, 25, 6, 8, 9, 101, 4]));

export { findMinInArray };
