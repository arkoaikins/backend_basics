import { ConsoleWriter } from "istanbul-lib-report";

/*
so to add a function in a class in javascript,Fist create the
class
*/
export class Animal{
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
    }

    //now u can add the function
    makenoise(sound='Loud Noise', intensity) {
        console.log(sound);
        console.log(intensity);
    }
}

//it is imported by 'importclassFunc.js'