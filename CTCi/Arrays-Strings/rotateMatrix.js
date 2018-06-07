// Rotate Matrix: Given an image represented by n x n matrix, where each pixel in the image is 4 bytes, 
// write a method to 
// rotate the image 90 degrees. Can you do it in place?


const rotateMatrix = (matrix) => {
    // works for matrix size 2 or more

    // levels
    for (let i = 0;  i < Math.floor(matrix.length / 2); i++) {
        // rows to turn 
        for (let j = i; j < matrix.length - 1 - i; j++) {
            // turn right 90 degrees
            // let temp = matrix[i][j]
            // matrix[i][j] = matrix[j][matrix.length - 1 - i] 
            // matrix[j][matrix.length - 1 - i] = matrix[matrix.length - 1 - i][matrix.length - 1 - j]
            // matrix[matrix.length - 1 - i][matrix.length - 1 - j] = matrix[matrix.length - 1 - j][i]
            // matrix[matrix.length - 1 - j][i] = temp

            // turn left 90 degrees
            let temp = matrix[i][j]
            matrix[i][j] = matrix[matrix.length - 1 - j][i]
            matrix[matrix.length - 1 - j][i] = matrix[matrix.length - 1 - i][matrix.length - 1 - j]
            matrix[matrix.length - 1 - i][matrix.length - 1 - j] = matrix[j][matrix.length - 1 - i]
            matrix[j][matrix.length - 1 - i] = temp
        }
    }
    return matrix
}

console.log(rotateMatrix([[1, 2],[3, 4]]))

