// given an array of integers, find the subsequence which gives the maximum sum.

//brute force
const getSubSeqBF = (arr) => {

    let answer = Number.NEGATIVE_INFINITY;
    let start;
    let end;

    for (let i = 0; i < arr.length; i++) {
        sum = 0;
        for (let j = i; j < arr.length; j++){
            sum += arr[j];
            if (answer < sum) {
                answer = sum;
                start = i;
                end = j;
            }
        }
    }
    console.log('[ ans, start, end] : ', answer ,', ', start,', ', end);
}

getSubSeqBF([1, -3, 2, -5, 7, 6, -1, -4, 11, -23]);