import { Animal } from './defClass.js';

let cat = new Animal('round', 'long');

console.log(cat);
//we can also call by param
console.log(cat.head) //output round
console.log(cat.tail) //long
//so the constructor in defClass.js is the one that is setting the
// values that we are using 

//we can also change values fast
cat.head = 'very big'
console.log(cat.head)