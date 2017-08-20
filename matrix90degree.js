//incomplete

// i : mat
// o : 90 degree tilted mat
// c : in place
// e : 

// not in place
const matTilt = (mat) => {
  console.log('args: ', mat);
  const newMat = new Array();
  for (let i = 0; i < mat.length; i++) {
    newMat.push([0, 0]);
  }
  // console.log(JSON.stringify(newMat));
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[1].length; j++) {
      // console.log('(i, j) -> (i2, j2) : (', i, ', ', j, ') -> (', j, ', ', mat.length - 1 - i, ')');
      let y2 = mat.length - 1 - i;
      // console.log('mat j : ', newMat[j]);
      newMat[j][y2] = (mat[i][j]);
      // console.log('new mat: ', JSON.stringify(newMat));
    }
  }
  return newMat;
}

// in place
const matrixTiltInPlace = (mat) => {

  let low = 0;
  let high = mat.length - 1;
  let level = 0;
  let temp;
  while (low < high) {
    console.log('low, high -> ', low, ' : ', high);
    temp = [];
    for (let i = low; i <= high; i++) {
      // copy elements from top
      temp.push(mat[low][i]);
    }
    console.log('temp1: ', temp);
    console.log('mat : ', mat);
    for (let i = low; i <= high; i++) {
      // swap elements witht he right column
      let swapTemp = mat[i][high];
      mat[i][high] = temp[i];
      temp[i] = swapTemp;
    }
    console.log('temp2: ', temp);
    console.log('mat : ', mat);
    // for (let i = low + 1; i <= high; i++) {
    for (let i = low; i <= high; i++) {
      // swap elements with the bottom row
      let swapTemp = mat[high][high-i];
      mat[high][high - i] = temp[i];
      temp[i] = swapTemp;
    }
    console.log('temp3: ', temp);
    console.log('mat : ', mat);
    
    // for (let i = low; i <= high - 1; i++) {
    for (let i = low; i <= high ; i++) {
      // swap elements with the left col
      let swapTemp = mat[high - i][low];
      mat[high - i][low] = temp[i + 1];
      temp[i] = swapTemp;
    }
    console.log('temp4: ', temp);
    console.log('mat : ', mat);
    for (let i = low + 1; i <= high - 1; i++) {
      // swap elements with the top row
      let swapTemp = mat[low][i];
      mat[low][i] = temp[i];
      temp[i] = swapTemp;
    }
    console.log('temp5: ', temp);
    console.log('mat : ', mat);
    

    level++;
    low++;
    high--;
  }
  return mat;
}

// console.log(JSON.stringify(matTilt(new Array( new Array(1, 2), new Array(3, 4)))));
console.log(JSON.stringify(matrixTiltInPlace(new Array( new Array(1, 2), new Array(3, 4)))));