//so  template literals allows us to use `` (backticks) to print a variable
let word1 = 'kofi'
let word2 = 'maame'
let num1 = 3
let num3 = 5
const fullname = word1 + ' ' + word2
console.log(fullname)

//so this is what template literal will allow you to do
const myname = `${word1} ${word2}`
console.log(myname)

//you can even use it for addition
const add = `${num1 + num3} ${myname}`
console.log(add)

// it can also be used for multi line strings
const multi = `${word1}
${word2}
`;
console.log(multi)