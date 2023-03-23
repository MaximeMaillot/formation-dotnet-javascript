/*
Ecrivez un programme qui retourne la taille du mot le plus petit d'une phrase.
Exemple

En entrée : elle est courte cette phrase En sortie : 3
*/

function getMinWordLength(str) {
  let word = "";
  let minWord =
    "anticonstitutionnellementanticonstitutionnellementanticonstitutionnellement";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " " && str[i] != "," && str[i] != ".") {
      word += str[i];
    } else {
      if (minWord.length > word.length) {
        minWord = word;
      }
      word = "";
    }
  }
  if (minWord.length > word.length) {
    minWord = word;
  }
  return minWord.length;
}

function getMinWordLengthWithSplit(str) {
  let tabStr = str.split(" ");
  let minWord =
    "anticonstitutionnellementanticonstitutionnellementanticonstitutionnellement";
  tabStr.forEach((word) => {
    if (word == "") {
      // skip
    } else if (word.length < minWord.length) {
      minWord = word;
    }
  });
  return minWord.length;
}

console.log(getMinWordLength("elle est courte cette phrase"));
console.log(getMinWordLengthWithSplit("elle est courte cette phrase"));
console.log(getMinWordLengthWithSplit("a"));

//export { getMinWordLength, getMinWordLengthWithSplit }
