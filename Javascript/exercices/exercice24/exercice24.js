import { appendChildToElement } from "../functions.js"

let container = document.querySelector(".container");
let year = 2015
let population = 96809
let taux = 0.89
let targetPopulation = 120000
let nbAnnees = 1;

appendChildToElement(container, "div", { text: `En <b${year}</b>, il a été recensé <b>${population} habitants</b>, le taux d'accroissement de la population étant de <b>${taux}</b>. Combien faudra-t-il d'années pour atteindre une population de <b>${targetPopulation} habitants</b> ?` })
appendChildToElement(container, "hr")

for (nbAnnees; population < targetPopulation; nbAnnees++) {
  population += population * taux / 100
  let populationAffichage = Math.round(population)
  appendChildToElement(container, "div", { text: `En <b>${year + nbAnnees}</b>, il y aura <b>${populationAffichage} habitants</b>` })
  appendChildToElement(container, "hr")
}
appendChildToElement(container, "div", { text: `Avec un taux d'accroissement de la population de <b>${taux}%</b> en <b>${year + nbAnnees}</b>, il y aura <b>${Math.floor(population)} habitants</b> dans la ville de <b>Tourcoing</b>. Il aura fallu <b>${nbAnnees - 1} années</b>.` })
