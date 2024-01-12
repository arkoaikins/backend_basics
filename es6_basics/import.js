// run code with npm run dev import.js

/*so this the file that is taking variables from other files 
through the import keyword
*/
import {data} from './export.js';
console.log(data);

//after importing,you can also add more things to what you have imported
let updatedData = data;
//so push is used to add a value to an array
updatedData.push(5);
console.log(updatedData);