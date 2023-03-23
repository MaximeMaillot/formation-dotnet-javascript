/*
La température d'un patient est prélevée toutes les heures durant 24H.

Ecrivez un programme qui permet d'afficher la moyenne des températures relevées et l'écart par rapport à la température corporelle normale de 37°C
*/

let sumTemp = 0

for (let i = 0; i < 24; i++) {
    let temp = prompt("Quelle est votre température ?")
    temp = parseFloat(temp)
    sumTemp += temp
}

let moy = sumTemp / 24
moy = Math.round(moy * 100) / 100
let delta = Math.abs(moy - 37)

console.log("moyenne de température : " + moy)
console.log("écart de température observé par rapport à 37° : " + delta)