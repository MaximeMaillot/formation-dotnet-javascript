import { appendChildToElement } from "../functions.js"

let container = document.querySelector(".container");

let cote = prompt("Donnez la valeur du côté du carré");
cote = parseInt(cote)
appendChildToElement(container, "h2", {text:`<b>Calcul de l'aire et du périmètre d'un carré</b>`})

appendChildToElement(container, "div", {text:`Les longueurs des côtés du carré étant de ${cote}cm,`, className: ["lead"]});

let listCarre = appendChildToElement(container, "ul")
appendChildToElement(listCarre, "li", {text:`Le périmètre de ce carré est de ${cote * 4}cm`})
appendChildToElement(listCarre, "li", {text:`L'aire de ce carré est de ${cote * cote}cm²`})

appendChildToElement(container, "hr")

let longueur = prompt("Donnez la valeur de la longueur du rectangle");
longueur = parseInt(longueur)
let largeur = prompt("Donnez la valeur de la largeur du rectangle");
largeur = parseInt(largeur)
appendChildToElement(container, "h2", {text:`<b>Calcul de l'aire et du périmètre d'un réctangle</b>`})
appendChildToElement(container, "div", {text:`Les longueurs des côtés du réctangle étant de ${longueur}cm pour la longueur et ${largeur}cm pour la largeur`})

let listRectangle = appendChildToElement(container, "ul")
appendChildToElement(listRectangle, "li", {text:`Le périmètre de ce réctangle est de ${(largeur * 2) + (longueur * 2)}cm`})
appendChildToElement(listRectangle, "li", {text:`L'aire de ce carré est de ${longueur * largeur}cm²`})