//incomplete

// i : mat
// o : 90 degree tilted mat
// c : in place
// e : 

// not int place
const matTranspose = (mat) => {
  console.log('args: ', mat);
  let j2 = mat.length - 1;;
  let i2;
  const newMat = new Array(mat[1].length);
  newMat.fill([]);
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[1].length; j++) {
      i2 = j;
      console.log('(i, j) : (', i, ', ', j, ')');
      console.log('(i2, j2) : (', i2, ', ', j2, ')');
      
      newMat[i2][j2] = mat[i][j];
    }
    j2--;
  }
  return newMat;
}

console.log(JSON.stringify(matTranspose(new Array( new Array(1, 2), new Array(3, 4)))));