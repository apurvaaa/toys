//TODO: 4 tests were failing
/*
A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.

Example

For inputString = "1*0", the output should be
isDivisibleBy3(inputString) = ["120", "150", "180"].

*/

function isDivisibleBy31(inputString) {
    let found = false;
    let i = 0;
    let result = [];
    while (inputString[i] !== '*') {
        i++
    }
    console.log('i : ', i)
    for (let j = 0; j < 10; j++) {
        let newRes = inputString.slice(0,i)+ j.toString() + inputString.slice(i + 1)
        // console.log('newRes : ', newRes)
        if (parseInt(newRes) % 3 === 0) {
            result.push(newRes)
        }
    }
    return result;
}

function isDivisibleBy3(inputString) {
    if (inputString.legth < 1) return [];
    const index = inputString.indexOf('*') 
    if (index === -1) return []
    let numbers = '0123456789'.split('');
    let possibleRes = numbers.map((ele) => {
        return inputString.slice(0,index) + ele + inputString.slice(index + 1);
    })
    console.log(possibleRes)
    let res = possibleRes.filter((ele) => {
        return (parseInt(ele) % 3) === 0})
    return res
}

// tests
// console.log(isDivisibleBy3('1*0'))
// (["120", "150", "180"])

// console.log(isDivisibleBy3('*'))
//[0, 3, 6, 9]
// console.log(isDivisibleBy3('1234567890*'))
//["12345678900", "12345678903", "12345678906", "12345678909"]

// console.log(isDivisibleBy3('4*0'))
//["420", "450", "480"]

// console.log(isDivisibleBy3('1*0'))
//["120", "150", "180"]

console.log(isDivisibleBy3(''))
