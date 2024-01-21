let collection = {
    items: [1, 2, 3],
    [Symbol.iterator]: function* () {
        for(let item of this.items) {
            // Custom behavior: Let's say we want to square each item
            yield item * item;
        }
    }
};

for (let squaredItem of collection) {
    console.log(squaredItem);
}

//In this case, Symbol.iterator is used to make the 
//collection object iterable. The for...of loop can now directly iterate over 
//collection, yielding each item in the items array.

/*
Without Symbol.iterator: If you did not use the Symbol.iterator and 
want to iterate over the ittems array directly,it would look like

for(let item of collection.items) {
    console.log(item); // Outputs: 1,2 3
}

*/
