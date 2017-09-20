/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 */


const binarySearch = (array, searchValue, low = 0, high = array.length) => {
  if (array.length === 0) {
    return undefined;
  }
  let mid 
  // = Math.floor((high - low)/ 2) + low;;
  while (high >= low) {
    mid = Math.floor((high - low)/ 2) + low;
    if (array[mid] === searchValue) {
      return mid;
    } else if (array[mid] > searchValue) {
      high = mid - 1;
    } else if (array[mid] < searchValue) {
      low = mid + 1;
    }
  }

  return undefined;
}

var index = binarySearch([1, 2, 3, 4, 5], 4);
console.log(index); // 3