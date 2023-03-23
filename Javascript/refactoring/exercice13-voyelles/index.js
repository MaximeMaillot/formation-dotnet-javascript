/*
Demandez à l'utilisateur de saisir une phrase.
Affichez le nombre total de voyelles (a,e,i,o,u,y) présent dans la phrase.
*/

// Gérer la casse ? Les accents ?

let string = "Je veux trouver le nombre de voyelles dans cette phrase"
let cptVoyelles = [0, 0, 0, 0, 0, 0]

for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
        case "a":
            cptVoyelles[0]++
            break;
        case "e":
            cptVoyelles[1]++
            break;
        case "i":
            cptVoyelles[2]++
            break;
        case "o":
            cptVoyelles[3]++
            break;
        case "u":
            cptVoyelles[4]++
            break;
        case "y":
            cptVoyelles[5]++
            break;
        default:
            break;
    }
}

console.log("Nombre de a : " + cptVoyelles[0])
console.log("Nombre de e : " + cptVoyelles[1])
console.log("Nombre de i : " + cptVoyelles[2])
console.log("Nombre de o : " + cptVoyelles[3])
console.log("Nombre de u : " + cptVoyelles[4])
console.log("Nombre de y : " + cptVoyelles[5])