/*
You are given a positive integer x and you should perform n operations, where on the ith operation you increase x in such a way that its new value is divisible by i (operations are numbered from 1 to n).

Find the minimal value of x you can obtain by performing n operations described above.

Example

For x = 9 and n = 5, the output should be
increasingNumber(x, n) = 15.
*/

function increasingNumber(x, n) {
    let i = 1, newx = x
    
    while(i <= n) {
        if (newx % i !== 0) {
            let j = 1
            while((newx + j) % i !== 0) {
                j++
            }
            newx += j
        }
        i++
    }
    return newx
}