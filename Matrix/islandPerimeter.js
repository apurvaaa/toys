// from leetcode:
/* 
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island. 
*/

var islandPerimeter = function(grid) {
    let peri = 0;
    if (grid === undefined || grid.length === 0) return 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                console.log('1 : ', peri);
                if ((i === 0) || grid[i-1][j] === 0) peri++
                console.log('2 : ', peri);
                if ((i + 1 === grid.length) || grid[i + 1][j] === 0) peri++
                console.log('3 : ', peri);
                if ((j - 1 < 0) || (grid[i][j-1] === 0)) peri++
                console.log('4 : ', peri);
                if ((j + 1 === grid[0].length) || grid[i][j+1] === 0) peri++
                console.log('5 : ', peri);
            }
        }
    }
    return peri;
};

console.log(islandPerimeter([[1]])) 