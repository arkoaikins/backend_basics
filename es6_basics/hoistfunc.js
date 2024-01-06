//the entire function is hoisted to the top of it's scope
hello(); //"Hello,world!"
function hello() {
    console.log("Hello, World!");
}

//so in this code the hello function is hoisted to the top so calling hell before it declaration works