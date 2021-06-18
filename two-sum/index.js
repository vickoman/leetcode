function twoSum(arrg, target) {
    for(let i=0; i<= arrg.length-1; i++) {
        let searchEl = target - arrg[i];
        let idx = arrg.indexOf(searchEl);
        if(idx !== -1 && idx !== i) {
            return [i, idx];
        }
    }
}
console.log(twoSum([2,4,11,15, 7], 9)); //should return [0, 4]