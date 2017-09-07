// partition a LL so that all elements less than partition element are on the left 
// and all elements equal or greater than partition ele are on right.

// needs to be checked

// 2 pointers
const partitionLL = (head, partitionVal) => {
  let right = head;
  let left = null;
  let temp = null;
  let canSwap = false;

  
  if (right === null) return head;
  
  while (right !== null) {
    if (right.value < partitionVal) {
      if (canSwap) {
        temp = left.value;
        left.value = right.value;
        right.value = temp;
        left = left.next;
        if (left < partitionVal) {
          left = null;
          canSwap = false;
        }
      } 
    } else {
      if (!canSwap) {
        left = right;
        canSwap = true;
      }
    }
    right = right.next;
  }

  return head;
}
