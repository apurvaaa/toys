var romanToInt = function(s) {
    // sumbols and number mapping
    const romanMap = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    };
    let prevVal = -1;
    let sum = 0;
    console.log('lenght', s.length);
    for (let i = s.length - 1; i >= 0; i--) {
      console.log('i', i);
      console.log('s[i]', romanMap[s[i]]);
        if (romanMap[s[i]] >= prevVal) {
            prevVal = romanMap[s[i]]
            sum += prevVal;
        } 
        else {
            prevVal = romanMap[s[i]]
            sum -= prevVal;
        }
        console.log('sum: ', sum);
    }
    return sum;
};

console.log(romanToInt("MCMXCVI"));