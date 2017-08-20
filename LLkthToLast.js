// return kth to last element of a linked List - incomplete - recursive

//  i : head of LL
// o : kth to last element of LL
// c : - 
// e :  


// sol 1 
// if we know the length, we can traverse to kth node from end and return value

//sol 2
// we can just traverse the whole list, save values in array. after reaching end of list, we can find kth from last value

// sol 3
// recursive, keep counter from end. when counter reaches kth number, return value

// sol 4 
// 2 pointers, k distance apart, move at same speed. one reaches end of LL. then return value at another.


// sol 4 implemented:

const kthFromLast = (head) => {
  let counter = 1;
  let front = head;
  let back = head;

  while (counter !== k && front !== null) {
    front = front.next;
    counter++;
  }
  if (front === null) return null;
  while (front !== null) {
    front = front.next;
    back = back.next;
  }
  return back.value;
}

