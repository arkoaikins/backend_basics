// the let keyword allows you to declare a variable with block scope
// variables declared with var have global scope,and they cannot have a block scope
var x = 10;
// Here x is 10
{
    let x = 2;
    //Here2 x is 
    console.log(x)
}
// Here x is 10
console.log(x)