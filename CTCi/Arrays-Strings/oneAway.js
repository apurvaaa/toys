// one away: There are 3 types of edits that can be performed on strings: insert a char, 
// remove a char, replace a char.
// Given 2 strings, write a function to check if they are 1 edit away


const oneAway = (str1, str2) => {
    let hash = {}

    for (let i = 0 ; i < str1.length; i++) {
        if (hash[str1[i]] === undefined) {
            hash[str1[i]] = 0
        }
        hash[str1[i]]++
    }
    for (let i = 0 ; i < str2.length; i++) {
        if (hash[str2[i]] === undefined) {
            hash[str2[i]] = 0
        }
        hash[str2[i]]--
    }
    let sum1 = 0, sum2 = 0;
    for (let key in hash) {
        sum1 += Math.abs(hash[key])
        sum2 += hash[key]
    }

    if (sum1 <= 2 && Math.abs(sum2) <= 1) return true
    else return false

}

console.log(oneAway('abcba', 'bcaaa'))
