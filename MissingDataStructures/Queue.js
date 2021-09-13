/* Queue will have:
1, push
2. pop
3. peek
4. length
*/

class Queue {
  #q
  constructor(arr = []) {
    this.#q = arr
  }

  length() {
    return this.#q.length;
  }

  peek() {
    if (this.#q.length > 0) {
      return this.#q[this.#q.length - 1]
    } else {
      return null
    }
  } 

  push(ele) {
    this.#q.push(ele)
  }

  pop() {
    if (this.#q.length > 0) {
      return this.#q.shift()
    } else {
      return null
    }
  }
}

const myQ = new Queue([1,2,3]);
myQ.push(7)
console.log(myQ.peek())
console.log(myQ.length())
console.log(myQ.pop())
console.log(myQ.pop())
console.log(myQ.pop())
console.log(myQ.pop())
console.log(myQ.pop())
