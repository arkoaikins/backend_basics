const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);

//example
const numbers = [23,55,21,87,56];
let maxValue = Math.max(...numbers);
console.log(maxValue)


/*
// In function calls

function sum(a, b, c) {
    return a + b + c;
}
const values = [1, 2, 3];
console.log(sum(...values)); // 6

// In Objects
const obj1 = {a: 1, b:2};
const obj2 = {b: 3, c: 4};
const combinedObj = { ...obj1, ...obj2}; // {a: 1, b:3, c:4}
*/