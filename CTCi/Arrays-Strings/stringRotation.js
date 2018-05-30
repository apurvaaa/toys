
// String rotation : Assume you have a method isSubstring which checks if one word is a substring of another. Given 
// 2 strings, check if ones tring is a rotation of another, using only one call to isSubstring method.

const isSubString = (str1, str2) => {
    return str1.includes(str2)
}
const stringRotation = (str1, str2) => {
    if (str1.length !== str2.length) return false
    return isSubString(str1 + str1, str2)
}

console.log(stringRotation('abcde', 'cdeab'))