// Lets look at the set Data structure and things you can do with it

let mySet = new Set();
// adding values
mySet.add(1);
mySet.add(5);
mySet.add("some text");
// Checking if a value is in the set
if (mySet.has(1)) {
    console.log("Set contains 1");
}

// Iterating over a set
for(let item of mySet) {
    console.log(item);
}

//Removing a value
mySet.delete(5);