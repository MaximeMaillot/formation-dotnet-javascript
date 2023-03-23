// Trouvez des exemples de composition faible et forte.

// Source : https://www.koderhq.com/tutorial/javascript/composition/

// Class within class so they don't depend from each other as much as inheritance

class Animal {

    eat() {
        document.write("Eating...<br>");
    }
}

class Walkable {

    walk() {
        document.write("Walking...<br>");
    }
}

class Swimmable {

    swim() {
        document.write("Swimming...<br>");
    }
}

class Dog {

    constructor() {
        this.animal = new Animal();
        this.walkable = new Walkable();
        this.swimmable = new Swimmable();
    }
}

class Fish {

    constructor() {
        this.animal = new Animal();
        this.swimmable = new Swimmable();
    }
}