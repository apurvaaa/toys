// 2 numbers represented by LL, each numbers contain 1 digit. they are arranged in reverse order. 
// to be checked

// return result LL obtained when you add them

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

let addLL = (head1, head2) => {
  let l1 = head1;
  let l2 = head2;
  let cur = null;
  let prev = null;
  let carry = 0;
  let solution = null;

  while (l1 !== null || l2 !== null) {
    let sum = ((l1.value || 0) + (l2.value || 0) + carry).toString();
    cur = new Node(parseInt(sum[sum.length]));

    //updating solution
    if (solution === null) {
      solution = cur;
      prev = cur;
    } else {
      prev.next = cur;
      prev = cur;
    }
    // setting carry
    if (sum.length > 1) {
      carry = parseInt(sum.slice(0, sum.length - 1));
    } else {
      carry = 0;
    }

    l1 = l1.next;
    l2 = l2.next;
  }

  return solution;
}