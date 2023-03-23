
// With class

/**
 * 
 */
class Item {
    /**
     * @param {Integer} price 
     * @param {Integer} quantity 
     */
    constructor(price, quantity) {
        this.price = price
        this.quantity = quantity
    }

    get() {
        return this
    }

    getPrice() {
        return this.price
    }

    getQuantity() {
        return this.quantity
    }
}


/**
 * 
 */
class Cart {
    constructor() {
        this.items = []
    }

    show() {
        this.items.forEach(item => {
            console.log("quantity : " + item.quantity, "price : " + item.price)
        })
    }

    /**
     * 
     * @param {Integer} price 
     * @param {Integer} quantity 
     */
    addItem(price, quantity) {
        this.items.push(new Item(price, quantity))
        this.price += price
        this.totalQuantity += this.totalQuantity
    }

    getMinPrice() {
        let min = Number.MAX_VALUE
        this.items.forEach((item) => {
            if (item.getPrice() < min) {
                min = item.getPrice()
            }
        })
        return min
    }

    getMaxPrice() {
        let max = -Number.MIN_VALUE
        this.items.forEach((item) => {
            if (item.getPrice() > max) {
                max = item.getPrice()
            }
        })
        return max
    }

    getTotalPrice() {
        let totalPrice = 0
        this.items.forEach(item => {
            totalPrice += item.getPrice()
        })
        return totalPrice
    }

    getTotalQuantity() {
        let totalQuantity = 0
        this.items.forEach(item => {
            totalQuantity += item.getQuantity()
        })
        return totalQuantity
    }

    getAvgPrice() {
        return Math.round(this.getTotalPrice() / this.getTotalQuantity() * 100) / 100
    }
}

let shoppingCart = new Cart()

do {
    price = prompt("Prix du produit :")
    price = parseInt(price)
    if (price > 0) {
        quantity = prompt("Quantité du produit :")
        quantity = parseInt(quantity)
        if (quantity > 0) {
            shoppingCart.addItem(price, quantity)
        }
    }
} while (price > 0 && quantity > 0)

shoppingCart.show()

console.log("Prix maximum : " + shoppingCart.getMaxPrice())
console.log("Prix minimum : " + shoppingCart.getMinPrice())
console.log("Moyenne des prix : " + shoppingCart.getAvgPrice())
console.log("Nombre d'articles : " + shoppingCart.getTotalQuantity())