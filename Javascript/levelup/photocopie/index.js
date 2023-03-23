/**
Un magasin de reprographie facture 0,10 E les dix premières photocopies, 0,09 E les vingt suivantes et 0,08 E au-delà.

Ecrivez un algorithme qui demande à l’utilisateur le nombre de photocopies effectuées et qui affiche la facture correspondante.
 */

let numberOfPrint = prompt("Combien de photocopies voulez-vous faire ?")
numberOfPrint = parseInt(numberOfPrint)
let totalPrice = 0
let smallQuantityPrice = { number: 10, price: 0.1 }
let mediumQuantityPrice = { number: 20, price: 0.09 }
let discountedPrice = 0.08
if (numberOfPrint < 0) {
    throw new Error
} else if (numberOfPrint <= smallQuantityPrice.number) {
    totalPrice = numberOfPrint * smallQuantityPrice.price
} else if (numberOfPrint <= (smallQuantityPrice.number + mediumQuantityPrice.number)) {
    totalPrice = smallQuantityPrice.number * smallQuantityPrice.price
    totalPrice += (numberOfPrint - smallQuantityPrice.number) * mediumQuantityPrice.price
} else {
    totalPrice = smallQuantityPrice.number * smallQuantityPrice.price
    totalPrice += mediumQuantityPrice.number * mediumQuantityPrice.price
    totalPrice += (numberOfPrint - smallQuantityPrice.number - mediumQuantityPrice.number) * discountedPrice
}

console.log(totalPrice)