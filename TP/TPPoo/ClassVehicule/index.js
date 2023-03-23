import { tablePrice } from "./constant.js"
import Parking from "./parking.js"
import Vehicule from "./vehicule.js"

const price = document.querySelector("#price")
const idCar = document.querySelector("#id-car")
const pay = document.querySelector("#pay")
const alert = document.querySelector("#alert")
const ticket = document.querySelector("#ticket")
const exit = document.querySelector("#exit")

const parking = new Parking();

// Transforme des minutes en chaine de caractères heure/minutes
function convertTime(time) {
    if (time >= 60) {
        const hour = time / 60
        if (Number.isInteger(hour)) {
            return Math.round(hour) + "H"
        }
        return Math.round(hour) + "H" + time % 60 + "min"
    }
    return time + "min"
}

// Verifie si l'input n'est pas vide
function checkId(id) {
    if (id === "") {
        populateAlertBox(`Entrez une plaque d'immatriculation`, "warning")
        return false
    }
    return true
}

// Initialise la page
function init() {
    // Initialise le tableau de prix
    tablePrice.forEach((tab) => {
        const tr = document.createElement("tr")
        price.appendChild(tr)
        const tdDuree = document.createElement("td")
        const tdPrice = document.createElement("td")
        if (tab.dureeMin == -1) {
            tdDuree.innerHTML = `<= ${convertTime(tab.dureeMax)}`
        } else if (tab.dureeMax == -1) {
            tdDuree.innerHTML = `> ${convertTime(tab.dureeMin)}`
        } else {
            tdDuree.innerHTML = `${convertTime(tab.dureeMin)} < Durée <= ${convertTime(tab.dureeMax)}`
        }
        tdPrice.innerHTML = `${tab.price}€`
        tr.appendChild(tdDuree)
        tr.appendChild(tdPrice)
    })
    // Initialise les event des boutons
    pay.addEventListener("click", payerTicket)
    ticket.addEventListener("click", obtenirTicket)
    exit.addEventListener("click", sortir)
    alert.style.visibility = "hidden"
}

//
function populateAlertBox(msg, type, timeout = 2000) {
    alert.classList.add("alert-" + type)
    alert.innerHTML = msg
    alert.style.visibility = "visible"
    setTimeout(() => {
        alert.style.visibility = "hidden"
        alert.classList.remove("alert-" + type)
    }, timeout)
}

function obtenirTicket() {
    const id = idCar.value
    if (checkId(id)) {
        if (parking.isCarInParking(id)) {
            populateAlertBox(`Ce véhicule est déjà dans notre parking`, "danger")
        } else {
            parking.addVehicule(new Vehicule(id))
            populateAlertBox(`Veuillez prendre votre ticket pour le véhicule ${id}`, "success")
        }
    }
}

function payerTicket() {
    const id = idCar.value
    if (checkId(id)) {
        try {
            let vehicule = parking.getCarById(id)
            if (vehicule.hasPayed()) {
                populateAlertBox(`Vous avez déjà payé`, "danger")
            } else if (!vehicule.isOut()) {
                let toPay = vehicule.getPrice()
                vehicule.setPayed(true)
                vehicule.setEndDate(new Date())
                populateAlertBox(`Le prix à payer pour le véhicule ${id} est de ${toPay}€`, "warning")
            }
        } catch (e) {
            populateAlertBox(`Ce véhicule n'est pas présent dans notre parking`, "danger")
        }
    }
}

function sortir() {
    const id = idCar.value
    if (checkId(id)) {
        try {
            let vehicule = parking.getCarById(id)
            if (vehicule.hasPayed()) {
                if (parking.exitParking(id)) {
                    populateAlertBox(`La barrière est ouverte`, "success")
                } else {
                    populateAlertBox(`Déjà sorti.`, "danger")
                }
            } else {
                populateAlertBox(`Faut payer.`, "danger")
            }
        } catch (e) {
            populateAlertBox(`Ce véhicule n'est pas présent dans notre parking`, "danger")
        }
    }
}

init()