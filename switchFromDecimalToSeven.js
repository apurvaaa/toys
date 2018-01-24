const switchToSeven = (decimal) => {

    // find the last place on the right to start from
    let i = 1;
    let count = 0;
    // console.log('here')
    while (i <= decimal) {
        i *= 7;
        count++;
        // console.log(' i : ', i)
    }
    count--;
    let dec = decimal
    let res = '';
    // console.log(' 1 : ' ,res)
    // while looping find multiples of 7 to fill in each place according to place value
    while (dec > 0) {
        
        k = 1;
        while (dec / (k * Math.pow(7, count)) >= 1) {
            
            k++;
        }
        res += (--k).toString();
        dec -= ((k * Math.pow(7, count)))
        count--;
    }
    return parseInt(res);
}

console.log(switchToSeven(100));