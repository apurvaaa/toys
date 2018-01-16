/* 
The maximum differene between elements in some array a, is defined as 
the largest difference between any a[i] and a[j] where a[i] < a[j] and i < j.
e.g. if a = [4, 1, 2, 3] then max difference would be: a[3] - a[1] = 3 - 1 = 2
The function must return an integer denoting the maximum difference between any
pair of elements in a, if no such number exists, (whole array is in descending order) 
then, return -1.



Questions also used for stock prices. Couls be solved by dynamic programming
*/

// brute force
function maxDifference1(a) {
  let res = -1;
  for (let i = 1; i < a.length; i++) {
    for (let j = 0; j < i; j++) {
        if (a[j] < a[i] && (a[i] - a[j]) > res) {
            res = a[i] - a[j]
        } 
    }
  }
  return res;
}

// using min
  function maxDifference3(a) {
  
    if (a === undefined || a.length === 1 || a.length === 0) return -1;
    let res = a[1] - a[0];
    let min = a[0];
    for (let i = 1; i < a.length; i++) {
      if (a[i] - min > res) {
        res = a[i] - min
      }
      if (a[i] < min) {
        min = a[i]
      }
    }
    if (res < 0) return -1
    // if (a[1] < a[0] && min === a[0]) return -1;
    return res;
  }
  // console.log(maxDifference3([10 ,11, 4, 3, 1]))
  console.log(maxDifference3([5, 3, 1]))