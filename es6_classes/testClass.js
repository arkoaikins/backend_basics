class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //Adding a method to the class
    greet() {
        return `Hello, my name is ${this.name}!`;
    }

    //Another method
    celebrateBirthday() {
        this.age += 1;
        return `Happy Birthday! I am now ${this.age} years old`;
    }
}

// Using the class and its methods
const alice = new Person('Alice', 30);
console.log(alice.greet()); // Outputs: Hello, my name is Alice!
console.log(alice.celebrateBirthday()); // Outputs:Happy Birthday! I am now 31 years old