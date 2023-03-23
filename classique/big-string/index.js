/*
Ecrivez un programme qui retourne le mot le plus long d'une phrase.
Exemple

En entrée : Ceci est une belle phrase En sortie : phrase
*/

function getLongestWord(str) {
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
  return maxWord;
}

//console.log(getLongestWord("Ceci est une belle phrase"))

export { getLongestWord };
