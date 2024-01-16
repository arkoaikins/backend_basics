//this is how to do the import
import { Animal } from './classFunc.js'

// so when you import you have to create an object of that Animal class
let cat = new Animal('big','long')
console.log(cat.head)

//now let's use the function
//so this will output the default sound
cat.makenoise();
//now i can put in my own parameters
cat.makenoise('very big sound', 'it was loud');