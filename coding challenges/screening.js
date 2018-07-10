function mergeStrings(a, b) {
  
    let i = 0, res = ''
    while (i < a.length && i < b.length) {
        res += a[i]
        res += b[i]
        i++
    }
    while (i < a.length) {
        res += a[i]
        i++
    }
    while (i < b.length) {
        res += b[i]
        i++
    }
    return res
}

// console.log(mergeStrings('abc', 'stuvwx'))





function countMax1(upRight) {
    let maxY = 0, minY = 0, maxX = 0, minX = 0
    //converting upRight to array
    let right = []
    for (let i = 0; i < upRight.length; i++) {
        let ele = upRight[i].split(' ')
        console.log('ele : ', ele)
        
        right.push([parseInt(ele[0]), parseInt(ele[1])])
    }
    
    console.log('right : ', right)

    //setting maxX, maxY
    for (let i = 0; i < right.length; i++) {
        if (right[i][0] > maxY) maxY = right[i][0]
        if (right[i][1] > maxX) maxX = right[i][1]
    }
    // maxY
    // maxX
    console.log('maxY, maxX : ', maxY, ' ', maxX )
    // creating matrix
    let matrix = []
    for (let i = 0; i < maxY; i++ ) {
        matrix[i] = []
        for (let j = 0; j < maxX; j++) {
            matrix[i][j] = 0
        }
    }
    console.log('1: ', matrix)

    // adding 1 to different cells
    for (let i =0; i < right.length; i++) {
        for (let j = 0; j < right[i][0]; j++) {
            for (let k = 0; k < right[i][1]; k++) {
                matrix[j][k]++
            }
        }
    }
    console.log('2: ', matrix)

    let maxVal = matrix[0][0], result = 0;
    // checking how many cells have maxVal

    for (let j = 0; j < matrix.length; j++) {
        for (let k = 0; k < matrix[0].length; k++) {
            if (matrix[j][k] === maxVal) result++;
        }
    }
    console.log('3: ', matrix)

    return result;
}
console.log(countMax(['2 2', '2 15']))

function countMax(upRight) {
    let maxY = 0, minY = Number.POSITIVE_INFINITY, maxX = 0, minX = Number.POSITIVE_INFINITY
    if (upRight.length === 0)
      return 0
    //converting upRight to array
    let right = []
    for (let i = 0; i < upRight.length; i++) {
        let ele = upRight[i].split(' ')
        right.push([parseInt(ele[0]), parseInt(ele[1])])
    }

    //setting maxX, maxY, minX, minY
    for (let i = 0; i < right.length; i++) {
        if (right[i][0] > maxY) maxY = right[i][0]
        if (right[i][0] < minY) minY = right[i][0]
        if (right[i][1] > maxX) maxX = right[i][1]
        if (right[i][1] < minX) minX = right[i][1]
    }
  
  return minX * minY
  
}






//total number of distinct pairs in the array that sum up to a target number

function numberOfPairs(a, k) {

    a.sort((a,b) => a - b)
    console.log(a)
    let count = 0, res = []
    for (let i =0; i < a.length - 1; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] + a[j] === k) res.push([a[i],a[j]])
            else if (a[i] + a[j] > k) break;
        }
    }
    console.log(res)
    count = res.length
    // removing duplicates in res
    for (let i = 0; i < res.length - 1; i++) {
        if (res[i][0] === res[i+1][0] && res[i][1] === res[i+1][1]) count--;
    }
    return count
}

// console.log(numberOfPairs([1,3,46, 1, 3, 9], 47))