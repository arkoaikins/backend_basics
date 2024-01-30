//Let't look at how to work with typed arrays

// Create a new Int32Array with 4 elements
const intArray = new Int32Array(4)

// Set Values in the array
intArray[0] = 10;
intArray[1] = 20;
intArray[2] = 30;
intArray[3] = 40;

// Access values in the array
console.log(intArray[0])

//Iterate over the array
for(let i = 0; i < intArray.length; i++){
    console.log(intArray[i])
}