// So how are you going to update a value in Map
// to update we use also use the set keyword

//Creating a Map with some initial key-value pairs
const map = new Map([
    ['key1', 50],
    ['key2', 75],
    ['key3', 125]
]);

for(let [key, value] of map) {
    console.log(key, value);
} 

// To update the value of 'key2'
map.set('key2', 100);

//check if the update was sucessful
console.log(map.get('key2')); //so this will not output the value 100, which was ealier 75

