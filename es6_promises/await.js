function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Data retrieved');
        }, 5000); // 5 seconds
    });
}

async function getData() {
    console.log('Fetching data...');
    const result = await fetchData(); //so the await is used to wait for the promise in fetchData to finish before
    console.log('Data Received:', result)
}

getData()


