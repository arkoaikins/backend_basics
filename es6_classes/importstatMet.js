import { Animal } from './statMet.js'

let dog = new Animal('big', 'long')
console.log(dog.head)

//now let me use the normal function
dog.makenoise('big sound', 'long sound')

// now let's look at the static method which you do not need
// the dog instance,you can use it straight away because it is wit the class itself
console.log(Animal.cry())

//Run it `npm run dev <filename>