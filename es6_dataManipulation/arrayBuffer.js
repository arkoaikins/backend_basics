// Array buffer is a raw 10-byte binary buffer 
//and int8View is a view that lets you work with this buffer as an array of 8-bit integers
let buffer = new ArrayBuffer(10); //a buffer of 10 bytes
let int8View = new Int8Array(buffer); //A view of this buffer as 8-bit integers

// We also have Position in ArrayBuffer
// and the position could refer to the starting point
// in the ArrayBuffer from where the typed view begins to 
// read and write data
let int8View = new Int8Array(buffer, 2) //a view from position 2 in the buffer