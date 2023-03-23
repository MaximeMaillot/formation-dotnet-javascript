import { appendChildToElement, removeAllChild } from "../../exercices/functions.js";
import * as gameData from "./game-data.js"

function main() {
    let number = Math.floor(Math.random() * (gameData.MAX_NUMBER - gameData.MIN_NUMBER + 1) + gameData.MIN_NUMBER)
    let body = document.querySelector("body");
    let container = appendChildToElement(body, "div", { className: ["container", "p-4", "mt-3"], style: "background-color: orange" })
    appendChildToElement(container, "h1", { text: `Le nombre mystère`, className: ["text-center", "mb-3"] })
    appendChildToElement(container, "p", { id: "first-line", text: `J'ai généré un nombre entre ${gameData.MIN_NUMBER} et ${gameData.MAX_NUMBER} inclus`, style: "color:white", className: ["text-center", "h3"] })
    appendChildToElement(container, "p", { id: "second-line", text: `Essayez de le deviner en proposant ci-dessous`, style: "color:white", className: ["text-center", "h3", "mb-3"] })
    let divInput = appendChildToElement(container, "div", { className: ["d-flex", "justify-content-end"] })
    appendChildToElement(divInput, "span", { className: ["align-middle", "p-3"], text: `Nombre de coups: <span id="nbCoup">0</span>`, style: "font-size:smaller; color:white; margin-right: 1rem;" })
    let inputNumber = appendChildToElement(divInput, "input", { type: "number", eventHandler: { event: "keyup", fn: () => { submitData(number, inputNumber) } } })
    appendChildToElement(divInput, "button", { text: "Valider", className: ["btn", "btn-dark"], eventHandler: { event: "onclick", fn: () => { submitData(number, inputNumber) } } })
    appendChildToElement(container, "button", { text: "Rejouer", className: ["btn", "btn-dark", "w-100", "mt-2"], eventHandler: { event: "onclick", fn: () => { replayGame() } } })
}

function submitData(number, inputUserNumber) {
    let nbCoupElement = document.querySelector("#nbCoup")
    let firstLine = document.querySelector("#first-line")
    let secondLine = document.querySelector("#second-line")
    let userNumber = Number(inputUserNumber.value)
    nbCoupElement.innerHTML = Number(nbCoupElement.innerHTML) + 1
    if (number == userNumber) {
        firstLine.innerHTML = `Bravo...! Vous avez trouvé en ${nbCoupElement.innerHTML}!`
        secondLine.innerHTML = `Le nombre mystère était ${number}`

    } else if (number > userNumber) {
        firstLine.innerHTML = `Le nombre mystère est plus grand que ${userNumber}`
    } else {
        firstLine.innerHTML = `Le nombre mystère est plus petit que ${userNumber}`
    }
    inputUserNumber.value = ""
}

function replayGame() {
    let body = document.querySelector("body");
    removeAllChild(body)
    main()
}

window.onload = () => {
    main()
};
