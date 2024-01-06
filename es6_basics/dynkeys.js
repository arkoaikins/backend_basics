function creaDynamicProperty(key, value) {
    return {
        [key]: value
    };
}

var dynamicKey = 'name';
var myObj = creaDynamicProperty(dynamicKey, 'John');
console.log(myObj) //output {name: 'John'}

//In this example the [key] is a computed property name.Whatever the value of key is at runtime will be used as the property name of the new object

//another example
let propertyPrefix = 'status';
let obj = {
    [propertyPrefix + '_active'] : true,
    [propertyPrefix + '_inactive']: false
};

console.log(obj) 