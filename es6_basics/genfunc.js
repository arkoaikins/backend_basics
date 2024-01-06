//so generator functions are able to pause execusion and resume using the yield keyword
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = numberGenerator();//creating a Generator

console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3

//the generator.next() resumes the function execution from where it was last paused by yield