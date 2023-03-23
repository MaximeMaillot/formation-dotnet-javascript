/**
Programme à réaliser
L'utilisateur saisit 3 nombres (nul, positifs ou négatifs) A, B et C
Résolvez l'équation de second degré Ax² + Bx + C.
Affichez les solutions
Formules
Ax² + Bx + C ADMET

Une solution –c/b si A = 0 et B ≠ 0
Lorsque a ≠ 0, on calcule le discriminant D tels que D = b²-4ac. Si D > 0 2 solutions
X1 = -b - racineCarrée(D) / 2a
X2 = -b + racineCarrée(D) / 2a
Si D = 0
Solution unique X0 = -b/2a
 */

let a = prompt("Rentrez A : ")
let b = prompt("Rentrez B : ")
let c = prompt("Rentrez C : ")
let d = 0

if (a == 0 && b == 0) {
    console.log("x = c = " + c)
} else if (a == 0 && b != 0) {
    console.log("x = " + (-c / b))
} else if (a != 0) {
    d = Math.pow(b, 2) - 4 * a * c
    if (d > 0) {
        console.log("x1 = " + ((-b - Math.sqrt(d)) / 2 * a))
        console.log("x2 = " + ((-b + Math.sqrt(d)) / 2 * a))
    } else if (d == 0) {
        console.log("x0 = " + (-b / 2 * a))
    } else {
        console.log("complex solution not handled")
    }
}