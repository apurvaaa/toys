// Basic bubble sort:


const bubble = (array) => {

    const swap = (array, a, b ) => {
        let temp = array[a]
        array[a] = array[b]
        array[b] = temp
    };
    for (let i = 0 ; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j , j + 1)
            }
        }
    }
    return array
}

console.log(bubble([9,7,5,4,3]))