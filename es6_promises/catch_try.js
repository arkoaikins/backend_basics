function processData(asyncTask) {
    return asyncTask
        .then(result =>({status: 'success', data: result}))
        .catch(error => ({status: 'error', error:error.message}))
        .finally(() => console.log ('Process completed'));
}

// Example: Calling the processData function with a promise

// Create a function that returns a promise
function simulateAsyncTask() {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation
      setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
          resolve('AsyncTask completed successfully');
        } else {
          reject(new Error('AsyncTask encountered an error'));
        }
      }, 2000);
    });
  }
  
  // Call the processData function with the async task
  const asyncTaskPromise = simulateAsyncTask();
  
  processData(asyncTaskPromise)
    .then(result => console.log(result))
    .catch(error => console.error(error));
  