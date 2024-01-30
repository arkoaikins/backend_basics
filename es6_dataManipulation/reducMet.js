// This is a code snippet to illustrate how the reduce method is used
const array = [1, 2, 3, 4];
//so it can be used to reduce an array into a single value
const sum = array.reduce((accumulator, currentValue) => accumulator +
currentValue, 0);

console.log(sum);// outputs 10

/*
 In this example, reduce() is used to sum all the elements of
 an array. The accumulator starts with the value 0
 */
