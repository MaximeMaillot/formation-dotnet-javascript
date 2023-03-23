let title = "Addition de deux variables de type chaînes (Concaténation)";
document.querySelector(".display-4").innerHTML = title;

let fn = prompt("Donnez votre nom")
let ln = prompt("Donnez votre prénom");

if (fn != undefined && ln != undefined) {
  let fulln = fn + " " + ln;
  let fullnHTML = document.querySelector("#result");
  fullnHTML.innerHTML = fulln;
}
