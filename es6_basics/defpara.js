//In Es6 functions are allowed to have default values
function myFunction(x, y = 10) {
    //y is 10 if not passed or undefined
    return x + y;
}
console.log(myFunction(5)); // will return 15


//another example
function greet(name = "Guest") {
    return `Hello,${name}!`;
}
console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet()); // "Hello, Guest"