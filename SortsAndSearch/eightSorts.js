/* implementing 8 different sorts that I know */

const selectionSort = (arr) => {
  const ansArr = arr.slice(0);
  for (let i = 0; i < ansArr.length - 1; i++) {
    let small = i;
    for (let j = i; j < ansArr.length; j++) {
      if (ansArr[j] < ansArr[small]) {
        small = j;
      }
    }
    let swapTemp = ansArr[i];
    ansArr[i] = ansArr[small];
    ansArr[small] = swapTemp;

  }
  return ansArr;
}
const bubbleSort = (arr) => {
  const ansArr = arr.slice(0);
  for (let i = 0; i < ansArr.length - 2; i++) {
    for (let j = 0; j < ansArr.length - i; j++) {
      if (ansArr[j] > ansArr[j+1]) {
        let swapTemp = ansArr[j + 1];
        ansArr[j + 1] = ansArr[j];
        ansArr[j] = swapTemp;
      }
    }
  }
  return ansArr;
}
const insertionSortIterative = (arr) => {
  const ansArr = arr.slice(0);
  let swapTemp = -1;
  for (let i = 1; i < ansArr.length; i++) {
    swapTemp = ansArr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (ansArr[j] > swapTemp) {
        ansArr[j + 1] = ansArr[j];
        ansArr[j] = swapTemp;
      }
    }
  }
  return ansArr;
}

const insertionSortRecursive = (arr, end = arr.length - 1) => {
  if (end === 0) return arr.slice(0);
  const ansArr = insertionSortRecursive(arr, end - 1);
  let swapTemp = ansArr[end];
  let i = end - 1;
  while ( i >= 0 && ansArr[i] > swapTemp ) {
    ansArr[i + 1] = ansArr[i];
    i--;
  }
  ansArr[i + 1] = swapTemp;
  return ansArr;
}

const quickSortLomuto = (arr, start = 0, end = arr.length - 1) => {
  // if (start === end) return arr;
  // let ansArr = arr.slice(start, end + 1);
  // let pivot = ansArr[start];
  // let i = 1;
  // let j = 1;
  // let swapTemp;
  // while (j <= end && i < j && ansArr[i] <= pivot) {
  //   while (j <= end && ansArr[j] > pivot) {
  //     j++;
  //   }
  //   while (i < j && ansArr[i] <= pivot) {
  //     i++;
  //   }
  //   swapTemp = ansArr[i];
  //   ansArr[i++] = ansArr[j];
  //   ansArr[j++] = swapTemp;
  // }
  // ansArr[i] = pivot;
  // ansArr = quickSortLomuto(ansArr, start, i-1);
  // ansArr = quickSortLomuto(ansArr, i + 1, end);
  // return ansArr;
}

const quickSortHoarce = (arr, start = 0, end = arr.length - 1) => {
  let ansArr = arr.slice(0);
  if (start >= end) return ansArr;
  // partition
  const pivot = ansArr[start];
  let i = start + 1;
  let j = end;
  let swapTemp;
  while (j > i) {
    while (ansArr[i] <= pivot && i < j) {
      i++;
    }
    while (ansArr[j] > pivot && i < j) {
      j--;
    }
    if (i < j) {
      swapTemp = ansArr[j];
      ansArr[j--] = ansArr[i];
      ansArr[i++] = swapTemp;
    }
  }
  // swap pivot to ith place
  let swapIndex = ansArr[i] > pivot ? i - 1 : i;
  swapTemp = ansArr[swapIndex];
  ansArr[swapIndex] = ansArr[start];
  ansArr[start] = swapTemp;
  //console.log('start, end, i: ', start, end, swapIndex, ansArr);
  // call quicksort on left part
  ansArr = quickSortHoarce(ansArr, start, i - 1);
  // call quicksort on right part
  ansArr = quickSortHoarce(ansArr, i + 1, end);
  return ansArr;
}

const mergeSort = (arr) => {
  //console.log('start: ', arr);
  const solArr = arr.slice(0);
  if (arr.length <= 1) {
    return solArr;
  }
  // find mid and partition left and right
  const mid = Math.floor((arr.length) / 2);
  //console.log('mid:', mid);
  const leftArr = mergeSort(arr.slice(0, mid));
  const rightArr = mergeSort(arr.slice(mid));
  // merge left and right arrays
  let i = 0;
  let j = 0;
  let k = 0;
  //console.log('arr, left, right, mid: ', arr, mid);
  while ( i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      solArr[k++] = leftArr[i++];
    } else {
      solArr[k++] = rightArr[j++];
    }
  }
  while (i < leftArr.length) {
    solArr[k++] = leftArr[i++];
  }
  while (j < rightArr.length) {
    solArr[k++] = rightArr[j++];
  }
  return solArr;
}
const heapSort = (arr) => {
  const ansArr = arr.slice(0);
  return ansArr;
}
const countingSort = (arr, k) => {
  const countArr = new Array(k + 1).fill(0);
  for (let ele of arr) {
    countArr[ele] = countArr[ele] + 1 ;
  }
  const solArr = [];
  let i = 0;
  while (i < countArr.length) {
    while(countArr[i] > 0) {
      solArr.push(i);
      countArr[i] -= 1;
    }
    i++;
  }
  return solArr;
}

const radixSort = (arr) => {
  let strArr = [];
  let maxLength = 0;

  //find maximum length of number converted to string
  for (let ele of arr) {
    if (ele.toString().length > maxLength) {
      maxLength = ele.toString().length
    }
  }
  //convert to string Array
  for (let ele of arr) {
    let eleStr = ele.toString();
    while (eleStr.length < maxLength) {
      eleStr = '0' + eleStr;
    }
    strArr.push(eleStr);
  }

  // go from R to L
  for (let i = strArr[0].length - 1; i >= 0; i--) {
    countArr = Array(10);
    // fill array of size length with arrays
    for (let j = 0; j < 10; j++) {
      countArr[j] = [];
    }

    for (let ele of strArr) {
      let index = Number.parseInt(ele.slice(i, i+1));
      (countArr[index]).push(ele);
    }

    strArr = [];
    for (let arri of countArr) {
      for (let ele of arri) {
        strArr.push(ele);
      }
    }
  }
  const solArr = []

  //convert back to integer array
  for (let ele of strArr) {
    solArr.push(Number.parseInt(ele));
  }
  return solArr;
}

const sortArray = [4,7,9,3,1,6,4];
console.log(selectionSort(sortArray));
console.log(bubbleSort(sortArray));
console.log(insertionSortIterative(sortArray));
console.log(insertionSortRecursive(sortArray));
console.log(mergeSort(sortArray));
console.log(quickSortHoarce(sortArray));
console.log(quickSortLomuto(sortArray));
console.log(countingSort(sortArray, 9));
const radixArray = [234,345,784,231,123,456,869,32];
console.log(radixSort(radixArray));
