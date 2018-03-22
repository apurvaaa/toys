/*
You're given 2 huge integers represented by linked lists. Each linked list element is a number from 0 to 9999 that represents a number with exactly 4 digits. The represented number might have leading zeros. Your task is to add up these huge integers and return the result in the same format.

Example

For a = [9876, 5432, 1999] and b = [1, 8001], the output should be
addTwoHugeNumbers(a, b) = [9876, 5434, 0].

Explanation: 987654321999 + 18001 = 987654340000.

For a = [123, 4, 5] and b = [100, 100, 100], the output should be
addTwoHugeNumbers(a, b) = [223, 104, 105].

Explanation: 12300040005 + 10001000100 = 22301040105.
*/



// Definition for singly-linked list:
function ListNode(x) {
  this.value = x;
  this.next = null;
}

function addTwoHugeNumbers(a, b) {
    let a1 = [];
    let b1 = [];
// COPY the LL to arrays
    let cur = a;
    while (cur !== null) {
        a1.push(cur.value)
        cur = cur.next;
    }
    cur = b;
    while (cur !== null) {
        b1.push(cur.value);
        cur = cur.next;
    }

    // if one array is longer than other, make the lengths equal
    let shortest = (a1.length > b1.length) ? b1 : a1;
    while (a1.length !== b1.length) {
        shortest.unshift(0);
    }
    let res = [];
    let borrow = 0;
    let smallNum = 0;
    // loop through both arrays in reverse
    for (let i = a1.length - 1; i >= 0; i++) {
        // add both numbers along with borrow
        smallNum = a1[i] + b1[i] + borrow;
        // convert to required format and put into result array, update borrow
        if ((smallNum.toString().length > 4)) {
            borrow = (smallNum.toString()).slice(0, -4);
            borrow = parseInt(borrow)
            smallNum = smallNum.toString().slice(-4)
        } else {
            borrow = 0;
        }
        res.unshift(smallNum)

    }
    // convert res to LL
    let head, prev
    for (let i = 0; i < res.length; i++) {
        cur = ListNode(res[i])
        if (i === 0) {
            head = cur
        } else {
            prev.next = cur
        }
        prev = cur
    }
    return head;

}



