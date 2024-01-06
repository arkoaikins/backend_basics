const numbers = [1, 2, 3];
const [first, second, third] = numbers //unpacking values into variables
console.log(first)// 1
console.log(second) // 2
console.log(third) // 3

//so now  1 has been stored in first
// 2 stored in second etc

// Example with object
const person = {name: 'Alice', age: '25'};
const{name, age} = person;
console.log(name, age)