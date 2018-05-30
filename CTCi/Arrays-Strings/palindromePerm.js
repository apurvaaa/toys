// Palindrome permutaion: Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards or backwards. A permutation is a rearrangement of letters.
// A palndrome doesnt need to be limited by dictionary words

const palindromePermutation = (str) => {
    let hash = {}

    for (let i = 0; i < str.length; i++) {
        if (hash[str[i]] === undefined) {
            hash[str[i]] = 0
        }
        hash[str[i]]++
    }

    let odds = 0;
    let keys = Object.keys(hash)
    for (let key of keys) {
        if (hash[key] % 2 !== 0) {
            odds++;
        }
    }
    
    if (odds === 0 && str.length % 2 === 0) return true
    else if (odds === 1 && str.length % 2 === 1) return true 
    else return false
}
console.log(palindromePermutation('abcbcaaba'))