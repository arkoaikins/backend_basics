// so now let's say i want to create a new class(Cat) that inherits from an old class(Anmial)
class Animal {
    constructor(legs, tail) {
        this.legs = legs;
        this.tail = tail;
    }

    makeNoise(sound = 'Loud noise') {
        console.log(sound);
    }

    get metaData() {
        return `Legs: ${this.legs}, tail: ${this.tail} `;
    }

    static return10() {
        return 10;
    }
}

//Now am going to create a new class to inherit from the Animal class
class Cat extends Animal {
    //you can add a constructor and add a new parameter
    constructor(legs, tail, head) {
        //but when you bring in the construtor you have to use the super keyword to refer to the ones belonging to the parent class
        super(legs, tail);
        this.head = head;
    }
}

//Now there are also instances that you will want to keep the constructor the same without adding any parameter
//so in the case you create the new child class without a constructor but you can overite methods in the parent class when you 
//create a function with the same name
class Dog extends Animal {
    makeNoise(sound = 'Faint voice')  {
        console.log(sound);
    }
}

const mydog = new Dog('big', 'long');
mydog.makeNoise();
//so u could see that the makenoise was overwritted


//Now we can also use other methods from the parent class
console.log(mydog.metaData)
