// repitition is not allowed. order unimportant - recall pascal triangle

const numberOfcombinations = (n, k) => {
  if (k === 0 || k === n) return 1;
  if (k === 1) return n;

  // you either add the number or you dont
  return numberOfcombinations(n-1, k-1) + numberOfcombinations(n-1, k)
}

console.log(numberOfcombinations(3,1));
console.log(numberOfcombinations(3,0));
console.log(numberOfcombinations(3,3));

console.log(numberOfcombinations(3,2));
console.log(numberOfcombinations(4,3));
console.log(numberOfcombinations(4,2));


// strgugled with base cases