// This is a way of putting promises in order so that one comes after the order

new Promise((resolve,reject) => {
    setTimeout(() => resolve(1), 1000); // resolves with 1 after 1 second
})
    .then((result) => {
        console.log(result); // 1
        return result * 2;
    })
    .then((result) => {
        console.log(result); // 2
        return result * 3
    })
    .then((result) => {
        console.log(result); // 6
    })
    .catch((error) => {
        console.error('Error', error);     
    });


/* Another example,more complex one */

//First asynchronous operation
const firstAsyncOperation = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('First operation completed');
        }, 1000);
    });
};

//Second asynchronous operation that depends on the result of the first operation
const secondAsyncOperation = (previousResult) => {
    return new Promise((resolve, reject) => {
        if(previousResult === 'First operation completed') {
            setTimeout(() => {
                resolve('Second operation completed')
            }, 1500);
        } else {
            reject('Second operation failed: First operation did not complete successfully')
        }
    });
};

// Using the promises and changing them
firstAsyncOperation()
    .then((result) => {
        console.log(result); //Output: First operation completed
        return secondAsyncOperation(result); //returning a new promise
    })
    .then((result) =>{
        console.log(result); //Output: Second operation completed
    })
    .catch((error) => {
        console.error(error); //Output: Second operation failed:First operation did not compelte sucessfully
    });