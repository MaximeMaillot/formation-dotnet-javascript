/**
Les habitants de Zorglub paient l’impôt selon les règles suivantes :

les hommes de plus de 20 ans paient l’impôt les femmes paient l’impôt si elles ont entre 18 et 35 ans les autres ne paient pas d’impôt

Le programme demandera donc l’âge et le sexe du Zorglubien, et se prononcera donc ensuite sur le fait que l’habitant est imposable.
 */

function isImposable(age, sexe) {
    if (zorglubienSexe == "m" || zorglubienSexe == "M") {
        if (zorglubienAge > 20) {
            return true
        }
    } else if (zorglubienSexe == "f" || zorglubienSexe == "F") {
        if (zorglubienAge >= 18 && zorglubienAge <= 35) {
            return true
        }
    } else {
        throw new Error()
    }
    return false
}

let zorglubienAge = prompt("Donnez votre age : ")
let zorglubienSexe = prompt("Donnez votre sexe (M/F) : ")
try {
    if (isImposable(zorglubienAge, zorglubienSexe)) {
        console.log("Vous êtes imposable")
    } else {
        console.log("Vous n'êtes pas imposable")
    }
} catch {
    console.log("Sexe not handled")
}