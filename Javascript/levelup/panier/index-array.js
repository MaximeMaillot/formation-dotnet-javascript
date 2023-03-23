let maxPrice = -Number.MIN_VALUE
let minPrice = Number.MAX_VALUE
let sumPrice = 0
let cptArticle = 0

let price = 1
let quantity = 1

let shoppingCart = []
do {
    price = prompt("Prix du produit :")
    price = parseInt(price)
    if (price > 0) {
        quantity = prompt("Quantité du produit :")
        quantity = parseInt(quantity)
        if (quantity > 0) {
            shoppingCart.push({ "price": price, "quantity": quantity })
        }
    }
} while (price > 0 && quantity > 0)

shoppingCart.forEach(item => {
    sumPrice += item.price
    if (maxPrice < item.price) {
        maxPrice = item.price
    }
    if (minPrice > item.price) {
        minPrice = item.price
    }
    cptArticle += item.quantity
})

console.log("articles : " + JSON.stringify(shoppingCart))

console.log("Prix maximum : " + maxPrice)
console.log("Prix minimum : " + minPrice)
console.log("Moyenne des prix : " + (Math.round((sumPrice / cptArticle) * 100) / 100))
console.log(("Nombre d'articles : " + cptArticle))