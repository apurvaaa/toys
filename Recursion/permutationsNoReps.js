const permutationsNoRepsPrint = (inputArr, toPrintArr = []) => {
  if (inputArr.length === 0) {
    console.log(toPrintArr.join(','));
  } else {
    for (let i= 0; i<inputArr.length; i++) {
      toPrintArr.push(inputArr[i]);
      permutationsNoRepsPrint(inputArr.slice(0,i).concat(inputArr.slice(i+1)), toPrintArr);
      toPrintArr.pop();
    }
  }
}

permutationsNoRepsPrint([1,2,3,4]); // 24 = 6 x 4