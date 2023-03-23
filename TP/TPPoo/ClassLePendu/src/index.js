//La classe pendu qui gère le déroulement du jeu
import Pendu from "./Pendu.js"
// Récuperer une liste de mots
import { wordList } from "./wordlist.js"

const Img = document.querySelector("#img")
const Masque = document.querySelector("#masque")
const UserInput = document.querySelector("#user-input")
const Message = document.querySelector("#message")
const Validate = document.querySelector("#validate")
const ListProposition = document.querySelector("#list-proposition")
const Replay = document.querySelector("#replay")
const GameMode = document.querySelector("#gamemode")
let pendu = new Pendu(wordList[Math.floor(Math.random() * wordList.length)])
let state = 1;

function init() {
    updateView()
    Replay.addEventListener("click", replay)
    GameMode.addEventListener("click", switchGameMode)
    enableGame()
}
/**
 * (optionel) Change le mode de jeu entre le besoin de clicker pour valider
 */
function switchGameMode() {
    if (state == 0) {
        Validate.addEventListener("click", validateLetter)
        UserInput.removeEventListener("keyup", validateLetter)
        GameMode.innerHTML = "Click"
        state = 1
    } else {
        UserInput.addEventListener("keyup", validateLetter)
        Validate.removeEventListener("click", validateLetter)
        GameMode.innerHTML = "Write"
        state = 0
    }
}

/**
 * Met à jour l'image, le masque et les lettres déjà proposés stockés dans la constante pendu
 */
function updateView() {
    Img.src = `./assets/blanc/pendu-${pendu.nbEssais}.jpg`
    Masque.innerHTML = pendu.masque
    ListProposition.innerHTML = pendu.dejaPropose
}

/**
 * On désactive les évènements et les boutons du jeu
 */
function disableGame() {
    Validate.disabled = true
    if (state == 0) {
        UserInput.removeEventListener("keyup", validateLetter)
    } else {
        Validate.removeEventListener("click", validateLetter)
    }
}

/**
 * On active les évènements et les boutons du jeu
 */
function enableGame() {
    Validate.disabled = false
    if (state == 0) {
        UserInput.addEventListener("keyup", validateLetter)
    } else {
        Validate.addEventListener("click", validateLetter)
    }
}

/**
 * Gère les différents cas possible lors d'une validation utilisateur
 */
function validateLetter() {
    // L'utilisateur a bien rentré qu'un caractère
    if (UserInput.value.length == 1) {
        // On stock dans found si l'utilisateur à trouver ou non une lettre
        let found = pendu.proposition(UserInput.value)
        // On vide l'input où l'utilisateur rentre sa lettre
        UserInput.value = ""
        // On regarde si l'utilisatuer à gagner
        if (pendu.win) {
            disableGame()
            Message.innerHTML = `Bravo !!! Vous avez gagné !!!`
            Message.style.color = "green"
        }
        // On regarde si l'utilisateur à trouver sans gagner
        else if (found) {
            Message.innerHTML = `Bravo, vous avez trouvé une lettre!`
            Message.style.color = "green"
        }
        // On regarde si l'utilisateur à des nombres d'essais restant
        else if (pendu.nbEssais <= 0) {
            disableGame()
            Message.innerHTML = `Dommage, vous avez perdu! Le mot mystère était <br>${pendu.motATrouver}`
            Message.style.color = "red"
        }
        // On regarde si l'utilisateur n'a pas trouvé
        else if (!found) {
            Message.innerHTML = `Dommage, cette lettre n'est pas dans le mot mystère!`
            Message.style.color = "red"
        }
        // On met à jour la vue utilisateur avec les nouveaux éléments de pendu
        updateView()
    }
}

/**
 * Reinstancie pendu et remet les variables à leur état initiale
 */
function replay() {
    pendu = new Pendu(wordList[Math.floor(Math.random() * wordList.length)])
    Message.innerHTML = "&nbsp;"
    UserInput.value = ""
    updateView()
    enableGame()
}

init()