/* Stack will have:
1, push
2. pop
3. peek
4. length
*/

class Stack {
    #stk
    constructor(arr = []) {
      this.#stk = arr
    }
  
    length() {
      return this.#stk.length;
    }
  
    peek() {
      if (this.#stk.length > 0) {
        return this.#stk[this.#stk.length - 1]
      } else {
        return null
      }
    } 
  
    push(ele) {
      this.#stk.push(ele)
    }
  
    pop() {
      if (this.#stk.length > 0) {
        return this.#stk.pop()
      } else {
        return null
      }
    }
  }
  
  const myStk = new Stack([1,2,3]);
  myStk.push(7)
  console.log(myStk.peek())
  console.log(myStk.length())
  console.log(myStk.pop())
  console.log(myStk.pop())
  console.log(myStk.pop())
  console.log(myStk.pop())
  console.log(myStk.pop())
  