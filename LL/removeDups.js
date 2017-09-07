// remove dups from unsorted linkedlist
//what if no buffer allowed?


// I : head of linked list
// o : same head, with no dups in linked list
// c : maybe no buffer
// e : single element LL, no LL = null
// assuming that 2nd time repreated nodes are expected to be removed

const noDupsLL = (head) => {
  if (!head) {
    return head;
  }
  const hash = {};
  let prev = null;
  let cur = head;
  while (cur !== null) {
    if (hash[cur.value] === undefined) {
      hash[cur.value] = true;
      prev = cur;
    } else {
      prev.next = cur.next;
    }
    cur = cur.next;
  }
  return head;
}


// no buffer used

const noDupesLL2 = (head) => {
  if (!head) return head;

  let cur = head;
  let prev = null;
  while (cur !== null) {
    prev = cur;
    while (prev.next !== null) {
      if (prev.next.value === cur.value) {
        prev.next = prev.next.next;
      } else {
        prev = prev.next;
      }
    }
  }
  return head;
}