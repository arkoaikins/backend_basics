function outerFunction() {
    const outerVariable = 'I am fron outer function';

    function innerFunction() {
        const innerVariable = 'I am from inner function'
        console.log(outerVariable);//Assessing outerVariable from the OuterFunction
        console.log(innerVariable); //Assessing innerVariable from innerFunction
    }

    innerFunction(); // Call innerFunction from within outerFunction
    console.log(outerVariable); //Acess outerVariable from outerFunction
    console.log(innerVariable); // this will result in reference because you are trying to acess an innerVariable

}

outerFunction()