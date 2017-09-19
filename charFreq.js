/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


// var characterFrequency = function(string) {
// 	// let alphabet = 'abcdefghijklmnop';
//   let charFreq = {};
//   let result = [];
//   for (let ele of string) {
//   	if (charFreq[ele] === undefined) {
//   		charFreq[ele] = 0;
//   	} 
//   	charFreq[ele]++;
//   }
//   let keys = Object.keys(charFreq);
//   for (let key of keys) {
//     result.push([key, charFreq[key]]);
//   }
//    var compare = function(a, b) {
//     if (a[1] > b[1]) {
//     	return -1;
//     } else if (a[1] < b[1]) {
//     	return 1;
//     } else {
//     	let ret = (a[0] > b[0]) ? 1 : (a[0] < b[0] ? -1 : 0);
//     	return ret;
//     }
//   }

//   result.sort(compare);

//   return result;
// };

const characterFrequency = (string) => {
  const hash = {};
  const solution = [];
  for (let i = 0; i < string.length; i++) {
      if (hash[string[i]] === undefined) {
          hash[string[i]] = 0;
      } 
      hash[string[i]]++;
  }

  const keys = Object.keys(hash);

  for (let i = 0; i < keys.length; i++) {
    solution.push([keys[i], hash[keys[i]]]);
  }

  // sort solution
  solution.sort(compareFunc)
  return solution;
}

const compareFunc = (a, b) => {
  if (a[1] > b[1]) {
      return -1;
  } else if (a[1] < b[1]) {
      return 1;
  } else {
      if (a[0] > b[0]) {
        return 1;
      }
      else if (a[0] < b[0]) {
          return -1;
      }
      else {
          return 0;
      }
  }
}



// tests
console.log(characterFrequency('mississippi')) 
// [
//   ['i', 4],
//   ['s', 4],
//   ['p', 2],
//   ['m', 1]
// ])
console.log(characterFrequency('miaaiaaippi')) ;
// [
//   ['a', 4],
//   ['i', 4],
//   ['p', 2],
//   ['m', 1]
// ]);

console.log(characterFrequency('mmmaaaiiibbb'));
// [
//   ['a', 3],
//   ['b', 3],
//   ['i', 3],
//   ['m', 3]
// ]);