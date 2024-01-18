/* Let's consider a real-world scenario where you're working with a third party object,and you need
to add new properties to it without the risk of property name collisions.Symbols are perfect for this
*/

let user = {
    name: 'John Doe',
    age: 30
};

//so supposing you want to add a unique ID to this user object without altering existing properties
const uniqueID = Symbol ('userID');
user[uniqueID] = '12345';
console.log(user[uniqueID])
//so now a new property has been added to the user object using the symbol keyword 