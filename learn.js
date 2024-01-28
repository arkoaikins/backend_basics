function learn() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           const mybook = true;
           if (mybook) {
            resolve("my book is available");
           } else {
            reject("My book is not available");
           }

        },200)
    });
}

learn()
    .then((result) => {
        console.log("it is done", result)
    })
    .catch((error),)
