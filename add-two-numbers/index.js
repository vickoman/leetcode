const addTwoNumbers = (arrgOne, arrgTwo) => {
    const amountOne = parseInt(arrgOne.join(''));
    const amountTwo = parseInt(arrgTwo.join(''));
    const result = String(amountOne + amountTwo).split('').map(v => parseInt(v)).reverse();
    return result;
    
};

console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])); //Should return [7,0,8]