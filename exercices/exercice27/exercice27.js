import { appendChildToElement } from "../functions.js"

let container = document.querySelector(".container");

const etudiants = [ 
  { 
      prenom: "José", 
      nom: "Garcia", 
      matieres: { 
          francais: 16, 
          anglais: 7, 
          humour: 14 
      }  
  }, 
  { 
      prenom: "Antoine", 
      nom: "De Caunes", 
      matieres: { 
          francais: 15, 
          anglais: 6, 
          humour: 16, 
          informatique: 4, 
          sport: 10 
      } 
  } 
]

appendChildToElement(container, "h2", {text:`Notes des étudiants`})

for (const etudiant of etudiants) {
  let fullName = `${etudiant.prenom} ${etudiant.nom}`
  let moy = 0
  appendChildToElement(container, "div" ,{text: `<b>${fullName}</b>`})
  let liste = appendChildToElement(container, "ul")
  for (const matiereKey in etudiant.matieres) {
    moy += etudiant.matieres[matiereKey]
    appendChildToElement(liste, "li", {text:`${matiereKey[0].toUpperCase() + matiereKey.slice(1)} : <b>${etudiant.matieres[matiereKey]}</b>`})
  }
  // Just to test, could be more optimal to declare a counter instead 
  moy /= Object.keys(etudiant.matieres).length
  appendChildToElement(container, "div", {text: `Moyenne générale : ${Math.round(moy*10)/10}/20`})
  appendChildToElement(container, "hr")
}