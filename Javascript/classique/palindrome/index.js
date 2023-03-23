/*
Ecrivez un programme qui vérifie qu'un nombre est un palindrome
Exemples

En entrée: rats En sortie: false

En entrée: Elle En sortie: true

En entrée: Laval En sortie: true
*/

function isPalindrome(str) {
  if (typeof str != "string") {
    throw new TypeError();
  }
  str = str.toLowerCase();
  let inverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    inverseStr += str[i];
  }
  return str == inverseStr;
}

function isPalindromeCheckByHalf(str) {
  if (typeof str != "string") {
    throw new TypeError();
  }
  str = str.toLowerCase();
  let length = Math.floor(str.length);
  for (let i = 0; i < length; i++) {
    if (str[i] != str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

function isPalindromeWhile(sentence) {
  sentence = sentence.toLowerCase();
  let reverse = "";
  let last = sentence.length - 1;
  while (last >= 0) {
    reverse += sentence[last];
    last--;
  }
  if (reverse == sentence) {
    return true;
  }
  return false;
}
/*
console.log("isPalindrome");
console.log("rats", isPalindrome("rats"));
console.log("Elle", isPalindrome("Elle"));
console.log("Laval", isPalindrome("Laval"));

console.log("isPalindromeCheckByHalf");
console.log("rats", isPalindromeCheckByHalf("rats"));
console.log("Elle", isPalindromeCheckByHalf("Elle"));
console.log("Laval", isPalindromeCheckByHalf("Laval"));

console.log("isPalindromeWhile");
console.log("rats", isPalindromeWhile("rats"));
console.log("Elle", isPalindromeWhile("Elle"));
console.log("Laval", isPalindromeWhile("Laval"));
*/
export { isPalindromeCheckByHalf }
