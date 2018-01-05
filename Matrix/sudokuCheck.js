// question from code fights interview track - tested on codefights - completed

/* Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid 
with numbers in such a way that each column, each row, and each of the nine 
3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

Implement an algorithm that will check whether the given grid of numbers represents 
a valid Sudoku puzzle according to the layout rules described above. Note that the puzzle 
represented by grid does not have to be solvable 

- [input] array.array.char grid

A 9 × 9 array of characters, in which each character is either a digit from '1' to '9' or a period '.'.

- [output] boolean

Return true if grid represents a valid Sudoku puzzle, otherwise return false.

For

grid = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
        ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
        ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
        ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
        ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
        ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
        ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
        ['.', '2', '.', '.', '3', '.', '.', '.', '.']]
the output should be
sudoku2(grid) = false.



*/



function sudoku2(grid) {
    // setting up object for rows and column
    const row = {
        0: {},
        1: {},
        2: {},
        3: {},
        4: {},
        5: {},
        6: {},
        7: {},
        8: {}
    }
    const col =  {
        0: {},
        1: {},
        2: {},
        3: {},
        4: {},
        5: {},
        6: {},
        7: {},
        8: {}
    }

    for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
            let square = {};
            for (let i = k * 3 + 0; i <  k * 3 + 3; i++) {
                for (let j = l * 3 + 0; j <  l * 3 + 3; j++) {
                    if ('123456789'.includes(grid[i][j])) {
                        if (square[grid[i][j]]) {
                            return false
                        } else {
                            square[grid[i][j]] = true; 
                        } 
                        if (row[i][grid[i][j]]) { 
                            return false
                        } else {
                            row[i][grid[i][j]] = true;
                        }
                        if (col[j][grid[i][j]]) {
                            return false
                        } else {
                            col[j][grid[i][j]] = true;
                        }
                    }
                }
            }
        }
    }
    return true;
}
