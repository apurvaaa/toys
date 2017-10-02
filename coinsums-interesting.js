/*
TODO:

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/
var refHash = {
  '1p': 1,
  '2p': 2,
  '5p': 5,
  '10p': 10,
  '20p': 20,
  '50p': 50,
  '£1': 100,
  '£2': 200
}

//assuming no decimals as input, only string
var solutionHash = {
  1: [['1p']]
}
const makeChange = (allPence, minDenomination = 0) => {
  //assuming countToAmount to be in pence always

  // const allPence = countToAmount;
  // if (solutionHash÷)
//base case
console.log('minDenomination', minDenomination);
  console.log('count to amount: ', allPence);
  if (allPence < minDenomination) {
    return [];
  }
  if (solutionHash[allPence] !== undefined) {
    console.log('solution hash', solutionHash[allPence]);
    return solutionHash[allPence];
  }
  const denominations = Object.keys(refHash);
  const results = [];
  let rawResult;
  let newResult;
  for (let i  = 0; i < denominations.length; i++) {
    console.log('(min deno, k)', minDenomination,' ,', refHash[denominations[i]]);
    if (refHash[denominations[i]] >= minDenomination) {
      if (allPence - refHash[denominations[i]] > 0) {
        rawResult = makeChange(allPence - refHash[denominations[i]], refHash[denominations[i]]);
        console.log('raw results: ', rawResult);
        for (let j = 0; j < rawResult.length; j++) {
          newResult = (rawResult[j].concat([denominations[i]]));
          results.push(newResult)
        }
      }
      else if (allPence - refHash[denominations[i]] === 0) {
        results.push([denominations[i]])
      }
    }
  }
  console.log(results);
  solutionHash[allPence] = results;
  return results;

}

const arrayExists = (array, subArray) => {
  //loop through all arrays
  for (let i = 0; i < array.length; i++) {

  }
}
// makeChange(1);
makeChange(5);

