const allBinaryStringsPrint = (n, solution = '') => {
  if (n === 0) {
    console.log(solution);
  } else {
    
    allBinaryStringsPrint(n - 1, solution + '0');
    allBinaryStringsPrint(n-1, solution + '1');
  }
}

const allBinaryStringsPrint2 = (n, solution = []) => {
  //optimized binaryStringGenerator
  if (n === 0) {
    console.log(solution.join(''));
  } else {
    solution[n-1] = 0;
    allBinaryStringsPrint2(n-1, solution);
    solution[n-1] = 1;
    allBinaryStringsPrint2(n-1, solution);
  }
}

const allDecimalStringsPrint = (n, solution = '') => {
  if (n === 0) {
    console.log(solution);
  } else {
    for (let i = 0; i < 10; i++) {
      allDecimalStringsPrint(n - 1, solution + i);
    }
  }
}

// allBinaryStringsPrint(3);
allBinaryStringsPrint2(3);
// allBinaryStringsPrint(5);
// allDecimalStringsPrint(3);
// allDecimalStringsPrint(5);