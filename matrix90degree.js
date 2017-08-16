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
  console.log(JSON.stringify(newMat));
  newMat[0][0] = 'hi';
  console.log(JSON.stringify(newMat));
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[1].length; j++) {
      console.log('(i, j) -> (i2, j2) : (', i, ', ', j, ') -> (', j, ', ', mat.length - 1 - i, ')');
      let y2 = mat.length - 1 - i;
      console.log('mat j : ', newMat[j]);
      newMat[j][y2] = (mat[i][j]);
      console.log('new mat: ', JSON.stringify(newMat));
    }
  }
  return newMat;
}

console.log(JSON.stringify(matTilt(new Array( new Array(1, 2), new Array(3, 4)))));