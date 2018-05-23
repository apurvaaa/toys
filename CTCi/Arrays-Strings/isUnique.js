// implement algorithim to find if a string has all unique elements.
// What if you cannot use additional DS?

const isUnique = (str) => {
    for (let i = 0; i < str.length - 1; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false
            }
        }
    }
    return true
}

console.log(isUnique('sbcdef'))
console.log(isUnique('cbcdef'))
console.log(isUnique('sccdef'))