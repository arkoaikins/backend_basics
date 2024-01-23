/* 
SO this is how to work with the map data structure
It is used when you want key -  value pair data
It is when each value is associated with Unique Keys
*/

// You create a map this way
let myMap = new Map();

//add Key-value pairs using `.set` keyword
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');

// Acessing a Value in the Map
console.log(myMap.get('key1')); //will output 'value1'

// Iterating over map
for (let [key, value] of myMap) {
    console.log(key + ' = ' + value);
}

// Checking if a key is in the map
if(myMap.has('key2')) {
    console.log("Map contains key2")
}

// Removing a key-value pair  using the `.delete keyword`
myMap.delete('key1');