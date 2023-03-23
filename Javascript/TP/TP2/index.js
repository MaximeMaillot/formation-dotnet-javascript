import { appendChildToElement, removeAllChild } from "../../exercices/functions.js";

let calculAffichage = document.querySelector("#calcul")
let resultAffichage = document.querySelector("#result")

function clickButton(button) {
    try {
        if (resultAffichage.innerHTML = "Calcul non valide") {
            resultAffichage.innerHTML = "&nbsp;"
        }
        switch (button.innerHTML) {
            case "C":
                calculAffichage.innerHTML = "&nbsp;"
                resultAffichage.innerHTML = "&nbsp;"
                break;
            case "=":
                resultAffichage.innerHTML = "=" + eval(calculAffichage.innerHTML)
                break;
            default:
                if (calculAffichage.innerHTML == "&nbsp;") {
                    calculAffichage.innerHTML = button.innerHTML
                } else {
                    calculAffichage.innerHTML += button.innerHTML
                }
                break;
        }
    } catch (e) {
        calculAffichage.innerHTML = "&nbsp;"
        resultAffichage.innerHTML = "Calcul non valide"
    }
}

function main() {
    const divButton = document.querySelector(".button-container")
    //console.log(divButton.children)
    for (const divRow of divButton.children) {
        //console.log(divRow)
        for (const divCol of divRow.children) {
            const button = divCol.firstChild
            button.addEventListener("click", function (e) {
                clickButton(button)
            })
        }
    }
}

window.onload = () => {
    main()
};