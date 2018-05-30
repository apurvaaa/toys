
// Zero MAtrix: Write a program such that if elements in a m x n matrix is zero, 
// whole row and colum will be set zero.


const ZeroMatrix = (matrix) => {
    let row = new Array(matrix.length)
    row.fill(1)
    let col = new Array(matrix[0].length)
    col.fill(1)

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                row[i] = 0
                col[j] = 0
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (row[i] === 0 || col[j] === 0) {
                matrix[i][j] = 0
            }
        }
    }
    return matrix
}

console.log(ZeroMatrix([[1, 0, 34], [0, 45,23], [12, 5,34]]))