/* Linked List will have:

1. [X] insertEnd
2. [X] deleteEnd
3. [X] find / has
4. [X] InsertAt
5. [X] DeleteThis
6. [X] toString
7. [X] size
8. [X] head
*/

class Node {
  #data
  #next = null

  constructor(val) {
    this.#data = val
  }

  set next(node) {
    this.#next = node
  }

  get data() {
    return this.#data
  }

  get next() {
    return this.#next;
  }

  toString() {
    return `${this.#data}${(this.#next === null ? '' : ` -> ${this.#next.toString()}`)}`
  }
}

class LList {
  // can be used for primitive data types
  #head = null
  #tail = null
  #length = 0

  constructor(val) {
    this.#head = new Node(val)
    this.#tail = this.#head
    this.#incLength()
  }

  get size() {
    return this.#length;
  }

  get head() {
    return this.#head;
  }

  #incLength() {
    this.#length += 1
  }

  #decLength() {
    this.#length -= 1
  }

  toString() {
    return (this.#head === null) ? '' : `${this.#length} : ${this.#head.toString()}`
  }

  insert(val) {
    if (this.#length === 0) {
      this.#head = new Node(val)
      this.#tail = this.#head
      this.#incLength()
    } else {
      this.#tail.next = new Node(val)
      this.#incLength()
    }
    return this.#head
  } 

  delete() {
    if (this.#length === 0) return this.#head
    let ele;
    if (this.#length === 1) {
      ele = this.#head
      this.#head = null
      this.#tail = null
      this.#decLength()
    } else {
      let cur = this.#head;
      while(cur.next !== this.#tail) {
        cur = cur.next
      }
      ele = this.#tail
      cur.next = null
      this.#tail = cur
      this.#decLength()
    }
    return ele.data;
  }

  has(val) {
    if (this.#length === 0) return null
    let cur = this.#head
    let count = 1
    while (cur.data !== val && cur.next !== null) {
      cur = cur.next;
      count++;
    }
    if (cur.data === val) {
      return count;
    }
    return null;
  }

  insertAt(val, pos) {
    if (pos > this.#length + 1 || pos < 1) {
      // for invalid pos
      return null
    }
    if (pos === 1) {
      // for when pos = 1
      let ele = new Node(val)
      ele.next = this.#head;
      this.#head = ele
      if (this.#length === 0) {
        // if LL was empty before insertion
        this.#tail = ele
      }
      this.#incLength()
      return this.#head
    }
    if (pos > this.#length) {
      // for inserting at end of LL
      return this.insert(val)
    }
    // for all pos >1 , <= length 
    let cur = this.#head
    let count = 1
    while (count !== pos - 1) {
      cur = cur.next;
      count++;
    }
    let ele = new Node(val)
    let after = cur.next
    cur.next = ele
    ele.next = after
    this.#incLength()
    return this.#head
  }

  deleteThis(val) {
    if (this.#length === 0) {
      // val doesnt exist
      return null
    }
    //val is the head
    if (this.#head.data === val) {
      let ele = this.#head
      this.#head = ele.next
      if (this.#length === 1) {
        // if it was the last element in LL
        this.#tail = null
      }
      this.#decLength()
      return ele.data
    }
    // val is a non head value which may or may not be in the list
    let cur = this.#head
    while(cur.next !== null && cur.next.data !== val) {
      cur = cur.next
    }
    // if it doesnt exist
    if (cur.next === null) return null;
    let ele = cur.next
    cur.next = ele.next;
    if (ele === this.#tail) {
      // if the val is the tail
      this.#tail = cur;
    }
    this.#decLength()
    return ele.data;
  }
}