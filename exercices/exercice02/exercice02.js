let title = `<b>Addition de deux variables numériques</b>`;
document.querySelector("#title").innerHTML = title;

let nb1 = prompt("Entrez le premier nombre")
let nb2 = prompt("Entrez le deuxième nombre")
let result = parseInt(nb1) + parseInt(nb2);

document.querySelector("#number1").innerHTML = `Vous avez saisi <b>${nb1}</b>`;
document.querySelector("#number2").innerHTML = `Vous avez saisi <b>${nb2}</b>`;
document.querySelector("#result").innerHTML = `La somme de <b>${nb1} + ${nb2} = ${result}</b>`;
