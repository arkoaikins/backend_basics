// Now let's create a new weakMap and see how weakmaps work
const myWeakMap = new WeakMap();

//now let's bring in the object(keys)
let obj1 = {}
let obj2 = {}

//let's add key-value pair to the weakmap
// using the same keyword in map(set)
myWeakMap.set(obj1, 'Value1');
myWeakMap.set(obj2, 'Value2');

// Let's try to print out the values of what we got
console.log(myWeakMap.get(obj1));
console.log(myWeakMap.get(obj2));

// Now this is how we can remove the refrence to obj1
obj1  = null; // so this removes obj1 from the weakmap and here is where the weakMap logic is at

/*So the entry associated with obj1 will be automatically removed fro the
WeakMap during garbage collection
*/
console.log(myWeakMap.get(obj2));// Output: value 2 
console.log(myWeakMap.get(obj1)); // It has been removed from the weak map(output: undefined)