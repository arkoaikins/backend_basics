export class Animal {
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
    }

    //normal function
    makenoise(sound, intensity) {
        console.log(sound, intensity)
    }

    //now this is how to create the static method in Js
    static cry() {
        console.log('I am crying');
        return 10;
    }
}


// It is being imported by importstatMet.js