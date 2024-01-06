//var has a function scop
//let has a block scope
function testVarLet() {
    if (true) {
        var x = 2; //function scope
        let y = 3; //Block scope
        console.log(y)
    }
console.log((x)); //output :2 because it is still in the function
console.log(y); //ReferenceError: y is not defined,meaning it can only be acessed in the block
}
testVarLet()