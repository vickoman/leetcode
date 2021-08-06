const pascal = (object) => {
    const nArray = Object.keys(object).map(el => {
        const newName = el.split("_").map((word, idx) => {
            let nWord = '';
            if(idx >0) {
                nWord = word.charAt(0).toUpperCase() + word.slice(1);
            }else {
                nWord = word;
            }
            return nWord
        })
        return newName.join("");
    });

    Object.keys(object).map((el, idx) => {
        let tempValue = object[el];
        delete object[el];
        object[nArray[idx]] = tempValue;
    });
    return object;
};

const objTest = {
    camel_case: true,
};

console.log(pascal(objTest)); //Should return { camelCase: true }