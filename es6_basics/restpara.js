//rest ... parameter allows a function to treat
//and indefinite number of argu as an array
function sum(...args) {
    let sum = 0;
    for(let arg of args) sum += arg;
    return sum;
}
let x = sum(4, 9, 16,25, 29, 100, 66, 77);
console.log(x)

function concatenateStrings(...strings) {
    return strings.join('');
}
console.log(concatenateStrings("Hello ","world ", "!")); //"Hello world !"