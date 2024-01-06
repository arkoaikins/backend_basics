//ES5
// var x = function(x, y) {
//     return x * y;
// }

//ES6
const x = (x, y) => x * y;
var y = x(5, 6)
console.log(y)

// you can only omit the return keyword and curly braces if the function is a single statement
//so this example might be suitable
// const x = (x, y) => {return x * y};