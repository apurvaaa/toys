/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/


// var i ;
// var bubbleSort = function(array) {
//   var swapped = false;
//   for (i = 0; i < array.length - 1; i++) {
//     for (var j = 0; j <= array.length - 1 ; j++) {
//       if (array[j] > array[j + 1]) {
//         var swap = array[j + 1];
//         array[j + 1] = array[j];
//         array[j] = swap;
//         swapped = true;
//       }
//     }
//     if (!swapped) {
//       break;
//     }
//     swapped = false;
//   }
//   return array;
// };
// //Worst time conplexity is always O (n square)

//without considering every element
const bubbleSort1 = (array) => {

  for (let rounds = 0; rounds < array.length - 1; rounds++) {
    for (let j = 0; j < array.length - 1 - rounds; j++) {
      if (array[j] > array[j+1]) {
        let temp = array[j+1];
        array[j+1] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
}

// with leaving as soon as something is not swapped
const bubbleSort2 = (array) => {
  
    for (let rounds = 0; rounds < array.length - 1; rounds++) {
      let swapped = false;
      for (let j = 0; j < array.length - 1 - rounds; j++) {
        if (array[j] > array[j+1]) {
          let temp = array[j+1];
          array[j+1] = array[j];
          array[j] = temp;
          swapped = true;
        }
      }
      if (!swapped) return array;
    }
  
    return array;
  }
console.log(bubbleSort1([2, 1, 3, 35, 12, 67, -3]));
console.log(bubbleSort2([2, 1, 3, 35, 12, 67, -3]));