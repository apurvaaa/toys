/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  const hash = {};
// hash = { item1: [index, count], item2: ...}

  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]] === undefined) {
      hash[arr[i]] = [i, 0];
    }

    hash[arr[i]][1]++;
  }
  let firstEven = [arr.length, 0];
  const keys = Object.keys(hash);
  for (let key of keys) {
    
    if ((((hash[key])[1]%2) === 0) && firstEven[0] > hash[key][0]) {
      firstEven[0] = hash[key][0];
      firstEven[1] = key;
    }
  }
  return firstEven[1];
};

console.log(evenOccurrence([0,0, 0, 2, 1, 1, 1, 1]));