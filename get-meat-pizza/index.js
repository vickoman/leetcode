const getOrdersOfMeat = (input) => {
    const [placedOrdered, lineOfList, size ] = input.split("\n");
    const list = lineOfList.split(" ");
    const pizzaMeats = [];
    let i = 0;
    while(i < placedOrdered){
        const portion = list.slice(i, i + parseInt(size));
        if(portion.length === parseInt(size)){
            const findMeat = portion.filter(f => parseInt(f) < 0)[0];
            pizzaMeats.push(findMeat? parseInt(findMeat) : 0);
            i += 1;
        } else {
            break;
        }
    }
    return pizzaMeats.join(" ");
};

const data = "9\n-11 -2 19 -37 54 -18 10 20 30\n4";
console.log(getOrdersOfMeat(data));