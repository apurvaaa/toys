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






// Palindrome permutaion: Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards or backwards. A permutation is a rearrangement of letters.
// A palndrome doesnt need to be limited by dictionary words

// one away: There are 3 types of edits that can be performed on strings: insert a char, remove a char, replace a char.
// Given 2 strings, write a function to check if they are 1 edit away

// String Compression: Implement a function to perform basic string compression using the counts of repeated chars. 
// If compressed string is not smaller than the original, your program should return the original string
// Asume string has only upper and lower case letters


// Rotate Matrix: Given an image represented by n x n matrix, where each pixel in the image is 4 bytes, write a method to 
// rotate the image 90 degrees. Can you do it in place?

// Zero MAtrix: Write a program such that if elements in a m x n matrix is zero, whole row and colum will be set zero.

// String rotation : Assume you have a method isSubstring which checks if one word is a substring of another. Given 
// 2 strings, check if ones tring is a rotation of another, using only one call to isSubstring method.