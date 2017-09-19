/**
 * -  TODO: iterative solution -
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

/*
working solution:
var allAnagrams = function(string) {
  // Your code here.

  var uniqueOutput = {};

  (function anagram (ana, str) {
    if (str === '') { uniqueOutput[ana] = 1; }

    for (var i = 0; i < str.length; i++) {
      anagram(ana + str[i], str.slice(0, i) + str.slice(i + 1));
    }
  })('', string);

  return Object.keys(uniqueOutput);
  };
*/

var allAnagrams = function(string) { 
    // this is better done recursively
  
    // base condition: 
    if (string.length === 2) 
      return [string, string[1]+string[0]];
  
    const solution = [];
    let newStr = string;
  
    // loop for swapping ele with 1st
    for (let i = 1; i <= string.length; i++ ) {
  
      // loop for getting anagrams for string[1 - (n-1)]
      let subAna = allAnagrams(newStr.slice(1));
      for (let j = 0; j < subAna.length; j++) {
        if (solution.indexOf(newStr[0] + subAna[j]) === -1) {
          solution.push(newStr[0] + subAna[j]);
        }
      }
  
      // swap ele[i] with ele[0]
      if (i !== string.length) {
        newStr = string[i] + string.slice(1 , i) + string[0] + string.slice(i + 1);
      }
      // call recursive func on new string
    }
    return solution;
  };
  
  
  // var anagrams = allAnagrams('aacd');
  // console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]