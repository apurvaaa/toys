/* Given an array of integers, find the leftmost number that has a decimal representation which doesn't contain any digit more than once. If there is no such number, return -1 instead.

Example

For inputArray = [22, 111, 101, 124, 33, 30], the output should be
differentDigitsNumberSearch(inputArray) = 124;
For inputArray = [1111, 404], the output should be
differentDigitsNumberSearch(inputArray) = -1.*/

function differentDigitsNumberSearch(inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
        console.log(inputArray[i])
            let str = inputArray[i].toString()
            let hash = {};
            let j
            for (j = 0; j < str.length; j++) {
                if (!hash[str[j]]) {
                    hash[str[j]] = 1;
                } else break;
            }
            console.log('[inputArray[i], j, hash] = ', inputArray[i], ' , ', j, ' , ', hash)
            if (j === str.length) {
                return inputArray[i]
            }
    
    }

    return -1;
}