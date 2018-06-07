
const quickSort = (array, low = 0, high = array.length - 1) => {
    let index = partition(array, low, high);
    console.log('index : ', index, low, high)
    if (index > low + 1) {
        quickSort(array, low, index - 1)
    }
    if (index < high - 1 ) {
        quickSort(array,index + 1, high)
    }
}

const partition = (array, low, high) => {
    console.log('p')
    let pivot = array[Math.floor((low + high )/2)]

    let left = low
    let right = high
    console.log(array, low, high)
    while(left < right) {

        while(array[left] < pivot) {
            left++
        }
        while(array[right] > pivot) {
            right--;
        }
        if (left < right) {
            let temp = array[left]
            array[left] = array[right]
            array[right] = temp
            left++
            right--
        }
    }
    return left
}

let array = [34,56,23,78,12, 4, 1]
quickSort(array)
console.log(array)