const myPromise = new Promise((resolve, reject) =>{
    //Simulating an asynchronous task(e.g.)
    const dataFetchedSucessfully = false;
    // check if the task was sucessful
    if (dataFetchedSucessfully) {
        //Resolve the promise with a sucess message after a delay(simulated with setTimeout)
        setTimeout(() => {
            resolve('Data was fetched sucessfully!');
        }, 2000); //Simulating a delay of 2 seconds
    }else {
        //Reject the promise with an error message
        reject('Failed to fetch data!');
    }
});

//Using the created promise
myPromise
    .then((result) => {
        //Handle the resolved(sucess) state
        console.log('Success', result);
    })
    .catch((error) => {
        //Handle the rejected(error) state
        console.error('Error:', error);
    })


    // So you could see that we use result for resolve
    //and we use error for reject
    //not the differences
    //so since const dataFetchedSucessfully = false;
    //it will display the error message,but when it is true it will display the result/resolved message