const longestCommonPrefix = (str) => {
    const ans = [];
    const s = str.reduce((p, v) => p.length < v.length ? p : v);

    for(let i = 0; i <= s.length-1; i++) {
        for(let j = 0; j<=str.length - 1; j++){
            if(s[i] != str[j][i]) {
                return ans.join("");
            } 
        }
        ans.push(s[i]);
    }
    return ans.join("");;
};

console.log(longestCommonPrefix(["flower","flow","flicker"])); //should return fl as prefix