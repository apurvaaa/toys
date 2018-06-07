const selectionSort = (array) => {
    const swap = (array, a, b) => {
        let temp = array[a]
        array[a] = array[b]
        array[b] = temp
    }

    for (let i = 0; i < array.length - 1; i++) {
        min = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) {
                min = j
            }
        }
        if (i !== min) {
            swap(array,i,min)
        }
    }
    return array
}


console.log(selectionSort([3,6,7,2,1,0]))