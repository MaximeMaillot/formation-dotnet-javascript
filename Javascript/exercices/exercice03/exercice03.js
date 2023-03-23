import { appendChildToElement } from "../functions.js"

let container = document.querySelector(".container");
let inputDiametre = prompt("Donnez le diamètre du cercle")
inputDiametre = parseInt(inputDiametre)

let title = `<b>Utilisation des functions() de l'objet Math</b>`;
document.querySelector("#title").innerHTML = title;
document.querySelector("#pi").innerHTML = `La valeur de π est : ${Math.PI}`;

appendChildToElement(container, "div", {text:`Diamètre : ${inputDiametre}`});

let perimetre = inputDiametre * Math.PI;
appendChildToElement(container, "div", {text: `Perimètre : ${perimetre}cm`});

let aire = Math.pow(inputDiametre / 2, 2) * Math.PI;
appendChildToElement(container, "div", {text:`Aire : ${aire}cm²`});
appendChildToElement(container, "div", {text:`Perimètre (arrondi) : ${Math.round(perimetre)}cm`});
appendChildToElement(container, "div", {text:`Aire (arrondi) : ${Math.round(aire)}cm²`});
