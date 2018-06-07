// recursive - practice
const binarySearch = (array, element, low = 0, high = array.length - 1) => {
    // console.log(element)
    if (low > high) return -1

    let mid = Math.floor((low + high) / 2)
    
    if (element < array[mid]) {
        return binarySearch(array,element,low,mid)
    } else if (element > array[mid]){
        return binarySearch(array,element,mid + 1, high)
    } else {
        console.log(mid)
        return mid
    }

}

let a = binarySearch([4,6,7,8,9,23], 23)
console.log(a)