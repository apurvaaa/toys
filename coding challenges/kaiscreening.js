/* you can add first 2 elements of arr to each other
 any number of times. Check if you can get the pair of numbers arr[3], arr[4].
 return 'Yes' or 'No'
 */

const isPossible = (arr) => {
    // console.log(arr)
    // base condition
    if (arr[1] > arr[3] || arr[0] > arr[2]) {
        return 'No'
    } else if (arr[0] === arr[2] && arr[1] === arr[3]) {
        return 'Yes'
    }
    //recursions
    let a = isPossible([arr[0] + arr[1], arr[1], arr[2], arr[3]])
    let b = isPossible([arr[0], arr[0] + arr[1], arr[2], arr[3]])
    if (a === 'Yes' || b === 'Yes') return 'Yes';
    else return 'No' 
}

console.log(isPossible([1, 4, 5, 9])) //true
console.log(isPossible([1, 2, 3, 6])) //false
console.log(isPossible([1, 4, 19, 14])) // true

//Count all distinct pairs of numbers with difference equal to k

const countPairs = (arr, k) => {
    arr.sort((a, b) => a - b);
    let count = 0, largest = arr[arr.length - 1];
    let mapper = {}
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + k > largest) break;
        if (arr.indexOf(arr[i] + k, i+ 1)) {
            count++
            mapper[arr[i]] = arr[i] + k
        }
    }
    return Object.keys(mapper).length
}

console.log(countPairs([3, 1, 4, 1, 5], 2))


// give the actual pairs of numbers with difference equal to k
const givePairs = (arr, k) => {
    arr.sort((a, b) => a - b);
    let count = 0, largest = arr[arr.length - 1];
    let mapper = {}
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + k > largest) break;
        if (arr.indexOf(arr[i] + k, i+ 1)) {
            count++
            mapper[arr[i]] = arr[i] + k
        }
    }
    let res = []
    for (let ele in mapper) {
        res.push([ele, mapper[ele]])
    }
    return res
}

console.log(givePairs([3, 1, 4, 1, 5], 2))