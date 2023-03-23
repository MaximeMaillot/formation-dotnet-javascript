/**
Un caissier saisit au clavier des couples : quantité commandée et prix unitaire .

Ecrivez un programme qui calcul le montant total de la facture. Le programme devra arrêter la saisie des données dès qu'une quantité ou un prix unitaire négatif.

Votre programme devra déterminer également le prix de l’article le plus cher, le moins cher, le prix moyen des articles et le nombre totale des articles.
 */

let maxPrice = -Number.MIN_VALUE
let minPrice = Number.MAX_VALUE
let sumPrice = 0
let cptArticle = 0

let price = 1
let quantity = 1

do {
    price = prompt("Prix du produit :")
    price = parseInt(price)
    if (price > 0) {
        quantity = prompt("Quantité du produit :")
        quantity = parseInt(quantity)
        if (quantity > 0) {
            if (maxPrice < price) {
                maxPrice = price
            }
            if (minPrice > price) {
                minPrice = price
            }
            sumPrice += price * quantity
            cptArticle += quantity
        }
    }
} while (price > 0 && quantity > 0)

console.log("Prix maximum : " + maxPrice)
console.log("Prix minimum : " + minPrice)
console.log("Moyenne des prix : " + (Math.round((sumPrice / cptArticle) * 100) / 100))
console.log(("Nombre d'articles : " + cptArticle))