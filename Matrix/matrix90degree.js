//incomplete TODO:

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

// in place - transpose and reverse columns
const matrixTiltInPlace = (mat) => {

  for (let i = 0; i < mat.length; i++) {
    for (let j = i; j < mat.length; j++) {
      let temp = mat[i][j]
      mat[i][j] = mat[j][i]
      mat[j][i] = temp
    }
  }
  // depending on direction of tilt, reverse columns or rows
  
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0, k = mat.length - 1; j < k; j++, k--) {
      let temp = mat[i][j]
      mat[i][j] = mat[i][k]
      mat[i][k] = temp
    }
  }
  return mat;
}

// console.log(JSON.stringify(matTilt(new Array( new Array(1, 2), new Array(3, 4)))));
console.log(JSON.stringify(matrixTiltInPlace(new Array( new Array(1, 2), new Array(3, 4)))));