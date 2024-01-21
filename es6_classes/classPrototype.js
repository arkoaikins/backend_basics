/* You can go and check the testClass.js file before you come here */

// So you can even add a new method to a class after defining th class
//with that you use the `prototype keyword`

class myClass {
    constructor(value) {
        this.value = value;
    }

    printValue() {
        console.log(this.value);
    }
}

//adding a function using the prototype keyword
// Which is modifying the function outside its inital initalization with the prototype keyword
myClass.prototype.doubleValue = function () {
    console.log(this.value * 2);
};

//creating an instance of myClass
const myObject = new myClass(5)

//calling methods on the instance
myObject.printValue();
myObject.doubleValue();