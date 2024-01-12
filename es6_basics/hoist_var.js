//let's look at var
console.log(a); //undefined, not ReferenceError
var a = 5;
console.log(a); //output :5
//Here the declaration `var` is hoisted to the top but not its initialization(`a=5`)
//so a is undefined when logged
//but in the second part the a is initialized so a =5