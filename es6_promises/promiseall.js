// this is an example of using promise.all
const promises =  [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3) //so incase i reject the last one the whole promise will provide the reject messag
    //Promise.reject(4)  
];

// we use promise.all to bundle all the promises concurrently
Promise.all(promises) //the promises is an array of promises initialized above
    .then(results =>{
        console.log('All promises resolved');
        console.log('Results:', results)
    })
    .catch(error => {
        console.log('An error occurred:', error);
    });