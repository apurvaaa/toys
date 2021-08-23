const allSubsetsPrint = (inputArr, toPrintArr = []) => {
  if (inputArr.length === 0) {
    console.log(toPrintArr.join(','));
  } else {
    let ele = inputArr.pop();
    allSubsetsPrint(inputArr, toPrintArr);
    toPrintArr.push(ele);
    allSubsetsPrint(inputArr, toPrintArr);
    inputArr.push(ele);
    toPrintArr.pop();
  }
}

const allSubsetsPrint2 = (inputArr, toPrintArr = new Array(inputArr.length), n = inputArr.length - 1) => {
  if (n === -1) {
    const toReduce = toPrintArr.map((incluIndex, i) => incluIndex && inputArr[i]);
    const printThis = toReduce.reduce((prev, cur) => cur === undefined ? prev : [...prev, cur],[]).join(',');
    console.log(printThis);
  } else {
    let ele = inputArr[n];
    allSubsetsPrint2(inputArr, toPrintArr, n-1);
    toPrintArr[n] = 1;
    allSubsetsPrint2(inputArr, toPrintArr, n-1);
    toPrintArr[n] = undefined;
  }
}

allSubsetsPrint2([1,2,3]);
allSubsetsPrint2([1,2]);