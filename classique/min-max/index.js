function findMinMaxInArray(array) {
  if (array.length == 0) {
    throw new Error();
  }
  let max = array[0];
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    } else if (array[i] < min) {
      min = array[i];
    }
  }
  return { min: min, max: max };
}

console.log(findMinMaxInArray([10, 25, 6, 8, 9, 101, 4]));

export { findMinMaxInArray };
