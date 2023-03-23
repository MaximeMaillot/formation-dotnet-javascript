// Trouvez des exemples des classes et des objets de la vie courante

// Source : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

// Declaration
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// Expression; the class has its own name
const rectangleName = class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}


// Source : https://www.w3schools.com/js/js_classes.asp

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(x) {
        return x - this.year;
    }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2014);
console.log("My car is " + myCar.age(year) + " years old.");