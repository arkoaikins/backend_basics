/* All is imported by importgetmethod.js */
export class Human {
    constructor(stomach, head) {
        this.stomach = stomach;
        this.head = head; 
    }

    // now let me create a get function here
    get features() {
        return `his head is ${this.head} and stomach is ${this.stomach}`
    }
}

// Another examole with another class
export class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    get area() {
        return Math.PI * this.radius * this.radius;
    }
}





