
// array collections: 
// 1. first n elements
const first = (arr, n) => {
    return (n === undefined) ? arr[0] : arr.slice(0, n)
}

//tests

const arrayEquals = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true
}

// console.log(arrayEquals(first([2,4,5], 2),[2, 4]))
// console.log(first(['four', '6']) === 'four')
// console.log(first([]) === undefined)

// 2. last n elements
const last = (array, n) => {
    if (n > array.length) {
        return array
    }
    return (n === undefined) ? array[array.length - 1] : array.slice(array.length - n)
}

// console.log(arrayEquals(last([2,4,5], 2),[4,5]))
// console.log(last(['four', '6']) === '6')
// console.log(last([]) === undefined)

// 3. each : run iterator function over each value of given collection
const each = (collection, iterator) => {

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            iterator(collection[i], i, collection)
        }
    } else {
        for (let key in collection) {
            iterator(collection[key], key, collection)
        }
    }
}

let arr = [2,3,4,5]
let res = [];
each(arr, (ele) => {
    
    res.push(ele * 2)
})
// console.log(arrayEquals(res, [4, 6, 8, 10]))

// 4. indexOf: find the first occurence of an element in given collection
const indexOf = (array, target) => {
    let result = -1
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            result = i
        }
    }
    return result;
}
// console.log(indexOf([2,4,6,8], 4) === 1)
// console.log(indexOf([2,4,6,8], 8) === 3)
// console.log(indexOf([2,4,6,8], 11) === -1)


// 5. filter : Return all elements of an array that pass a truth test.
const filter = (array, test) => {
    let result = [];
    for (let i of array) {
        if (test(i)) {
            result.push(array[i])
        }
    }
    return result
}
// console.log(filter([2,3,4,6,8], (ele) => ele % 2 === 0) === 1)



  // taxicab num :

  



// 6. reject

// 7. uniq

// 8. map

// 9. pluck

// 10. reduce

// 11. contains

//12. every

// 13. some

