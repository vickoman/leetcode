const reverse = (str) => {
    let arrStr = str.split("");
    let a = 0;
    let b = arrStr.length - 1;

    while(a<b) {
        let tmp = arrStr[a];
        arrStr[a] = arrStr[b];
        arrStr[b] = tmp;
        a += 1;
        b -= 1;
    }
    return arrStr.join("");
};

console.log(reverse("vickoman")); //should return namokciv
console.log(reverse("aloha")); //should return ahola