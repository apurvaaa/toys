// given an array of tuples representing intervals, merge all overlapping intervals.


const mergeIntervals = (arr) => {
    arr.sort((a, b) => a[0] - b[0])
    // console.log(arr)
    let res = [];
    let prev;
    let cur;
    for (let i = 0; i < arr.length; i++) {
        if (prev === undefined) {
            prev = arr[i][0]
            cur = arr[i][1]
        } else if ( cur >= arr[i][0]) {
            cur = arr[i][1]
        } else {
            res.push([prev, cur])
            prev = arr[i][0]
            cur = arr[i][1]
        }

        if (i === arr.length - 1) {
            res.push([prev, cur])
        }
        // console.log('prev, cur :', prev, cur)
    }
    return res;
}
console.log(mergeIntervals([[1,3], [2,4], [5,7], [6,8]]))