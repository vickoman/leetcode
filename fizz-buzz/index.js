const fizzBuzz = (n) => {
    const newArray = [];
    for(let i=1; i<= n; i++) {
        if(i%5 === 0 && i%3 === 0) {
            newArray.push("FizzBuzz");
        } else if(i%3 === 0) {
            newArray.push("Fizz");
        } else if(i%5 === 0) {
            newArray.push("Buzz");
        } else {
            newArray.push(String(i));
        }
    }
    return newArray;
};

console.log(fizzBuzz(6)); // should return [ '1', '2', 'Fizz', '4', 'Buzz', 'Fizz' ]