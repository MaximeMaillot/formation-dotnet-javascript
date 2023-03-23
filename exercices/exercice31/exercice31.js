import { appendChildToElement } from "../functions.js"

let container = document.querySelector(".container");

let listContact = {
  header: ["Prénom", "Nom", "Age"],
  data: [{
      prenom:"Jean",
      nom:"Dupont",
      age:15
  },
  {
      prenom:"Pierre",
      nom:"Durant",
      age:16
  }, 
  {
    prenom:"Jean",
    nom:"Martin",
    age:17
  }
]};

let affichageIndex = 2;

let table = appendChildToElement(container, "table", {className: ["table", "caption-top"]})
appendChildToElement(table, "caption", {text: "Liste de contacts"})
let theadTr = appendChildToElement(appendChildToElement(table, "thead"), "tr")

for (const header of listContact.header) {
  appendChildToElement(theadTr, "th", {text: header})
}

let tbody = appendChildToElement(table, "tbody")
for (const data of listContact.data) {
  let tbodyTr = appendChildToElement(tbody, "tr")
  for (const contact of Object.entries(data)) {
    appendChildToElement(tbodyTr, "td", {text: contact[1]})
  }
}

appendChildToElement(container, "div", {text: `La personne à la <b>${affichageIndex}eme position</b> de l'annuaire est:`})
appendChildToElement(container, "div", {text: `<b>${listContact.data[affichageIndex-1].prenom} ${listContact.data[affichageIndex-1].nom}`})