const mypromises = [
    Promise.resolve(1),//so promise.resolve(reasons)
    Promise.resolve(2),
    Promise.reject(3),
    Promise.resolve(4),
    Promise.reject(5),
    Promise.resolve(6),
    Promise.reject(7)
  ];
  
  Promise.allSettled(mypromises)
    .then(results => {
      console.log("Results:")
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          console.log(`Promise ${index + 1}: Resolved with value ${result.value}`);
        } else {
          console.log(`Promise ${index + 1}: Rejected with reason ${result.reason}`);
        }
      });
    })
    .catch(error => {
      console.error('An unexpected error occurred:', error);
    });