export default class User {
    constructor() {
        this.firstName = ""
        this.lastName = ""
        this.age = -1
    }

    getFirstName() {
        return this.firstName
    }
    setFirstName(firstName) {
        this.firstName = firstName
    }
    getLastName() {
        return this.lastName
    }
    setLastName(lastName) {
        this.lastName = lastName
    }
    getAge() {
        return this.age
    }
    setAge(age) {
        if (typeof age != "number") {
            throw new TypeError
        } else if (age > 0) {
            this.age = age
        } else {
            throw new Error
        }
    }
    checkMaturity() {
        if (this.age > 18) {
            console.log("Vous êtes majeur")
        } else if (this.age == 18) {
            console.log("Vous êtes majeur et vous avez exactement 18 ans")
        } else {
            console.log("Vous êtes mineur")
        }
    }
}