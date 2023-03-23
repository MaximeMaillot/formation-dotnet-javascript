import { appendChildToElement } from "../functions.js"

/**
 *
 * @param {String} str
 * @returns
 */
function capitalizeStr(str) {
  let strArray = str.split(" ");
  strArray.forEach((word, index) => {
    strArray[index] = capitalizeFirstLetter(word);
  });
  return strArray.join(" ");
}

/**
 *
 * @param {String} str
 * @returns
 */
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

let container = document.querySelector(".container");

let str = prompt("Saisissez une phrase");

appendChildToElement(container, "div", {text:`Vous avez saisi : <b>${str}</b>`});
appendChildToElement(container, "div", {text:`La chaîne en minuscule : <b>${str.toLowerCase()}</b>`});
appendChildToElement(container, "div", {text:`Mise en tableau : ${str.split("")}`});
appendChildToElement(container, "div", {text:`La chaîne après traitement : ${capitalizeStr(str)}`});
