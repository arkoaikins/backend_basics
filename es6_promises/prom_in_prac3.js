function myAsyncFunction() {
    return new Promise((resolve, reject) => {
        //Simulating an asynchronous operation
        setTimeout(() => {
            const success = true; // Replace with actual logic
            if (success) {
                resolve('Operation successful');
            } else {
                reject('Operation failed');
            }
            
        }, 1000); // 1 second delay

    });
}