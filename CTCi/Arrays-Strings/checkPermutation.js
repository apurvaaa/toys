// Given 2 strings, write a method to decide if one is a permutation of the other

const checkPermutation = (s1, s2) => {
    let hash = {}
    if (s1.length !== s2.length) return false
    for (let ele of s1) {
        if (hash[ele] === undefined) {
            hash[ele] = 0
        }
        hash[ele]++
    }
    for (let ele of s2) {
        if (hash[ele] === undefined) {
            return false
        }
        hash[ele]--
        if (hash[ele] === 0) {
            delete hash[ele]
        }
    }

    if (Object.keys(hash) !== 0) {
        return false
    }
    return true
}

console.log(checkPermutation('abcdefg', 'agfbdee'))











