//traditionally we used to add the function keyword and colon when defining methods inside an object
var myObject = {
    myMethod: function(param) {
        //method body
        console.log(param);

    }
    
};

myObject.myMethod('test');


//but in ES6 you define the method without the fuunction keyword and the colon
const myObjects = {
    myMethods(param) {
        console.log(param);

    }
};
myObjects.myMethods('testing again')