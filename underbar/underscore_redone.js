
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
console.log(indexOf([2,4,6,8], 4) === 1)
console.log(indexOf([2,4,6,8], 8) === 3)
console.log(indexOf([2,4,6,8], 11) === -1)


// 5. filter : Return all elements of an array that pass a truth test.
const filter = (array, test) => {
    let result = [];
    for (let i of array) {
        if (test(i)) {
            result.push(i)
        }
    }
    return result
}
// console.log(filter([2,3,4,6,8], (ele) => ele % 2 === 0))
console.log(arrayEquals(filter([2,3,4,6,8], (ele) => ele % 2 === 0), [2,4,6,8]))

// 6. reject
// return all elements of array which dont pass a test function
const reject = (array, test) => {
    let result = [];
    for (let i of array) {
        if (!test(i)) {
            result.push(i)
        }
    }
    return result
}
console.log(arrayEquals(reject([2,3,4,6,8], (ele) => ele % 2 === 0), [3]))

// 7. uniq
const uniq = (array) => {
    let result = [];
    for (ele of array) {
        if (indexOf(result, ele) === -1) {
            result.push(ele)
        }
    }
    return result
}
console.log(uniq([2,2,5,6,3,7,3,5]))
// 8. map
// apply a function to all elements and return result array

const map = (array, iterator) => {
    let result = [];
    for (let ele of array) {
        result.push(iterator(ele))
    }
    return result
}
console.log(map([2,2,5,6,3,7,3,5], (ele) => {return Math.floor(ele/ 2)}))

// 9. pluck
// Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages

const pluck = (array, key) => {
    return map(array, (obj) => (obj[key]))
}  
console.log(pluck([{age: 10, name: 'hello'}, {age: 21, name: 'true'}], 'age'))
// 10. reduce
// Reduces an array or object to a single value by repetitively calling
  // iterator(accumulator, item) for each item. accumulator should be
  // the return value of the previous iterator call.
const reduce = (collection, iterator, accumulator = collection[0]) => {
    each(collection, (ele, i, collection) => {
        if (accumulator !== collection[0] || (accumulator === collection[0] && i !== 0))
        accumulator = iterator(accumulator, ele)
    } ); 
    return accumulator
}
console.log(reduce([2,4,3,5], (acc, ele) => {return ele + acc}))

// 11. contains
// Determine if the array or object contains a given value (using `===`).
const contains = (array, value) => {
    return reduce(array,(acc, ele) => {
        if (ele === value || acc === true) {
            return true
        } else return false
    }, false)
}
console.log(contains([2,4,5,6], 6))
console.log(contains([2,4,5,6], 1))

//12. every
// Determine whether all of the elements match a truth test.

// 13. some
// Determine whether any of the elements match a truth test. If no iterator is
  // provided, provide a default one
