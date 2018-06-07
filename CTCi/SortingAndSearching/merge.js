

const mergeSort = (array, low = 0,high = array.length - 1) => {
    let helper = array.slice(0)
    // console.log(low,high)
    if (low < high) {
        let mid = Math.floor((high + low) / 2)
        // console.log(mid)
        mergeSort(array, low, mid);
        mergeSort(array, mid + 1, high)
        merge(array, helper, low, mid, high)
        // console.log(array.slice(low,high+1))
    }
}

const merge = (array, helper, low, mid, high) => {
    // console.log('m')
    let left = low
    let right = mid + 1
    let ptr = low

    for (let i = low; i < high; i++) {
        helper[i] = array[i]
    }
    // console.log('m : ', helper.slice(low,high + 1))
    // console.log('low,mid,high : ', low, mid, high)

    while (left <= mid && right <= high) {

        while(left <= mid && helper[left] < helper[right]) {
            array[ptr] = helper[left]
            left++
            ptr++
        }
        while(right <= high && helper[right] < helper[left]) {
            array[ptr] = helper[right]
            right++
            ptr++
        }
    }
    if (left <= mid) {
        while(left <= mid) {
            array[ptr] = helper[left]
            left++
            ptr++
        }
    }
 }
let array = [3, 4, 5, 67, 45, 34]
mergeSort(array)
 console.log(array)