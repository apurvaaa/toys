/*
A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.

Example

For inputString = "1*0", the output should be
isDivisibleBy3(inputString) = ["120", "150", "180"].

*/

function isDivisibleBy3(inputString) {
    let found = false;
    let i = 0;
    let result = [];
    while (inputString[i] !== '*') {
        i++
    }
    console.log('i : ', i)
    for (let j = 0; j < 10; j++) {
        let newRes = inputString.slice(0,i)+ j.toString() + inputString.slice(i + 1)
        console.log('newRes : ', newRes)
        if (parseInt(newRes) % 3 === 0) {
            result.push(newRes)
        }
    }
    return result;
}