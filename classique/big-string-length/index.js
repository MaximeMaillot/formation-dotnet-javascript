/*
Ecrivez un programme qui retourne la taille du mot le plus long d'une phrase
Exemple

En entrée : elle est plus longue cette phrase En sortie : 6
*/

function getLongestWordLength(str) {
  if (typeof str != "string") {
    throw new Error();
  }
  let word = "";
  let maxWord = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " " && str[i] != "," && str[i] != ".") {
      word += str[i];
    } else {
      if (maxWord.length < word.length) {
        maxWord = word;
      }
      word = "";
    }
  }
  if (maxWord.length < word.length) {
    maxWord = word;
  }
  return maxWord.length;
}

//console.log(getLongestWordLength("elle est plus longue cette phrase"))

export { getLongestWordLength };
