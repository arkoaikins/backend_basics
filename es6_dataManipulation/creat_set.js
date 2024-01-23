/* In Js this is how you create a set 
so you start by creating a variable

*/

const exampleSet = new Set([1,1,1,2,2,2]);

console.log(exampleSet);
//so you will get an output of {1,2} because set does not store duplicates

//You can also check the size of the set
console.log(exampleSet.size); //output of 2

//You can also add elements to the set using `.add`
exampleSet.add(5)
console.log(exampleSet)

// You can also remove a value from a set using the `.delete` keyword
exampleSet.delete(5)
console.log(exampleSet)

//the delete keyword returns a boolen to actualy tell u wether it was sucessfull or not
console.log(exampleSet.delete(5)) //outputs false because 5 has already been deleted

//You can also check if a value exists in our set using `.has`
console.log(exampleSet.has(1)) //outputs true because 1 exists in our set

//you can also clear the set or rest it using `.clear`
exampleSet.clear();
console.log(exampleSet);p //outputs  no value because it has been resetted