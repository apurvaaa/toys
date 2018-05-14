
// array collections: 
// 1. first n elements
var first = (array, n ) => {
    return (n === undefined) ? array[0]: array.slice(0,n)
}

// 2. last n elements
var last = (array, n ) => {
    if (n > array.length) {
        return array
    }
    return (n === undefined) ? array[array.length - 1] : array.slice(arrayy.length - n)
}

// 3. each : run iterator function over each value of given collection
    

// 4. indexOf: find the first occurence of an element in given collection

// 5. filter

// 6. reject

// 7. uniq

// 8. map

// 9. pluck

// 10. reduce

// 11. contains

//12. every

// 13. some

