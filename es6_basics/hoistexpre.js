//function expressions are not hoisted
try {
    myFunc(); //TypeError: myfunc is not a function    
} catch (e) {
    console.log(e.message);
}

var myFunc = function() {
    console.log("Hello from myFunc");
}