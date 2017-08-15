// if an ele in a matrix is 0, then the entire row and col of the mat will be set to 0


const zeroMatrix = (matrix) => {
    const col = {};
    const row = {};
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[1].length; j++) {
            if (matrix[i][j] === 0) {
                col[i] = true;
                row[j] = true;
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[1].length; j++) {
            if (col[i] || row[j]) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}

console.log(zeroMatrix([ [1,0,3], [0, 5, 6], [7, 8, 9]]));