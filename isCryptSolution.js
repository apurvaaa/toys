// question from codefights - tested on codefights, completed

/*

A cryptarithm is a mathematical puzzle for which the goal is to find the correspondence between letters and digits, such that the given arithmetic equation consisting of letters holds true when the letters are converted to digits.

You have an array of strings crypt, the cryptarithm, and an an array containing the mapping of letters and digits, solution. The array crypt will contain three non-empty strings that follow the structure: [word1, word2, word3], which should be interpreted as the word1 + word2 = word3 cryptarithm.

If crypt, when it is decoded by replacing all of the letters in the cryptarithm with digits using the mapping in solution, becomes a valid arithmetic equation containing no numbers with leading zeroes, the answer is true. If it does not become a valid arithmetic solution, the answer is false.

Example

For crypt = ["SEND", "MORE", "MONEY"] and

solution = [['O', '0'],
            ['M', '1'],
            ['Y', '2'],
            ['E', '5'],
            ['N', '6'],
            ['D', '7'],
            ['R', '8'],
            ['S', '9']]
the output should be
isCryptSolution(crypt, solution) = true.

When you decrypt "SEND", "MORE", and "MONEY" using the mapping given in crypt, you get 9567 + 1085 = 10652 which is correct and a valid arithmetic equation.

For crypt = ["TEN", "TWO", "ONE"] and

solution = [['O', '1'],
            ['T', '0'],
            ['W', '9'],
            ['E', '5'],
            ['N', '4']]
the output should be
isCryptSolution(crypt, solution) = false.

Even though 054 + 091 = 145, 054 and 091 both contain leading zeroes, meaning that this is not a valid solution.

*/

function isCryptSolution(crypt, solution) {

    // change solution to hash map
    let sol = {}
    for (let pair of solution) {
        sol[pair[0]] = pair[1]
    }
    
    // create solution in numbers
    let left = 0;
    let right = 0;
    for (let i = 0; i < 3; i++) {
        // find the number for the word
        let numStr = '';
        for (let j = 0; j < crypt[i].length; j++) {
            if (j === 0 && crypt[i].length > 1 && parseInt(sol[crypt[i][j]]) === 0) return false 
            numStr += sol[crypt[i][j]]
        }
        
        // set left and right
        if (i < 2) {
            left += parseInt(numStr);
        } else {
            right = parseInt(numStr);
        }
        
    }
    console.log('left, right : ', left, ', ', right)
    return (left === right)
}

