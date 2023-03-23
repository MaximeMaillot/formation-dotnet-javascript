// Écrivez un programme qui affiche 10 fois le message "Hello World".

for (let i = 0; i < 10; i++) {
    console.log("Hello World")
}

// Écrivez un programme qui affiche 100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90.

let start = 100
let end = 90
let string = ""
for (let i=start; i > end; i--) {
    string += i + ", "
}
string += end + "."
console.log(string)

// Écrivez un programme qui affiche tous les codes postaux du département 75.

let departement = 75
let nbArrondissement = 20
for (let i = 0; i <= nbArrondissement; i++) {
    console.log(departement * 1000 + i)
}

// Écrivez un programme qui affiche tous les codes postaux possibles du département 77.

departement = 77
for (let i = departement * 1000; i < (departement + 1) * 1000; i++) {
    console.log(i)
}

/* Écrivez un programme qui affiche :

*

**

***

****

*****

ou

1

22

333

4444

55555

*/

for (let i = 1; i <= 5; i++) {
    let string = ""
    for (let j = 0; j < i; j++) {
        string += "*"
    }
    console.log(string)
}

// OU

for (let i = 1; i <= 5; i++) {
    let string = ""
    for (let j = 0; j < i; j++) {
        string += i
    }
    console.log(string)
}

// Méthode alternative pour *

let star = "*"
for (let cpt = 0; cpt < 5; cpt++) {
    console.log(star)
    star += "*"
}