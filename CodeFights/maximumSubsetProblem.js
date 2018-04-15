/*

In this problem, the product of the elements of an arbitrary array x is expressed as p(x).

You are given an array of integers a. Any array that you can obtain from a by removing some elements (possibly none, but not all) is denoted as s. Among all such arrays s, what is the maximum possible value of p(s)? Since the answer could potentially be very large, return the value of p(a) / p(s) instead.

Example

For a = [1, 2, -2, -3, 3, 5], the output should be
maximumSubsetProduct(a) = 1.

Consider s = a (no elements were removed from the original array): p(s) = 1 · 2 · (-2) · (-3) · 3 · 5 = 180. There is no other s that has elements with a product larger than that. In this case, p(a) = p(s), therefore p(a) / p(s) = 1.

For a = [10, -10], the output should be
maximumSubsetProduct(a) = -10.

p(a) = -100. For s = [10], p(s) = 10. p(s) cannot be any larger. Thus, the answer is p(a) / p(s) = -100 / 10 = -10.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

Guaranteed constraints:
1 ≤ a.length ≤ 105,
-109 ≤ a[i] ≤ 109, a[i] ≠ 0.

[output] integer

*/

function maximumSubsetProduct(a) {
    let count = 0;
    let smallest = 0;
    a.reduce( (acc, ele) => {
        if (ele < 0) {
            count++;
            if (smallest === 0 ) {
                smallest = ele
            } else if (smallest < ele) {
                smallest = ele
            }
        }
    }, 0);
    console.log('here - ', count, smallest)
    if (count % 2 === 0) {
        return 1;
    } else {
        let product = a.reduce( (acc, ele) => {
            return acc * ele
        }, 1) 
        return (a.length > 1) ? smallest : 1
    }
}