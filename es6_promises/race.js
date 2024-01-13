//creating some promises to simulate asynchronous tasks
const task1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Task 1 completed'), 300); //complete in 3 seconds
});

const task2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Task 2 completed'), 200); //complete in 2 seconds
});

const task3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Task 1 completed'), 400); //complete in 4 seconds
});

// Using Promise.race to return the result of the first resolved promise
Promise.race([task1, task2, task3])
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

//so it will only output Task 2 completed becuase it is the one that
// was resolved first
/*
 This pattern is particularly useful in scenarios where you have multiple sources for the same kind of data or action, 
 and you want to proceed with the first successful one. Examples include:

Fetching data from multiple servers and using the response from the server that responds first.
*/