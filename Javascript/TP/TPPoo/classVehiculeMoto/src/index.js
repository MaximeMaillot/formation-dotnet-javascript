import Moto from "./Moto.js"
import Voiture from "./Voiture.js"

const voitureDiv = document.querySelector("#voiture")
const motoDiv = document.querySelector("#moto")

const voiture = new Voiture("Renault", "Kangoo", 240000, 2003, true)
const moto = new Moto("BMW", "R1150R Rockster", 65000, 2005)

console.log(voiture, moto)

voitureDiv.innerHTML = voiture.display()
motoDiv.innerHTML = moto.display()