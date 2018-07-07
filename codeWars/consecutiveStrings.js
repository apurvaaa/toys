// COMPLETED
/* You are given an array strarr of strings and an integer k. Your task is to return the 
first longest string consisting of k consecutive strings taken in the array.

#Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", 
"abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
*/


function longestConsec(strarr, k) {
    let start = 0, end = k , longestLen = -1, longest = ''
        if (strarr.length < k || k < 0) return ''
        for (let i = k - 1 ; i < strarr.length; i++, start++, end++) {
      
          let cur;
          
            cur = strarr.slice(start, end).join('')
        
          if (longestLen < cur.length) {
            longest = cur
            longestLen = cur.length
          }
          
        }
        return longest
     }