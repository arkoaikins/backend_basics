//so before ES6 you needed to define property name and parameter even if they are the same
function createPerson(name, age) {
    return {
        name: name,
        age: age
    };
}
const person = createPerson("Kofi", 45);
console.log(person);

// but with ES6 we use the property shorthand
function addPerson(name, age){
    return {
        name,
        age
    };

}
const add = addPerson("John", 24)
console.log(add)