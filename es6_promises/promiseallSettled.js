 /*so just like how we did for the promise.all we going to do the same for promise.allSettled
but we know that with Promise.allSettled it will wait for all the promises to settle before it tells you the ones
that failed and the ones that passed 
 */
const mypromises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.reject(3),
    Promise.resolve(4),
    Promise.reject(5),
    Promise.resolve(6),
    Promise.reject(7)
]

Promise.allSettled(mypromises)
    .then(results => {
        console.log("All these tests passed sucessfully")
        console.log('Results:', results)
    })
    .catch(error =>{     
        console.log('This one caused an error', error)
    })

/* When you run the code you can see that it does not even get to the catch error
because promise.allSettled resolves all promises and provide which ones that were fufilled or rejected 
so in the file promiseallSettledCorr.js

you could see that they are handled to print well
*/